import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { getBandDataRequest } from 'services';
import { ImageWrapper } from 'components';
import { Bullets } from './';
import { MemberType, BandType } from 'types';

const DescriptionCard: React.FC<{
  activeMember: MemberType | undefined;
}> = (props) => {
  const member = props.activeMember;

  const [bandData, setBandData] = useState<BandType>({
    logoUrl: '',
    information: '',
  });

  useEffect(() => {
    const getBandData = async () => {
      const response = await getBandDataRequest();
      const data: BandType = response.data;

      setBandData(data);
    };

    getBandData();
  }, []);

  const transition = {
    duration: 0.25,
  };

  const easeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition,
    },
    exit: {
      opacity: 0,
      transition,
    },
  };

  return (
    <div className='relative w-150 h-130 bg-primary-gold rounded-2xl shadow-xl 2xl:w-168 2xl:h-150'>
      <Bullets />
      <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 flex justify-center items-center bg-primary border-2 border-content-white rounded-full shadow-primary 2xl:w-80 2xl:h-80'>
        <ImageWrapper>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              variants={easeVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              key={props.activeMember?._id}
              src={member ? member.avatarUrl : bandData.logoUrl}
              alt='logo'
              className='max-h-40 2xl:max-h-64'
            ></motion.img>
          </AnimatePresence>
        </ImageWrapper>
      </div>
      <div className='pl-16 pr-8 pt-44 pb-5 w-full h-full'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={easeVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key={props.activeMember?._id}
            className='w-full h-full pr-8 font-bpg-arial text-lg text-custom-black text-justify overflow-y-auto'
          >
            <p>{member ? member.biography : bandData.information}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DescriptionCard;
