"use client";

import React, { useState } from 'react';
import { User, MoreVertical } from 'lucide-react';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  status: 'active' | 'inactive';
  lastLogin: Date;
}

const MOCK_USERS: UserData[] = [
  {
    id: '1',
    name: 'Admin Usuario',
    email: 'admin@wellness.com',
    role: 'admin',
    status: 'active',
    lastLogin: new Date()
  },
  {
    id: '2',
    name: 'Usuario Regular',
    email: 'usuario@wellness.com',
    role: 'user',
    status: 'active',
    lastLogin: new Date()
  }
];

export default function UserManagement() {
  const [users] = useState<UserData[]>(MOCK_USERS);
  const [showModal, setShowModal] = useState(false);

  const getRoleBadge = (role: string) => {
    const colors = {
      admin: 'bg-red-100 text-red-800',
      moderator: 'bg-blue-100 text-blue-800',
      user: 'bg-green-100 text-green-800'
    };
    return colors[role as keyof typeof colors];
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Gestión de Usuarios</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <User className="w-5 h-5" />
          Nuevo Usuario
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Último Acceso
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {user.name[0].toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadge(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {user.lastLogin.toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Nuevo Usuario</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rol</label>
                <select className="w-full p-2 border rounded">
                  <option value="user">Usuario</option>
                  <option value="moderator">Moderador</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Crear Usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}