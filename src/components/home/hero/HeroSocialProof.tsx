import { Userspng } from "@/assets";
import React from "react";


/*

HeroSocialProof
---------
* Displays socail proof under description

*/
const HeroSocialProof: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
      <img src={Userspng} alt="" className="w-full h-full" />
    </div>
  );
};

export default HeroSocialProof;
