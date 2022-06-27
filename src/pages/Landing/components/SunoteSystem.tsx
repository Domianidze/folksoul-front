import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

import { SunoteImg } from 'assets';
import { Artist } from './';
import { ArtistType } from '../Types';

const SunoteSystem: React.FC<{
  artists: ArtistType[];
  activeArtist: ArtistType | undefined;
  stopAnimating: boolean;
}> = (props) => {
  const animatePulsating = useAnimation();

  useEffect(() => {
    animatePulsating.start({
      opacity: [1, 0.6, 1],
      transition: {
        duration: 2.6,
        repeat: Infinity,
      },
    });

    if (props.stopAnimating) {
      animatePulsating.stop();
    }
  }, [animatePulsating, props.stopAnimating]);

  return (
    <div className='relative flex justify-center items-center'>
      {props.artists.length > 0 &&
        props.artists.map((item, index) => {
          return (
            <Artist
              artist={item}
              activeArtist={props.activeArtist}
              stopAnimating={props.stopAnimating}
              index={index}
              key={index}
            />
          );
        })}
      <Link to='/'>
        <motion.div
          animate={animatePulsating}
          className='rounded-full duration-1000 hover:!opacity-100'
        >
          <img src={SunoteImg} alt='sunote' />
        </motion.div>
      </Link>
    </div>
  );
};

export default SunoteSystem;
