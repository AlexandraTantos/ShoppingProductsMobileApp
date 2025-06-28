export const getDiscountedPrice = (
  price: number,
  discountPercentage = 0
): number => {
  if (discountPercentage <= 0) return price;
  return price - (price * discountPercentage) / 100;
};
