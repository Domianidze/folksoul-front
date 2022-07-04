import { useState, useEffect } from 'react';
import { useOutlet, Link } from 'react-router-dom';
import axios from 'axios';

import { Member, PaginationButton } from './components';
import { DashboardTitle } from 'components';
import { MemberType } from 'Types';

const API_URL = process.env.REACT_APP_API_URL;

const Members: React.FC = () => {
  const [members, setMembers] = useState<MemberType[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const [curPage, setCurPage] = useState<number>(0);

  const updateMembers = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-members`);
      const data: MemberType[] = response.data;

      const numberOfPages = Math.ceil(data.length / 3);
      const pages = [];
      for (let i = 0; i < numberOfPages; i++) {
        pages.push(i);
      }

      setMembers(data);
      setPages(pages);
    } catch (err) {}
  };

  useEffect(() => {
    updateMembers();
  }, []);

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
    <div className='pb-20 relative w-full h-full flex items-center flex-col'>
      <DashboardTitle title='ჯგუფების წევრები' />
      <div className='px-28 w-full flex justify-center'>
        {members.slice(firstIndex, lastIndex).map((member) => {
          return (
            <Member
              member={member}
              updateMembers={updateMembers}
              key={member._id}
            />
          );
        })}
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
