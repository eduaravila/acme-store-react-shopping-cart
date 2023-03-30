interface Props {
  TopRight: React.ReactElement;
  Body: React.ReactElement;
}

const Card: React.FC<Props> = ({ TopRight, Body }) => {
  return (
    <div className="border-1 relative my-8 flex w-full flex-col border border-gray-300 hover:border-emerald-300">
      <div className="absolute top-0 right-0">{TopRight}</div>
      <div className="flex">{Body}</div>
    </div>
  );
};

export default Card;
