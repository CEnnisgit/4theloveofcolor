import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import { deleteJob, getJob, type Job, updateJob } from '../lib/api';

const STATUSES = ['scheduled', 'in_progress', 'completed', 'on_hold'];

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'scheduled',
    scheduled_start: '',
    scheduled_end: '',
    actual_start: '',
    actual_end: '',
    amount_billed: '',
    notes: '',
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!id) return;
    getJob(Number(id))
      .then((j) => {
        setJob(j);
        setForm({
          title: j.title,
          description: j.description ?? '',
          status: j.status,
          scheduled_start: j.scheduled_start ?? '',
          scheduled_end: j.scheduled_end ?? '',
          actual_start: j.actual_start ?? '',
          actual_end: j.actual_end ?? '',
          amount_billed: j.amount_billed != null ? String(j.amount_billed) : '',
          notes: j.notes ?? '',
        });
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load job.'))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!job) return;
    setSaving(true);
    setSaved(false);
    try {
      const updated = await updateJob(job.id, {
        title: form.title,
        description: form.description || undefined,
        status: form.status,
        scheduled_start: form.scheduled_start || undefined,
        scheduled_end: form.scheduled_end || undefined,
        actual_start: form.actual_start || undefined,
        actual_end: form.actual_end || undefined,
        amount_billed: form.amount_billed ? Number(form.amount_billed) : undefined,
        notes: form.notes || undefined,
      });
      setJob(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!job) return;
    if (!confirm(`Delete job "${job.title}"? This cannot be undone.`)) return;
    try {
      await deleteJob(job.id);
      navigate('/admin/jobs');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete.');
    }
  }

  if (loading) return <p className="admin-loading">Loading...</p>;
  if (error) return <p className="admin-error">{error}</p>;
  if (!job) return <p className="admin-error">Job not found.</p>;

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1>{job.title}</h1>
          <p>
            Customer: <Link to={`/admin/customers/${job.customer_id}`}>#{job.customer_id}</Link>
            {job.quote_id && (
              <> &nbsp;| Quote: <Link to={`/admin/quotes/${job.quote_id}`}>#{job.quote_id}</Link></>
            )}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {saved && <span className="admin-success">Saved!</span>}
          <button className="admin-btn admin-btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className="admin-detail-card">
        <StatusBadge status={job.status} />
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
          Status
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
            ))}
          </select>
        </label>
        <label>
          Scheduled Start
          <input
            type="date"
            value={form.scheduled_start}
            onChange={(e) => setForm({ ...form, scheduled_start: e.target.value })}
          />
        </label>
        <label>
          Scheduled End
          <input
            type="date"
            value={form.scheduled_end}
            onChange={(e) => setForm({ ...form, scheduled_end: e.target.value })}
          />
        </label>
        <label>
          Actual Start
          <input
            type="date"
            value={form.actual_start}
            onChange={(e) => setForm({ ...form, actual_start: e.target.value })}
          />
        </label>
        <label>
          Actual End
          <input
            type="date"
            value={form.actual_end}
            onChange={(e) => setForm({ ...form, actual_end: e.target.value })}
          />
        </label>
        <label>
          Amount Billed ($)
          <input
            type="number"
            value={form.amount_billed}
            onChange={(e) => setForm({ ...form, amount_billed: e.target.value })}
            min="0"
            step="0.01"
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
