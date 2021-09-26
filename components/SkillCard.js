export default function SkillCard({ name, lavel, image, imageClassName }) {
  const addImageClassname = imageClassName ? ` ${imageClassName}` : '';
  return (
    <div className='bg-white shadow-skill rounded-lg p-6 flex items-center'>
      <img src={image} alt='' className={`mr-6${addImageClassname}`} />
      <div>
        <h1 className='text-lg font-semibold'>{name}</h1>
        <p className='text-sm text-gray-400 font-semobold mt-1'>{lavel}</p>
      </div>
    </div>
  );
}
