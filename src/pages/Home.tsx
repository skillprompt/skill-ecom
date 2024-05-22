import Banner from "../components/Banner";
import Card from "../components/Card";
import { CarouselComponent } from "../components/CarouselComponent";
import { CategoryCard } from "../components/CategoryCard";
import DiscountCard from "../components/DiscountCard";

import { ProductCards } from "../components/ProductCards";

export function HomePage() {
  return (
    <>
      <CarouselComponent />
      <CategoryCard />
      <ProductCards />
      <Card />
      <DiscountCard />
      <Banner />
    </>
  );
}
