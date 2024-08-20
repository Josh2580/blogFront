import { ThirdCard } from "./ThirdCard";
import { DeatilsComp } from "./DeatilsComp";

export const DetailsFirstDual = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full  mx-auto bg-white shadow-md rounded-lg p-6  ">
        <DeatilsComp />
      </div>
      <div className=" bg-white shadow-md rounded-lg p-6 lg:w-2/5 xl:w-2/5 h-fit sm:w-full gap-6 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-1">
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
      </div>
    </div>
  );
};
