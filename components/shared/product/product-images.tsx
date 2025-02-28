"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProductImagesProps = {
  images: string[];
};

const ProductImages = ({ images }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImage]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-center object-cover"
      />
      <div className="flex">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={cn(
                "border mr-2 cursor-pointer hover:border-orange-600",
                currentImage === index && "border-orange-500",
              )}
            >
              <Image
                onClick={() => setCurrentImage(index)}
                src={image}
                alt="product sub image"
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
