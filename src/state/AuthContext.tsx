import React, { useState, PropsWithChildren } from 'react';

const AuthContext = React.createContext<{
  token: string;
  isLoggedIn: boolean;
  onLogIn: (token: string, expiresIn: number | undefined) => void;
  onLogOut: () => void;
}>({
  token: '',
  isLoggedIn: false,
  onLogIn: (token: string, expiresIn: number | undefined) => {},
  onLogOut: () => {},
});

export const AuthContextProvider: React.FC<PropsWithChildren<unknown>> = (
  props
) => {
  const [token, setToken] = useState('');
  const isLoggedIn = !!token;

  const logOutHandler = () => {
    setToken('');
  };

  const logInHandler = (token: string, expiresIn: number | undefined) => {
    setToken(token);

    if (expiresIn) {
      setTimeout(logOutHandler, expiresIn * 1000);
    }
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
