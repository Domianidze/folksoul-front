const ModalButton: React.FC<{
  type: 'upload' | 'save';
  onClick: () => void;
}> = (props) => {
  const upload = props.type === 'upload';

  return (
    <button
      type={upload ? 'button' : 'submit'}
      onClick={props.onClick}
      className={`w-40 h-10 rounded-md shadow-md ${
        upload ? 'bg-primary-dark-blue' : 'bg-primary-green'
      }`}
    >
      <p className='pt-1 font-nino-mtavruli text-white text-lg'>
        {upload ? 'ატვირთე' : 'შეინახე'}
      </p>
    </button>
  );
};

export default ModalButton;
