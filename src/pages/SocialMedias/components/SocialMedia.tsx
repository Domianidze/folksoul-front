import { DashboardButton } from 'components';
import { EditPhotoIcon } from 'assets';
import { SocialMediaType } from 'Types';

const SocialMedia: React.FC<{
  socialMedia: SocialMediaType;
}> = (props) => {
  const { socialMedia } = props;

  return (
    <div className='mb-10 px-6 w-200 h-16 flex justify-between items-center bg-custom-black border border-black rounded-md shadow-primary'>
      <div className='relative'>
        <img src={socialMedia.iconUrl} alt={socialMedia.name} />
        <button type='button' className='absolute -bottom-2 -right-2 w-5'>
          <img src={EditPhotoIcon} alt='edit' />
        </button>
      </div>
      <p className='font-nino-mtavruli text-white text-lg'>
        {socialMedia.name}
      </p>
      <a
        href={socialMedia.link}
        target={'_blank'}
        rel='noreferrer'
        className='font-nino-mtavruli text-lighter-blue text-lg'
      >
        {socialMedia.link}
      </a>
      <div className='w-20 flex justify-between'>
        <DashboardButton color='#F2C94C' />
        <DashboardButton color='#EB5757' />
      </div>
    </div>
  );
};

export default SocialMedia;
