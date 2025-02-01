"use client";

import React, { useState } from 'react';
import { User, MoreVertical, Moon, Sun, Settings, Shield, Database, Bell } from 'lucide-react';

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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showAdminMenu, setShowAdminMenu] = useState(false);

  const getRoleBadge = (role: string) => {
    const colors = {
      admin: isDarkMode ? 'bg-red-900/50 text-red-400' : 'bg-red-100 text-red-800',
      moderator: isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-800',
      user: isDarkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-800'
    };
    return colors[role as keyof typeof colors];
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const adminActions = [
    { icon: <Shield className="w-4 h-4" />, label: 'Permisos' },
    { icon: <Database className="w-4 h-4" />, label: 'Respaldo' },
    { icon: <Bell className="w-4 h-4" />, label: 'Notificaciones' },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-background-dark text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowAdminMenu(!showAdminMenu)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
              >
                <Settings className="w-5 h-5" />
              </button>
              {showAdminMenu && (
                <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${
                  isDarkMode ? 'bg-background-card border border-gray-800' : 'bg-white'
                }`}>
                  {adminActions.map((action, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${
                        isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      } ${index === 0 ? 'rounded-t-lg' : ''} ${
                        index === adminActions.length - 1 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      {action.icon}
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <User className="w-5 h-5" />
              Nuevo Usuario
            </button>
          </div>
        </div>

        <div className={`rounded-xl shadow-sm overflow-hidden ${
          isDarkMode ? 'bg-background-card border border-gray-800' : 'bg-white'
        }`}>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Usuario</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rol</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Último Acceso</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDarkMode ? 'divide-gray-800' : 'divide-gray-200'}`}>
              {users.map((user) => (
                <tr key={user.id} className={isDarkMode ? 'bg-background-card' : 'bg-white'}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`h-10 w-10 rounded-full ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                      } flex items-center justify-center`}>
                        {user.name[0].toUpperCase()}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">{user.name}</div>
                        <div className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'active' 
                        ? isDarkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-800'
                        : isDarkMode ? 'bg-red-900/50 text-red-400' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {user.lastLogin.toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className={isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'}>
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className={`w-full max-w-md rounded-xl p-6 ${
              isDarkMode ? 'bg-background-card border border-gray-800' : 'bg-white'
            }`}>
              <h3 className="text-xl font-semibold mb-6">Nuevo Usuario</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    className={`w-full p-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-background-dark border-gray-700 text-white'
                        : 'border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className={`w-full p-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-background-dark border-gray-700 text-white'
                        : 'border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Rol</label>
                  <select
                    className={`w-full p-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-background-dark border-gray-700 text-white'
                        : 'border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="user">Usuario</option>
                    <option value="moderator">Moderador</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className={`px-4 py-2 rounded-lg ${
                      isDarkMode
                        ? 'text-gray-400 hover:bg-gray-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Crear Usuario
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