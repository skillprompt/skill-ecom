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
    </>
  );
}
