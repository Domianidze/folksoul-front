import { ArtistType } from './Types';

const Artist: React.FC<ArtistType> = (props) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  pointer-events-none '>
      <a
        href='*'
        className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-16 h-16 rounded-full flex justify-center items-center border-4 border-primary-gold shadow-primary pointer-events-auto  duration-500 hover:scale-110'
        style={{
          backgroundColor: props.color,
        }}
      >
        <img src={props.img} alt={props.name} className='pt-1'></img>
        <div
          className='absolute bottom-0 translate-y-1/2 w-20 h-7 flex justify-center items-center bg-primary-gold border-4 rounded-2xl shadow-primary'
          style={{
            borderColor: props.color,
          }}
        >
          <p className='pt-1 font-bpg-nino-mtavruli text-base text-primary-dark-blue'>
            {props.name}
          </p>
        </div>
      </a>
      <div
        className='border-2 border-dashed border-primary-gold rounded-full'
        style={{ padding: `${props.distance + 75}px` }}
      ></div>
    </div>
  );
};

export default Artist;
