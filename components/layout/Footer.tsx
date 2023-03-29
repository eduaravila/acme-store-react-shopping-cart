interface Props {
  children: React.ReactNode;
}

const Footer: React.FC<Props> = ({ children }) => {
  return (
    <div className="position-fixed bottom-0 flex h-24 w-full flex-col items-center justify-center border-t">
      {children}
    </div>
  );
};

export default Footer;
