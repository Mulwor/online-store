import React from 'react';
import { LayoutHeader } from '../../widgets/LayoutHeader';
import { LayoutFooter } from '../../widgets/LayoutFooter';
import { Sections } from '../../pages/LayoutHome/ui/Sections';

export const Layout = () => {
  return (
    <>
      <LayoutHeader />
      <Sections />
      <LayoutFooter />
    </>
  );
};
