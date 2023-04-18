import Home from '@/features/home';
import BaseLayout from '@/features/layout/BaseLayout';
import { ReactElement } from 'react';

const HomePage = () => {
  return <Home />;
};

export default HomePage;

HomePage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};
