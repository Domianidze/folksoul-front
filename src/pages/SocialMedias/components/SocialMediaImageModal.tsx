import axios from 'axios';

import { UseBearerToken, UseFileUpload } from 'hooks';
import { Modal, ModalTitle, ImageForm } from 'components';

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
        className='my-16 max-h-56'
      />
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

export default SocialMediaImageModal;
