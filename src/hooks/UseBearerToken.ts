import { useContext } from 'react';
import { AuthContext } from 'state';

const UseBearerToken = () => {
  const authCtx = useContext(AuthContext);

  return `bearer ${authCtx.token}`;
};

export default UseBearerToken;
