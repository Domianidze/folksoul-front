import React, { useState, PropsWithChildren } from 'react';

const AuthContext = React.createContext<{
  token: string;
  isLoggedIn: boolean;
  onLogIn: (token: string) => void;
  onLogOut: () => void;
}>({
  token: '',
  isLoggedIn: false,
  onLogIn: (token: string) => {},
  onLogOut: () => {},
});

export const AuthContextProvider: React.FC<PropsWithChildren<unknown>> = (
  props
) => {
  const [token, setToken] = useState('');
  const isLoggedIn = !!token;

  const logInHandler = (token: string) => {
    setToken(token);
  };

  const logOutHandler = () => {
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: isLoggedIn,
        onLogIn: logInHandler,
        onLogOut: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
