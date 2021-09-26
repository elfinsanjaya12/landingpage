import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function Profile() {
  return (
    <section className='py-28'>
      <div className='container mx-auto'>
        <SectionTitle>Profile</SectionTitle>
        <SectionParagraph>Mengenal saya secara singkat.</SectionParagraph>
        <div className='flex items-center w-9/12 mx-auto mt-14'>
          <div className='w-5/12 p-10'>
            <img src='/profile.png' className='w-full' alt='profile' />
          </div>
          <div className='w-7/12 px-10'>
            <div className='text-lg leading-relaxed'>
              Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
              condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
              congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
              ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
              accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
              Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
              ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas ac aliquet eros.
            </div>
            <div className='text-lg mt-6 leading-relaxed'>
              Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
              convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
              Mauris ut dolor posuere augue porta lobortis nec sed lacus.
              Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
              malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
              mollis, id vehicula nulla dictum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
