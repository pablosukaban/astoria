import CarsList from '~/components/CarsList';
import SubHero from '~/components/SubHero';

const imageLink =
  'https://static.wixstatic.com/media/548a7f_0ed4e9a8699643c2b6d27de738532f47.jpg/v1/fill/w_1727,h_802,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/548a7f_0ed4e9a8699643c2b6d27de738532f47.jpg';

const NewCarPage = () => {
  return (
    <main className="relative">
      <SubHero imageLink={imageLink} mainText="Новые поступления" />
      <div className="bg-secondaryLightGray py-16">
        <div className="mx-auto w-full max-w-7xl ">
          <CarsList />
        </div>
      </div>
    </main>
  );
};

export default NewCarPage;
