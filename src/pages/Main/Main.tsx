import { getWelcomeText } from './util';
import { TvImg } from 'assets';

const Main: React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col justify-evenly items-center'>
      <p id='welcome-text' className='font-nino-mtavruli text-5xl'>
        {getWelcomeText()}
      </p>
      <img src={TvImg} alt='tv' className='w-112' />
    </div>
  );
};

export default Main;
