import React, { useState } from 'react';
import { ChallengeType } from '@/types';

interface FilterProps {
    onFilterChange: (filters: FilterState) => void;
  }
  
  export interface FilterState {
    type: 'all' | ChallengeType;
    status: 'all' | 'active' | 'completed';
    period: 'all' | 'week' | 'month';
  }
  export default function ChallengeFilters({ onFilterChange }: FilterProps) {
    const [filters, setFilters] = useState<FilterState>({
      type: 'all',
      status: 'all',
      period: 'all'
    });
  
    const handleFilterChange = (key: keyof FilterState, value: string) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);
      onFilterChange(newFilters);
    };
    
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tipo</label>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">Todos</option>
              <option value="mind">Mente</option>
              <option value="body">Cuerpo</option>
              <option value="spirit">Espíritu</option>
            </select>
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Estado</label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">Todos</option>
              <option value="active">Activos</option>
              <option value="completed">Completados</option>
            </select>
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Periodo</label>
            <select
              value={filters.period}
              onChange={(e) => handleFilterChange('period', e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">Todos</option>
              <option value="week">Esta semana</option>
              <option value="month">Este mes</option>
            </select>
          </div>
        </div>
      </div>
    );
  }