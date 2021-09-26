export default function Button({ href, className, variant, children, pill }) {
  const addClassName = className ? ` ${className}` : '';

  const variants = {
    'outline-yellow': `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-600`,
    yellow: 'bg-yellow-500 hover:bg-yellow-600 text-black',
    black: 'bg-black hover:bg-opacity-90 text-white',
  };

  const pickedVariant = variants[variant];
  return (
    <a
      href={href}
      className={`transition py-3 px-10 text-lg  font-semibold inline-block ${
        pill && 'rounded-full'
      } ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
