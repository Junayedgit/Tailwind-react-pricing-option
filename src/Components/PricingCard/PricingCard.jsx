import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ option }) => {
  const { name, price, description, features } = option;
  return (
    <div className="border-2 border-purple-400 m-4 p-4 rounded-lg">
      <div>
        {/* card header */}
        <h1 className="text-5xl font-bold">{name}</h1>
        <h4 className="text-2xl font-bold">{price}</h4>
      </div>

      {/*  card body */}

      <div className="mt-4">
        <p>{description}</p>
        <div className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature}></PricingFeature>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
