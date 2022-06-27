import { useState, useEffect } from 'react';
import axios from 'axios';

import { SocialMediaType } from '../Types';

const SocialMedias: React.FC = (props) => {
  const [socialMedias, setSocialMedias] = useState<SocialMediaType[]>([]);

  useEffect(() => {
    const getSocialMedias = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/get-social-medias'
        );
        const data: SocialMediaType[] = response.data;

        setSocialMedias(data);
      } catch (err) {
        console.error(err);
      }
    };

    getSocialMedias();
  });

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
            <img src={item.iconUrl} alt={item.name} className='w-10'></img>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedias;
