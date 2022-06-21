import { CardBullets, CardBadge } from './';

const DescriptionCard: React.FC<{ paragraphs: string[] }> = (props) => {
  return (
    <div className='relative w-168 h-150 bg-primary-gold rounded-2xl shadow-xl'>
      <CardBullets />
      <CardBadge />
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
