import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuickNotes from '../components/QuickNotes';
import StatusBadge from '../components/StatusBadge';
import {
  createJob,
  createQuote,
  getCustomer,
  type CustomerDetail,
  type Job,
  type Quote,
  updateCustomer,
} from '../lib/api';

export default function CustomerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [detail, setDetail] = useState<CustomerDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', email: '', phone: '', address: '' });
  const [saving, setSaving] = useState(false);

  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    title: '',
    amount: '',
    status: 'draft',
    description: '',
  });
  const [creatingQuote, setCreatingQuote] = useState(false);

  const [showJobForm, setShowJobForm] = useState(false);
  const [jobForm, setJobForm] = useState({
    title: '',
    status: 'scheduled',
    scheduled_start: '',
  });
  const [creatingJob, setCreatingJob] = useState(false);

  useEffect(() => {
    if (!id) return;
    getCustomer(Number(id))
      .then((d) => {
        setDetail(d);
        setEditForm({
          name: d.customer.name,
          email: d.customer.email ?? '',
          phone: d.customer.phone ?? '',
          address: d.customer.address ?? '',
        });
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load customer.'))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!detail) return;
    setSaving(true);
    try {
      const updated = await updateCustomer(detail.customer.id, editForm);
      setDetail({ ...detail, customer: updated });
      setEditMode(false);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save.');
    } finally {
      setSaving(false);
    }
  }

  async function handleNotesSave(notes: string) {
    if (!detail) return;
    const updated = await updateCustomer(detail.customer.id, { notes });
    setDetail({ ...detail, customer: updated });
  }

  async function handleCreateQuote(e: React.FormEvent) {
    e.preventDefault();
    if (!detail) return;
    setCreatingQuote(true);
    try {
      const created = await createQuote({
        customer_id: detail.customer.id,
        title: quoteForm.title,
        status: quoteForm.status,
        description: quoteForm.description || undefined,
        amount: quoteForm.amount ? Number(quoteForm.amount) : undefined,
      });
      setDetail({ ...detail, quotes: [...detail.quotes, created] });
      setShowQuoteForm(false);
      setQuoteForm({ title: '', amount: '', status: 'draft', description: '' });
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to create quote.');
    } finally {
      setCreatingQuote(false);
    }
  }

  async function handleCreateJob(e: React.FormEvent) {
    e.preventDefault();
    if (!detail) return;
    setCreatingJob(true);
    try {
      const created = await createJob({
        customer_id: detail.customer.id,
        title: jobForm.title,
        status: jobForm.status,
        scheduled_start: jobForm.scheduled_start || undefined,
      });
      setDetail({ ...detail, jobs: [...detail.jobs, created] });
      setShowJobForm(false);
      setJobForm({ title: '', status: 'scheduled', scheduled_start: '' });
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to create job.');
    } finally {
      setCreatingJob(false);
    }
  }

  if (loading) return <p className="admin-loading">Loading...</p>;
  if (error) return <p className="admin-error">{error}</p>;
  if (!detail) return <p className="admin-error">Customer not found.</p>;

  const { customer, quotes, jobs } = detail;

  return (
    <div>
      <div className="admin-page-header">
        <h1>{customer.name}</h1>
        <button
          className="admin-btn admin-btn-secondary"
          onClick={() => setEditMode((e) => !e)}
        >
          {editMode ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {editMode ? (
        <form className="admin-form admin-inline-form" onSubmit={handleSave}>
          <label>
            Name *
            <input
              type="text"
              value={editForm.name}
              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={editForm.email}
              onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              value={editForm.phone}
              onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              value={editForm.address}
              onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
            />
          </label>
          <button className="admin-btn admin-btn-primary" type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
        </form>
      ) : (
        <div className="admin-detail-card">
          <p><strong>Email:</strong> {customer.email ?? '—'}</p>
          <p><strong>Phone:</strong> {customer.phone ?? '—'}</p>
          <p><strong>Address:</strong> {customer.address ?? '—'}</p>
          <p><strong>Created:</strong> {new Date(customer.created_at).toLocaleString()}</p>
        </div>
      )}

      <div className="admin-detail-card" style={{ marginTop: '1rem' }}>
        <QuickNotes value={customer.notes ?? ''} onSave={handleNotesSave} />
      </div>

      {/* Quotes */}
      <div className="admin-section">
        <div className="admin-section-header">
          <h2>Quotes ({quotes.length})</h2>
          <button
            className="admin-btn admin-btn-primary"
            onClick={() => setShowQuoteForm((s) => !s)}
          >
            {showQuoteForm ? 'Cancel' : 'New Quote'}
          </button>
        </div>

        {showQuoteForm && (
          <form className="admin-form admin-inline-form" onSubmit={handleCreateQuote}>
            <label>
              Title *
              <input
                type="text"
                value={quoteForm.title}
                onChange={(e) => setQuoteForm({ ...quoteForm, title: e.target.value })}
                required
              />
            </label>
            <label>
              Amount
              <input
                type="number"
                value={quoteForm.amount}
                onChange={(e) => setQuoteForm({ ...quoteForm, amount: e.target.value })}
                min="0"
                step="0.01"
              />
            </label>
            <label>
              Status
              <select
                value={quoteForm.status}
                onChange={(e) => setQuoteForm({ ...quoteForm, status: e.target.value })}
              >
                {['draft', 'sent', 'accepted', 'declined'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              Description
              <textarea
                rows={2}
                value={quoteForm.description}
                onChange={(e) => setQuoteForm({ ...quoteForm, description: e.target.value })}
              />
            </label>
            <button className="admin-btn admin-btn-primary" type="submit" disabled={creatingQuote}>
              {creatingQuote ? 'Creating...' : 'Create Quote'}
            </button>
          </form>
        )}

        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {quotes.length === 0 ? (
              <tr><td colSpan={5} className="empty-state">No quotes yet.</td></tr>
            ) : (
              quotes.map((q: Quote) => (
                <tr key={q.id}>
                  <td>{q.title}</td>
                  <td>{q.amount != null ? `$${q.amount.toLocaleString()}` : '—'}</td>
                  <td><StatusBadge status={q.status} /></td>
                  <td>{new Date(q.created_at).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="admin-btn admin-btn-secondary"
                      onClick={() => navigate(`/admin/quotes/${q.id}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Jobs */}
      <div className="admin-section">
        <div className="admin-section-header">
          <h2>Jobs ({jobs.length})</h2>
          <button
            className="admin-btn admin-btn-primary"
            onClick={() => setShowJobForm((s) => !s)}
          >
            {showJobForm ? 'Cancel' : 'New Job'}
          </button>
        </div>

        {showJobForm && (
          <form className="admin-form admin-inline-form" onSubmit={handleCreateJob}>
            <label>
              Title *
              <input
                type="text"
                value={jobForm.title}
                onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                required
              />
            </label>
            <label>
              Status
              <select
                value={jobForm.status}
                onChange={(e) => setJobForm({ ...jobForm, status: e.target.value })}
              >
                {['scheduled', 'in_progress', 'completed', 'on_hold'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              Scheduled Start
              <input
                type="date"
                value={jobForm.scheduled_start}
                onChange={(e) => setJobForm({ ...jobForm, scheduled_start: e.target.value })}
              />
            </label>
            <button className="admin-btn admin-btn-primary" type="submit" disabled={creatingJob}>
              {creatingJob ? 'Creating...' : 'Create Job'}
            </button>
          </form>
        )}

        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Scheduled Start</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.length === 0 ? (
              <tr><td colSpan={4} className="empty-state">No jobs yet.</td></tr>
            ) : (
              jobs.map((j: Job) => (
                <tr key={j.id}>
                  <td>{j.title}</td>
                  <td><StatusBadge status={j.status} /></td>
                  <td>{j.scheduled_start ?? '—'}</td>
                  <td>
                    <button
                      className="admin-btn admin-btn-secondary"
                      onClick={() => navigate(`/admin/jobs/${j.id}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
