'use client';

import { useRef, useState } from 'react';

interface CreateBrandModalProps {
  isOpened: boolean;
  closeModal: () => void;
}

const CreateBrandModal = ({ isOpened, closeModal }: CreateBrandModalProps) => {
  const modalContainerRef = useRef(null);

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (value.length === 0) {
      alert('Введие бренд');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/brands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: value }),
      });

      closeModal();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setValue('');
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === modalContainerRef.current) {
      closeModal();
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[100] flex min-h-screen w-full items-center justify-center bg-gray-900 bg-opacity-50 ${
        isOpened ? '' : 'hidden'
      }`}
      onClick={handleContainerClick}
      ref={modalContainerRef}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white p-6"
      >
        <h1 className="w-full border-b border-slate-300 p-1 text-2xl font-bold">
          Добавить бренд
        </h1>
        <input
          placeholder="Название бренда"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border px-6 py-4"
        />
        <div className="flex w-full items-center justify-between gap-4 ">
          <button
            className={`${
              loading ? 'opacity-50' : 'opacity-100'
            } bg-primaryOrange px-4 py-3 disabled:cursor-not-allowed`}
            disabled={loading}
          >
            Подтвердить
          </button>
          <button type="button" onClick={closeModal} className="">
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBrandModal;
