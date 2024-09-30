export type Communities = {
  name: string;
  logo: string;
}[];

export type Content = {
  about: string;
  benefit: {
    description: string;
    title: string;
  }[];
  date: string;
  location: string;
  goal: string;
  registration_link: string;
  registration_tagline: string;
  tagline: string;
};

export type Galleries = string[];

export type ParallelSpeakers = {
  name: string;
  photo: string;
  title: string;
}[];

export type Speakers = {
  name: string;
  photo: string;
  title: string;
  twitter: string;
  youtube: string;
  linkedin: string;
}[];

export type ThrowbackEvent = {
  location: string;
  photo: string[];
};

export type Events = {
  name: string;
  date: string;
  location: string;
  photo: string;
  link: string;
}[];
