import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { UseBearerToken } from 'hooks';
import { DashboardTitle, DashboardInput } from 'components';
import { MemberType } from 'Types';

const API_URL = process.env.REACT_APP_API_URL;

const UpsertMember = () => {
  const outletCtx: {
    updateMembers: () => void;
  } = useOutletContext();
  const bearerToken = UseBearerToken();
  const navigate = useNavigate();
  const { memberId } = useParams();

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
      const headers = {
        headers: {
          Authorization: bearerToken,
        },
      };

      if (memberId) {
        await axios.put(
          `${API_URL}/edit-member`,
          {
            id: memberId,
            ...data,
          },
          headers
        );
      } else {
        await axios.post(
          `${API_URL}/add-member`,
          {
            ...data,
          },
          headers
        );
      }
      outletCtx.updateMembers();
      navigate('/dashboard/members');
    } catch (err) {
      console.log(err);
    }
  });

  const [member, setMember] = useState<MemberType | undefined>();

  useEffect(() => {
    const getMember = async () => {
      try {
        const response = await axios.post(`${API_URL}/get-member`, {
          id: memberId,
        });
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
        className='w-150 flex items-center flex-col'
      >
        <DashboardInput
          type='text'
          placeholder='სახელი'
          register={{
            ...register('name', {
              required: 'სახელი სავალდებულოა',
              minLength: {
                value: 3,
                message: 'სახელი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              },
              pattern: {
                value: /^[ა-ჰ-1-9 -;:'",.?!/—„“]+$/,
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
            register={{
              ...register('instrument', {
                required: 'ინსტრუმენტი სავალდებულოა',
                minLength: {
                  value: 2,
                  message: 'ინსტრუმენტი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
                },
                pattern: {
                  value: /^[ა-ჰ]+$/,
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
            register={{
              ...register('orbitWidth', {
                required: 'ორბიტის სიგრძე სავალდებულოა',
              }),
            }}
            error={errors?.orbitWidth?.message}
            defaultValue={member?.orbitWidth}
          />
          <DashboardInput
            type='text'
            placeholder='ფერი'
            register={{
              ...register('color', {
                required: 'ფერი სავალდებულოა',
                pattern: {
                  value: /^#[A-Fa-f0-9]{6}/,
                  message: 'ფერი უნდა იყოს ვალიდური ჰექსკოდი',
                },
              }),
            }}
            error={errors?.color?.message}
            defaultValue={member?.color}
          />
        </div>
        <div className='relative w-full'>
          <textarea
            className='p-5 w-full h-56 border border-primary-dark-blue rounded-md outline-none resize-none'
            placeholder='ბიოგრაფია...'
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
          className='mt-3 w-44 h-14 font-nino-mtavruli text-white bg-primary-dark-blue rounded-lg'
        >
          {memberId ? 'შეცვალე წევრი' : 'დაამატე წევრი'}
        </button>
        <Link
          to='/dashboard/members'
          className='pt-5 font-nino-mtavruli-bold text-lg text-light-blue underline'
        >
          გადი უკან
        </Link>
      </form>
    </div>
  );
};

export default UpsertMember;
