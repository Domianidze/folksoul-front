const getExpiresInSec = (expiresIn: string) => {
  const expiresInSec: number = parseInt(expiresIn);

  if (expiresIn.endsWith('s')) {
    return expiresInSec;
  }

  if (expiresIn.endsWith('m')) {
    return expiresInSec * 60;
  }

  if (expiresIn.endsWith('h')) {
    return expiresInSec * 3600;
  }
};

export default getExpiresInSec;
