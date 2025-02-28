import { cn } from "@/lib/utils";

type ProductPriceProps = {
  classNames?: string;
  value: number;
};

const ProductPrice = ({ value, classNames = "" }: ProductPriceProps) => {
  const price = value.toFixed(2);
  const [integer, decimal] = price.split(".");

  return (
    <p className={cn("text-2xl", classNames)}>
      <span className="text-xs align-super">$</span>
      {integer}
      <span className="text-xs align-super">.{decimal}</span>
    </p>
  );
};

export default ProductPrice;
