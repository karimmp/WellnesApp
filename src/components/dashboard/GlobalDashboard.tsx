"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Brain, Heart, Calendar, Users, Trophy, ArrowUp } from 'lucide-react';
//import { mockData } from '@/data/mockData';

const mockData = {
  activityData: [
    { month: 'Ene', mente: 45, cuerpo: 30, espiritu: 50 },
    { month: 'Feb', mente: 50, cuerpo: 35, espiritu: 30 },
    { month: 'Mar', mente: 55, cuerpo: 40, espiritu: 35 },
    { month: 'Abr', mente: 30, cuerpo: 25, espiritu: 20 },
    { month: 'May', mente: 60, cuerpo: 50, espiritu: 40 },
    { month: 'Jun', mente: 20, cuerpo: 10, espiritu: 25 }
  ],
  stats: {
    users: 150,
    activeUsers: 89,
    completed: 234,
    ongoing: 45
  }
};

export default function GlobalDashboard() {
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
                <h3 className="text-3xl font-bold text-white mt-1">{mockData.stats.users}</h3>
              </div>
              <Users className="w-8 h-8 text-blue-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-green-200">Usuarios Activos</p>
                <h3 className="text-3xl font-bold text-white mt-1">{mockData.stats.activeUsers}</h3>
              </div>
              <Activity className="w-8 h-8 text-green-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-purple-200">Retos Completados</p>
                <h3 className="text-3xl font-bold text-white mt-1">{mockData.stats.completed}</h3>
              </div>
              <Trophy className="w-8 h-8 text-purple-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-red-200">Retos Activos</p>
                <h3 className="text-3xl font-bold text-white mt-1">{mockData.stats.ongoing}</h3>
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
                <LineChart data={mockData.activityData}>
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
            <h3 className="text-xl font-semibold text-white mb-6">Retos Destacados</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-900/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="font-medium text-white">Meditación Diaria</h4>
                    <p className="text-sm text-gray-400">45 participantes</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-green-900/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="font-medium text-white">Ejercicio Matutino</h4>
                    <p className="text-sm text-gray-400">38 participantes</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-red-900/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-400" />
                  <div>
                    <h4 className="font-medium text-white">Voluntariado</h4>
                    <p className="text-sm text-gray-400">25 participantes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}