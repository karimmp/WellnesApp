"use client";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Brain, Heart, Activity, Calendar, Users, Share2, Camera, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Challenge } from '@/types';

export default function ChallengePage() {
  const params = useParams();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [showBetModal, setShowBetModal] = useState(false);
  const progress = 65;

  useEffect(() => {
    const mockChallenges: Record<string, Challenge> = {
      '1': {
        id: '1',
        title: 'Meditación Diaria',
        type: 'mind',
        description: '10 minutos de meditación por 7 días',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        participants: ['user1', 'user2']
      },
      '2': {
        id: '2',
        title: 'Ejercicio Matutino',
        type: 'body',
        description: '30 minutos de ejercicio al despertar',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        participants: ['user1', 'user2', 'user3']
      }
    };
  
    const id = params.id as string;
    setChallenge(mockChallenges[id] || null);
  }, [params.id]);

  if (!challenge) return null;

  const getTypeStyles = (type: string) => {
    switch(type) {
      case 'mind': return 'bg-blue-900/20';
      case 'body': return 'bg-green-900/20';
      case 'spirit': return 'bg-red-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-background-dark">
      <div className="bg-background-card border-b border-gray-800">
        <div className="max-w-4xl mx-auto p-6">
          <Link href="/challenges" className="inline-flex items-center text-gray-400 hover:text-gray-300 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a retos
          </Link>

          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className={`p-3 rounded-xl ${getTypeStyles(challenge.type)}`}>
                {challenge.type === 'mind' && <Brain className="w-6 h-6 text-blue-400" />}
                {challenge.type === 'body' && <Activity className="w-6 h-6 text-green-400" />}
                {challenge.type === 'spirit' && <Heart className="w-6 h-6 text-red-400" />}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{challenge.title}</h1>
                <p className="text-gray-400 mt-2">{challenge.description}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Share2 className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>{new Date(challenge.startDate).toLocaleDateString()} - {new Date(challenge.endDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5" />
              <span>{challenge.participants.length} participantes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background-card border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-6">Progreso</h2>
            <div className="relative">
              <div className="flex mb-2 items-center justify-between">
                <span className="px-2 py-1 text-xs font-semibold bg-green-900/30 text-green-400 rounded-lg">
                  En progreso
                </span>
                <span className="text-green-400 font-semibold">{progress}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-white mb-4">Evidencias</h3>
              <div className="grid grid-cols-4 gap-3">
                <button className="aspect-square bg-background-dark rounded-xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center hover:bg-gray-800 transition-colors">
                  <Camera className="w-6 h-6 text-gray-400" />
                  <span className="text-xs text-gray-400 mt-1">Añadir</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-background-card border border-gray-800 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Apuestas</h2>
              <button 
                onClick={() => setShowBetModal(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Nueva Apuesta
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-background-dark rounded-xl border border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">Juan vs María</p>
                    <p className="text-sm text-gray-400">500 puntos</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded-lg text-xs font-medium">
                    Pendiente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showBetModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background-card border border-gray-800 p-6 rounded-xl w-full max-w-md">
            <h3 className="text-xl font-semibold text-white mb-4">Nueva Apuesta</h3>
            <button 
              onClick={() => setShowBetModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-300"
            >
              ✕
            </button>
            {/* Form content goes here */}
          </div>
        </div>
      )}
    </div>
  );
}