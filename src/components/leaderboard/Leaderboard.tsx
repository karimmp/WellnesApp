"use client";

import React from 'react';
import { Medal, Trophy, Award } from 'lucide-react';

interface User {
  id: string;
  name: string;
  points: number;
  level: number;
  rank: number;
  badges: string[];
}

const MOCK_USERS: User[] = [
  { id: '1', name: 'Ana G.', points: 2500, level: 5, rank: 1, badges: ['mind', 'body'] },
  { id: '2', name: 'Carlos R.', points: 2300, level: 4, rank: 2, badges: ['spirit'] },
  { id: '3', name: 'María S.', points: 2100, level: 4, rank: 3, badges: ['mind'] },
  { id: '4', name: 'Jorge L.', points: 1900, level: 3, rank: 4, badges: ['body'] },
  { id: '5', name: 'Laura P.', points: 1800, level: 3, rank: 5, badges: ['spirit'] }
];

export default function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <Award className="w-6 h-6 text-blue-500" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch(type) {
      case 'mind': return 'bg-blue-100 text-blue-600';
      case 'body': return 'bg-green-100 text-green-600';
      case 'spirit': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Tabla de Clasificación</h2>
      <div className="space-y-4">
        {MOCK_USERS.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              {getRankIcon(user.rank)}
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">Nivel {user.level}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {user.badges.map((badge, index) => (
                  <span 
                    key={index}
                    className={`px-2 py-1 rounded-full text-xs ${getBadgeColor(badge)}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="font-bold text-lg">{user.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}