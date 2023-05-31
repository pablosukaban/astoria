import UnderlineBlock from '~/components/UI/UnderlineBlock';
import { chooseUsArr } from '../utils/data';
import Image from 'next/image';

const ChooseUs = () => {
  return (
    <section className="bg-secondaryLightGray py-12">
      <div className="mx-auto max-w-7xl space-y-8 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col items-center justify-center">
            <h1 className="mb-8 text-4xl font-bold text-secondaryGray sm:text-6xl lg:text-7xl">
              Почему мы?
            </h1>
            <UnderlineBlock />
          </div>
          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {chooseUsArr.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  className="w-full max-w-[150px] md:max-w-[170px]"
                  src={item.image}
                  alt="choose us"
                  width={150}
                  height={150}
                />
                <p className="max-w-[230px] text-center text-lg font-semibold text-gray-500 sm:text-xl">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
