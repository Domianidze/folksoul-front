import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { SocialMediaType } from 'Types';
import { SocialMediaImageModal } from './';
import { UseBearerToken } from 'hooks';
import { DashboardButton } from 'components';
import { EditPhotoIcon } from 'assets';

const API_URL = process.env.REACT_APP_API_URL;

const SocialMedia: React.FC<{
  socialMedia: SocialMediaType;
  updateSocialMedias: () => void;
}> = (props) => {
  const { socialMedia } = props;

  const bearerToken = UseBearerToken();

  const [deletePanelOpen, setDeletePanelOpen] = useState<boolean>();
  const [imageModalOpen, setImageModalOpen] = useState<boolean>();

  const openDeletePanelHandler = () => setDeletePanelOpen(true);
  const closeDeletePanelHandler = () => setDeletePanelOpen(false);

  const openImageModalHandler = () => setImageModalOpen(true);
  const closeImageModalHandler = () => setImageModalOpen(false);

  const deleteSocialMediaHandler = async () => {
    try {
      await axios.delete(`${API_URL}/delete-social-media`, {
        headers: {
          Authorization: bearerToken,
        },
        data: {
          id: socialMedia._id,
        },
      });
      props.updateSocialMedias();
    } catch (err) {}
  };

  return (
    <div className='mb-10 px-6 relative w-200 h-16 flex justify-between items-center bg-custom-black border border-black rounded-md shadow-primary'>
      {imageModalOpen && (
        <SocialMediaImageModal
          socialMediaId={socialMedia._id}
          defaultImage={socialMedia.iconUrl}
          onClose={closeImageModalHandler}
          updateSocialMedias={props.updateSocialMedias}
        />
      )}
      {deletePanelOpen && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-10'>
          <p className='pt-1 pr-12 font-nino-mtavruli text-white text-lg'>{`წავშალოთ ${socialMedia.name}?`}</p>
          <button
            type='button'
            onClick={deleteSocialMediaHandler}
            id={`${socialMedia.name}-remove-yes-btn`}
            className='mx-2 pt-1 w-10 h-8 font-nino-mtavruli bg-primary-green rounded-lg'
          >
            კი
          </button>
          <button
            type='button'
            onClick={closeDeletePanelHandler}
            id={`${socialMedia.name}-remove-no-btn`}
            className='pt-1 w-10 h-8 font-nino-mtavruli bg-light-red rounded-lg'
          >
            არა
          </button>
        </div>
      )}
      <div className='relative'>
        <img src={socialMedia.iconUrl} alt='icon' className='max-h-10' />
        <button
          type='button'
          onClick={openImageModalHandler}
          id={`${socialMedia.name}-change-icon-btn`}
          className='absolute -bottom-1 -right-1 w-5'
        >
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
        <Link
          to={`edit/${socialMedia._id}`}
          id={`${socialMedia.name}-edit-btn`}
        >
          <DashboardButton color='#F2C94C' />
        </Link>
        <DashboardButton
          id={`${socialMedia.name}-remove-btn`}
          color='#EB5757'
          onClick={openDeletePanelHandler}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
