const Input: React.FC<{
  type: string;
  name: string;
  placeholder: string;
}> = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className='w-44 h-14 font-bpg-arial text-center border border-primary-dark-blue rounded-md outline-none'
    />
  );
};

export default Input;
