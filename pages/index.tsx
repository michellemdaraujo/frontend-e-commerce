import { ReactElement } from 'react';

import { Layout } from '@/layouts/layout';

export const Home = () => {
  return <>content</>;
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
