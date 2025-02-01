"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Calendar, Users } from 'lucide-react';
import { Challenge, ChallengeType } from '@/types';
import { useMockData } from '@/hooks/useMockData';

export default function ChallengeList() {
  const { challenges } = useMockData();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [challengesList] = useState<Challenge[]>(Object.values(challenges));

  const getTypeStyles = (type: ChallengeType) => {
    switch(type) {
      case 'mind':
        return 'bg-blue-900/20 hover:bg-blue-900/30';
      case 'body':
        return 'bg-green-900/20 hover:bg-green-900/30';
      case 'spirit':
        return 'bg-red-900/20 hover:bg-red-900/30';
    }
  };

  return (
    <div className="min-h-screen bg-background-dark p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Retos</h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Nuevo Reto
          </button>
        </div>

        <div className="space-y-4">
          {challengesList.map((challenge) => (
            <div
              key={challenge.id}
              className={`${getTypeStyles(challenge.type)} rounded-xl p-6 transition-all duration-200 border border-gray-800/50`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{challenge.description}</p>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(challenge.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants.length} participantes</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/challenges/${challenge.id}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showCreateForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-background-card p-6 rounded-xl w-full max-w-md border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Nuevo Reto</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Título</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Tipo</label>
                  <select 
                    className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="mind">Mente</option>
                    <option value="body">Cuerpo</option>
                    <option value="spirit">Espíritu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Descripción</label>
                  <textarea
                    className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Fecha Inicio</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Fecha Fin</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 bg-background-dark border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Crear Reto
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