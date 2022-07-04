import { useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { AuthContext } from 'state';
import { ListItem } from './components';
import {
  MainIcon,
  MembersIcon,
  SocialMediasIcon,
  BandIcon,
  LogOutIcon,
} from 'assets';

const Dashboard: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    authCtx.onLogOut();
    navigate('/');
  };

  return (
    <div className='w-100 h-screen max-h-screen flex justify-center items-center bg-primary overflow-hidden'>
      <ul className='absolute -left-5 top-1/2 -translate-y-1/2 w-80 h-112 flex justify-center items-center flex-col font-nino-mtavruli bg-custom-black border border-custom-gray rounded-3xl'>
        <ListItem id='nav-main' end to='' img={MainIcon} text='მთავარი' />
        <ListItem
          id='nav-members'
          to='members'
          img={MembersIcon}
          text='ჯგუფის წევრები'
        />
        <ListItem
          id='nav-social-medias'
          to='social-medias'
          img={SocialMediasIcon}
          text='სოციალური ბმულები'
        />
        <ListItem
          id='nav-band'
          to='band'
          img={BandIcon}
          text='ბენდის შესახებ'
        />
        <li id='nav-logout' className='py-8 w-full h-12'>
          <button
            type='button'
            onClick={logOutHandler}
            className='px-12 w-full h-full flex items-center text-lg text-white'
          >
            <img src={LogOutIcon} alt='log out' className='pb-2 pr-3' />
            გადი გარეთ
          </button>
        </li>
      </ul>
      <div className='ml-80 mr-8 w-0.95 h-0.95 flex justify-center flex-col bg-white rounded-xl shadow-primary-inner 3xl:ml-72 3xl:w-300 3xl:h-190'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
