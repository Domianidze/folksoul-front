import { useState, useEffect } from 'react';
import axios from 'axios';

import { DashboardTitle } from 'components';
import { BandImageModal, EditTextPanel } from './components';
import { EditPhotoBigIcon, EditTextIcon } from 'assets';
import { BandType } from 'Types';

const API_URL = process.env.REACT_APP_API_URL;

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
      const response = await axios.get(`${API_URL}/get-band-data`);
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
          <div className='mb-20 px-12 overflow-y-auto flex items-center flex-col'>
            <div className='relative w-48 h-48 flex justify-center items-center bg-primary-dark-blue border border-white rounded-full shadow-primary shrink-0'>
              <img src={band?.logoUrl} alt={`band`} className='max-h-44' />
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
