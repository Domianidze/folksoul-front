import { motion } from 'framer-motion';

import { ArtistType } from './Types';

const Artist: React.FC<{
  artist: ArtistType;
  index: number;
}> = (props) => {
  const artistRotate = Math.floor(Math.random() * 360);
  const artistMaxRotate = artistRotate + 360;

  const artistTransition = {
    ease: 'linear',
    duration: 20 + props.index * 2,
    repeat: Infinity,
  };

  const artistVariants = {
    rotating: {
      rotate: artistMaxRotate,
      transition: artistTransition,
    },
    static: {
      rotate: -artistMaxRotate,
      transition: artistTransition,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
    initialRotate: {
      rotate: artistRotate,
    },
    initialStatic: {
      rotate: -artistRotate,
    },
  };

  return (
    <motion.div
      variants={artistVariants}
      animate='rotating'
      initial='initialRotate'
      className='absolute pointer-events-none '
    >
      <motion.a
        variants={artistVariants}
        animate='static'
        initial='initialStatic'
        whileHover='hover'
        href='*'
        className='absolute top-1/2 -right-6 w-16 h-16 rounded-full flex justify-center items-center border-4 border-primary-gold shadow-primary pointer-events-auto z-50'
        style={{
          backgroundColor: props.artist.color,
        }}
      >
        <img
          src={props.artist.img}
          alt={props.artist.name}
          className='pt-1'
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
      </motion.a>
      <motion.div
        variants={artistVariants}
        animate='static'
        initial='initialStatic'
        className='border-2 border-dashed border-primary-gold rounded-full'
        style={{ padding: `${props.artist.distance + 75}px` }}
      ></motion.div>
    </motion.div>
  );
};

export default Artist;
