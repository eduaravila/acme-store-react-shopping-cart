import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link passHref href="/">
        <h1 className="text-4xl font-bold">Acme store</h1>
      </Link>
      <p className="text-xl">👺</p>
    </div>
  );
};

export default Header;
