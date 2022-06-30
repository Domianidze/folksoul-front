import { useParams, Link } from 'react-router-dom';

import { DashboardTitle, DashboardInput } from 'components';

const UpsertSocialMedia = () => {
  const { socialMediaId } = useParams();

  return (
    <div className='w-full h-full flex items-center flex-col'>
      <DashboardTitle
        title={
          socialMediaId
            ? 'შეცვალე არსებული სოციალური ბმული'
            : 'დაამატე ახალი სოციალური ბმული'
        }
      />
      <form className='w-150 h-full flex justify-center items-center flex-col'>
        <DashboardInput type='text' placeholder='სახელი' />
        <input
          type='text'
          placeholder='ბმული'
          className='my-12 w-96 h-14 font-bpg-arial text-center border border-primary-dark-blue rounded-md outline-none'
        />
        <button
          type='submit'
          className='mt-3 w-72 h-14 font-nino-mtavruli text-white bg-primary-dark-blue rounded-lg'
        >
          {socialMediaId ? 'შეცვალე სოციალური ბმუი' : 'დაამატე სოციალური ბმული'}
        </button>
        <Link
          to='/dashboard/social-medias'
          className='pt-5 font-nino-mtavruli-bold text-lg text-light-blue underline'
        >
          გადი უკან
        </Link>
      </form>
    </div>
  );
};

export default UpsertSocialMedia;
