interface TopMenuItemProps {
  title: string;
  href: string;
}

const TopMenuItem = ({ title, href }: TopMenuItemProps) => {
  return (
    <a href={href} className="text-white hover:text-gray-400 hover:underline">
      {title}
    </a>
  );
};

export default TopMenuItem;
