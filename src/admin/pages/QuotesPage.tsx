import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable, { type Column } from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import { createQuote, getQuotes, type Quote } from '../lib/api';

const ALL_STATUSES = ['All', 'draft', 'sent', 'accepted', 'declined'];

export default function QuotesPage() {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    customer_id: '',
    title: '',
    amount: '',
    status: 'draft',
    description: '',
  });
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState('');

  useEffect(() => {
    setLoading(true);
    const status = filter === 'All' ? undefined : filter;
    getQuotes(status ? { status } : undefined)
      .then(setQuotes)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load quotes.'))
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
      const created = await createQuote({
        customer_id: Number(form.customer_id),
        title: form.title,
        status: form.status,
        amount: form.amount ? Number(form.amount) : undefined,
        description: form.description || undefined,
      });
      setQuotes((prev) => [created, ...prev]);
      setShowForm(false);
      setForm({ customer_id: '', title: '', amount: '', status: 'draft', description: '' });
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : 'Failed to create quote.');
    } finally {
      setCreating(false);
    }
  }

  const columns: Column<Record<string, unknown>>[] = [
    { key: 'title', label: 'Title' },
    { key: 'customer_id', label: 'Customer ID' },
    {
      key: 'amount',
      label: 'Amount',
      render: (row) =>
        row.amount != null ? `$${Number(row.amount).toLocaleString()}` : '—',
    },
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
        <h1>Quotes</h1>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => setShowForm((s) => !s)}
        >
          {showForm ? 'Cancel' : 'New Quote'}
        </button>
      </div>

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
            Amount
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
              {['draft', 'sent', 'accepted', 'declined'].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label>
            Description
            <textarea
              rows={2}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </label>
          {createError && <p className="admin-error">{createError}</p>}
          <button className="admin-btn admin-btn-primary" type="submit" disabled={creating}>
            {creating ? 'Creating...' : 'Create Quote'}
          </button>
        </form>
      )}

      {loading && <p className="admin-loading">Loading...</p>}
      {error && <p className="admin-error">{error}</p>}
      {!loading && !error && (
        <DataTable
          columns={columns}
          data={quotes as unknown as Record<string, unknown>[]}
          onRowClick={(row) => navigate(`/admin/quotes/${row.id}`)}
        />
      )}
    </div>
  );
}
