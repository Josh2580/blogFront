import { Carousel } from "../components/Carousel";
import { FirstCard } from "../components/FirstCard";
import { FirstDual } from "../components/FirstDual";

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Carousel />
      <FirstDual />
      <FirstCard />
    </div>
  );
};
