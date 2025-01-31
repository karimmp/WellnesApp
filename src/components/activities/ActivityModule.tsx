"use client";

import React, { useState } from 'react';
import { Activity, Brain, Heart, Plus } from 'lucide-react';

interface ModuleProps {
  type: 'mind' | 'body' | 'spirit';
  title: string;
}

interface ActivityTemplate {
  id: string;
  name: string;
  description: string;
  points: number;
  duration: number;
}

export default function ActivityModule({ type, title }: ModuleProps) {
  const [templates] = useState<ActivityTemplate[]>([
    {
      id: '1',
      name: type === 'mind' ? 'Meditación' : type === 'body' ? 'Ejercicio' : 'Voluntariado',
      description: 'Actividad base',
      points: 100,
      duration: 30
    }
  ]);

  const getIcon = () => {
    switch(type) {
      case 'mind': return <Brain className="w-6 h-6 text-blue-500" />;
      case 'body': return <Activity className="w-6 h-6 text-green-500" />;
      case 'spirit': return <Heart className="w-6 h-6 text-red-500" />;
    }
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          {getIcon()}
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <Plus className="w-5 h-5" />
          Nueva Actividad
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {templates.map(template => (
          <div key={template.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{template.name}</h3>
            <p className="text-gray-600 mb-4">{template.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{template.points} puntos</span>
              <span>{template.duration} min</span>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Nueva Actividad</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Descripción</label>
                <textarea className="w-full p-2 border rounded" rows={3}></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Puntos</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Duración (min)</label>
                  <input type="number" className="w-full p-2 border rounded" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}