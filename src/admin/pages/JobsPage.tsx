import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable, { type Column } from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import { createJob, getJobs, type Job } from '../lib/api';

const ALL_STATUSES = ['All', 'scheduled', 'in_progress', 'completed', 'on_hold'];

export default function JobsPage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    customer_id: '',
    title: '',
    status: 'scheduled',
    scheduled_start: '',
  });
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState('');

  useEffect(() => {
    setLoading(true);
    const status = filter === 'All' ? undefined : filter;
    getJobs(status ? { status } : undefined)
      .then(setJobs)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load jobs.'))
      .finally(() => setLoading(false));
  }, [filter]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.customer_id || !form.title) {
      setCreateError('Customer ID and title are required.');
      return;
    }
    setCreating(true);
    setCreateError('');
    try {
      const created = await createJob({
        customer_id: Number(form.customer_id),
        title: form.title,
        status: form.status,
        scheduled_start: form.scheduled_start || undefined,
      });
      setJobs((prev) => [created, ...prev]);
      setShowForm(false);
      setForm({ customer_id: '', title: '', status: 'scheduled', scheduled_start: '' });
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : 'Failed to create job.');
    } finally {
      setCreating(false);
    }
  }

  const columns: Column<Record<string, unknown>>[] = [
    { key: 'title', label: 'Title' },
    { key: 'customer_id', label: 'Customer ID' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge status={String(row.status)} />,
    },
    {
      key: 'scheduled_start',
      label: 'Scheduled Start',
      render: (row) => (row.scheduled_start ? String(row.scheduled_start) : '—'),
    },
    {
      key: 'amount_billed',
      label: 'Amount Billed',
      render: (row) =>
        row.amount_billed != null ? `$${Number(row.amount_billed).toLocaleString()}` : '—',
    },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <h1>Jobs</h1>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => setShowForm((s) => !s)}
        >
          {showForm ? 'Cancel' : 'New Job'}
        </button>
      </div>

      <div className="admin-filter-bar">
        {ALL_STATUSES.map((s) => (
          <button
            key={s}
            className={`admin-btn ${filter === s ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
            onClick={() => setFilter(s)}
          >
            {s === 'All' ? 'All' : s.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {showForm && (
        <form className="admin-form admin-inline-form" onSubmit={handleCreate}>
          <label>
            Customer ID *
            <input
              type="number"
              value={form.customer_id}
              onChange={(e) => setForm({ ...form, customer_id: e.target.value })}
              required
              min="1"
            />
          </label>
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
            Status
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
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
              value={form.scheduled_start}
              onChange={(e) => setForm({ ...form, scheduled_start: e.target.value })}
            />
          </label>
          {createError && <p className="admin-error">{createError}</p>}
          <button className="admin-btn admin-btn-primary" type="submit" disabled={creating}>
            {creating ? 'Creating...' : 'Create Job'}
          </button>
        </form>
      )}

      {loading && <p className="admin-loading">Loading...</p>}
      {error && <p className="admin-error">{error}</p>}
      {!loading && !error && (
        <DataTable
          columns={columns}
          data={jobs as unknown as Record<string, unknown>[]}
          onRowClick={(row) => navigate(`/admin/jobs/${row.id}`)}
        />
      )}
    </div>
  );
}
