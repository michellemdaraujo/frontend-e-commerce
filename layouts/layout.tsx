import Header from '@/components/header';
import Footer from '@/components/footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
