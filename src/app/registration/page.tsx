'use client';

import Link from 'next/link';
import { LOGIN_ROUTE } from '~/utils/constants';

const Auth = () => {
  const handleButtonClick = async () => {
    // try {
    //     let newUser;
    //     if (isLoginPage) {
    //         newUser = await login(email, password);
    //     } else {
    //         newUser = await registration(email, password);
    //     }
    //     dispatch(setUser(newUser));
    //     dispatch(setIsAuth(true));
    //     navigate('/');
    // } catch (error) {
    //     alert(error.response.data.message);
    // }
  };

  return (
    <main className="mt-10 grid h-[86vh] place-items-center overflow-hidden bg-secondaryLightGray px-4 md:mt-0">
      <div className="rounded border border-secondaryLightGray bg-white px-8 py-6 shadow-lg sm:px-16 sm:py-12">
        <h1 className="mb-4 text-center text-2xl font-bold">Регистрация</h1>
        <div className="mb-4 space-y-6">
          <input
            className="block w-full border px-4 py-4 text-lg transition focus:border-secondaryGray"
            type="text"
            placeholder="Введите ваше имя..."
          />

          <input
            className="block w-full border px-4 py-4 text-lg transition focus:border-secondaryGray"
            type="email"
            placeholder="Введите ваш email..."
          />
          <input
            className="block w-full border px-4 py-4 text-lg transition focus:border-secondaryGray"
            type="password"
            placeholder="Введите ваш пароль..."
          />
        </div>
        <div className=" flex flex-wrap items-start justify-between gap-8">
          <div className="">
            Есть аккаунт?{' '}
            <Link
              href={LOGIN_ROUTE}
              className={'text-primaryOrange transition hover:underline'}
            >
              Войти
            </Link>
          </div>
          <button
            className="rounded border bg-secondaryGray px-6 py-2 text-lg font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray"
            onClick={handleButtonClick}
          >
            Регистрация
          </button>
        </div>
      </div>
    </main>
  );
};

export default Auth;
