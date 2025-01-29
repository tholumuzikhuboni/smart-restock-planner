import React from 'react';
import { DashboardStats } from './components/DashboardStats';
import { RestockAlerts } from './components/RestockAlerts';
import { InventoryTable } from './components/InventoryTable';
import { LayoutGrid, Bell, Settings, LogOut } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">SmartRestock</h1>
        </div>
        <nav className="mt-6">
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-700 bg-gray-100 border-l-4 border-blue-600"
          >
            <LayoutGrid className="w-5 h-5 mr-3" />
            Dashboard
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="flex items-center justify-between px-8 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          <DashboardStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <InventoryTable />
            </div>
            <div>
              <RestockAlerts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;