import { useState, useEffect } from 'react';
import { RestockAlert } from '../types';
import { alertsService } from '../services/api';

export function useAlerts() {
  const [alerts, setAlerts] = useState<RestockAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadAlerts();
  }, []);

  async function loadAlerts() {
    try {
      setLoading(true);
      const data = await alertsService.list();
      setAlerts(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load alerts'));
    } finally {
      setLoading(false);
    }
  }

  async function acknowledgeAlert(id: string) {
    try {
      await alertsService.acknowledge(id);
      setAlerts(alerts.filter(alert => alert.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to acknowledge alert');
    }
  }

  return {
    alerts,
    loading,
    error,
    loadAlerts,
    acknowledgeAlert,
  };
}