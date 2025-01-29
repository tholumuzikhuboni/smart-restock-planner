import { useState, useEffect } from 'react';
import { Product } from '../types';
import { productsService } from '../services/api';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);
      const data = await productsService.list();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load products'));
    } finally {
      setLoading(false);
    }
  }

  async function addProduct(product: Omit<Product, 'id'>) {
    try {
      const newProduct = await productsService.create(product);
      setProducts([...products, newProduct]);
      return newProduct;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to add product');
    }
  }

  async function updateProduct(id: string, updates: Partial<Product>) {
    try {
      const updatedProduct = await productsService.update(id, updates);
      setProducts(products.map(p => p.id === id ? updatedProduct : p));
      return updatedProduct;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to update product');
    }
  }

  async function deleteProduct(id: string) {
    try {
      await productsService.delete(id);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to delete product');
    }
  }

  return {
    products,
    loading,
    error,
    loadProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}