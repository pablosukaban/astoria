import SubHero from '~/components/SubHero';

const imageLink =
  'https://static.wixstatic.com/media/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg/v1/fill/w_1500,h_701,al_c,q_85,enc_auto/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg';

const ModelFilter = () => {
  return (
    <select
      className="w-full rounded border px-4 py-2"
      placeholder="Модель машины"
    >
      <option value="">Все модели</option>
      {['test model 1', 'test', 'test model 2'].map((model) => (
        <option key={model} value={model}>
          {model}
        </option>
      ))}
    </select>
  );
};

const BrandFilter = () => {
  return (
    <select
      className="w-full rounded border px-4 py-2"
      placeholder="Марка машины"
    >
      <option value="">Все марки</option>
      {['test brand 1', 'test', 'test brand 2'].map((brand) => (
        <option key={brand} value={brand}>
          {brand}
        </option>
      ))}
    </select>
  );
};

const PriceFromFilter = () => {
  return (
    <input
      className="rounded border p-2"
      placeholder="Цена, от"
      type="number"
    />
  );
};

const PriceToFilter = () => {
  return (
    <input
      className="rounded border p-2"
      placeholder="Цена, до"
      type="number"
    />
  );
};

const CarNameFilter = () => {
  return <input className="rounded border p-4" placeholder="Поиск по авто" />;
};

const AllCars = async () => {
  const res = await fetch('http://localhost:3000/api/cars');

  const data = await res.json();

  // console.log(data);

  // const { cars } = useAppSelector((state) => state.car);

  // const { setBrands, setCars, setModels } = carSlice.actions;
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //     fetchModels().then((data) => dispatch(setModels(data)));
  //     fetchBrands().then((data) => dispatch(setBrands(data)));
  //     fetchAllCars().then((data) => dispatch(setCars(data.rows)));
  // }, [dispatch, setBrands, setCars, setModels]);

  return (
    <main>
      <SubHero imageLink={imageLink} mainText="Все автомобили" />
      <div className="bg-secondaryLightGray py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="mb-12 flex flex-col justify-between gap-2 rounded border bg-white p-6 shadow-sm">
            <h1 className="text-center text-2xl font-bold">Фильтр</h1>
            <CarNameFilter />
            <div className="flex flex-col flex-wrap gap-2 md:flex-row md:items-center lg:flex-nowrap">
              <ModelFilter />
              <BrandFilter />
              <PriceFromFilter />
              <PriceToFilter />
              <button className="rounded bg-secondaryGray  px-3 py-2 font-bold text-white">
                Поиск
              </button>
            </div>
          </div>
          {/* <CarsList /> */}
          <div className="mt-8 flex items-center justify-end gap-2">
            {[1, 2, 3, 4, 5].map((el) => (
              <button
                key={el}
                className="border bg-secondaryGray px-2 py-1 text-lg font-bold text-white transition hover:text-primaryOrange"
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllCars;
