import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from 'assets';

const Modal: React.FC<
  PropsWithChildren<{
    onClose: () => void;
  }>
> = (props) => {
  const container: any = document.getElementById('modal');

  return createPortal(
    <>
      <div className='py-16 px-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 flex items-center flex-col bg-white rounded-md z-10'>
        <button
          type='button'
          onClick={props.onClose}
          id='modal-close-btn'
          className='absolute top-5 right-5'
        >
          <img src={CloseIcon} alt='close' />
        </button>
        {props.children}
      </div>
      <div
        onClick={props.onClose}
        className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-dark-blue bg-opacity-95'
      ></div>
    </>,
    container
  );
};

export default Modal;
