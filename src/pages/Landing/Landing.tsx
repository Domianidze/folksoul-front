import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Header, SunoteSystem, Description, SocialMedias } from './components';
import { ArtistType } from './Types';

const API_URL = process.env.REACT_APP_API_URL;

const Landing: React.FC = () => {
  const params = useParams();

  const [artists, setArtists] = useState<ArtistType[]>([]);
  const [activeArtist, setActiveArtist] = useState<ArtistType | undefined>();
  const [stopAnimating, setStopAnimating] = useState<boolean>(false);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const response = await axios.get(`${API_URL}/get-members`);
        const data: ArtistType[] = response.data;

        const active: ArtistType | undefined = data.find(
          (artist) => artist._id === params.memberId
        );

        if (active) {
          setStopAnimating(true);
        } else {
          setStopAnimating(false);
        }

        setArtists(data);
        setActiveArtist(active);
      } catch (err) {
        console.error(err);
      }
    };

    getArtists();
  }, [params]);

  return (
    <div className='w-100 h-screen max-h-screen bg-primary overflow-hidden'>
      <Header />
      <div className='pt-20 w-full h-full flex'>
        <div className='h-full w-1/2 flex justify-center items-center'>
          <SunoteSystem
            artists={artists}
            activeArtist={activeArtist}
            stopAnimating={stopAnimating}
          />
        </div>
        <div className='pt-20 h-full w-1/2 flex flex-col justify-center items-center'>
          <Description activeArtist={activeArtist} />
          <SocialMedias />
        </div>
      </div>
    </div>
  );
};

export default Landing;
