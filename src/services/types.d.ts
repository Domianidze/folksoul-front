import { MemberType, SocialMediaType, BandType } from 'types';

export type HookFormSubmitData = {
  [x: string]: any;
};

export type MessageResponse = {
  message: string;
};

export type LoginResponse = {
  token: string;
  userId: string;
  expiresIn: string;
};

export type GetMembersResponse = MemberType[];
export type GetMemberResponse = MemberType;

export type GetSocialMediasResponse = SocialMediaType[];
export type GetSocialMediaResponse = SocialMediaType;

export type GetBandDataResponse = BandType;
