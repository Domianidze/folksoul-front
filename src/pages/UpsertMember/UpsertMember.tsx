import { useParams, Link } from 'react-router-dom';

import { DashboardTitle } from 'components';
import { Input } from './components';

const UpsertMember = () => {
  const { memberId } = useParams();

  return (
    <div className='w-full h-full flex items-center flex-col'>
      <DashboardTitle
        title={
          memberId
            ? 'შეცვალე არსებული ჯგუფის წევრის ინფორმაცია'
            : 'დაამატე ახალი წევრი'
        }
      />
      <form className='w-150 flex items-center flex-col'>
        <Input type='text' name='name' placeholder='სახელი' />
        <div className='py-10 w-full flex justify-between'>
          <Input type='text' name='instrument' placeholder='ინსტრუმენტი' />
          <Input type='number' name='orbitWidth' placeholder='ორბიტის სიგრძე' />
          <Input type='text' name='color' placeholder='ფერი' />
        </div>
        <textarea
          className='p-5 w-full h-56 border border-primary-dark-blue rounded-md outline-none resize-none'
          placeholder='ბიოგრაფია...'
        />
        <button
          type='submit'
          className='mt-10 w-44 h-14 font-nino-mtavruli text-white bg-primary-dark-blue rounded-lg'
        >
          {memberId ? 'შეცვალე წევრი' : 'დაამატე წევრი'}
        </button>
        <Link
          to='/dashboard/members'
          className='pt-5 font-nino-mtavruli-bold text-lg text-light-blue underline'
        >
          გადი უკან
        </Link>
      </form>
    </div>
  );
};

export default UpsertMember;
