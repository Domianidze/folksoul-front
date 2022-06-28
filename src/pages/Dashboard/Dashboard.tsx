import { Outlet } from 'react-router-dom';

import { ListItem } from './components';
import {
  MainIcon,
  MembersIcon,
  SocialMediasIcon,
  AboutIcon,
  LogOutIcon,
} from 'assets';

const Dashboard: React.FC = () => {
  return (
    <div className='w-100 h-screen max-h-screen flex justify-center items-center bg-primary overflow-hidden'>
      <ul className='absolute -left-5 top-1/2 -translate-y-1/2 w-80 h-112 flex justify-center items-center flex-col font-nino-mtavruli bg-custom-black border border-custom-gray rounded-3xl'>
        <ListItem to='' img={MainIcon} text='მთავარი' />
        <ListItem to='members' img={MembersIcon} text='ჯგუფის წევრები' />
        <ListItem
          to='social-medias'
          img={SocialMediasIcon}
          text='სოციალური ბმულები'
        />
        <ListItem to='about' img={AboutIcon} text='ბენდის შესახებ' />
        <li className='py-8 w-full h-12'>
          <button
            type='button'
            className='px-12 w-full h-full flex items-center text-lg text-white'
          >
            <img src={LogOutIcon} alt='log out' className='pb-2 pr-3' />
            გადი გარეთ
          </button>
        </li>
      </ul>
      <div className='ml-72 w-300 h-200 bg-white rounded-xl shadow-primary-inner'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
