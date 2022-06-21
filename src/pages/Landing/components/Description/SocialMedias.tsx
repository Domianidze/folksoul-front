import { SocialMediaType } from './Types';

const SocialMedias: React.FC<{
  items: SocialMediaType[];
}> = (props) => {
  return (
    <div className='py-5 w-full flex justify-center items-center'>
      {props.items.map((item, index) => {
        return (
          <a
            href={item.href}
            className='px-5 duration-500 hover:opacity-80'
            key={index}
          >
            <img src={item.img} alt={item.name}></img>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedias;
