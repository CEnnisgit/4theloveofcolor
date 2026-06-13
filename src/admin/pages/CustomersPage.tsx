import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable, { type Column } from '../components/DataTable';
import { createCustomer, getCustomers, type Customer } from '../lib/api';

export default function CustomersPage() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState('');

  useEffect(() => {
    getCustomers()
      .then(setCustomers)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load customers.'))
      .finally(() => setLoading(false));
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      setCreateError('Name is required.');
      return;
    }
    setCreating(true);
    setCreateError('');
    try {
      const created = await createCustomer(form);
      setCustomers((prev) => [created, ...prev]);
      setShowForm(false);
      setForm({ name: '', email: '', phone: '', address: '' });
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : 'Failed to create customer.');
    } finally {
      setCreating(false);
    }
  }

  const columns: Column<Record<string, unknown>>[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', render: (row) => String(row.email ?? '—') },
    { key: 'phone', label: 'Phone', render: (row) => String(row.phone ?? '—') },
    { key: 'address', label: 'Address', render: (row) => String(row.address ?? '—') },
    {
      key: 'created_at',
      label: 'Date',
      render: (row) => new Date(String(row.created_at)).toLocaleDateString(),
    },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <h1>Customers</h1>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => setShowForm((s) => !s)}
        >
          {showForm ? 'Cancel' : 'New Customer'}
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
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
            Address
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </label>
          {createError && <p className="admin-error">{createError}</p>}
          <button className="admin-btn admin-btn-primary" type="submit" disabled={creating}>
            {creating ? 'Creating...' : 'Create Customer'}
          </button>
        </form>
      )}

      {loading && <p className="admin-loading">Loading...</p>}
      {error && <p className="admin-error">{error}</p>}
      {!loading && !error && (
        <DataTable
          columns={columns}
          data={customers as unknown as Record<string, unknown>[]}
          onRowClick={(row) => navigate(`/admin/customers/${row.id}`)}
        />
      )}
    </div>
  );
}
