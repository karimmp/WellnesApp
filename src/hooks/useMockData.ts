// src/hooks/useMockData.ts
import { useState, useEffect } from 'react';
import { mockData } from '@/data/mockData';

export function useMockData() {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    // Simular actualización cada 30 segundos
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        stats: {
          ...prevData.stats,
          totalUsers: prevData.stats.users + Math.floor(Math.random() * 10)
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return data;
}