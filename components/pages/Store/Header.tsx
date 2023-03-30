import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between border-2 bg-gray-100 p-4">
      <Link passHref href="/">
        <h1 className="text-4xl font-bold">Acme store</h1>
      </Link>
      <p className="text-xl">👺</p>
    </div>
  );
};

export default Header;
