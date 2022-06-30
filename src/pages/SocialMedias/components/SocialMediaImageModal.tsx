import axios from 'axios';

import { UseFileUpload } from 'hooks';
import { Modal, ModalTitle, ModalButton } from 'components';
import { UseBearerToken } from 'hooks';

const API_URL = process.env.REACT_APP_API_URL;

const SocialMediaImageModal: React.FC<{
  socialMediaId: string;
  defaultImage: string;
  onClose: () => void;
  updateSocialMedias: () => void;
}> = (props) => {
  const bearerToken = UseBearerToken();

  const { preview, image, inputRef, clickHandler, changeHandler } =
    UseFileUpload();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) return;

      const body = new FormData();
      body.append('socialMediaId', props.socialMediaId);
      body.append('image', image);

      await axios.put(`${API_URL}/change-social-media-icon`, body, {
        headers: {
          Authorization: bearerToken,
        },
      });

      props.updateSocialMedias();
      props.onClose();
    } catch (err) {}
  };

  return (
    <Modal onClose={props.onClose}>
      <ModalTitle title='შეცვალე სოციალური ბმულის აიკონი' />
      <img
        src={preview ? preview : props.defaultImage}
        alt='icon'
        className='my-16 w-56 border'
      />
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

export default SocialMediaImageModal;
