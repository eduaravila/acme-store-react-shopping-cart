import { ConvertedPriceData } from "@/utils/price";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  price: ConvertedPriceData;
}

const Price = ({ price, ...rest }: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <p className="text-xl font-bold" {...rest}>
        {price.symbol} {price.price.toFixed(2)}
      </p>
    </div>
  );
};

export default Price;
