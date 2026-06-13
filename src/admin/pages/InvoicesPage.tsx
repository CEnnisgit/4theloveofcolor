import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable, { type Column } from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import { getInvoices, type Invoice } from '../lib/api';

const ALL_STATUSES = ['All', 'draft', 'sent', 'paid', 'overdue', 'void'];

export default function InvoicesPage() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setLoading(true);
    const status = filter === 'All' ? undefined : filter;
    getInvoices(status ? { status } : undefined)
      .then(setInvoices)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load invoices.'))
      .finally(() => setLoading(false));
  }, [filter]);

  const columns: Column<Record<string, unknown>>[] = [
    { key: 'invoice_number', label: 'Invoice #' },
    { key: 'customer_name', label: 'Customer', render: (row) => String(row.customer_name ?? '—') },
    { key: 'title', label: 'Title' },
    {
      key: 'amount',
      label: 'Amount',
      render: (row) =>
        row.amount != null
          ? `$${Number(row.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}`
          : '—',
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge status={String(row.status)} />,
    },
    {
      key: 'due_date',
      label: 'Due',
      render: (row) =>
        row.due_date ? new Date(String(row.due_date)).toLocaleDateString() : '—',
    },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <h1>Invoices ({invoices.length})</h1>
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

      {loading && <p className="admin-loading">Loading...</p>}
      {error && <p className="admin-error">{error}</p>}
      {!loading && !error && (
        <DataTable
          columns={columns}
          data={invoices as unknown as Record<string, unknown>[]}
          onRowClick={(row) => navigate(`/admin/invoices/${row.id}`)}
        />
      )}
    </div>
  );
}
