import { useBearerToken, useFileUpload } from 'hooks';
import { changeSocialMediaIconRequest } from 'services';
import { Modal, ModalTitle, ImageForm } from 'components';

const SocialMediaImageModal: React.FC<{
  socialMediaId: string;
  defaultImage: string;
  onClose: () => void;
  updateSocialMedias: () => void;
}> = (props) => {
  const bearerToken = useBearerToken();

  const { preview, image, inputRef, clickHandler, changeHandler } =
    useFileUpload();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) return;

      const body = new FormData();
      body.append('socialMediaId', props.socialMediaId);
      body.append('image', image);

      await changeSocialMediaIconRequest(body, bearerToken);

      props.updateSocialMedias();
      props.onClose();
    } catch (err) {}
  };

  return (
    <Modal onClose={props.onClose}>
      <ModalTitle title='შეცვალე სოციალური ბმულის აიკონი' />
      <div className='my-16 relative w-56 h-56 flex justify-center items-center'>
        <img
          src={preview ? preview : props.defaultImage}
          alt='icon'
          className='max-h-56'
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

export default SocialMediaImageModal;
