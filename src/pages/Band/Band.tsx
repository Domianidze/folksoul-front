import { useState, useEffect } from 'react';

import { getBandDataRequest } from 'services';
import { DashboardTitle, ImageWrapper } from 'components';
import { BandImageModal, EditTextPanel } from './components';
import { EditPhotoBigIcon, EditTextIcon } from 'assets';
import { BandType } from 'types';

const Band: React.FC = () => {
  const [band, setBand] = useState<BandType>();
  const [imageModalOpen, setImageModalOpen] = useState<boolean>();
  const [editTextPanelOpen, setEditTextPanelOpen] = useState<boolean>();

  const openImageModalHandler = () => setImageModalOpen(true);
  const closeImageModalHandler = () => setImageModalOpen(false);

  const openEditTextPanelHandler = () => setEditTextPanelOpen(true);
  const closeEditTextPanelHandler = () => setEditTextPanelOpen(false);

  const updateBand = async () => {
    try {
      const response = await getBandDataRequest();
      const data: BandType = response.data;

      setBand(data);
    } catch (err) {}
  };

  useEffect(() => {
    updateBand();
  }, []);

  return (
    <div className='relative w-full h-full flex items-center flex-col'>
      {imageModalOpen && (
        <BandImageModal
          defaultImage={band?.logoUrl}
          onClose={closeImageModalHandler}
          updateBand={updateBand}
        />
      )}
      <DashboardTitle
        title={`ბენდის შესახებ${editTextPanelOpen ? ' - დაარედაქტირე' : ''}`}
      />
      {editTextPanelOpen ? (
        <EditTextPanel
          defaultInformation={band?.information}
          onClose={closeEditTextPanelHandler}
          updateBand={updateBand}
        />
      ) : (
        <>
          <div className='mb-8 mx-16 pl-16 pr-12 overflow-y-auto flex items-center flex-col 3xl-mb-20 3xl:mx-0'>
            <div className='mt-3 relative w-48 h-48 flex justify-center items-center bg-primary-dark-blue border border-white rounded-full shadow-primary shrink-0'>
              <ImageWrapper>
                <img src={band?.logoUrl} alt='band' />
              </ImageWrapper>
              <button type='button' onClick={openImageModalHandler}>
                <img
                  src={EditPhotoBigIcon}
                  alt='edit'
                  id='set-logo-btn'
                  className='absolute bottom-1 right-1 rounded-full shadow-primary'
                />
              </button>
            </div>
            <p className='pt-10 max-w-4.5xl text-justify'>
              {band?.information}
            </p>
          </div>
          <button type='button' onClick={openEditTextPanelHandler}>
            <img
              src={EditTextIcon}
              alt='edit'
              id='set-information-btn'
              className='absolute left-10 top-1/2'
            />
          </button>
        </>
      )}
    </div>
  );
};

export default Band;
