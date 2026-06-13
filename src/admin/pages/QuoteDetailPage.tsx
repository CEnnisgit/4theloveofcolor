import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import { deleteQuote, getCustomer, getQuote, type Customer, type Quote, updateQuote } from '../lib/api';

const STATUSES = ['draft', 'sent', 'accepted', 'declined'];

export default function QuoteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    description: '',
    amount: '',
    status: 'draft',
    valid_until: '',
    notes: '',
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!id) return;
    getQuote(Number(id))
      .then((q) => {
        setQuote(q);
        setForm({
          title: q.title,
          description: q.description ?? '',
          amount: q.amount != null ? String(q.amount) : '',
          status: q.status,
          valid_until: q.valid_until ?? '',
          notes: q.notes ?? '',
        });
        return getCustomer(q.customer_id);
      })
      .then((detail) => setCustomer(detail.customer))
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load quote.'))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!quote) return;
    setSaving(true);
    setSaved(false);
    try {
      const updated = await updateQuote(quote.id, {
        title: form.title,
        description: form.description || undefined,
        amount: form.amount ? Number(form.amount) : undefined,
        status: form.status,
        valid_until: form.valid_until || undefined,
        notes: form.notes || undefined,
      });
      setQuote(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!quote) return;
    if (!confirm(`Delete quote "${quote.title}"? This cannot be undone.`)) return;
    try {
      await deleteQuote(quote.id);
      navigate('/admin/quotes');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete.');
    }
  }

  if (loading) return <p className="admin-loading">Loading...</p>;
  if (error) return <p className="admin-error">{error}</p>;
  if (!quote) return <p className="admin-error">Quote not found.</p>;

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1>{quote.title}</h1>
          <p>
            Customer:{' '}
            <Link to={`/admin/customers/${quote.customer_id}`}>
              {customer?.name ?? `#${quote.customer_id}`}
            </Link>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {saved && <span className="admin-success">Saved!</span>}
          <button className="admin-btn admin-btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className="admin-detail-card">
        <StatusBadge status={quote.status} />
      </div>

      <form className="admin-form" onSubmit={handleSave} style={{ marginTop: '1rem' }}>
        <label>
          Title *
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </label>
        <label>
          Description
          <textarea
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </label>
        <label>
          Amount ($)
          <input
            type="number"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            min="0"
            step="0.01"
          />
        </label>
        <label>
          Status
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Valid Until
          <input
            type="date"
            value={form.valid_until}
            onChange={(e) => setForm({ ...form, valid_until: e.target.value })}
          />
        </label>
        <label>
          Notes
          <textarea
            rows={3}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </label>
        <button className="admin-btn admin-btn-primary" type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}
