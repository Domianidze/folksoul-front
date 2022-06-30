import axios from 'axios';

import { UseFileUpload } from 'hooks';
import { Modal, ModalTitle, ModalButton } from '../../../components';
import { UseBearerToken } from 'hooks';

const API_URL = process.env.REACT_APP_API_URL;

const MemberImageModal: React.FC<{
  memberId: string;
  defaultImage: string;
  bgColor: string;
  onClose: () => void;
  updateMembers: () => void;
}> = (props) => {
  const bearerToken = UseBearerToken();

  const { preview, image, inputRef, clickHandler, changeHandler } =
    UseFileUpload();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!image) return;

      const body = new FormData();
      body.append('memberId', props.memberId);
      body.append('image', image);

      await axios.put(`${API_URL}/change-member-avatar`, body, {
        headers: {
          Authorization: bearerToken,
        },
      });
      console.log(body);

      props.updateMembers();
      props.onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <ModalTitle title='შეცვალე ჯგუფის წევრის ავატარი' />
      <div
        className='my-16 relative w-56 h-56 flex justify-center items-center border border-white rounded-full shadow-primary'
        style={{ backgroundColor: props.bgColor }}
      >
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

export default MemberImageModal;
