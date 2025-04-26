import HomeProductsComponent from './home/producsts';
import HomePageSliderComponent from './home/slider';
import FiltersComponent from '@components/filters';
export default function HomePage() {
  return (
    <>
      <HomePageSliderComponent />
      <FiltersComponent />
      <HomeProductsComponent />
    </>
  );
}
