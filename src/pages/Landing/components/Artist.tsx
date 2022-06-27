import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';

import { ArtistType } from '../Types';

const Artist: React.FC<{
  artist: ArtistType;
  activeArtist: ArtistType | undefined;
  stopAnimating: boolean;
  index: number;
}> = (props) => {
  const active = props.artist._id === props.activeArtist?._id;
  const rotate = useMotionValue(0);
  const scale = useSpring(1, { stiffness: 100 });

  const [artistRotate] = useState(Math.floor(Math.random() * 360));
  const [artistMaxRotate, setArtistMaxRotate] = useState(artistRotate + 360);

  const initialRotate = {
    rotate: artistRotate,
  };

  const initialStatic = {
    rotate: -artistRotate,
  };

  const animateRotate = useAnimation();
  const animateStatic = useAnimation();

  useEffect(() => {
    // @ts-ignore
    setArtistMaxRotate(rotate.current + 360);

    const artistTransition = {
      ease: 'linear',
      duration: 30 - props.index * 2,
      repeat: Infinity,
    };

    animateRotate.start({
      rotate: artistMaxRotate,
      transition: artistTransition,
    });

    animateStatic.start({
      rotate: -artistMaxRotate,
      transition: artistTransition,
    });

    if (props.stopAnimating) {
      animateRotate.stop();
      animateStatic.stop();
    }

    if (active) {
      scale.set(1.1);
    } else {
      scale.set(1);
    }
  }, [
    active,
    rotate,
    scale,
    animateRotate,
    animateStatic,
    artistRotate,
    artistMaxRotate,
    props.stopAnimating,
    props.index,
  ]);

  return (
    <motion.div
      animate={animateRotate}
      initial={initialRotate}
      className='absolute pointer-events-none'
      style={{ rotate }}
    >
      <Link to={`/${props.artist._id}`}>
        <motion.div
          animate={animateStatic}
          initial={initialStatic}
          className='absolute top-1/2 -right-6 w-16 h-16 rounded-full flex justify-center items-center border-4 border-primary-gold shadow-primary pointer-events-auto z-10'
          style={{
            backgroundColor: props.artist.color,
            scale,
          }}
        >
          <img
            src={props.artist.avatarUrl}
            alt={props.artist.name}
            className='pt-1 h-14'
          ></img>
          <div
            className='absolute bottom-0 translate-y-1/2 w-20 h-7 flex justify-center items-center bg-primary-gold border-4 rounded-2xl shadow-primary'
            style={{
              borderColor: props.artist.color,
            }}
          >
            <p className='pt-1 font-bpg-nino-mtavruli text-base text-primary-dark-blue'>
              {props.artist.name}
            </p>
          </div>
        </motion.div>
      </Link>
      <motion.div
        animate={animateStatic}
        initial={initialStatic}
        className='border-2 border-dashed border-primary-gold rounded-full'
        style={{ padding: `${props.artist.orbitWidth + 100}px` }}
      ></motion.div>
    </motion.div>
  );
};

export default Artist;
