import { useOutlet, Link } from 'react-router-dom';

import { Member, PaginationButton } from './components';
import { DashboardTitle } from 'components';
import { MembersIcon } from 'assets';

const Members: React.FC = () => {
  const outlet = useOutlet();

  if (outlet) {
    return outlet;
  }

  return (
    <div className='w-full h-full flex items-center flex-col'>
      <DashboardTitle title='ჯგუფების წევრები' />
      <div className='px-28 w-full flex'>
        <Member bgColor='#143B52' img={MembersIcon} name='გელა' />
        <Member bgColor='#143B52' img={MembersIcon} name='გელა' />
        <Member bgColor='#143B52' img={MembersIcon} name='გელა' />
      </div>
      <div className='my-24'>
        <PaginationButton active={true} />
        <PaginationButton active={false} />
      </div>
      <Link
        to='add'
        className='font-nino-mtavruli-bold text-lg text-light-blue underline'
      >
        ახალი წევრი გვყავს?
      </Link>
    </div>
  );
};

export default Members;
