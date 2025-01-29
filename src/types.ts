export interface Product {
  id: string;
  name: string;
  currentStock: number;
  minStockLevel: number;
  price: number;
  supplier: string;
  lastRestocked: string;
  predictedDepleteDate: string;
  salesVelocity: number;
  category: string;
  sku: string;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  leadTime: number;
  reliability: number;
  products: string[];
}

export interface RestockAlert {
  id: string;
  productId: string;
  productName: string;
  currentStock: number;
  suggestedOrder: number;
  urgency: 'low' | 'medium' | 'high';
  predictedStockoutDate: string;
}