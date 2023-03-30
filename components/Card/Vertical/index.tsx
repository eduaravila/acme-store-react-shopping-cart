interface Props {
  Header: React.ReactElement;
  Body: React.ReactElement;
  Footer?: React.ReactElement;
}

const Card: React.FC<Props> = ({ Header, Body, Footer }) => {
  return (
    <div className="border-1 w-full border border-gray-300 hover:border-emerald-300">
      <div className="flex w-full flex-col items-center justify-center">
        {Header}
      </div>
      <div className="p-4">{Body}</div>
      <div className="flex w-full flex-col items-center justify-center p-4">
        {Footer}
      </div>
    </div>
  );
};

export default Card;
