import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import RefModal from '@site/src/components/RefModal';

export default function Root({children}: {children: React.ReactNode}) {
  return (
    <>
      <RefModal />
      {children}
      <SpeedInsights />
    </>
  );
}
