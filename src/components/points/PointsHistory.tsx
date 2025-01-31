"use client";

import React from 'react';
import { ArrowUp, Brain, Heart, Activity } from 'lucide-react';

interface PointEvent {
  id: string;
  type: 'mind' | 'body' | 'spirit';
  activity: string;
  points: number;
  date: Date;
}

const MOCK_HISTORY: PointEvent[] = [
  {
    id: '1',
    type: 'mind',
    activity: 'Meditación matutina',
    points: 100,
    date: new Date()
  },
  {
    id: '2',
    type: 'body',
    activity: 'Ejercicio 30min',
    points: 150,
    date: new Date(Date.now() - 86400000)
  }
];

export default function PointsHistory() {
  const getIcon = (type: string) => {
    switch(type) {
      case 'mind': return <Brain className="text-blue-500" />;
      case 'body': return <Activity className="text-green-500" />;
      case 'spirit': return <Heart className="text-red-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Historial de Puntos</h2>
      <div className="space-y-4">
        {MOCK_HISTORY.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              {getIcon(event.type)}
              <div>
                <p className="font-medium">{event.activity}</p>
                <p className="text-sm text-gray-500">
                  {event.date.toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span className="font-bold">+{event.points}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}