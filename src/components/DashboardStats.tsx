import React from 'react';
import { TrendingDown, TrendingUp, Package, AlertTriangle } from 'lucide-react';

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Products</p>
            <p className="text-2xl font-bold">248</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-green-500">+12% from last month</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Low Stock Alerts</p>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
          <span className="text-sm text-red-500">5 urgent items</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Monthly Sales</p>
            <p className="text-2xl font-bold">$24,500</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-green-500">+18.5% from last month</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Pending Orders</p>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <Package className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-green-500">-2 from yesterday</span>
        </div>
      </div>
    </div>
  );
};