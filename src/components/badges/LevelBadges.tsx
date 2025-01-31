"use client";

import React from 'react';
import { Star, Award, Shield, Crown } from 'lucide-react';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: 'star' | 'award' | 'shield' | 'crown';
  type: 'mind' | 'body' | 'spirit';
  progress: number;
}

const achievements: Achievement[] = [
  {
    id: '1',
    name: 'Maestro Mental',
    description: 'Completa 10 retos de mente',
    icon: 'crown',
    type: 'mind',
    progress: 70
  },
  {
    id: '2',
    name: 'Atleta Total',
    description: 'Acumula 1000 minutos de ejercicio',
    icon: 'shield',
    type: 'body',
    progress: 45
  }
];

export default function LevelBadges() {
  const getIcon = (icon: string) => {
    switch(icon) {
      case 'star': return <Star className="w-6 h-6" />;
      case 'award': return <Award className="w-6 h-6" />;
      case 'shield': return <Shield className="w-6 h-6" />;
      case 'crown': return <Crown className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'mind': return 'from-blue-500 to-blue-600';
      case 'body': return 'from-green-500 to-green-600';
      case 'spirit': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Logros y Medallas</h2>
      <div className="grid gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="relative">
            <div className={`p-4 rounded-lg bg-gradient-to-r ${getTypeColor(achievement.type)} text-white`}>
              <div className="flex items-center gap-3">
                {getIcon(achievement.icon)}
                <div>
                  <h3 className="font-semibold">{achievement.name}</h3>
                  <p className="text-sm opacity-90">{achievement.description}</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div 
                    className="bg-white rounded-full h-2 transition-all duration-300"
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
                <p className="text-sm mt-1">{achievement.progress}% completado</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}