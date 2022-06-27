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
      className='my-5 px-5 w-72 h-14 bg-custom-beige font-bpg-arial text-custom-black outline-0 rounded-sm placeholder:text-custom-black'
    />
  );
};

export default Input;
