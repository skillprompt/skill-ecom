import Banner from "./Banner";
import Card from "./Card";
import { CarouselComponent } from "./CarouselComponent";
import { CategoryCard } from "./CategoryCard";
import { ProductCards } from "./ProductCards";

export function HomePageContainer() {
  return (
    <>
      <CarouselComponent />
      <CategoryCard />
      <ProductCards />
      <Card />
      <Banner />
    </>
  );
}
