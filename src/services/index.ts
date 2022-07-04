import axios from './axios';
import { AxiosResponse } from 'axios';

import {
  HookFormSubmitData,
  MessageResponse,
  LoginResponse,
  GetMembersResponse,
  GetMemberResponse,
  GetSocialMediasResponse,
  GetSocialMediaResponse,
  GetBandDataResponse,
} from './types';

export const loginRequest = (
  body: HookFormSubmitData
): Promise<AxiosResponse<LoginResponse, any>> => {
  return axios.post('/login', body);
};

export const getMembersRequest = (): Promise<
  AxiosResponse<GetMembersResponse, any>
> => {
  return axios.get('/get-members');
};

export const getMemberRequest = (data: {
  id: string | undefined;
}): Promise<AxiosResponse<GetMemberResponse, any>> => {
  return axios.post('/get-member', data);
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
  AxiosResponse<GetSocialMediasResponse, any>
> => {
  return axios.get('/get-social-medias');
};

export const getSocialMediaRequest = (data: {
  id: string | undefined;
}): Promise<AxiosResponse<GetSocialMediaResponse, any>> => {
  return axios.post('/get-social-media', data);
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

export const getBandDataRequest = (): Promise<
  AxiosResponse<GetBandDataResponse, any>
> => {
  return axios.get('/get-band-data');
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
