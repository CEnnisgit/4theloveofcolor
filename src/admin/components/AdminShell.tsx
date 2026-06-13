import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearToken } from '../lib/auth';

const navLinks = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/leads', label: 'Leads', end: false },
  { to: '/admin/customers', label: 'Customers', end: false },
  { to: '/admin/quotes', label: 'Quotes', end: false },
  { to: '/admin/jobs', label: 'Jobs', end: false },
  { to: '/admin/invoices', label: 'Invoices', end: false },
];

export default function AdminShell() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleLogout() {
    clearToken();
    navigate('/admin/login');
  }

  return (
    <div className="admin-shell">
      {/* Mobile top bar */}
      <div className="admin-topbar">
        <span className="admin-topbar-title">CRM</span>
        <button
          className="admin-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`admin-sidebar${mobileOpen ? ' open' : ''}`}>
        <div className="admin-sidebar-header">
          <span className="admin-logo">CRM</span>
        </div>
        <nav className="admin-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `admin-nav-link${isActive ? ' active' : ''}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <button className="admin-btn admin-btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
