import { useState } from 'react';

interface ChallengeWager {
  id: string;
  challengeId: string;
  challenger: {
    userId: string;
    name: string;
  };
  opponent: {
    userId: string;
    name: string;
  };
  amount: number;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  winner?: string;
  createdAt: string;
}

export default function WagerSection({ challengeId }: { challengeId: string }) {
  const [showWagerForm, setShowWagerForm] = useState(false);
  const [amount, setAmount] = useState(100);
  const [selectedOpponent, setSelectedOpponent] = useState('');
  const [wagers, setWagers] = useState<ChallengeWager[]>([
    {
      id: '1',
      challengeId,
      challenger: { userId: 'user1', name: 'Tú' },
      opponent: { userId: 'user2', name: 'Juan' },
      amount: 200,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
  ]);

  const MOCK_USERS = [
    { id: 'user2', userId: 'user2', name: 'Juan' },
    { id: 'user3', userId: 'user3', name: 'María' },
    { id: 'user4', userId: 'user4', name: 'Pedro' }
  ];

  const handleCreateWager = (e: React.FormEvent) => {
    e.preventDefault();
    const newWager: ChallengeWager = {
      id: (wagers.length + 1).toString(),
      challengeId,
      challenger: { userId: 'user1', name: 'Tú' },
      opponent: MOCK_USERS.find(u => u.id === selectedOpponent) || { userId: MOCK_USERS[0].userId, name: MOCK_USERS[0].name },
      amount,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    setWagers([...wagers, newWager]);
    setShowWagerForm(false);
  };

  const handleWagerResponse = (wagerId: string, accept: boolean) => {
    setWagers(wagers.map(wager => 
      wager.id === wagerId 
        ? { ...wager, status: accept ? 'accepted' : 'rejected' }
        : wager
    ));
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Apuestas</h3>
        <button
          onClick={() => setShowWagerForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Nueva Apuesta
        </button>
      </div>

      {showWagerForm && (
        <form onSubmit={handleCreateWager} className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Oponente</label>
              <select
                value={selectedOpponent}
                onChange={(e) => setSelectedOpponent(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Selecciona un oponente</option>
                {MOCK_USERS.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Cantidad (puntos)</label>
              <input
                type="number"
                min="100"
                step="100"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowWagerForm(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Crear Apuesta
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {wagers.map(wager => (
          <div key={wager.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">
                  {wager.challenger.name} vs {wager.opponent.name}
                </p>
                <p className="text-sm text-gray-600">
                  {new Date(wager.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold">{wager.amount} puntos</p>
                <p className={`text-sm ${
                  wager.status === 'pending' ? 'text-yellow-600' :
                  wager.status === 'accepted' ? 'text-green-600' :
                  'text-red-600'
                }`}>
                  {wager.status === 'pending' ? 'Pendiente' :
                   wager.status === 'accepted' ? 'Aceptada' :
                   'Rechazada'}
                </p>
              </div>
            </div>

            {wager.status === 'pending' && wager.opponent.userId === 'user2' && (
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => handleWagerResponse(wager.id, false)}
                  className="px-3 py-1 text-red-600 hover:bg-red-50 rounded"
                >
                  Rechazar
                </button>
                <button
                  onClick={() => handleWagerResponse(wager.id, true)}
                  className="px-3 py-1 text-green-600 hover:bg-green-50 rounded"
                >
                  Aceptar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}