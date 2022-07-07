import { useForm } from 'react-hook-form';

import { useBearerToken } from 'hooks';
import { setBandInformationRequest } from 'services';
import { ModalButton } from 'components';

const EditTextPanel: React.FC<{
  defaultInformation: string | undefined;
  onClose: () => void;
  updateBand: () => void;
}> = (props) => {
  const bearerToken = useBearerToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: 'onTouched',
  });

  const submitHandler = handleSubmit(async (data) => {
    try {
      await setBandInformationRequest(data, bearerToken);

      props.updateBand();
      props.onClose();
    } catch (err: any) {
      const error: string = err?.response?.data?.message;

      if (error) {
        return setError('information', {
          type: 'custom',
          message: error,
        });
      }
    }
  });

  return (
    <div className='px-28 w-full'>
      <form
        onSubmit={submitHandler}
        className='w-full flex flex-col items-center'
      >
        <div className='pb-5 relative w-full'>
          <div className='p-5 mr-5 w-full h-112 bg-light-gray rounded-2xl shadow-primary '>
            <textarea
              className='pr-10 w-full h-full text-justify bg-light-gray outline-none resize-none'
              placeholder='ინფორმაცია...'
              {...register('information', {
                required: 'ინფორმაცია სავალდებულოა',
                pattern: {
                  value: /^[ა-ჰ-1-9 -;:'",.?!/–—„“]+$/,
                  message:
                    'ინფორმაცია უნდა შედგებოდეს მხოლოდ ქართული ასოებისგან',
                },
              })}
              defaultValue={props.defaultInformation}
            />
          </div>
          {errors?.information?.message && (
            <p className='pl-5 absolute text-sm text-light-red'>
              {errors.information.message}
            </p>
          )}
        </div>
        <ModalButton type='save' />
        <button
          onClick={props.onClose}
          id='submit-btn'
          className='pt-3 font-nino-mtavruli-bold text-lg text-light-blue underline'
        >
          გადი უკან
        </button>
      </form>
    </div>
  );
};

export default EditTextPanel;
