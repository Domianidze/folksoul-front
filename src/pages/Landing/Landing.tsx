import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Header, SunoteSystem, Description, SocialMedias } from './components';
import { MemberType } from 'Types';

const API_URL = process.env.REACT_APP_API_URL;

const Landing: React.FC = () => {
  const params = useParams();

  const [members, setMembers] = useState<MemberType[]>([]);
  const [activeMember, setActiveMember] = useState<MemberType | undefined>();
  const [stopAnimating, setStopAnimating] = useState<boolean>(false);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await axios.get(`${API_URL}/get-members`);
        const data: MemberType[] = response.data;

        const active: MemberType | undefined = data.find(
          (member) => member._id === params.memberId
        );

        if (active) {
          setStopAnimating(true);
        } else {
          setStopAnimating(false);
        }

        setMembers(data);
        setActiveMember(active);
      } catch (err) {
        console.error(err);
      }
    };

    getMembers();
  }, [params]);

  return (
    <div className='w-100 h-screen max-h-screen bg-primary overflow-hidden'>
      <Header />
      <div className='pt-20 w-full h-full flex'>
        <div className='h-full w-1/2 flex justify-center items-center'>
          <SunoteSystem
            members={members}
            activeMember={activeMember}
            stopAnimating={stopAnimating}
          />
        </div>
        <div className='pt-20 h-full w-1/2 flex flex-col justify-center items-center'>
          <Description activeMember={activeMember} />
          <SocialMedias />
        </div>
      </div>
    </div>
  );
};

export default Landing;
