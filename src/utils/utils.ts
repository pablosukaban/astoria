export const getCarName = (
  brands: { id: number; car_brand_name: string }[],
  brandId: number,
  models: { id: number; car_model_name: string }[],
  modelId: number,
): string => {
  const brand = brands.find((brand) => brand.id === brandId);
  const model = models.find((model) => model.id === modelId);
  if (!brand || !model) return 'Unknown';

  return `${brand.car_brand_name} ${model.car_model_name}`;
};

export function shuffleArray<T>(array: T[]): T[] {
  const newArray: T[] = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// export function shuffleArray(array) {
//     const newArr = [...array];
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return newArr;
// }
