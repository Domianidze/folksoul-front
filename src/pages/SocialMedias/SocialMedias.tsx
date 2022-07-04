import { useState, useEffect } from 'react';
import { Link, useOutlet } from 'react-router-dom';

import { getSocialMediasRequest } from 'services';
import { DashboardTitle } from 'components';
import { SocialMedia } from './components';
import { SocialMediaType } from 'types';

const SocialMedias: React.FC = () => {
  const [socialMedias, setSocialMedias] = useState<SocialMediaType[]>([]);

  const updateSocialMedias = async () => {
    try {
      const response = await getSocialMediasRequest();
      const data: SocialMediaType[] = response.data;

      setSocialMedias(data);
    } catch (err) {}
  };

  useEffect(() => {
    updateSocialMedias();
  }, []);

  const outlet = useOutlet({ updateSocialMedias });
  if (outlet) {
    return outlet;
  }

  return (
    <div className='pb-20 relative w-full h-full flex items-center flex-col'>
      <DashboardTitle title='სოციალური ბმულები' />
      <div className='mt-3 px-5 overflow-y-auto'>
        {socialMedias.length > 0 ? (
          socialMedias.map((socialMedia) => (
            <SocialMedia
              socialMedia={socialMedia}
              updateSocialMedias={updateSocialMedias}
              key={socialMedia._id}
            />
          ))
        ) : (
          <p className='font-nino-mtavruli text-lg'>
            სოციალური ბმულები ჯერ–ჯერობით არ არის.
          </p>
        )}
      </div>
      <Link
        to='add'
        id='add-social-media-btn'
        className='pt-10 absolute bottom-10 font-nino-mtavruli-bold text-lg text-light-blue underline'
      >
        დაამატე ახალი სოციალური ბმული
      </Link>
    </div>
  );
};

export default SocialMedias;
