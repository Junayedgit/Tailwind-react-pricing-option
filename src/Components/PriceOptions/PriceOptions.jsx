import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PriceOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-8">
        Get Our Membership
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {pricingData.map((option) => (
          <PricingCard key={option.id} option={option}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
