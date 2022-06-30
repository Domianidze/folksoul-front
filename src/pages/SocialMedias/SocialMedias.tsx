import { Link, useOutlet } from 'react-router-dom';

import { DashboardTitle } from 'components';
import { SocialMedia } from './components';
import { SocialMediasIcon } from 'assets';
import { SocialMediaType } from 'Types';

const DUMMY_SOCIAL_MEDIA: SocialMediaType = {
  iconUrl: SocialMediasIcon,
  name: 'YouTube',
  link: 'https://www.youtube.com/',
};

const SocialMedias: React.FC = () => {
  const outlet = useOutlet();
  if (outlet) {
    return outlet;
  }

  return (
    <div className='pb-20 relative w-full h-full flex items-center flex-col'>
      <DashboardTitle title='სოციალური ბმულები' />
      <div className='my-5 px-5 overflow-y-auto'>
        <SocialMedia socialMedia={DUMMY_SOCIAL_MEDIA} />
      </div>
      <Link
        to='add'
        className='pt-10 absolute bottom-10 font-nino-mtavruli-bold text-lg text-light-blue underline'
      >
        დაამატე ახალი სოციალური ბმული
      </Link>
    </div>
  );
};

export default SocialMedias;
