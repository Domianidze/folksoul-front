import { useState, useEffect } from 'react';

import { getSocialMediasRequest } from 'services';
import { SocialMediaType } from 'types';

const SocialMedias: React.FC = () => {
  const [socialMedias, setSocialMedias] = useState<SocialMediaType[]>([]);

  useEffect(() => {
    const getSocialMedias = async () => {
      try {
        const response = await getSocialMediasRequest();
        const data: SocialMediaType[] = response.data;

        setSocialMedias(data);
      } catch (err) {}
    };

    getSocialMedias();
  }, []);

  return (
    <div className='py-5 w-full flex justify-center items-center'>
      {socialMedias.map((item, index) => {
        return (
          <a
            href={item.link}
            className='px-5 duration-500 hover:opacity-80'
            target='_blank'
            rel='noreferrer'
            key={index}
          >
            <img src={item.iconUrl} alt={item.name} className='max-h-10'></img>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedias;
