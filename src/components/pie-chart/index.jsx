import React from "react";
import {
  COUNTRY_DATA_FIELD_TYPES,
  FIELD_TYPES,
} from "../../constants/commonConstants";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { getDateFilteredData } from "../../utils/commonUtils";
import { CountriesData } from "../../constants/CountriesData";
Chart.register(...registerables);

export const PieChart = ({
  fieldType = COUNTRY_DATA_FIELD_TYPES.IMPRESSIONS,
  baseField = COUNTRY_DATA_FIELD_TYPES.COUNTRY,
}) => {
  const { xData, yData } = getDateFilteredData(
    fieldType,
    baseField,
    CountriesData
  );
  const state = {
    labels: xData,
    datasets: [
      {
        label: fieldType,
        backgroundColor: [
          "Indigo",
          "Purple",
          "Yellow",
          "Teal",
          "Red",
          "Navy",
          "Brown",
        ],
        data: yData,
      },
    ],
  };
  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Impressions",
            fontSize: 20,
          },
        }}
      />
    </div>
  );
};
