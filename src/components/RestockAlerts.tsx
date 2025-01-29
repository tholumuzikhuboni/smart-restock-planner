import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { useAlerts } from '../hooks/useAlerts';

export const RestockAlerts = () => {
  const { alerts, loading, error, acknowledgeAlert } = useAlerts();

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p>Loading alerts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Restock Alerts</h2>
        <button className="text-blue-600 hover:text-blue-700 flex items-center">
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <div>
                  <h3 className="font-semibold">{alert.productName}</h3>
                  <p className="text-sm text-gray-600">
                    Current Stock: {alert.currentStock} units
                  </p>
                </div>
              </div>
              <button 
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => acknowledgeAlert(alert.id)}
              >
                Restock Now
              </button>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>Suggested Order: {alert.suggestedOrder} units</p>
              <p>Predicted Stockout: {alert.predictedStockoutDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};