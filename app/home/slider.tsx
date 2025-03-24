import Carousel from '@node_modules/antd/es/carousel';
import Link from '@node_modules/next/link';
interface Sliders {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const sliders: Sliders[] = [
  {
    id: 1,
    title: 'Tin tức 1',
    description: 'Mô tả 1',
    image: 'https://file4.batdongsan.com.vn/2023/06/17/20230617010432-7ec0_wm.jpg',
    link: '/home',
  },
  {
    id: 2,
    title: 'Tin tức 2',
    description: 'Mô tả 2',
    image: 'https://file4.batdongsan.com.vn/2025/03/21/20250321170042-2604_wm.jpg',
    link: '/home',
  },
  {
    id: 3,
    title: 'Tin tức 3',
    description: 'Mô tả 3',
    image: 'https://file4.batdongsan.com.vn/2023/06/17/20230617010432-7ec0_wm.jpg',
    link: '/home',
  },
  {
    id: 4,
    title: 'Tin tức 4',
    description: 'Mô tả 4',
    image: 'https://file4.batdongsan.com.vn/2021/06/18/akCJKkFO/20210618174319-7462.jpg',
    link: '/home',
  },
];
const HomePageSliderComponent = () => {
  return sliders.length === 0 ? (
    <div> no data</div>
  ) : (
    <Carousel
      arrows
      className="client-sliders"
      autoplay={{ dotDuration: true }}
      autoplaySpeed={5000}>
      {sliders.map((slider) => (
        <div
          className="slider-item justify-center items-center"
          key={slider.id}>
          <Link
            className="flex flex-col relative"
            href={slider.link}
            style={{ width: '100%', height: '420px' }}>
            <img
              src={
                slider?.image ||
                'https://staticfile.batdongsan.com.vn/images/ProjectNet/error-image/media-error-image.svg%22'
              }
              alt={slider?.title || 'Bat dong sản'}
              className="slider-image w-full h-full"
              style={{ objectFit: 'cover' }}
            />
            <div className="flex flex-col slider-item-info absolute bottom-0 row-gap-2">
              <h3 className="slider-item-title text-white">{slider?.title}</h3>
              <div className="slider-item-description text-white">{slider?.description}</div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default HomePageSliderComponent;
