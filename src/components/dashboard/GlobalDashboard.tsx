"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Brain, Heart, Calendar, Users, Trophy, ArrowUp } from 'lucide-react';
import { useMockData } from '@/hooks/useMockData';

export default function GlobalDashboard() {
  const { stats } = useMockData();
  
  // Transformar los datos para el gráfico
  const chartData = Object.keys(stats.activeParticipation).map(month => ({
    month,
    mente: stats.activeParticipation[month].mind,
    cuerpo: stats.activeParticipation[month].body,
    espiritu: stats.activeParticipation[month].spirit
  }));

  return (
    <div className="min-h-screen bg-background-dark p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">¡Bienvenido!</h1>
            <p className="text-gray-400">Resumen de actividades y progreso</p>
          </div>
          <div className="flex items-center space-x-2 bg-background-card px-4 py-2 rounded-lg">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blue-200">Total Usuarios</p>
                <h3 className="text-3xl font-bold text-white mt-1">{stats.users}</h3>
              </div>
              <Users className="w-8 h-8 text-blue-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-green-200">Usuarios Activos</p>
                <h3 className="text-3xl font-bold text-white mt-1">
                  {stats.activeUsers[Object.keys(stats.activeUsers).pop() || '']}
                </h3>
              </div>
              <Activity className="w-8 h-8 text-green-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-purple-200">Retos Completados</p>
                <h3 className="text-3xl font-bold text-white mt-1">
                  {stats.challengesCompleted[Object.keys(stats.challengesCompleted).pop() || '']}
                </h3>
              </div>
              <Trophy className="w-8 h-8 text-purple-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-red-200">Participación Total</p>
                <h3 className="text-3xl font-bold text-white mt-1">
                  {Object.values(stats.activeParticipation).reduce((acc, curr) => 
                    acc + curr.mind + curr.body + curr.spirit, 0
                  )}
                </h3>
              </div>
              <ArrowUp className="w-8 h-8 text-red-200" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-background-card p-6 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-6">Actividad Mensual</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      borderRadius: '8px',
                      border: '1px solid #374151',
                      color: '#fff'
                    }}
                  />
                  <Line type="monotone" dataKey="mente" stroke="#60A5FA" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="cuerpo" stroke="#34D399" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="espiritu" stroke="#F87171" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-background-card p-6 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-6">Distribución de Actividades</h3>
            <div className="space-y-4">
              {Object.entries(stats.activeParticipation).slice(-3).map(([month, data]) => (
                <div key={month} className="p-4 bg-background-dark rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">{month}</span>
                    <span className="text-gray-400">Total: {data.mind + data.body + data.spirit}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Brain className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <span className="text-blue-400">{data.mind}</span>
                    </div>
                    <div className="text-center">
                      <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <span className="text-green-400">{data.body}</span>
                    </div>
                    <div className="text-center">
                      <Heart className="w-6 h-6 text-red-400 mx-auto mb-2" />
                      <span className="text-red-400">{data.spirit}</span>
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