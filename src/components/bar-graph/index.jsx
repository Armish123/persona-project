import React, { useEffect, useState } from "react";
import {
  getDateFilteredData,
  getLargestDate,
  getSmallestDate,
  isHomePage,
} from "../../utils/commonUtils";
import { FIELD_TYPES } from "../../constants/commonConstants.js";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { AdvertiserData } from "../../constants/AdvertiserData.js";
import DateRangeSelector from "../date-range";
Chart.register(...registerables);

export const BarGraph = ({ fieldType = FIELD_TYPES.CTR }) => {
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
        backgroundColor: "rgba(219, 79, 142, 0.77)",
        borderColor: "rgba(219, 79, 79, 0.77)",
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
    <div>
      {!isHomePage() && (
        <DateRangeSelector
          dateChangeHandler={dateChangeHandler}
          minDate={minDateValue}
          maxDate={maxDateValue}
        />
      )}

      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "CTR",
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
