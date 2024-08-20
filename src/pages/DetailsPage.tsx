import { DetailsSecondDual } from "../components/DetailsSecondDual";
import { SecondCard } from "../components/SecondCard";
import { DetailsFirstDual } from "./../components/DetailsFirstDual";

export const DetailsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <DetailsFirstDual />
      <div className=" grid  lg:grid-cols-4  gap-6">
        <SecondCard />
        <SecondCard />
        <SecondCard />
        <SecondCard />
      </div>
      <DetailsSecondDual />
    </div>
  );
};
