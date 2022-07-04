export const getExpirationTime = (expiresIn: number) => {
  const time = new Date().getTime();
  const expirationTime = time + expiresIn * 1000;

  return expirationTime.toString();
};

const getRemainingTime = (expirationTime: number) => {
  const time = new Date().getTime();

  return expirationTime - time;
};

export const getStoredToken = () => {
  const token = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime');

  if (!token || !expirationTime) return;

  const remainingTime = getRemainingTime(+expirationTime);

  if (remainingTime < 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return;
  }

  return {
    token,
    remainingTime,
  };
};
