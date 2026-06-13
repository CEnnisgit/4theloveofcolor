import { getToken } from './auth';

const BASE_URL = import.meta.env.VITE_API_URL || '';

export interface Lead {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  project_type?: string;
  message?: string;
  status: string;
  notes?: string;
  converted_to_customer_id?: number;
}

export interface CreateLeadData {
  name: string;
  email: string;
  phone?: string;
  project_type?: string;
  message?: string;
}

export interface Customer {
  id: number;
  created_at: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
}

export interface CustomerDetail {
  customer: Customer;
  quotes: Quote[];
  jobs: Job[];
}

export interface Quote {
  id: number;
  created_at: string;
  customer_id: number;
  lead_id?: number;
  title: string;
  description?: string;
  amount?: number;
  status: string;
  valid_until?: string;
  notes?: string;
}

export interface Job {
  id: number;
  created_at: string;
  customer_id: number;
  quote_id?: number;
  title: string;
  description?: string;
  status: string;
  scheduled_start?: string;
  scheduled_end?: string;
  actual_start?: string;
  actual_end?: string;
  amount_billed?: number;
  notes?: string;
}

export interface Invoice {
  id: number;
  created_at: string;
  invoice_number: string;
  customer_id: number;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  customer_address?: string;
  job_id?: number;
  quote_id?: number;
  title: string;
  description?: string;
  amount: number;
  status: string;
  due_date?: string;
  paid_at?: string;
  notes?: string;
}

export interface DashboardData {
  leads: { total: number; new: number; contacted: number; quoted: number };
  customers: { total: number };
  quotes: { total: number; draft: number; sent: number; accepted: number };
  jobs: { total: number; scheduled: number; in_progress: number; completed: number };
  revenue: { billed: number; paid: number; invoices_paid: number; invoices_outstanding: number };
  upcoming_jobs: Array<Job & { customer_name: string }>;
  recent_leads: Lead[];
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (response.status === 204) {
    return undefined as unknown as T;
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || data.error || `Request failed: ${response.status}`);
  }

  return data as T;
}

export function login(username: string, password: string): Promise<{ token: string }> {
  return apiFetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}

export function getDashboard(): Promise<DashboardData> {
  return apiFetch('/api/dashboard');
}

export function getLeads(status?: string): Promise<Lead[]> {
  const query = status ? `?status=${encodeURIComponent(status)}` : '';
  return apiFetch(`/api/leads${query}`);
}

export function getLead(id: number): Promise<Lead> {
  return apiFetch(`/api/leads/${id}`);
}

export function createLead(data: CreateLeadData): Promise<Lead> {
  return apiFetch('/api/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateLead(id: number, data: Partial<Lead>): Promise<Lead> {
  return apiFetch(`/api/leads/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteLead(id: number): Promise<void> {
  return apiFetch(`/api/leads/${id}`, { method: 'DELETE' });
}

export function convertLead(id: number, address: string): Promise<{ customer_id: number }> {
  return apiFetch(`/api/leads/${id}/convert`, {
    method: 'POST',
    body: JSON.stringify({ address }),
  });
}

export function getCustomers(): Promise<Customer[]> {
  return apiFetch('/api/customers');
}

export function getCustomer(id: number): Promise<CustomerDetail> {
  return apiFetch(`/api/customers/${id}`);
}

export function createCustomer(data: Omit<Customer, 'id' | 'created_at'>): Promise<Customer> {
  return apiFetch('/api/customers', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateCustomer(id: number, data: Partial<Customer>): Promise<Customer> {
  return apiFetch(`/api/customers/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteCustomer(id: number): Promise<void> {
  return apiFetch(`/api/customers/${id}`, { method: 'DELETE' });
}

export function getQuotes(params?: { customer_id?: number; status?: string }): Promise<Quote[]> {
  const query = params
    ? '?' + new URLSearchParams(
        Object.fromEntries(
          Object.entries(params)
            .filter(([, v]) => v !== undefined)
            .map(([k, v]) => [k, String(v)])
        )
      ).toString()
    : '';
  return apiFetch(`/api/quotes${query}`);
}

export function getQuote(id: number): Promise<Quote> {
  return apiFetch(`/api/quotes/${id}`);
}

export function createQuote(data: Omit<Quote, 'id' | 'created_at'>): Promise<Quote> {
  return apiFetch('/api/quotes', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateQuote(id: number, data: Partial<Quote>): Promise<Quote> {
  return apiFetch(`/api/quotes/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteQuote(id: number): Promise<void> {
  return apiFetch(`/api/quotes/${id}`, { method: 'DELETE' });
}

export function getJobs(params?: { customer_id?: number; status?: string }): Promise<Job[]> {
  const query = params
    ? '?' + new URLSearchParams(
        Object.fromEntries(
          Object.entries(params)
            .filter(([, v]) => v !== undefined)
            .map(([k, v]) => [k, String(v)])
        )
      ).toString()
    : '';
  return apiFetch(`/api/jobs${query}`);
}

export function getJob(id: number): Promise<Job> {
  return apiFetch(`/api/jobs/${id}`);
}

export function createJob(data: Omit<Job, 'id' | 'created_at'>): Promise<Job> {
  return apiFetch('/api/jobs', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateJob(id: number, data: Partial<Job>): Promise<Job> {
  return apiFetch(`/api/jobs/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteJob(id: number): Promise<void> {
  return apiFetch(`/api/jobs/${id}`, { method: 'DELETE' });
}

export function getInvoices(params?: { customer_id?: number; status?: string }): Promise<Invoice[]> {
  const query = params
    ? '?' + new URLSearchParams(
        Object.fromEntries(
          Object.entries(params)
            .filter(([, v]) => v !== undefined)
            .map(([k, v]) => [k, String(v)])
        )
      ).toString()
    : '';
  return apiFetch(`/api/invoices${query}`);
}

export function getInvoice(id: number): Promise<Invoice> {
  return apiFetch(`/api/invoices/${id}`);
}

export function createInvoice(data: Omit<Invoice, 'id' | 'created_at' | 'invoice_number' | 'customer_name' | 'customer_email' | 'customer_phone' | 'customer_address'>): Promise<Invoice> {
  return apiFetch('/api/invoices', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateInvoice(id: number, data: Partial<Invoice>): Promise<Invoice> {
  return apiFetch(`/api/invoices/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteInvoice(id: number): Promise<void> {
  return apiFetch(`/api/invoices/${id}`, { method: 'DELETE' });
}

export function getInvoicePdfUrl(id: number): string {
  const token = getToken();
  // Returns a URL that can be opened in a new tab for download
  const base = import.meta.env.VITE_API_URL || '';
  return `${base}/api/invoices/${id}/pdf?token=${token ?? ''}`;
}
