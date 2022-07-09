import axios from './axios';
import { AxiosResponse } from 'axios';

import { MemberType, SocialMediaType, BandType } from 'types';
import { HookFormSubmitData, MessageResponse, LoginResponse } from './types';

export const loginRequest = (
  body: HookFormSubmitData
): Promise<AxiosResponse<LoginResponse, any>> => {
  return axios.post('/login', body);
};

export const getMembersRequest = (): Promise<
  AxiosResponse<MemberType[], any>
> => {
  return axios.get('/members');
};

export const getMemberRequest = (
  id: string | undefined
): Promise<AxiosResponse<MemberType, any>> => {
  return axios.get(`/member/${id}`);
};

export const addMemberRequest = (
  body: HookFormSubmitData,
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.post('/add-member', body, {
    headers: {
      Authorization: bearerToken,
    },
  });
};

export const editMemberRequest = (
  body: HookFormSubmitData,
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.put('/edit-member', body, {
    headers: {
      Authorization: bearerToken,
    },
  });
};

export const deleteMemberRequest = (
  body: {
    id: string;
  },
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.delete('/delete-member', {
    headers: {
      Authorization: bearerToken,
    },
    data: body,
  });
};

export const changeMemberAvatarRequest = (
  body: FormData,
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.put('/change-member-avatar', body, {
    headers: {
      Authorization: bearerToken,
    },
  });
};

export const getSocialMediasRequest = (): Promise<
  AxiosResponse<SocialMediaType[], any>
> => {
  return axios.get('/social-medias');
};

export const getSocialMediaRequest = (
  id: string | undefined
): Promise<AxiosResponse<SocialMediaType, any>> => {
  return axios.get(`social-media/${id}`);
};

export const addSocialMediaRequest = (
  body: HookFormSubmitData,
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.post('/add-social-media', body, {
    headers: {
      Authorization: bearerToken,
    },
  });
};

export const editSocialMediaRequest = (
  body: HookFormSubmitData,
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.put('/edit-social-media', body, {
    headers: {
      Authorization: bearerToken,
    },
  });
};

export const deleteSocialMediaRequest = (
  body: {
    id: string;
  },
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.delete('/delete-social-media', {
    headers: {
      Authorization: bearerToken,
    },
    data: body,
  });
};

export const changeSocialMediaIconRequest = (
  body: FormData,
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.put('/change-social-media-icon', body, {
    headers: {
      Authorization: bearerToken,
    },
  });
};

export const getBandDataRequest = (): Promise<AxiosResponse<BandType, any>> => {
  return axios.get('/band-data');
};

export const setBandInformationRequest = (
  body: HookFormSubmitData,
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.put('/set-band-information', body, {
    headers: {
      Authorization: bearerToken,
    },
  });
};

export const setBandLogoRequest = (
  body: FormData,
  bearerToken: string
): Promise<AxiosResponse<MessageResponse, any>> => {
  return axios.put('/set-band-logo', body, {
    headers: {
      Authorization: bearerToken,
    },
  });
};
