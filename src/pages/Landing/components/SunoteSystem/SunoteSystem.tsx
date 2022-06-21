import { SunoteImg } from 'assets';
import { Artist } from './';
import { ArtistType } from './Types';

const SunoteSystem: React.FC<{
  items: ArtistType[];
}> = (props) => {
  return (
    <div className='relative flex justify-center items-center'>
      {props.items.map((item, index) => {
        return (
          <Artist
            name={item.name}
            img={item.img}
            color={item.color}
            distance={item.distance}
            key={index}
          />
        );
      })}
      <img src={SunoteImg} alt='sunote'></img>
    </div>
  );
};

export default SunoteSystem;
