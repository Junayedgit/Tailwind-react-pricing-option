import React from "react";
import { CircleCheckBig } from "lucide-react";

const PricingFeature = ({ feature }) => {
  return (
    <p className="flex items-center gap-2">
      <CircleCheckBig></CircleCheckBig>
      {feature}
    </p>
  );
};

export default PricingFeature;
