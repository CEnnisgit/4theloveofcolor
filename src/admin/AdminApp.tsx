import { Route, Routes } from 'react-router-dom';
import AdminShell from './components/AdminShell';
import ProtectedRoute from './components/ProtectedRoute';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomersPage from './pages/CustomersPage';
import DashboardHome from './pages/DashboardHome';
import InvoiceDetailPage from './pages/InvoiceDetailPage';
import InvoicesPage from './pages/InvoicesPage';
import JobDetailPage from './pages/JobDetailPage';
import JobsPage from './pages/JobsPage';
import LeadDetailPage from './pages/LeadDetailPage';
import LeadsPage from './pages/LeadsPage';
import LoginPage from './pages/LoginPage';
import QuoteDetailPage from './pages/QuoteDetailPage';
import QuotesPage from './pages/QuotesPage';
import './admin.css';

export default function AdminApp() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminShell />}>
          <Route index element={<DashboardHome />} />
          <Route path="leads" element={<LeadsPage />} />
          <Route path="leads/:id" element={<LeadDetailPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="customers/:id" element={<CustomerDetailPage />} />
          <Route path="quotes" element={<QuotesPage />} />
          <Route path="quotes/:id" element={<QuoteDetailPage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:id" element={<JobDetailPage />} />
          <Route path="invoices" element={<InvoicesPage />} />
          <Route path="invoices/:id" element={<InvoiceDetailPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
