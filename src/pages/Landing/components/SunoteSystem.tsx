import { motion } from 'framer-motion';

import { SunoteImg } from 'assets';
import { Artist } from './';
import { ArtistType } from './Types';

const SunoteSystem: React.FC<{
  items: ArtistType[];
}> = (props) => {
  const sunoteVariants = {
    pulsating: {
      opacity: [1, 0.75, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
      },
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <div className='relative flex justify-center items-center'>
      {props.items.map((item, index) => {
        return <Artist artist={item} index={index} key={index} />;
      })}
      <motion.div
        variants={sunoteVariants}
        animate='pulsating'
        whileHover='hover'
        className='rounded-full cursor-pointer'
      >
        <img src={SunoteImg} alt='sunote' />
      </motion.div>
    </div>
  );
};

export default SunoteSystem;
