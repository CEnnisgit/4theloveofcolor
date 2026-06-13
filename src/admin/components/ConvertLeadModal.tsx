import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { convertLead } from '../lib/api';

interface ConvertLeadModalProps {
  leadId: number;
  leadName: string;
  onClose: () => void;
}

export default function ConvertLeadModal({ leadId, leadName, onClose }: ConvertLeadModalProps) {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleConvert() {
    if (!address.trim()) {
      setError('Address is required.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const result = await convertLead(leadId, address);
      navigate(`/admin/customers/${result.customer_id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed.');
      setLoading(false);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Convert Lead to Customer</h2>
        <p>Converting <strong>{leadName}</strong> to a customer.</p>
        <label className="admin-form">
          Address
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main St, Brooklyn, NY"
          />
        </label>
        {error && <p className="admin-error">{error}</p>}
        <div className="modal-actions">
          <button
            className="admin-btn admin-btn-primary"
            onClick={handleConvert}
            disabled={loading}
          >
            {loading ? 'Converting...' : 'Convert'}
          </button>
          <button className="admin-btn admin-btn-secondary" onClick={onClose} disabled={loading}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
