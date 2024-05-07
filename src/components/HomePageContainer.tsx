import Banner from "./Banner";
import Card from "./Card";
import { CarouselComponent } from "./CarouselComponent";
import { CategoryBar } from "./CategoryBar";
import { CategoryCard } from "./CategoryCard";
import { ProductCards } from "./ProductCards";

export function HomePageContainer() {
  return (
    <>
      <CategoryBar />
      <CarouselComponent />
      <CategoryCard />
      <ProductCards />
      <Card />
      <Banner />
    </>
  );
}
