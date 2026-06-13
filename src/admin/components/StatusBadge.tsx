const statusColors: Record<string, string> = {
  new: 'badge-blue',
  contacted: 'badge-yellow',
  quoted: 'badge-purple',
  won: 'badge-green',
  lost: 'badge-red',
  draft: 'badge-gray',
  sent: 'badge-blue',
  accepted: 'badge-green',
  declined: 'badge-red',
  scheduled: 'badge-blue',
  in_progress: 'badge-amber',
  completed: 'badge-green',
  on_hold: 'badge-gray',
};

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const colorClass = statusColors[status] ?? 'badge-gray';
  return (
    <span className={`admin-badge ${colorClass}`}>
      {status.replace(/_/g, ' ')}
    </span>
  );
}
