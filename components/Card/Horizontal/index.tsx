interface Props {
  TopRight: React.ReactElement;
  Body: React.ReactElement;
}

const Card: React.FC<Props> = ({ TopRight, Body }) => {
  return (
    <div className="w-full hover:border-emerald-300">
      <div className="position-absolute top-0 right-0">{TopRight}</div>
      <div>{Body}</div>
    </div>
  );
};

export default Card;
