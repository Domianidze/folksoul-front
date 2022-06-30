import axios from 'axios';

import { UseFileUpload } from 'hooks';
import { Modal, ModalTitle, ModalButton } from 'components';
import { UseBearerToken } from 'hooks';

const API_URL = process.env.REACT_APP_API_URL;

const AboutImageModal: React.FC<{
  defaultImage: string | undefined;
  onClose: () => void;
  updateBand: () => void;
}> = (props) => {
  const bearerToken = UseBearerToken();

  const { preview, image, inputRef, clickHandler, changeHandler } =
    UseFileUpload();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) return;

      const body = new FormData();
      body.append('image', image);

      await axios.put(`${API_URL}/set-band-logo`, body, {
        headers: {
          Authorization: bearerToken,
        },
      });

      props.updateBand();
      props.onClose();
    } catch (err) {}
  };

  return (
    <Modal onClose={props.onClose}>
      <ModalTitle title='შეცვალე ბენდის ლოგო' />
      <div className='my-16 relative w-56 h-56 flex justify-center items-center bg-primary-dark-blue border border-white rounded-full shadow-primary'>
        <img src={preview ? preview : props.defaultImage} alt='avatar' />
      </div>
      <form onSubmit={submitHandler}>
        <ModalButton
          type={preview ? 'save' : 'upload'}
          onClick={clickHandler}
        />
        <input
          type='file'
          accept='image/png, image/jpeg, image/jpg'
          onChange={changeHandler}
          ref={inputRef}
          className='hidden'
        />
      </form>
    </Modal>
  );
};

export default AboutImageModal;
