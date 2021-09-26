export default function NavItem({ href, children, scheme }) {
  const schemes = {
    light: 'text-white text-opacity-60 hover:text-opacity-100',
    dark: 'text-black',
  };

  const pickedSchema = schemes[scheme];
  return (
    <li className={`text-lg  transition font-semibild ${pickedSchema}`}>
      <a href={href}>{children}</a>
    </li>
  );
}
