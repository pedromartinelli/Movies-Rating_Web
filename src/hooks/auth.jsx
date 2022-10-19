import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});


function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function SignIn({ email, password }) {

    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketnotes:users', JSON.stringify(user));
      localStorage.setItem('@rocketnotes:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível realizar o login.');
      };
    };
  };

  function SignOut() {
    localStorage.removeItem('@rocketnotes:users');
    localStorage.removeItem('@rocketnotes:token');

    setData({});
  };

  async function updateProfile({ user, avatarFile }) {

    if (avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append('avatar', avatarFile);

      const response = await api.patch('/users/avatar', fileUploadForm);
      user.avatar = response.data.avatar;
    };

    try {
      await api.put('/users', user);
      localStorage.setItem('@rocketnotes:users', JSON.stringify(user));

      setData({ user, token: data.token });
      alert('Perfil Atualizado');

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível atualizar o usuário.');
      };
    };
  };

  useEffect(() => {
    const user = localStorage.getItem('@rocketnotes:users');
    const token = localStorage.getItem('@rocketnotes:token');
    
    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    };
  }, []);

  return (
    <AuthContext.Provider value={{
      SignIn,
      SignOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };