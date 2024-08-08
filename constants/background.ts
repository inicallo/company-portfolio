export const images: string[] = [
  "/images/Home/Photo-1.webp",
  "/images/Home/Photo-2.webp",
  "/images/Home/Photo-3.webp",
  "/images/Home/Photo-4.webp",
  "/images/Home/Photo-5.webp",
];

export const getNextImageIndex = (
  currentIndex: number,
  length: number
): number => {
  return currentIndex === length - 1 ? 0 : currentIndex + 1;
};
