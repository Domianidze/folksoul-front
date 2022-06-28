import { MemberButton } from './';
import { EditPhotoImg } from 'assets';

const Member: React.FC<{
  bgColor: string;
  img: string;
  name: string;
}> = (props) => {
  return (
    <div className='mx-14 w-56 h-72 bg-custom-black border border-black rounded-sm shadow-primary'>
      <div className='w-full h-5/6 flex justify-evenly items-center flex-col'>
        <div
          className='relative w-36 h-36 flex justify-center items-center border border-white rounded-full'
          style={{ backgroundColor: props.bgColor }}
        >
          <img src={props.img} alt={`${props.name} avatar`} />
          <button type='button'>
            <img
              src={EditPhotoImg}
              alt='edit'
              className='absolute bottom-1 right-1'
            />
          </button>
        </div>
        <p className='font-nino-mtavruli text-lg text-white'>{props.name}</p>
      </div>
      <div className='px-6 w-full h-1/6 flex justify-between items-center border-t-2 border-black'>
        <MemberButton color='#88D06F' />
        <MemberButton color='#F2C94C' />
        <MemberButton color='#EB5757' />
      </div>
    </div>
  );
};

export default Member;
