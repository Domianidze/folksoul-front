import { useState, useEffect } from 'react';
import { Link, useOutlet } from 'react-router-dom';
import axios from 'axios';

import { DashboardTitle } from 'components';
import { SocialMedia } from './components';
import { SocialMediaType } from 'Types';

const API_URL = process.env.REACT_APP_API_URL;

const SocialMedias: React.FC = () => {
  const [socialMedias, setSocialMedias] = useState<SocialMediaType[]>([]);

  const updateSocialMedias = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-social-medias`);
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
      <div className='my-5 px-5 overflow-y-auto'>
        {socialMedias.map((socialMedia) => (
          <SocialMedia
            socialMedia={socialMedia}
            updateSocialMedias={updateSocialMedias}
            key={socialMedia._id}
          />
        ))}
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
