import { Link } from 'react-router-dom';

interface Icon {
  name: string;
  iconTag: JSX.Element;
  link: string;
}

interface PropTypes {
  icons: Array<Icon>;
}

function SocialIcons({ icons }: PropTypes) {
  return (
    <div>
      {icons.map((icon) => (
        <span
          key={icon.name}
          className="bg-purple text-white px-[10px] py-2 cursor-pointer inline-flex rounded-full mx-1.5 text-xl hover:bg-red-500 duration-300"
        >
          <Link to={icon.link} target='_blank' className="h-[23px]">
            {icon.iconTag}
          </Link>
        </span>
      ))}
    </div>
  );
}

export default SocialIcons;
