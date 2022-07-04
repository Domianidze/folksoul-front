import { useState, useEffect, useCallback } from 'react';
import { useOutlet, Link } from 'react-router-dom';

import { getMembersRequest } from 'services';
import { DashboardTitle } from 'components';
import { Member, PaginationButton } from './components';
import { MemberType } from 'types';

const Members: React.FC = () => {
  const [members, setMembers] = useState<MemberType[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const [curPage, setCurPage] = useState<number>(0);

  const updateMembers = useCallback(async () => {
    try {
      const response = await getMembersRequest();
      const data: MemberType[] = response.data;

      const numberOfPages = Math.ceil(data.length / 3);
      const pages = [];
      for (let i = 0; i < numberOfPages; i++) {
        pages.push(i);
      }

      setMembers(data);
      setPages(pages);
    } catch (err) {}
  }, []);

  useEffect(() => {
    updateMembers();
  }, [updateMembers]);

  useEffect(() => {
    const lastPage = pages.length - 1;

    if (curPage > lastPage && lastPage > -1) {
      setCurPage(lastPage);
    }
  }, [curPage, pages]);

  const setCurPageHandler = (page: number) => {
    setCurPage(page);
  };

  const outlet = useOutlet({ updateMembers });
  if (outlet) {
    return outlet;
  }

  const firstIndex = curPage * 3;
  const lastIndex = firstIndex + 3;

  return (
    <div className='pb-20 relative w-full h-full flex items-center flex-col overflow-hidden'>
      <DashboardTitle title='ჯგუფების წევრები' />
      <div className='mt-3 w-full flex justify-center'>
        {members.length > 0 ? (
          members.slice(firstIndex, lastIndex).map((member) => {
            return (
              <Member
                member={member}
                updateMembers={updateMembers}
                key={member._id}
              />
            );
          })
        ) : (
          <p className='font-nino-mtavruli text-lg'>
            ბენდის წევრები ჯერ–ჯერობით არ არიან.
          </p>
        )}
      </div>
      <div className='my-24'>
        {pages.map((i) => {
          return (
            <PaginationButton
              to={i}
              curPage={curPage}
              onSetCurPage={setCurPageHandler}
              key={i}
            />
          );
        })}
      </div>
      <Link
        to='add'
        id='add-member-btn'
        className='absolute bottom-10 font-nino-mtavruli-bold text-lg text-light-blue underline'
      >
        ახალი წევრი გვყავს?
      </Link>
    </div>
  );
};

export default Members;
