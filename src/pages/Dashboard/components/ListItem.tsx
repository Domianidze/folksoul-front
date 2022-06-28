import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ListItem: React.FC<{
  to: string;
  img: string;
  text: string;
}> = (props) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <li className={`my-4 w-full h-12 ${active ? 'bg-content-white' : ''}`}>
      <NavLink
        end
        to={props.to}
        className={({ isActive }) => {
          setActive(isActive ? true : false);
          return `px-12 w-full h-full flex items-center text-lg ${
            isActive ? 'text-black' : 'text-white'
          }`;
        }}
      >
        <img src={props.img} alt='main' className='pb-2 pr-3' />
        {props.text}
      </NavLink>
    </li>
  );
};

export default ListItem;
