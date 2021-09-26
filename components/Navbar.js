import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Button from '../components/Button';
export default function Navbar() {
  return (
    <div className='flex items-center py-10'>
      <div className='w-3/12'>
        <Logo />
      </div>
      <div className='w-6/12'>
        <Nav />
      </div>
      <div className='w-3/12 text-right'>
        <Button pill variant='outline-yellow'>
          Masuk
        </Button>
      </div>
    </div>
  );
}
