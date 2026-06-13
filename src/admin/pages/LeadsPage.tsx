import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable, { type Column } from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import { createLead, getLeads, type Lead } from '../lib/api';

const ALL_STATUSES = ['All', 'new', 'contacted', 'quoted', 'won', 'lost'];
const PROJECT_TYPES = ['Interior Painting', 'Exterior Painting', 'Cabinet Painting', 'Commercial', 'Other'];

export default function LeadsPage() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', project_type: '', message: '' });
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    setLoading(true);
    const status = filter === 'All' ? undefined : filter;
    getLeads(status)
      .then(setLeads)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load leads.'))
      .finally(() => setLoading(false));
  }, [filter]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    try {
      const created = await createLead({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        project_type: form.project_type || undefined,
        message: form.message || undefined,
      });
      setLeads((prev) => [created, ...prev]);
      setShowForm(false);
      setForm({ name: '', email: '', phone: '', project_type: '', message: '' });
      navigate(`/admin/leads/${created.id}`);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to create lead.');
    } finally {
      setCreating(false);
    }
  }

  const columns: Column<Record<string, unknown>>[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone', render: (row) => String(row.phone ?? '—') },
    { key: 'project_type', label: 'Project Type', render: (row) => String(row.project_type ?? '—') },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge status={String(row.status)} />,
    },
    {
      key: 'created_at',
      label: 'Date',
      render: (row) => new Date(String(row.created_at)).toLocaleDateString(),
    },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <h1>Leads ({leads.length})</h1>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => setShowForm((s) => !s)}
        >
          {showForm ? 'Cancel' : '+ New Lead'}
        </button>
      </div>

      {showForm && (
        <form className="admin-form admin-inline-form" onSubmit={handleCreate}>
          <label>
            Name *
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>
          <label>
            Email *
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </label>
          <label>
            Project Type
            <select
              value={form.project_type}
              onChange={(e) => setForm({ ...form, project_type: e.target.value })}
            >
              <option value="">— Select —</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <button className="admin-btn admin-btn-primary" type="submit" disabled={creating}>
            {creating ? 'Creating...' : 'Create Lead'}
          </button>
        </form>
      )}

      <div className="admin-filter-bar">
        {ALL_STATUSES.map((s) => (
          <button
            key={s}
            className={`admin-btn ${filter === s ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
            onClick={() => setFilter(s)}
          >
            {s === 'All' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {loading && <p className="admin-loading">Loading...</p>}
      {error && <p className="admin-error">{error}</p>}
      {!loading && !error && (
        <DataTable
          columns={columns}
          data={leads as unknown as Record<string, unknown>[]}
          onRowClick={(row) => navigate(`/admin/leads/${row.id}`)}
        />
      )}
    </div>
  );
}
