import { UseFormRegisterReturn } from 'react-hook-form';

const Input: React.FC<{
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  id: string;
  error?: string | undefined;
}> = (props) => {
  return (
    <div className='relative my-7'>
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
        id={props.id}
        className={`px-5 w-72 h-14 bg-custom-beige font-bpg-arial text-custom-black border border-custom-beige outline-0 rounded-sm placeholder:text-custom-black ${
          props.error && '!border-light-red'
        }`}
      />
      {props.error && (
        <p className='absolute text-sm text-light-red'>{props.error}</p>
      )}
    </div>
  );
};

export default Input;
