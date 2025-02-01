"use client";

import React from 'react';
import { Trophy, Medal, UserPlus } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-background-dark p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna izquierda: Info del usuario y amigos */}
        <div className="space-y-6">
          <div className="bg-background-card rounded-xl p-6 border border-gray-800">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white">Usuario Demo</h2>
              <p className="text-gray-400">Nivel 5</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-sm text-gray-400">Retos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-sm text-gray-400">Activos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">7</p>
                <p className="text-sm text-gray-400">Completados</p>
              </div>
            </div>
          </div>

          <div className="bg-background-card rounded-xl p-6 border border-gray-800">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Amigos</h3>
              <button className="p-2 hover:bg-gray-800 rounded-lg">
                <UserPlus className="w-5 h-5 text-blue-400" />
              </button>
            </div>
            <div className="space-y-4">
              {/* Lista de amigos */}
              {[1, 2, 3].map((friend) => (
                <div key={friend} className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
                  <div className="w-10 h-10 bg-gray-700 rounded-full" />
                  <div>
                    <p className="text-white">Usuario {friend}</p>
                    <p className="text-sm text-gray-400">Nivel {friend + 2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna central: Tabla de clasificación y logros */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabla de clasificación */}
          <div className="bg-background-card rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Tabla de Clasificación</h3>
            <div className="space-y-4">
              {[
                { name: 'Ana G.', level: 5, badges: ['mind', 'body'] },
                { name: 'Carlos R.', level: 4, badges: ['spirit'] },
                { name: 'María S.', level: 4, badges: ['mind'] }
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    {index === 0 ? <Trophy className="w-6 h-6 text-yellow-500" /> :
                     index === 1 ? <Medal className="w-6 h-6 text-gray-400" /> :
                     <Medal className="w-6 h-6 text-amber-600" />}
                    <div>
                      <p className="font-semibold text-white">{user.name}</p>
                      <p className="text-sm text-gray-400">Nivel {user.level}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {user.badges.map((badge, i) => (
                      <span key={i} className={`px-2 py-1 rounded-full text-xs ${
                        badge === 'mind' ? 'bg-blue-900/50 text-blue-400' :
                        badge === 'body' ? 'bg-green-900/50 text-green-400' :
                        'bg-red-900/50 text-red-400'
                      }`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logros y medallas */}
          <div className="bg-background-card rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Logros y Medallas</h3>
            <div className="grid gap-4">
              {[
                {
                  title: 'Maestro Mental',
                  description: 'Completa 10 retos de mente',
                  progress: 70,
                  color: 'blue'
                },
                {
                  title: 'Atleta Total',
                  description: 'Acumula 1000 minutos de ejercicio',
                  progress: 45,
                  color: 'green'
                }
              ].map((achievement, index) => (
                <div key={index} className={`p-4 rounded-xl ${
                  achievement.color === 'blue' ? 'bg-blue-900/20' : 'bg-green-900/20'
                }`}>
                  <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                          achievement.color === 'blue' ? 'bg-blue-900/30 text-blue-400' : 'bg-green-900/30 text-green-400'
                        }`}>
                          En progreso
                        </span>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-semibold ${
                          achievement.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                        }`}>
                          {achievement.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-800">
                      <div
                        style={{ width: `${achievement.progress}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                          achievement.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
Asi es más dinamico para tener los componentes separados

"use client";
import Leaderboard from '@/components/leaderboard/Leaderboard';
import LevelBadges from '@/components/badges/LevelBadges';
import PointsHistory from '@/components/points/PointsHistory';

export default function Profile() {
    return (
      <div className="p-4">
        <Leaderboard />
        <LevelBadges />
        <PointsHistory />
      </div>
    );
  }*/