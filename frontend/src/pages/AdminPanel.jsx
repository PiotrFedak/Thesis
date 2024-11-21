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

  const openModal = (user) => {
    alert(`Edit user: ${user.name}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-hidden h-screen text-custom-white dark:bg-custom-black bg-custom-white z-10">
      <Navbar />
      <div className="flex justify-center items-center h-full">
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
        <div className="mockup-window bg-base-300 border w-3/4 max-w-4xl mx-auto">
          <div className="ml-5">/Admin Panel</div>
          <div className="bg-base-200 px-4 py-16">
            <h1 className="text-2xl font-bold text-center mb-8">
              {t('PanelUser')}
            </h1>
            <table className="w-full mb-8">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">ID</th>
                  <th className="py-2">Nazwa</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Akcje</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-100">
                      <td className="py-2">{user.id}</td>
                      <td className="py-2">{user.name}</td>
                      <td className="py-2">{user.email}</td>
                      <td className="py-2">
                        <button
                          onClick={() => openModal(user)}
                          className="bg-custom-olive px-4 py-2 rounded-md mr-2 flex items-center"
                        >
                          <FiEdit className="mr-2" />
                          Edytuj
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-500 px-4 py-2 rounded-md flex items-center"
                        >
                          <FiTrash2 className="mr-2" />
                          Usuń
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
            <button
              onClick={() => alert('Dodaj nowego użytkownika')}
              className="bg-custom-blue dark:bg-custom-red px-6 py-3 rounded-md mx-auto block"
            >
              Dodaj użytkownika
            </button>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
