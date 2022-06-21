import { LogoImg } from 'assets';

const Header: React.FC = () => {
  return (
    <div className='absolute top-0 left-0 py-8 px-24 w-full flex justify-between items-center'>
      <img src={LogoImg} alt='Logo' />
      <a
        href='*'
        className='font-bpg-nino-mtavruli text-content-white text-base duration-500 hover:opacity-80'
      >
        შესვლა
      </a>
    </div>
  );
};

export default Header;
