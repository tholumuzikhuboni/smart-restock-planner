import { Product, Supplier, RestockAlert } from './types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Coffee Beans',
    currentStock: 45,
    minStockLevel: 50,
    price: 15.99,
    supplier: 'Global Coffee Co',
    lastRestocked: '2024-02-15',
    predictedDepleteDate: '2024-03-20',
    salesVelocity: 2.3,
    category: 'Beverages',
    sku: 'COF-001'
  },
  {
    id: '2',
    name: 'Premium Tea Bags',
    currentStock: 150,
    minStockLevel: 100,
    price: 8.99,
    supplier: 'Tea Masters Ltd',
    lastRestocked: '2024-02-01',
    predictedDepleteDate: '2024-04-15',
    salesVelocity: 1.5,
    category: 'Beverages',
    sku: 'TEA-002'
  }
];

export const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Global Coffee Co',
    email: 'orders@globalcoffee.com',
    phone: '(555) 123-4567',
    leadTime: 5,
    reliability: 0.95,
    products: ['1']
  },
  {
    id: '2',
    name: 'Tea Masters Ltd',
    email: 'supply@teamasters.com',
    phone: '(555) 987-6543',
    leadTime: 7,
    reliability: 0.92,
    products: ['2']
  }
];

export const mockAlerts: RestockAlert[] = [
  {
    id: '1',
    productId: '1',
    productName: 'Organic Coffee Beans',
    currentStock: 45,
    suggestedOrder: 100,
    urgency: 'high',
    predictedStockoutDate: '2024-03-20'
  }
];