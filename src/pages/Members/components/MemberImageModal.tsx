import { changeMemberAvatarRequest } from 'services';
import { useBearerToken, useFileUpload } from 'hooks';
import { Modal, ModalTitle, ImageWrapper, ImageForm } from 'components';

const MemberImageModal: React.FC<{
  memberId: string;
  defaultImage: string;
  bgColor: string;
  onClose: () => void;
  updateMembers: () => void;
}> = (props) => {
  const bearerToken = useBearerToken();

  const { preview, image, inputRef, clickHandler, changeHandler } =
    useFileUpload();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) return;

      const body = new FormData();
      body.append('memberId', props.memberId);
      body.append('image', image);

      await changeMemberAvatarRequest(body, bearerToken);

      props.updateMembers();
      props.onClose();
    } catch (err) {}
  };

  return (
    <Modal onClose={props.onClose}>
      <ModalTitle title='შეცვალე ჯგუფის წევრის ავატარი' />
      <div
        className='my-16 relative w-56 h-56 flex justify-center items-center border border-white rounded-full shadow-primary'
        style={{ backgroundColor: props.bgColor }}
      >
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

export default MemberImageModal;
