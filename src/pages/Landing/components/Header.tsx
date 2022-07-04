import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from 'state';
import { LogoImg } from 'assets';

const Header: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className='absolute top-0 left-0 py-8 px-24  w-full flex justify-between items-center z-50'>
      <img src={LogoImg} alt='Logo' className='w-40' />
      {authCtx.isLoggedIn ? (
        <Link
          to='/dashboard'
          className='font-nino-mtavruli text-content-white text-base duration-500 hover:opacity-80'
        >
          დეშბორდი
        </Link>
      ) : (
        <Link
          to='/login'
          className='font-nino-mtavruli text-content-white text-base duration-500 hover:opacity-80'
        >
          შესვლა
        </Link>
      )}
    </div>
  );
};

export default Header;
