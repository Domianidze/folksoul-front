import { useForm } from 'react-hook-form';

import { Input } from './components';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const loginHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className='w-100 h-screen max-h-screen flex justify-center items-center bg-primary'>
      <div className='w-96 h-112 flex justify-center items-center flex-col bg-primary-modal border border-white'>
        <div className='mb-5 relative w-fit'>
          <div className='w-44 h-16 bg-light-red -skew-x-32 shadow-lg'></div>
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-nino-mtavruli-bold text-lg color-custom-black'>
            კარიბჭე
          </p>
        </div>
        <form onSubmit={loginHandler} className='flex flex-col items-center'>
          <Input
            type='text'
            placeholder='მეტსახელი'
            register={{
              ...register('username', {
                required: 'მეტსახელი სავალდებულოა',
                minLength: {
                  value: 3,
                  message: 'მეტსახელი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
                },
                pattern: {
                  value: /[a-z0-9]+$/,
                  message:
                    'მეტსახელი უნდა შედგებოდეს მხოლოდ ალფანუმერული სიმბოლოებისგან',
                },
              }),
            }}
            error={errors?.username?.message}
          />
          <Input
            type='password'
            placeholder='პაროლი'
            register={{
              ...register('password', {
                required: 'პაროლი სავალდებულოა',
                minLength: {
                  value: 3,
                  message: 'პაროლი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
                },
              }),
            }}
            error={errors?.password?.message}
          />
          <button
            type='submit'
            className='mt-5 w-56 h-14 bg-navy-green font-nino-mtavruli text-white border border-white rounded-sm duration-500 hover:opacity-90'
          >
            შემობრძანდი
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
