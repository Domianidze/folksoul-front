import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';

import { MemberType } from 'types';

const Member: React.FC<{
  member: MemberType;
  activeMember: MemberType | undefined;
  stopAnimating: boolean;
  index: number;
}> = (props) => {
  const active = props.member._id === props.activeMember?._id;
  const rotate: any = useMotionValue(0);
  const scale = useSpring(1, { stiffness: 100 });

  const [memberRotate] = useState(Math.floor(Math.random() * 360));
  const [memberMaxRotate, setMemberMaxRotate] = useState(memberRotate + 360);

  const initialRotate = {
    rotate: memberRotate,
  };

  const initialStatic = {
    rotate: -memberRotate,
  };

  const animateRotate = useAnimation();
  const animateStatic = useAnimation();

  useEffect(() => {
    setMemberMaxRotate(rotate.current + 360);

    const memberTransition = {
      ease: 'linear',
      duration: 20 + props.index * 2,
      repeat: Infinity,
    };

    animateRotate.start({
      rotate: memberMaxRotate,
      transition: memberTransition,
    });

    animateStatic.start({
      rotate: -memberMaxRotate,
      transition: memberTransition,
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
    memberRotate,
    memberMaxRotate,
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
      <Link to={`?member=${props.member._id}`}>
        <motion.div
          animate={animateStatic}
          initial={initialStatic}
          id='member'
          className='absolute top-1/2 -right-6 w-16 h-16 rounded-full flex justify-center items-center border-4 border-primary-gold shadow-primary pointer-events-auto z-10'
          style={{
            backgroundColor: props.member.color,
            scale,
          }}
        >
          <img
            src={props.member.avatarUrl}
            alt={props.member.name}
            className='pt-1 max-h-14'
          ></img>
          <div
            className='absolute bottom-0 translate-y-1/2 w-20 h-7 flex justify-center items-center bg-primary-gold border-4 rounded-2xl shadow-primary'
            style={{
              borderColor: props.member.color,
            }}
          >
            <p className='pt-1 font-nino-mtavruli text-base text-primary-dark-blue'>
              {props.member.name}
            </p>
          </div>
        </motion.div>
      </Link>
      <motion.div
        animate={animateStatic}
        initial={initialStatic}
        className='border-2 border-dashed border-primary-gold rounded-full'
        style={{ padding: `${props.member.orbitWidth + 100}px` }}
      ></motion.div>
    </motion.div>
  );
};

export default Member;
