import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import { getDashboard, type DashboardData, type Job, type Lead } from '../lib/api';

export default function DashboardHome() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getDashboard()
      .then(setData)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load dashboard.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="admin-loading">Loading...</p>;
  if (error) return <p className="admin-error">{error}</p>;
  if (!data) return null;

  const fmt = (n: number) =>
    `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div>
      <div className="admin-page-header">
        <h1>Dashboard</h1>
      </div>

      {/* Primary stat cards */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-title">Leads</div>
          <div className="stat-card-total">{data.leads.total}</div>
          <div className="stat-card-subs">
            <span>New: {data.leads.new}</span>
            <span>Contacted: {data.leads.contacted}</span>
            <span>Quoted: {data.leads.quoted}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-title">Customers</div>
          <div className="stat-card-total">{data.customers.total}</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-title">Quotes</div>
          <div className="stat-card-total">{data.quotes.total}</div>
          <div className="stat-card-subs">
            <span>Draft: {data.quotes.draft}</span>
            <span>Sent: {data.quotes.sent}</span>
            <span>Accepted: {data.quotes.accepted}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-title">Jobs</div>
          <div className="stat-card-total">{data.jobs.total}</div>
          <div className="stat-card-subs">
            <span>Scheduled: {data.jobs.scheduled}</span>
            <span>In Progress: {data.jobs.in_progress}</span>
            <span>Completed: {data.jobs.completed}</span>
          </div>
        </div>
      </div>

      {/* Revenue cards */}
      <div className="stat-cards" style={{ marginBottom: '2rem' }}>
        <div className="stat-card" style={{ borderLeft: '4px solid var(--admin-success)' }}>
          <div className="stat-card-title">Revenue Billed</div>
          <div className="stat-card-total" style={{ fontSize: '1.5rem' }}>
            {fmt(data.revenue.billed)}
          </div>
          <div className="stat-card-subs">
            <span>Paid: {fmt(data.revenue.paid)}</span>
          </div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid #1d4ed8' }}>
          <div className="stat-card-title">Invoices</div>
          <div className="stat-card-total" style={{ fontSize: '1.5rem' }}>
            {fmt(data.revenue.invoices_paid)}
          </div>
          <div className="stat-card-subs">
            <span style={{ color: '#c2410c' }}>Outstanding: {fmt(data.revenue.invoices_outstanding)}</span>
          </div>
        </div>
      </div>

      {/* Upcoming Jobs */}
      <div className="admin-section">
        <h2>Upcoming Jobs</h2>
        {data.upcoming_jobs.length === 0 ? (
          <p>No upcoming jobs.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Scheduled Start</th>
              </tr>
            </thead>
            <tbody>
              {data.upcoming_jobs.map((job: Job & { customer_name: string }) => (
                <tr key={job.id}>
                  <td>
                    <Link to={`/admin/jobs/${job.id}`} style={{ color: 'inherit' }}>
                      {job.title}
                    </Link>
                  </td>
                  <td>{job.customer_name}</td>
                  <td><StatusBadge status={job.status} /></td>
                  <td>{job.scheduled_start ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Recent Leads */}
      <div className="admin-section">
        <div className="admin-section-header">
          <h2>Recent Leads</h2>
          <Link to="/admin/leads" className="admin-btn admin-btn-secondary">View All</Link>
        </div>
        {data.recent_leads.length === 0 ? (
          <p>No leads yet.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Project Type</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.recent_leads.map((lead: Lead) => (
                <tr key={lead.id}>
                  <td>
                    <Link to={`/admin/leads/${lead.id}`} style={{ color: 'inherit' }}>
                      {lead.name}
                    </Link>
                  </td>
                  <td>{lead.project_type ?? '—'}</td>
                  <td><StatusBadge status={lead.status} /></td>
                  <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
