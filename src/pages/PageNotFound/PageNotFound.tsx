import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col bg-primary font-nino-mtavruli text-white'>
      <p className='font-nino-mtavruli-bold text-7xl'>404</p>
      <p className='py-5 text-5xl'>გვერდი ვერ მოიძებნა</p>
      <Link
        to='/'
        className='pt-5 text-2xl text-lighter-blue border-b-2 border-lighter-blue'
      >
        დაბრუნდი მთავარ გვერდზე
      </Link>
    </div>
  );
};

export default PageNotFound;
