import React from 'react';
import style from './Sections.module.scss';
import { SectionLogistic } from './SectionLogistic';
import { SectionOrder } from './SectionOrder/index';
import { SectionService } from './SectionService';
import { SectionCountry } from './SectionCountry/ui/SectionCountry';

export const SectionHome = () => {
  return (
    <main>
      <SectionLogistic />
      <SectionOrder />
      <SectionService />
      <SectionCountry />
    </main>
  );
};
