export type Communities = {
  name: string;
  logo: string;
}[];

export type Content = {
  about: string;
  date: string;
  location: string;
  goal: string;
  registration_link: string;
  registration_sponsorship: string;
  registration_tagline: string;
  tagline: string;
  participants: string;
  speakers: string;
  communities: string;
};

export type Benefits = {
  photo: string[];
  list: {
    description: string;
    title: string;
    icon: string;
  }[];
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

export type Agendas = {
  title: string;
  speaker: string;
  lokasi: string;
  tags: string[];
}[];

export type Tickets = {
  title: string;
  price: string;
  features: { name: string; included: boolean }[];
  link: string;
  highlighted: boolean;
}[];

export type Sponsors = {
  name: string;
  logo: string;
}[];
