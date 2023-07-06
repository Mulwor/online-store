import { LayoutHeader } from '../../widgets/LayoutHeader';
import { LayoutFooter } from '../../widgets/LayoutFooter';
import { SectionHome } from './ui/Sections';

export const Layout = () => {
  return (
    <>
      <LayoutHeader />
      <SectionHome />
      <LayoutFooter />
    </>
  );
};
