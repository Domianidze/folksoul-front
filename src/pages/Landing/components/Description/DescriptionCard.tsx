import { LogoBigImg } from 'assets';
import { CardBullets } from './';

const DescriptionCard: React.FC<{ paragraphs: string[] }> = (props) => {
  return (
    <div className='relative w-168 h-150 bg-primary-gold rounded-2xl shadow-xl'>
      <CardBullets />
      <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 flex justify-center items-center bg-primary border-2 border-content-white rounded-full shadow-primary'>
        <img src={LogoBigImg} alt='logo' className='w-72'></img>
      </div>
      <div className='pl-16 pr-8 pt-44 pb-5 w-full h-full'>
        <div className='w-full h-full pr-8 font-bpg-arial text-lg text-custom-black text-justify overflow-y-auto'>
          {props.paragraphs.map((paragraph, index) => {
            return (
              <p className='pb-5' key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
