export default function ContactItem({ icon, label, value, className }) {
  const addClassName = className ? ` ${className}` : '';

  return (
    <div className={`flex items-start${addClassName}`}>
      <img src={`${icon}`} />
      <div className='ml-4'>
        <div className='text-sm font-semibold mb-1'>{label}</div>
        <div className='text-lg font-semibold'>{value}</div>
      </div>
    </div>
  );
}
