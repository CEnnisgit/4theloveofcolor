import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import { deleteInvoice, getCustomers, getInvoice, getInvoicePdfUrl, type Customer, type Invoice, updateInvoice } from '../lib/api';

const STATUSES = ['draft', 'sent', 'paid', 'overdue', 'void'];

export default function InvoiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    description: '',
    amount: '',
    status: 'draft',
    due_date: '',
    notes: '',
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!id) return;
    Promise.all([getInvoice(Number(id)), getCustomers()])
      .then(([inv, custs]) => {
        setInvoice(inv);
        setCustomers(custs);
        setForm({
          title: inv.title,
          description: inv.description ?? '',
          amount: inv.amount != null ? String(inv.amount) : '',
          status: inv.status,
          due_date: inv.due_date ?? '',
          notes: inv.notes ?? '',
        });
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load invoice.'))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!invoice) return;
    setSaving(true);
    setSaved(false);
    try {
      const updated = await updateInvoice(invoice.id, {
        title: form.title,
        description: form.description || undefined,
        amount: form.amount ? Number(form.amount) : 0,
        status: form.status,
        due_date: form.due_date || undefined,
        notes: form.notes || undefined,
      });
      setInvoice(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!invoice) return;
    if (!confirm(`Delete invoice "${invoice.invoice_number}"? This cannot be undone.`)) return;
    try {
      await deleteInvoice(invoice.id);
      navigate('/admin/invoices');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete.');
    }
  }

  if (loading) return <p className="admin-loading">Loading...</p>;
  if (error) return <p className="admin-error">{error}</p>;
  if (!invoice) return <p className="admin-error">Invoice not found.</p>;

  const customerName =
    invoice.customer_name ??
    customers.find((c) => c.id === invoice.customer_id)?.name ??
    `Customer #${invoice.customer_id}`;

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1>{invoice.invoice_number}</h1>
          <p>
            Customer:{' '}
            <Link to={`/admin/customers/${invoice.customer_id}`}>{customerName}</Link>
            {invoice.job_id && (
              <> &nbsp;| Job: <Link to={`/admin/jobs/${invoice.job_id}`}>#{invoice.job_id}</Link></>
            )}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {saved && <span className="admin-success">Saved!</span>}
          <a
            href={getInvoicePdfUrl(invoice.id)}
            target="_blank"
            rel="noreferrer"
            className="admin-btn admin-btn-secondary"
          >
            Download PDF
          </a>
          <button className="admin-btn admin-btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className="admin-detail-card" style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <StatusBadge status={invoice.status} />
          <span style={{ fontSize: '1.4rem', fontWeight: 700 }}>
            ${Number(invoice.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
        </div>
        {invoice.paid_at && (
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--admin-success)' }}>
            Paid: {new Date(invoice.paid_at).toLocaleDateString()}
          </p>
        )}
      </div>

      <form className="admin-form" onSubmit={handleSave}>
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
            required
          />
        </label>
        <label>
          Status
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </label>
        <label>
          Due Date
          <input
            type="date"
            value={form.due_date}
            onChange={(e) => setForm({ ...form, due_date: e.target.value })}
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
