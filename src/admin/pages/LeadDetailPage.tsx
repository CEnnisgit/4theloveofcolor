import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ConvertLeadModal from '../components/ConvertLeadModal';
import QuickNotes from '../components/QuickNotes';
import StatusBadge from '../components/StatusBadge';
import { deleteLead, getLead, type Lead, updateLead } from '../lib/api';

const STATUSES = ['new', 'contacted', 'quoted', 'won', 'lost'];

export default function LeadDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showConvert, setShowConvert] = useState(false);

  useEffect(() => {
    if (!id) return;
    getLead(Number(id))
      .then(setLead)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load lead.'))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleStatusChange(status: string) {
    if (!lead) return;
    try {
      const updated = await updateLead(lead.id, { status });
      setLead(updated);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update status.');
    }
  }

  async function handleNotesSave(notes: string) {
    if (!lead) return;
    const updated = await updateLead(lead.id, { notes });
    setLead(updated);
  }

  async function handleDelete() {
    if (!lead) return;
    if (!confirm(`Delete lead "${lead.name}"? This cannot be undone.`)) return;
    try {
      await deleteLead(lead.id);
      navigate('/admin/leads');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete lead.');
    }
  }

  if (loading) return <p className="admin-loading">Loading...</p>;
  if (error) return <p className="admin-error">{error}</p>;
  if (!lead) return <p className="admin-error">Lead not found.</p>;

  return (
    <div>
      <div className="admin-page-header">
        <h1>{lead.name}</h1>
        <button className="admin-btn admin-btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>

      <div className="admin-detail-grid">
        <div className="admin-detail-card">
          <h2>Contact Info</h2>
          <p><strong>Email:</strong> {lead.email}</p>
          <p><strong>Phone:</strong> {lead.phone ?? '—'}</p>
          <p><strong>Project Type:</strong> {lead.project_type ?? '—'}</p>
          <p><strong>Message:</strong> {lead.message ?? '—'}</p>
          <p><strong>Created:</strong> {new Date(lead.created_at).toLocaleString()}</p>
        </div>

        <div className="admin-detail-card">
          <h2>Status</h2>
          <div style={{ marginBottom: '0.5rem' }}>
            <StatusBadge status={lead.status} />
          </div>
          <select
            className="admin-select"
            value={lead.status}
            onChange={(e) => handleStatusChange(e.target.value)}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>

          {lead.converted_to_customer_id ? (
            <p style={{ marginTop: '1rem' }}>
              Converted to customer:{' '}
              <Link to={`/admin/customers/${lead.converted_to_customer_id}`}>
                Customer #{lead.converted_to_customer_id}
              </Link>
            </p>
          ) : (
            <button
              className="admin-btn admin-btn-primary"
              style={{ marginTop: '1rem' }}
              onClick={() => setShowConvert(true)}
            >
              Convert to Customer
            </button>
          )}
        </div>
      </div>

      <div className="admin-detail-card" style={{ marginTop: '1rem' }}>
        <QuickNotes value={lead.notes ?? ''} onSave={handleNotesSave} />
      </div>

      {showConvert && (
        <ConvertLeadModal
          leadId={lead.id}
          leadName={lead.name}
          onClose={() => setShowConvert(false)}
        />
      )}
    </div>
  );
}
