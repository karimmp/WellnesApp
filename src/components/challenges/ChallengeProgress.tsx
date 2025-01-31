import React from 'react';
import { Camera } from 'lucide-react';

interface ProgressProps {
  startDate: string;
  endDate: string;
  evidence?: string[];
}

export default function ChallengeProgress({ startDate, endDate, evidence = [] }: ProgressProps) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();
  const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const daysCompleted = Math.ceil((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const progress = Math.min(Math.max((daysCompleted / totalDays) * 100, 0), 100);

  const uploadEvidence = () => {
    // Aquí iría la lógica de subida de fotos
    console.log('Subiendo evidencia...');
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Progreso del Reto</h3>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2 text-sm">
          <span>{Math.round(progress)}% completado</span>
          <span>{daysCompleted}/{totalDays} días</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-medium mb-2">Evidencias</h4>
        <div className="grid grid-cols-4 gap-2">
          {evidence.map((url, index) => (
            <div key={index} className="aspect-square bg-gray-100 rounded flex items-center justify-center">
              <img src={url} alt={`Evidencia ${index + 1}`} className="w-full h-full object-cover rounded" />
            </div>
          ))}
          <button
            onClick={uploadEvidence}
            className="aspect-square bg-gray-50 rounded flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:bg-gray-100"
          >
            <Camera className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500 mt-1">Subir</span>
          </button>
        </div>
      </div>
    </div>
  );
}