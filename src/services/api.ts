import { Product, Supplier, RestockAlert } from '../types';

// Base API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// API endpoints
const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  PRODUCTS: {
    LIST: '/products',
    CREATE: '/products',
    UPDATE: (id: string) => `/products/${id}`,
    DELETE: (id: string) => `/products/${id}`,
  },
  SUPPLIERS: {
    LIST: '/suppliers',
    CREATE: '/suppliers',
    UPDATE: (id: string) => `/suppliers/${id}`,
    DELETE: (id: string) => `/suppliers/${id}`,
  },
  ALERTS: {
    LIST: '/alerts',
    ACKNOWLEDGE: (id: string) => `/alerts/${id}/acknowledge`,
  },
};

// Error handling
class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

// API request helper
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new APIError(response.status, await response.text());
  }

  return response.json();
}

// Auth Service
export const authService = {
  async login(email: string, password: string) {
    return apiRequest(ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  async register(email: string, password: string) {
    return apiRequest(ENDPOINTS.AUTH.REGISTER, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  async logout() {
    return apiRequest(ENDPOINTS.AUTH.LOGOUT, {
      method: 'POST',
    });
  },
};

// Products Service
export const productsService = {
  async list(): Promise<Product[]> {
    return apiRequest(ENDPOINTS.PRODUCTS.LIST);
  },

  async create(product: Omit<Product, 'id'>): Promise<Product> {
    return apiRequest(ENDPOINTS.PRODUCTS.CREATE, {
      method: 'POST',
      body: JSON.stringify(product),
    });
  },

  async update(id: string, product: Partial<Product>): Promise<Product> {
    return apiRequest(ENDPOINTS.PRODUCTS.UPDATE(id), {
      method: 'PUT',
      body: JSON.stringify(product),
    });
  },

  async delete(id: string): Promise<void> {
    return apiRequest(ENDPOINTS.PRODUCTS.DELETE(id), {
      method: 'DELETE',
    });
  },
};

// Suppliers Service
export const suppliersService = {
  async list(): Promise<Supplier[]> {
    return apiRequest(ENDPOINTS.SUPPLIERS.LIST);
  },

  async create(supplier: Omit<Supplier, 'id'>): Promise<Supplier> {
    return apiRequest(ENDPOINTS.SUPPLIERS.CREATE, {
      method: 'POST',
      body: JSON.stringify(supplier),
    });
  },

  async update(id: string, supplier: Partial<Supplier>): Promise<Supplier> {
    return apiRequest(ENDPOINTS.SUPPLIERS.UPDATE(id), {
      method: 'PUT',
      body: JSON.stringify(supplier),
    });
  },

  async delete(id: string): Promise<void> {
    return apiRequest(ENDPOINTS.SUPPLIERS.DELETE(id), {
      method: 'DELETE',
    });
  },
};

// Alerts Service
export const alertsService = {
  async list(): Promise<RestockAlert[]> {
    return apiRequest(ENDPOINTS.ALERTS.LIST);
  },

  async acknowledge(id: string): Promise<void> {
    return apiRequest(ENDPOINTS.ALERTS.ACKNOWLEDGE(id), {
      method: 'POST',
    });
  },
};