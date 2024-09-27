'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const navItems = [
  { title: 'Features' },
  { title: 'Pricing' },
  { title: 'Resources' },
  { title: 'Docs' },
] satisfies Record<'title', string>[];

export default function Header() {
  const user = null;

  return (
    <header className='w-full sticky top-0 left-0 z-[999] border-b border-b[#000] px-4 lg:px-10 flex items-center justify-between h-[80px] bg-white text-black'>
      <div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>

      <div>
        <div className='w-full hidden md:flex items-center'>
          {navItems.map(({ title }) => (
            <Link key={title} href='/' className='px-5 text-lg'>
              {title}
            </Link>
          ))}
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <Button color='primary' className='text-lg'>
          Start Trial
        </Button>
        {user ? (
          <>
            <Link href='/dashboard'>
              <Image
                src=''
                alt=''
                width={40}
                height={40}
                className='rounded-full'
              />
            </Link>
          </>
        ) : (
          <Link href='/sign-in'>Login</Link>
        )}
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <div className='relative flex items-center'>
      <svg
        version='1.1'
        id='a'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 439.4 110.2'
        className='fill-black cursor-pointer h-[28px] lg:h-[32px]'
      >
        <g id='b'>
          <g id='c'>
            <g>
              <g id='d'>
                <g>
                  <path
                    className='st0'
                    d='M101.7,51.8H15.3c-2.2,0-4-1.8-4-4v-6.1c0-6.9,5.6-12.5,12.5-12.5h69.3c6.9,0,12.5,5.6,12.5,12.5v6.1       C105.7,50,103.9,51.8,101.7,51.8z'
                  ></path>
                  <path
                    className='st0'
                    d='M83.5,22.6h-50c-2.2,0-4.1-1.8-4.1-4.1l0,0C29.4,8.3,37.7,0,47.9,0h21.2c10.2,0,18.5,8.3,18.5,18.5l0,0       C87.6,20.8,85.8,22.6,83.5,22.6C83.5,22.6,83.5,22.6,83.5,22.6z'
                  ></path>
                  <path
                    className='st0'
                    d='M105.7,58.4H11.3C5.1,58.4,0,63.5,0,69.7S5.1,81,11.3,81h33.5c1.2-6.4,6.8-11.3,13.6-11.3       S70.9,74.6,72.1,81h33.5c6.2,0,11.3-5.1,11.3-11.3S111.9,58.4,105.7,58.4C105.7,58.4,105.7,58.4,105.7,58.4z'
                  ></path>
                  <g>
                    <path
                      className='st0'
                      d='M101.6,87.6H72.3v22.6h22c6.2,0,11.3-5.1,11.3-11.3v-7.2C105.7,89.5,103.9,87.6,101.6,87.6        C101.6,87.6,101.6,87.6,101.6,87.6z'
                    ></path>
                    <path
                      className='st0'
                      d='M15.3,87.6c-2.2,0-4.1,1.8-4.1,4.1v7.2c0,6.2,5.1,11.3,11.3,11.3h22V87.6C44.6,87.6,15.3,87.6,15.3,87.6z        '
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <h5 className='absolute right-[-20px] xl:right-[-10px] pt-1 font-medium text-2xl'>
        EMAILER
      </h5>
    </div>
  );
};
