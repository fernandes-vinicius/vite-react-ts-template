import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title: string;
};

export function Head({ title }: HeadProps) {
  return <Helmet>{`${title} | ${import.meta.env.VITE_APP_NAME}`}</Helmet>;
}
