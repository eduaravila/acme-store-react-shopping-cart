interface Props {
  Header: React.ReactElement;
  Body: React.ReactElement;
  Footer?: React.ReactElement;
}

const Card: React.FC<Props> = ({ Header, Body, Footer }) => {
  return (
    <div className="w-full hover:border-emerald-300">
      <div className="flex w-full flex-col items-center justify-center">
        {Header}
      </div>
      <div className="p-8">{Body}</div>
      <div className="flex w-full flex-col items-center justify-center">
        {Footer}
      </div>
    </div>
  );
};

export default Card;
