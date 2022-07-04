import React, { useState, PropsWithChildren } from 'react';

import { getExpirationTime, getStoredToken } from './helpers';

const AuthContext = React.createContext<{
  token: string | undefined;
  isLoggedIn: boolean;
  onLogIn: (token: string, expiresIn: number | undefined) => void;
  onLogOut: () => void;
}>({
  token: undefined,
  isLoggedIn: false,
  onLogIn: (token: string, expiresIn: number | undefined) => {},
  onLogOut: () => {},
});

export const AuthContextProvider: React.FC<PropsWithChildren<unknown>> = (
  props
) => {
  const [tokenData, setTokenData] = useState<
    | {
        token: string;
        remainingTime: number | undefined;
      }
    | undefined
  >(getStoredToken());
  const isLoggedIn = !!tokenData?.token;

  let logOutTimer: ReturnType<typeof setTimeout>;

  const logOutHandler = () => {
    setTokenData(undefined);
    localStorage.removeItem('token');

    if (logOutTimer) {
      clearTimeout(logOutTimer);
    }
  };

  const logInHandler = (token: string, expiresIn: number | undefined) => {
    setTokenData({
      token: token,
      remainingTime: expiresIn && expiresIn * 1000,
    });
    localStorage.setItem('token', token);

    if (expiresIn) {
      localStorage.setItem('expirationTime', getExpirationTime(expiresIn));
      logOutTimer = setTimeout(logOutHandler, expiresIn * 1000);
    }
  };

  if (tokenData?.remainingTime) {
    logOutTimer = setTimeout(logOutHandler, tokenData.remainingTime);
  }

  return (
    <AuthContext.Provider
      value={{
        token: tokenData?.token,
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
