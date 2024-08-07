export const images: string[] = [
    "/images/photo1.webp",
    "/images/photo2.webp",
    "/images/photo3.webp",
    "/images/photo4.webp",
    "/images/photo5.webp",
  ];
  
  export const getNextImageIndex = (currentIndex: number, length: number): number => {
    return currentIndex === length - 1 ? 0 : currentIndex + 1;
  };
  