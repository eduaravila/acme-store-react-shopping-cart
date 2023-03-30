import { ConvertedPriceData } from "./common/price";

interface Props {
  price: ConvertedPriceData;
}

const Price = ({ price }: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <p className="text-xl font-bold">
        {price.symbol} {price.price.toFixed(2)}
      </p>
    </div>
  );
};

export default Price;
