// src/data/mockData.ts
export interface MockData {
    users: User[];
    challenges: Record<string, Challenge>;
    activities: Activity[];
    stats: Stats;
  }

  export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }
  
  export interface Challenge {
    id: string;
    title: string;
    type: 'mind' | 'body' | 'spirit';
    description: string;
    startDate: string;
    endDate: string;
    participants: string[];
  }
  
  export interface Activity {
    id: string;
    type: string;
    name: string;
    points: number;
  }
  
  export interface Stats {
    users: number;
    activeUsers: { [key: string]: number };
    challengesCompleted: { [key: string]: number };
    activeParticipation: { [key: string]: { mind: number; body: number; spirit: number } };
  }
  
  export const mockData: MockData = {
    users: [
      { id: '1', name: 'Usuario Demo', email: 'demo@example.com', role: 'user' }
    ],
    challenges: {
      '1': {
        id: '1',
        title: 'Meditación Diaria',
        type: 'mind',
        description: '10 minutos de meditación por 7 días',
        startDate: '2025-01-30',
        endDate: '2025-02-06',
        participants: ['user1', 'user2']
      },
      '2': {
        id: '2',
        title: 'Ejercicio Matutino',
        type: 'body',
        description: '30 minutos de ejercicio al despertar',
        startDate: '2025-02-06',
        endDate: '2025-02-13',
        participants: ['user1', 'user2', 'user3']
      }
    },
    activities: [
      { id: '1', type: 'mind', name: 'Meditación', points: 100 }
    ],
    stats: {
        users: 150,
        activeUsers: {
          "Ene": 89,
          "Feb": 95,
          "Mar": 105
        },
        challengesCompleted: {
          "Ene": 234,
          "Feb": 256,
          "Mar": 289
        },
        activeParticipation: {
          "Ene": { mind: 45, body: 30, spirit: 25 },
          "Feb": { mind: 50, body: 35, spirit: 30 },
          "Mar": { mind: 55, body: 40, spirit: 35 }
        }
      }
  };