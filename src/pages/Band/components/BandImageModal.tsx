import axios from 'axios';

import { UseBearerToken, UseFileUpload } from 'hooks';
import { Modal, ModalTitle, ImageForm } from 'components';

const API_URL = process.env.REACT_APP_API_URL;

const BandImageModal: React.FC<{
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
        <img
          src={preview ? preview : props.defaultImage}
          alt='avatar'
          className='max-h-52'
        />
      </div>
      <ImageForm
        preview={preview}
        inputRef={inputRef}
        submitHandler={submitHandler}
        clickHandler={clickHandler}
        changeHandler={changeHandler}
      />
    </Modal>
  );
};

export default BandImageModal;
