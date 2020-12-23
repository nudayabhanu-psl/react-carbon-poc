export interface CompanyDetails {
  name: string;
  title: string;
  subTitle: string;
  imageUrl: string;
  website: string;
  backgroundImage: string;
  details: {
    subtitle: string;
    description: string;
  };
  extras: {
    heading: string;
    logo: string;
    details: string[];
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  details: string[];
}
