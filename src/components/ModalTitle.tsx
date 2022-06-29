const ModalTitle: React.FC<{
  title: string;
}> = (props) => {
  return (
    <div className='px-12 w-full flex items-center flex-col'>
      <p className='py-1 font-nino-mtavruli text-lg'>{props.title}</p>
      <div className='w-full h-[1px] bg-black'></div>
    </div>
  );
};

export default ModalTitle;
