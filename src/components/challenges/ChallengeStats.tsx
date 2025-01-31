import React from 'react';
import { Challenge, ChallengeType } from '@/types';
import { Brain, Heart, Activity } from 'lucide-react';

interface StatsProps {
  challenges: Challenge[];
}

export default function ChallengeStats({ challenges }: StatsProps) {
  const stats = {
    mind: challenges.filter(c => c.type === 'mind').length,
    body: challenges.filter(c => c.type === 'body').length,
    spirit: challenges.filter(c => c.type === 'spirit').length
  };

  const totalChallenges = challenges.length;

  const getPercentage = (count: number) => {
    return totalChallenges ? Math.round((count / totalChallenges) * 100) : 0;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Estadísticas</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Brain className="w-8 h-8 text-blue-500" />
          </div>
          <div className="font-bold text-xl">{stats.mind}</div>
          <div className="text-sm text-gray-600">Mente ({getPercentage(stats.mind)}%)</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Activity className="w-8 h-8 text-green-500" />
          </div>
          <div className="font-bold text-xl">{stats.body}</div>
          <div className="text-sm text-gray-600">Cuerpo ({getPercentage(stats.body)}%)</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Heart className="w-8 h-8 text-red-500" />
          </div>
          <div className="font-bold text-xl">{stats.spirit}</div>
          <div className="text-sm text-gray-600">Espíritu ({getPercentage(stats.spirit)}%)</div>
        </div>
      </div>
    </div>
  );
}