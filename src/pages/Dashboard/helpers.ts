export const getIsActive = (to: string, pathname: string) => {
  pathname = pathname.replace('dashboard', '').replaceAll('/', '');

  if (to === '') {
    return pathname === to;
  }

  return pathname.startsWith(to);
};
