import { LogoBigImg } from 'assets';

const CardBadge: React.FC = () => {
  return (
    <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 flex justify-center items-center bg-primary border-2 border-content-white rounded-full shadow-primary'>
      <img src={LogoBigImg} alt='logo' className='w-72'></img>
    </div>
  );
};

export default CardBadge;
