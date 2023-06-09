import Image from 'next/image';

const imageLink =
  'https://static.wixstatic.com/media/548a7f_da86138aea5e4ae9bb71623ba4bc6958.jpg/v1/fill/w_1181,h_847,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/548a7f_da86138aea5e4ae9bb71623ba4bc6958.jpg';

const BottomImage = () => {
  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative">
      <div className="h-[300px] md:h-[590px]">
        <Image
          alt="bottom img"
          src={imageLink}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  );
};

export default BottomImage;
