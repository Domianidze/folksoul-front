const DashboardTitle: React.FC<{
  title: string;
}> = (props) => {
  return (
    <div className='py-6 px-28 w-full flex items-center flex-col 2xl:py-10'>
      <p className='py-4 font-nino-mtavruli text-lg 2xl:py-6'>{props.title}</p>
      <div className='w-full h-[1px] bg-black'></div>
    </div>
  );
};

export default DashboardTitle;
