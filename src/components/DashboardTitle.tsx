const DashboardTitle: React.FC<{
  title: string;
}> = (props) => {
  return (
    <div className='py-10 px-28 w-full flex items-center flex-col'>
      <p className='py-6 font-nino-mtavruli text-lg'>{props.title}</p>
      <div className='w-full h-[1px] bg-black'></div>
    </div>
  );
};

export default DashboardTitle;
