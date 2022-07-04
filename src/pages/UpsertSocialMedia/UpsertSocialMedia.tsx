import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useBearerToken } from 'hooks';
import {
  addSocialMediaRequest,
  editSocialMediaRequest,
  getSocialMediaRequest,
} from 'services';
import { DashboardTitle, DashboardInput } from 'components';
import { SocialMediaType } from 'types';

const UpsertSocialMedia = () => {
  const outletCtx: {
    updateSocialMedias: () => void;
  } = useOutletContext();
  const bearerToken = useBearerToken();
  const navigate = useNavigate();
  const { socialMediaId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onTouched',
  });

  const submitHandler = handleSubmit(async (data) => {
    try {
      if (socialMediaId) {
        await editSocialMediaRequest(
          {
            id: socialMediaId,
            ...data,
          },
          bearerToken
        );
      } else {
        await addSocialMediaRequest(data, bearerToken);
      }
      outletCtx.updateSocialMedias();
      navigate('/dashboard/social-medias');
    } catch (err) {}
  });

  const [socialMedia, setSocialMedia] = useState<SocialMediaType | undefined>();

  useEffect(() => {
    const getMember = async () => {
      try {
        const response = await getSocialMediaRequest({
          id: socialMediaId,
        });
        const data: SocialMediaType = response.data;

        setSocialMedia(data);
        reset();
      } catch (err) {}
    };

    if (socialMediaId) {
      getMember();
    }
  }, [socialMediaId, reset]);

  return (
    <div className='w-full h-full flex items-center flex-col'>
      <DashboardTitle
        title={
          socialMediaId
            ? 'შეცვალე არსებული სოციალური ბმული'
            : 'დაამატე ახალი სოციალური ბმული'
        }
      />
      <form
        onSubmit={submitHandler}
        className='w-150 h-full flex justify-center items-center flex-col'
      >
        <DashboardInput
          type='text'
          placeholder='სახელი'
          id='name-input'
          register={{
            ...register('name', {
              required: 'სახელი სავალდებულოა',
              minLength: {
                value: 2,
                message: 'სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
              },
            }),
          }}
          error={errors?.name?.message}
          defaultValue={socialMedia?.name}
        />
        <div className='my-16 relative'>
          <input
            type='text'
            placeholder='ბმული'
            id='link-input'
            {...register('link', {
              required: 'ბმული სავალდებულოა',
              pattern: {
                value:
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
                message: 'ბმული უნდა იყოს ვალიდური',
              },
            })}
            defaultValue={socialMedia?.link}
            className='w-96 h-14 font-bpg-arial text-center border border-primary-dark-blue rounded-md outline-none'
          />
          {errors?.link?.message && (
            <p className='absolute w-full text-sm text-light-red text-center'>
              {errors.link.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          id='submit-btn'
          className='mt-3 w-72 h-14 font-nino-mtavruli text-white bg-primary-dark-blue rounded-lg'
        >
          {socialMediaId
            ? 'შეცვალე სოციალური ბმული'
            : 'დაამატე სოციალური ბმული'}
        </button>
        <Link
          to='/dashboard/social-medias'
          className='pt-5 font-nino-mtavruli-bold text-lg text-light-blue underline'
        >
          გადი უკან
        </Link>
      </form>
    </div>
  );
};

export default UpsertSocialMedia;
