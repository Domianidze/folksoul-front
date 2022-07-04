import { useContext } from 'react';
import { AuthContext } from 'state';

const useBearerToken = () => {
  const authCtx = useContext(AuthContext);

  return `bearer ${authCtx.token}`;
};

export default useBearerToken;
