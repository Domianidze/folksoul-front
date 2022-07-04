import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getMembersRequest } from 'services';
import { Header, SunSystem, Description, SocialMedias } from './components';
import { MemberType } from 'types';

const Landing: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [members, setMembers] = useState<MemberType[]>([]);
  const [activeMember, setActiveMember] = useState<MemberType | undefined>();
  const [stopAnimating, setStopAnimating] = useState<boolean>(false);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await getMembersRequest();
        const data: MemberType[] = response.data;

        const active: MemberType | undefined = data.find(
          (member) => member._id === params.memberId
        );

        if (!active && params.memberId) {
          navigate('/404/page-not-found');
        }

        if (active) {
          setStopAnimating(true);
        } else {
          setStopAnimating(false);
        }

        setMembers(data);
        setActiveMember(active);
      } catch (err) {}
    };

    getMembers();
  }, [params, navigate]);

  return (
    <div className='w-100 h-screen max-h-screen bg-primary overflow-hidden'>
      <Header />
      <div className='pt-20 w-full h-full flex'>
        <div className='h-full w-1/2 flex justify-center items-center'>
          <SunSystem
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
