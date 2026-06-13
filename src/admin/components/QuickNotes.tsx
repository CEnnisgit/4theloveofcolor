import { useState } from 'react';

interface QuickNotesProps {
  value: string;
  onSave: (notes: string) => Promise<void>;
}

export default function QuickNotes({ value, onSave }: QuickNotesProps) {
  const [notes, setNotes] = useState(value);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    setError('');
    try {
      await onSave(notes);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="quick-notes">
      <label>
        <strong>Notes</strong>
        <textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <div className="quick-notes-actions">
        <button
          className="admin-btn admin-btn-secondary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Notes'}
        </button>
        {saved && <span className="admin-success">Saved!</span>}
        {error && <span className="admin-error">{error}</span>}
      </div>
    </div>
  );
}
