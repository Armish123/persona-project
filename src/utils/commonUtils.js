import { AdvertiserData } from "../constants/AdvertiserData.js";
import { FIELD_TYPES, PATH_NAME } from "../constants/commonConstants.js";

export const getDateFilteredData = (
  fieldType,
  baseField = FIELD_TYPES.DATE,
  data = AdvertiserData,
  startDate,
  endDate,
  Advertiser
) => {
  let filteredData = data;
  if (startDate && endDate) {
    filteredData = data.filter((dat) => {
      const date = new Date(dat.Date);
      if (date >= startDate && date <= endDate) return dat;
    });
    console.log("temp");
  }
  if (Advertiser && Advertiser !== "All") {
    filteredData = data.filter((dat) => {
      if (dat.Advertiser === Advertiser) return dat;
    });
  }
  const xData = filteredData.map((dat) => dat[baseField]);
  const yData = filteredData.map((dat) => dat[fieldType]);

  return { xData, yData };
};

export const getSmallestDate = (dateArray) => {
  const dateValues = dateArray.map((date) => new Date(date).getTime());
  const smallestDateValue = dateValues.reduce(
    (min, val) => (val < min ? val : min),
    Infinity
  );
  const smallestDate = new Date(smallestDateValue);
  return smallestDate;
};
export const getLargestDate = (dateArray) => {
  const dateValues = dateArray.map((date) => new Date(date).getTime());
  const largestDateValue = dateValues.reduce(
    (max, val) => (val > max ? val : max),
    0
  );
  const largestDate = new Date(largestDateValue);
  return largestDate;
};

export const isHomePage = () => window.location.pathname === PATH_NAME.HOME;
