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

  const getModuleStyles = () => {
    switch(type) {
      case 'mind': 
        return {
          icon: <Brain className="w-6 h-6 text-blue-400" />,
          card: 'bg-blue-900/20',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'body': 
        return {
          icon: <Activity className="w-6 h-6 text-green-400" />,
          card: 'bg-green-900/20',
          button: 'bg-green-600 hover:bg-green-700'
        };
      case 'spirit': 
        return {
          icon: <Heart className="w-6 h-6 text-red-400" />,
          card: 'bg-red-900/20',
          button: 'bg-red-600 hover:bg-red-700'
        };
    }
  };

  const styles = getModuleStyles();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background-dark p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            {styles.icon}
            <h2 className="text-3xl font-bold text-white">{title}</h2>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className={`${styles.button} text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors`}
          >
            <Plus className="w-5 h-5" />
            Nueva Actividad
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map(template => (
            <div key={template.id} className={`${styles.card} p-6 rounded-xl border border-gray-800/50`}>
              <h3 className="font-semibold text-lg text-white mb-2">{template.name}</h3>
              <p className="text-gray-400 mb-4">{template.description}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{template.points} puntos</span>
                <span>{template.duration} min</span>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-background-card p-6 rounded-xl w-full max-w-md border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Nueva Actividad</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Descripción</label>
                  <textarea 
                    className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    rows={3}
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Puntos</label>
                    <input 
                      type="number" 
                      className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Duración (min)</label>
                    <input 
                      type="number" 
                      className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className={`px-4 py-2 ${styles.button} text-white rounded-lg transition-colors`}
                  >
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}