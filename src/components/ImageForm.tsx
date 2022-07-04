import { RefObject, ChangeEventHandler } from 'react';

import { ModalButton } from 'components';

const ImageForm: React.FC<{
  preview: string | null | undefined;
  inputRef: RefObject<HTMLInputElement>;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  clickHandler: () => void;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
}> = (props) => {
  return (
    <form onSubmit={props.submitHandler} id='image-form'>
      <ModalButton
        type={props.preview ? 'save' : 'upload'}
        id='submit-btn'
        onClick={props.clickHandler}
      />
      <input
        type='file'
        accept='image/png, image/jpeg, image/jpg'
        onChange={props.changeHandler}
        ref={props.inputRef}
        id='image-input'
        className='hidden'
      />
    </form>
  );
};

export default ImageForm;
