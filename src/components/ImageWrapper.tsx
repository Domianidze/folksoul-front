import { PropsWithChildren } from 'react';

const ImageWrapper: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className='w-full h-full flex justify-center items-center rounded-full overflow-hidden'>
      {props.children}
    </div>
  );
};

export default ImageWrapper;
