import React from "react";

const PricingCard = ({ option }) => {
  console.log(option);
  return (
    <div className="border-2 border-purple-400 m-4 p-4 rounded-lg">
      <div>
        {/* card header */}
        <h1 className="text-5xl font-bold">{option.name}</h1>
        <h4 className="text-2xl font-bold">{option.price}</h4>
      </div>

      {/*  card body */}

      <div>
        <p>{option.description}</p>
      </div>
    </div>
  );
};

export default PricingCard;
