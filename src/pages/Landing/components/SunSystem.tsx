import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

import { Member } from '.';
import { SunoteImg } from 'assets';
import { MemberType } from 'types';

const SunSystem: React.FC<{
  members: MemberType[];
  activeMember: MemberType | undefined;
  stopAnimating: boolean;
}> = (props) => {
  const animatePulsating = useAnimation();

  useEffect(() => {
    animatePulsating.start({
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    });

    if (props.stopAnimating) {
      animatePulsating.stop();
    }
  }, [animatePulsating, props.stopAnimating]);

  return (
    <div className='relative flex justify-center items-center'>
      {props.members.map((item, index) => {
        return (
          <Member
            member={item}
            activeMember={props.activeMember}
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

export default SunSystem;
