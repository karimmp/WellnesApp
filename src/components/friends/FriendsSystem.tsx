"use client";

import React, { useState } from 'react';
import { UserPlus, Check, X, Search } from 'lucide-react';

interface Friend {
  id: string;
  name: string;
  status: 'pending' | 'friend' | 'none';
  mutualFriends: number;
}

const MOCK_USERS: Friend[] = [
  { id: '1', name: 'Ana García', status: 'friend', mutualFriends: 5 },
  { id: '2', name: 'Carlos Ruiz', status: 'pending', mutualFriends: 3 },
  { id: '3', name: 'Maria Silva', status: 'none', mutualFriends: 2 }
];

export default function FriendsSystem() {
  const [friends, setFriends] = useState<Friend[]>(MOCK_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAction = (userId: string, action: 'accept' | 'reject' | 'add') => {
    setFriends(friends.map(friend => {
      if (friend.id === userId) {
        return {
          ...friend,
          status: action === 'add' ? 'pending' : 
                 action === 'accept' ? 'friend' : 'none'
        };
      }
      return friend;
    }));
  };

  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar amigos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
        />
      </div>

      <div className="space-y-4">
        {filteredFriends.map((friend) => (
          <div key={friend.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  {friend.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold">{friend.name}</h3>
                  <p className="text-sm text-gray-500">{friend.mutualFriends} amigos en común</p>
                </div>
              </div>

              <div className="flex gap-2">
                {friend.status === 'none' && (
                  <button
                    onClick={() => handleAction(friend.id, 'add')}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  >
                    <UserPlus className="w-5 h-5" />
                  </button>
                )}
                {friend.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleAction(friend.id, 'accept')}
                      className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleAction(friend.id, 'reject')}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </>
                )}
                {friend.status === 'friend' && (
                  <span className="text-green-500 font-medium">Amigos</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}