import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
  addMemberRequest,
  editMemberRequest,
  getMemberRequest,
} from 'services';
import { useBearerToken } from 'hooks';
import { DashboardTitle, DashboardInput } from 'components';
import { MemberType } from 'types';

const UpsertMember = () => {
  const outletCtx: {
    updateMembers: () => void;
  } = useOutletContext();
  const bearerToken = useBearerToken();
  const navigate = useNavigate();
  const { memberId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    mode: 'onTouched',
  });

  const submitHandler = handleSubmit(async (data) => {
    try {
      if (memberId) {
        await editMemberRequest(
          {
            id: memberId,
            ...data,
          },
          bearerToken
        );
      } else {
        await addMemberRequest(data, bearerToken);
      }
      outletCtx.updateMembers();
      navigate('/dashboard/members');
    } catch (err: any) {
      const error: string = err?.response?.data?.message;

      if (error.includes('name')) {
        return setError('name', {
          type: 'custom',
          message: error,
        });
      }

      if (error.includes('instrument')) {
        return setError('instrument', {
          type: 'custom',
          message: error,
        });
      }

      if (error.includes('orbitWidth')) {
        return setError('orbitWidth', {
          type: 'custom',
          message: error,
        });
      }

      if (error.includes('color')) {
        return setError('color', {
          type: 'custom',
          message: error,
        });
      }

      if (error) {
        return setError('biography', {
          type: 'custom',
          message: error,
        });
      }
    }
  });

  const [member, setMember] = useState<MemberType | undefined>();

  useEffect(() => {
    const getMember = async () => {
      try {
        const response = await getMemberRequest(memberId);
        const data: MemberType = response.data;

        setMember(data);
        reset();
      } catch (err) {}
    };

    if (memberId) {
      getMember();
    }
  }, [memberId, reset]);

  return (
    <div className='w-full h-full flex items-center flex-col'>
      <DashboardTitle
        title={
          memberId
            ? 'შეცვალე არსებული ჯგუფის წევრის ინფორმაცია'
            : 'დაამატე ახალი წევრი'
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
                value: 3,
                message: 'სახელი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              },
              pattern: {
                value: /^[ა-ჰ ]+$/,
                message: 'სახელი უნდა შედგებოდეს მხოლოდ ქართული ასოებისგან',
              },
            }),
          }}
          error={errors?.name?.message}
          defaultValue={member?.name}
        />
        <div className='py-16 w-full flex justify-between'>
          <DashboardInput
            type='text'
            placeholder='ინსტრუმენტი'
            id='instrument-input'
            register={{
              ...register('instrument', {
                required: 'ინსტრუმენტი სავალდებულოა',
                minLength: {
                  value: 2,
                  message: 'ინსტრუმენტი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
                },
                pattern: {
                  value: /^[ა-ჰ ]+$/,
                  message:
                    'ინსტრუმენტი უნდა შედგებოდეს მხოლოდ ქართული ასოებისგან',
                },
              }),
            }}
            error={errors?.instrument?.message}
            defaultValue={member?.instrument}
          />
          <DashboardInput
            type='number'
            placeholder='ორბიტის სიგრძე'
            id='orbit-width-input'
            register={{
              ...register('orbitWidth', {
                required: 'ორბიტის სიგრძე სავალდებულოა',
              }),
            }}
            error={errors?.orbitWidth?.message}
            defaultValue={member?.orbitWidth}
          />
          <div className='relative'>
            <input
              type='color'
              className='p-1 w-44 h-14 font-bpg-arial text-center bg-transparent border border-primary-dark-blue rounded-md outline-none'
              id='color-input'
              {...register('color', {
                required: 'ფერი სავალდებულოა',
                pattern: {
                  value: /^#[A-Fa-f0-9]{6}/,
                  message: 'ფერი უნდა იყოს ვალიდური ჰექსკოდი',
                },
              })}
              defaultValue={member?.color ? member?.color : '#000000'}
            />
            {errors?.color?.message && (
              <p className='pl-5 absolute text-sm text-light-red'>
                {errors.color.message}
              </p>
            )}
          </div>
        </div>
        <div className='relative w-full'>
          <textarea
            className='p-5 w-full h-56 border border-primary-dark-blue rounded-md outline-none resize-none'
            placeholder='ბიოგრაფია...'
            id='biography-textarea'
            {...register('biography', {
              required: 'ბიოგრაფია სავალდებულოა',
              pattern: {
                value: /^[ა-ჰ -;:'",.?!/]+$/,
                message: 'ბიოგრაფია უნდა შედგებოდეს მხოლოდ ქართული ასოებისგან',
              },
            })}
            defaultValue={member?.biography}
          />
          {errors?.biography?.message && (
            <p className='pl-5 absolute text-sm text-light-red'>
              {errors.biography.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          id='submit-btn'
          className='mt-6 w-44 h-14 font-nino-mtavruli text-white bg-primary-dark-blue rounded-lg'
        >
          {memberId ? 'შეცვალე წევრი' : 'დაამატე წევრი'}
        </button>
        <Link
          to='/dashboard/members'
          className='pt-2 font-nino-mtavruli-bold text-lg text-light-blue underline'
        >
          გადი უკან
        </Link>
      </form>
    </div>
  );
};

export default UpsertMember;
