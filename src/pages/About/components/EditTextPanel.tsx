import { useForm } from 'react-hook-form';
import axios from 'axios';

import { UseBearerToken } from 'hooks';
import { ModalButton } from 'components';

const API_URL = process.env.REACT_APP_API_URL;

const EditTextPanel: React.FC<{
  defaultInformation: string | undefined;
  onClose: () => void;
  updateBand: () => void;
}> = (props) => {
  const bearerToken = UseBearerToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const submitHandler = handleSubmit(async (data) => {
    try {
      await axios.put(
        `${API_URL}/set-band-information`,
        {
          information: data.information,
        },
        {
          headers: {
            Authorization: bearerToken,
          },
        }
      );

      props.updateBand();
      props.onClose();
    } catch (err) {}
  });

  return (
    <div className='px-28 w-full'>
      <form
        onSubmit={submitHandler}
        className='w-full flex flex-col items-center'
      >
        <div className='pb-5 relative w-full'>
          <textarea
            className='p-5 mr-5 w-full h-112 bg-light-gray outline-none rounded-2xl shadow-primary resize-none'
            placeholder='ინფორმაცია...'
            {...register('information', {
              required: 'ინფორმაცია სავალდებულოა',
              pattern: {
                value: /^[ა-ჰ-1-9 -;:'",.?!/—„“]+$/,
                message: 'ინფორმაცია უნდა შედგებოდეს მხოლოდ ქართული ასოებისგან',
              },
            })}
            defaultValue={props.defaultInformation}
          />
          {errors?.information?.message && (
            <p className='pl-5 absolute text-sm text-light-red'>
              {errors.information.message}
            </p>
          )}
        </div>
        <ModalButton type='save' />
        <button
          onClick={props.onClose}
          className='pt-3 font-nino-mtavruli-bold text-lg text-light-blue underline'
        >
          გადი უკან
        </button>
      </form>
    </div>
  );
};

export default EditTextPanel;
