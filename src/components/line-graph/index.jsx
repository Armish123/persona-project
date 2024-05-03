import React, { useEffect, useState } from "react";
import { AdvertiserData } from "../../constants/AdvertiserData.js";
import {
  getDateFilteredData,
  getLargestDate,
  getSmallestDate,
  isHomePage,
} from "../../utils/commonUtils";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import DateRangeSelector from "../date-range";
import { FIELD_TYPES } from "../../constants/commonConstants.js";
Chart.register(...registerables);

export const LineGraph = ({ fieldType }) => {
  const [graphData, setGraphData] = useState({ xData: [], yData: [] });
  const [calendarDate, setCalendarDate] = useState({
    startDate: "",
    endDate: "",
  });

  const getAndSetGraphData = () => {
    const { xData, yData } = getDateFilteredData(
      fieldType,
      FIELD_TYPES.DATE,
      AdvertiserData,
      calendarDate.startDate,
      calendarDate.endDate
    );
    setGraphData(() => ({
      xData,
      yData,
    }));
  };
  const state = {
    labels: graphData.xData,
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
        fill: false,
        lineTension: 0.5,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: graphData.yData,
      },
    ],
  };

  const dateChangeHandler = (calendarStartDate, calendarEndDate) => {
    setCalendarDate(() => ({
      startDate: calendarStartDate,
      endDate: calendarEndDate,
    }));
  };

  const minDateValue = getSmallestDate(AdvertiserData.map((data) => data.Date));
  const maxDateValue = getLargestDate(AdvertiserData.map((data) => data.Date));

  useEffect(() => {
    getAndSetGraphData();
  }, [calendarDate]);

  return (
    <div className="bg-[#fff]">
      {!isHomePage() && (
        <DateRangeSelector
          dateChangeHandler={dateChangeHandler}
          minDate={minDateValue}
          maxDate={maxDateValue}
        />
      )}
      <Line
        data={state}
        options={{
          title: {
            display: true,
            // text: "Class Strength",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
