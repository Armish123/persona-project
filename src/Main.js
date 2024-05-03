import React from "react";
import { LineGraph } from "./components/line-graph";
import {
  COUNTRY_DATA_FIELD_TYPES,
  FIELD_PATH_MAP,
  FIELD_TYPES,
} from "./constants/commonConstants";
import { BarGraph } from "./components/bar-graph";
import { PieChart } from "./components/pie-chart";

export const Main = () => {
  const handleElementClick = (fieldType) => {
    console.log("abc");
    window.location.href = FIELD_PATH_MAP[fieldType];
  };
  return (
    <>
      <div className="p-6 text-[32px] font-[700] text-center shadow-xl ">
        Ad Network Dashboard
      </div>
      <div className=" h-screen">
        <div className="flex ">
          <div
            className="w-1/2 p-4 cursor-pointer flex justify-center"
            onClick={() => handleElementClick(FIELD_TYPES.CLICKS)}
          >
            <LineGraph fieldType={FIELD_TYPES.CLICKS} />
          </div>
          <div
            className="w-1/2 p-4 cursor-pointer flex justify-center"
            onClick={() => handleElementClick(FIELD_TYPES.IMPRESSIONS)}
          >
            <LineGraph fieldType={FIELD_TYPES.IMPRESSIONS} />
          </div>
        </div>

        <div
          className="p-4 cursor-pointer flex justify-center"
          onClick={() => handleElementClick(FIELD_TYPES.CTR)}
        >
          <BarGraph />
        </div>

        <div
          className="w-full p-4 flex justify-center"
          onClick={() => handleElementClick(COUNTRY_DATA_FIELD_TYPES.COUNTRY)}
        >
          <PieChart />
        </div>
      </div>
    </>
  );
};
