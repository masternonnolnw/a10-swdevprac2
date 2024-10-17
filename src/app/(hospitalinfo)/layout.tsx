const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white min-h-[calc(100svh-60px)]">
      <title>Vaccine Booking</title>
      {children}
    </div>
  );
};

export default Layout;
