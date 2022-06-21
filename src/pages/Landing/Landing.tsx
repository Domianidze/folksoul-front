import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  SabaAvatar,
  VanoAvatar,
  TamarAvatar,
  BekaAvatar,
  BeqaAvatar,
} from 'assets';
import {
  Header,
  SunoteSystem,
  DescriptionCard,
  SocialMedias,
} from './components';

const Landing: React.FC = () => {
  return (
    <div className='w-100 h-screen max-h-screen bg-primary overflow-hidden'>
      <Header />
      <div className='pt-20 w-full h-full flex'>
        <div className='h-full w-1/2 flex justify-center items-center'>
          <SunoteSystem
            items={[
              {
                name: 'საბა',
                img: SabaAvatar,
                color: '#EB5757',
                distance: 64,
              },
              {
                name: 'ვანო',
                img: VanoAvatar,
                color: '#9B51E0',
                distance: 128,
              },
              {
                name: 'თამარ',
                img: TamarAvatar,
                color: '#2D9CDB',
                distance: 192,
              },
              {
                name: 'ბექა',
                img: BekaAvatar,
                color: '#828282',
                distance: 256,
              },
              {
                name: 'ბექა',
                img: BeqaAvatar,
                color: '#333333',
                distance: 320,
              },
            ]}
          />
        </div>
        <div className='pt-20 h-full w-1/2 flex flex-col justify-center items-center'>
          <DescriptionCard
            paragraphs={[
              'დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“ ეწოდება.',
              'დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში — ორს. ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან და სწრაფად.',
            ]}
          />
          <SocialMedias
            items={[
              {
                name: 'Facebook',
                img: FacebookIcon,
                href: 'https://www.facebook.com/',
              },
              {
                name: 'Youtube',
                img: YoutubeIcon,
                href: 'https://www.youtube.com/',
              },
              {
                name: 'Twitter',
                img: TwitterIcon,
                href: 'https://www.twitter.com/',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
