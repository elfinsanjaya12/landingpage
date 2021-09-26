import * as React from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Button from '../components/Button';
export default function Navbar() {
  const [offConvas, setOffConvas] = React.useState(false);
  return (
    <>
      <div className='flex items-center py-10'>
        <div className='w-3/12'>
          <Logo />
        </div>
        <div className='w-6/12  hidden md:block'>
          <Nav dir='horizontal' scheme={'light'} />
        </div>
        <div className='w-3/12 text-right  hidden md:block'>
          <Button pill variant='outline-yellow'>
            Masuk
          </Button>
        </div>
        <div className='w-9/12 md:hidden text-right'>
          <img
            src='/menu.svg'
            alt=''
            className='inline-block'
            onClick={() => setOffConvas(true)}
          />
        </div>
      </div>

      <div
        className={`fixed bg-white z-10 top-0 h-full w-full p-10 transition-all ${
          offConvas ? 'right-0' : '-right-full'
        }`}
      >
        <img
          src='/x.svg'
          alt=''
          className='absolute top-8 right-8 w-8'
          onClick={() => setOffConvas(false)}
        />
        <Nav dir='vertical' scheme={'dark'} />
      </div>
    </>
  );
}
