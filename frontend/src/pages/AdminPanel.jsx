import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import axiosClientWeb from '../lib/axiosClientWeb';
import Pagination from '../components/common/Pagination';
import { useTranslation } from 'react-i18next';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosClientWeb.get(
          `/api/users?page=${currentPage}`
        );
        setUsers(response.data.data);
        setTotalPages(response.data.last_page);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handleDeleteUser = async (id) => {
    try {
      await axiosClientWeb.delete(`/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = async (id, updatedData) => {
    try {
      const response = await axiosClientWeb.put(
        `/api/users/${id}`,
        updatedData
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ...response.data.user } : user
        )
      );
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleCreateUser = async (newUserData) => {
    try {
      const response = await axiosClientWeb.post('/api/users', newUserData);
      setUsers((prevUsers) => [response.data.user, ...prevUsers]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-hidden h-screen dark:text-custom-white text-custom-black dark:bg-custom-black bg-custom-white z-10">
      <Navbar />
      <div className="flex justify-center items-center h-full mt-16">
        <img
          src="/PolyRed.svg"
          alt="Poly Red"
          className="absolute top-0 left-0 w-1/2 opacity-20 pointer-events-none"
        />
        <img
          src="/PolyBlue.svg"
          alt="Poly Blue"
          className="absolute bottom-0 right-0 w-1/2 opacity-20 pointer-events-none"
        />
        <div className="mockup-window dark:bg-base-300 bg-slate-400 border w-3/4 max-w-4xl mx-auto">
          <div className="dark:bg-base-200 bg-slate-300 px-4 py-16">
            <h1 className="text-2xl font-bold text-center mb-8">
              {t('PanelUser')}
            </h1>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-green-500 px-6 py-3 rounded-md mx-auto block text-white mb-4"
            >
              {t('CreateUser')}
            </button>
            <table className="w-full mb-8">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">ID</th>
                  <th className="py-2"> {t('name')}</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">{t('action')}</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className="py-2">{user.id}</td>
                      <td className="py-2">{user.name}</td>
                      <td className="py-2">{user.email}</td>
                      <td className="py-2">
                        <button
                          onClick={() => openModal(user)}
                          className="bg-custom-olive px-4 py-2 rounded-md mr-2 flex items-center"
                        >
                          <FiEdit className="mr-2" />
                          {t('Edit')}
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-500 px-4 py-2 rounded-md flex items-center"
                        >
                          <FiTrash2 className="mr-2" />
                          {t('delete')}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      Brak użytkowników do wyświetlenia.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">{t('Edituser')}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEditUser(selectedUser.id, {
                  name: e.target.name.value,
                  email: e.target.email.value,
                  role: e.target.role.value,
                });
                setSelectedUser(null);
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Imię</label>
                <input
                  name="name"
                  defaultValue={selectedUser.name}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  name="email"
                  defaultValue={selectedUser.email}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Rola</label>
                <select
                  name="role"
                  defaultValue={selectedUser.role}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedUser(null)}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded"
                >
                  Anuluj
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Zapisz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center dark:text-white">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">{t('CreNewUser')}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateUser({
                  name: e.target.name.value,
                  email: e.target.email.value,
                  password: e.target.password.value,
                  role: e.target.role.value,
                });
                setIsCreateModalOpen(false);
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  {t('name')}
                </label>
                <input
                  name="name"
                  className="w-full px-3 py-2 border rounded bg-slate-300 dark:bg-custom-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  name="email"
                  className="w-full px-3 py-2 border rounded bg-slate-300 dark:bg-custom-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  {t('password')}
                </label>
                <input
                  name="password"
                  type="password"
                  className="w-full px-3 py-2 border rounded bg-slate-300 dark:bg-custom-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  {t('Role')}
                </label>
                <select
                  name="role"
                  className="w-full px-3 py-2 border rounded bg-slate-300 dark:bg-custom-black"
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded"
                >
                  {t('cancle')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {t('cre')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
