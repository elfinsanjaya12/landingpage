import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

export default function SectionSkill() {
  return (
    <section className='py-28 bg-primarygray'>
      <div className='container mx-auto'>
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>
        <div className='flex -mx-4 mt-20'>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='Javascript'
              lavel='Lanjutan'
              image='/javascript.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='React JS'
              lavel='Menengah'
              image='/react.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='Node JS '
              lavel='Lanjutan'
              image='/nodejs.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
        </div>
        <div className='flex -mx-4 mt-4'>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='Node JS '
              lavel='Lanjutan'
              image='/nodejs.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='Javascript'
              lavel='Lanjutan'
              image='/javascript.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='React JS'
              lavel='Menengah'
              image='/react.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
        </div>
        <div className='flex -mx-4 mt-4'>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='React JS'
              lavel='Menengah'
              image='/react.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='Node JS '
              lavel='Lanjutan'
              image='/nodejs.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
          <div className='w-4/12 px-4'>
            <SkillCard
              name='Javascript'
              lavel='Lanjutan'
              image='/javascript.svg'
              imageClassName='h-16 rounded-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
