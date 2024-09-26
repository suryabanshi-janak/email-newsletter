'use client';

import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import { NextUIProvider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

const NO_SIDEBAR_PATHS = [
  '/dashboard/new-email',
  '/',
  '/sign-up',
  '/subscribe',
  '/success',
  '/sign-in',
];

export function Providers({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <NextUIProvider>
      {!NO_SIDEBAR_PATHS.includes(pathname) ? (
        <div className='w-full flex'>{children}</div>
      ) : (
        children
      )}
      <Toaster position='top-center' reverseOrder={false} />
    </NextUIProvider>
  );
}
