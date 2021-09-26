export default function NavItem({ children }) {
  return (
    <li className='text-white text-lg text-opacity-60 font-semibild'>
      <a>{children}</a>
    </li>
  );
}
