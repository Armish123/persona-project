import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangeSelector = ({ minDate, maxDate, dateChangeHandler }) => {
  const [data, setData] = useState({
    startDate: minDate,
    endDate: maxDate,
    key: "selection",
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (item) => {
    console.log({ item });
    const itemData = item.selection;
    setData((state) => ({
      ...state,
      startDate: itemData?.startDate,
      endDate: itemData?.endDate,
    }));
    dateChangeHandler(itemData?.startDate, itemData?.endDate);
  };
  return (
    <div>
      {!showCalendar && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => handleChange(item)}
          moveRangeOnFirstSelection={false}
          ranges={[data]}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
    </div>
  );
};

export default DateRangeSelector;
