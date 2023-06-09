import Button from '~/components/UI/Button';

const CallToAction = () => {
  return (
    <section className="bg-primaryOrange py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <h2 className="text-2xl font-bold md:text-4xl">Нужен кредит?</h2>
          <p className="text-center text-2xl">
            Будем рады помочь: <br className="block sm:hidden" /> процентная
            ставка — до 0,9% годовых
          </p>
          <Button isOrange={false} onClick={() => console.log('yo')} />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
