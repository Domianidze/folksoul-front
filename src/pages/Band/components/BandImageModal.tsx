import { useBearerToken, useFileUpload } from 'hooks';
import { setBandLogoRequest } from 'services';
import { Modal, ModalTitle, ImageWrapper, ImageForm } from 'components';

const BandImageModal: React.FC<{
  defaultImage: string | undefined;
  onClose: () => void;
  updateBand: () => void;
}> = (props) => {
  const bearerToken = useBearerToken();

  const { preview, image, inputRef, clickHandler, changeHandler } =
    useFileUpload();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) return;

      const body = new FormData();
      body.append('image', image);

      await setBandLogoRequest(body, bearerToken);

      props.updateBand();
      props.onClose();
    } catch (err) {}
  };

  return (
    <Modal onClose={props.onClose}>
      <ModalTitle title='შეცვალე ბენდის ლოგო' />
      <div className='my-16 relative w-56 h-56 flex justify-center items-center bg-primary-dark-blue border border-white rounded-full shadow-primary'>
        <ImageWrapper>
          <img src={preview ? preview : props.defaultImage} alt='avatar' />
        </ImageWrapper>
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
