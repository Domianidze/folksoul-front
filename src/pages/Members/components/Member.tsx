import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { UseBearerToken } from 'hooks';
import { MemberDetailsModal, MemberImageModal } from './';
import { DashboardButton } from 'components';
import { EditPhotoIcon } from 'assets';
import { MemberType } from 'Types';

const API_URL = process.env.REACT_APP_API_URL;

const Member: React.FC<{
  member: MemberType;
  updateMembers: () => void;
}> = (props) => {
  const { member } = props;
  const bearerToken = UseBearerToken();

  const [deletePanelOpen, setDeletePanelOpen] = useState<boolean>();
  const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>();
  const [imageModalOpen, setImageModalOpen] = useState<boolean>();

  const openDeletePanelHandler = () => setDeletePanelOpen(true);
  const closeDeletePanelHandler = () => setDeletePanelOpen(false);

  const openDetailsModalHandler = () => setDetailsModalOpen(true);
  const closeDetailsModalHandler = () => setDetailsModalOpen(false);

  const openImageModalHandler = () => setImageModalOpen(true);
  const closeImageModalHandler = () => setImageModalOpen(false);

  const deleteMemberHandler = async () => {
    try {
      await axios.delete(`${API_URL}/delete-member`, {
        headers: {
          Authorization: bearerToken,
        },
        data: {
          id: member._id,
        },
      });
      props.updateMembers();
    } catch (err) {}
  };

  return (
    <div className='relative mx-14 w-56 h-72 bg-custom-black border border-black rounded-sm shadow-primary'>
      {detailsModalOpen && (
        <MemberDetailsModal
          member={member}
          onClose={closeDetailsModalHandler}
        />
      )}
      {imageModalOpen && (
        <MemberImageModal
          memberId={member._id}
          defaultImage={member.avatarUrl}
          bgColor={member.color}
          onClose={closeImageModalHandler}
          updateMembers={props.updateMembers}
        />
      )}
      {deletePanelOpen && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-80 z-10'>
          <p className='pb-6 font-nino-mtavruli text-white text-lg'>{`წავშალოთ ${member.name}?`}</p>
          <div>
            <button
              type='button'
              onClick={deleteMemberHandler}
              id={`${member.name}-remove-yes-btn`}
              className='mr-2 pt-1 w-10 h-8 font-nino-mtavruli bg-primary-green rounded-lg'
            >
              კი
            </button>
            <button
              type='button'
              onClick={closeDeletePanelHandler}
              id={`${member.name}-remove-no-btn`}
              className='pt-1 w-10 h-8 font-nino-mtavruli bg-light-red rounded-lg'
            >
              არა
            </button>
          </div>
        </div>
      )}
      <div className='w-full h-5/6 flex justify-evenly items-center flex-col'>
        <div
          className='relative w-36 h-36 flex justify-center items-center border border-white rounded-full'
          style={{ backgroundColor: member.color }}
        >
          <img src={member.avatarUrl} alt='avatar' />
          <button type='button' onClick={openImageModalHandler}>
            <img
              src={EditPhotoIcon}
              alt='edit'
              id={`${member.name}-change-avatar-btn`}
              className='absolute bottom-1 right-1'
            />
          </button>
        </div>
        <p className='font-nino-mtavruli text-lg text-white'>{member.name}</p>
      </div>
      <div className='px-6 w-full h-1/6 flex justify-between items-center border-t-2 border-black'>
        <DashboardButton
          id={`${member.name}-details-btn`}
          color='#88D06F'
          onClick={openDetailsModalHandler}
        />
        <Link id={`${member.name}-edit-btn`} to={`edit/${member._id}`}>
          <DashboardButton color='#F2C94C' />
        </Link>
        <DashboardButton
          id={`${member.name}-remove-btn`}
          color='#EB5757'
          onClick={openDeletePanelHandler}
        />
      </div>
    </div>
  );
};

export default Member;
