import TopMenuItem from "./TopMenuItem";

const TopMenu = () => {
  return (
    <div className="flex w-full h-fit bg-[#2a2d48] justify-end items-center p-2 gap-4">
      {/* <TopMenuItem href="/" title="Home" /> */}
      <TopMenuItem href="/booking" title="Booking" />
      <img src="/logo.png" alt="logo" className="w-[40px] h-[40px]" />
    </div>
  );
};

export default TopMenu;
