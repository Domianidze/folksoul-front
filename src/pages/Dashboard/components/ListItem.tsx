import { useLocation, NavLink } from 'react-router-dom';

import { getIsActive } from '../helpers';

const ListItem: React.FC<{
  id: string;
  to: string;
  img: string;
  text: string;
  end?: boolean;
}> = (props) => {
  const pathname = useLocation().pathname;
  const isActive = getIsActive(props.to, pathname);

  return (
    <li
      id={props.id}
      className={`my-4 w-full h-12 ${isActive ? 'bg-content-white' : ''}`}
    >
      <NavLink
        to={props.to}
        className={`px-12 w-full h-full flex items-center text-lg ${
          isActive ? 'text-black' : 'text-white'
        }`}
      >
        <img src={props.img} alt='main' className='pb-2 pr-3' />
        {props.text}
      </NavLink>
    </li>
  );
};

export default ListItem;
