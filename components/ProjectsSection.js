import ProjectItem from './ProjectItem';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function SectionProjects() {
  return (
    <div className='py-28'>
      <div className='container mx-auto'>
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>

        <div className='flex -mx-4 mt-20 flex-wrap'>
          <div className='w-6/12 px-4 pb-8'>
            <ProjectItem
              name='Hasten'
              description='Explorasi landing page'
              image='/hasten.png'
            />
          </div>
          <div className='w-6/12 px-4  pb-8'>
            <ProjectItem
              name='Resources'
              description='Explorasi resources page'
              image='/resources.png'
            />
          </div>

          <div className='w-6/12 px-4'>
            <ProjectItem
              name='Resources'
              description='Explorasi resources page'
              image='/resources.png'
            />
          </div>
          <div className='w-6/12 px-4'>
            <ProjectItem
              name='Hasten'
              description='Explorasi landing page'
              image='/hasten.png'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
