import Home from '@/features/home';
import BaseLayout from '@/features/layout/BaseLayout';
import { ReactElement } from 'react';

export default function HomePage() {
  return <Home />;
}

HomePage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};
