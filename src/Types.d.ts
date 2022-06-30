export type MemberType = {
  _id: string;
  name: string;
  avatarUrl: string;
  color: string;
  instrument: string;
  orbitWidth: number;
  biography: string;
};

export type SocialMediaType = {
  _id: string;
  name: string;
  iconUrl: string;
  link: string;
};

export type BandType = {
  logoUrl: string;
  information: string;
};
