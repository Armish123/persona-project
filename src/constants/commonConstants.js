export const FIELD_TYPES = {
  IMPRESSIONS: "Impressions",
  CLICKS: "Clicks",
  CTR: "CTR (in %)",
  DATE: "Date",
};

export const COUNTRY_DATA_FIELD_TYPES = {
  IMPRESSIONS: "Impressions",
  COUNTRY: "Country",
};

export const PATH_NAME = {
  HOME: "/",
  CLICKS: "/clicks",
  IMPRESSIONS: "/impressions",
  CTR: "/ctr",
  COUNTRY: "/country",
};

export const FIELD_PATH_MAP = {
  [FIELD_TYPES.IMPRESSIONS]: PATH_NAME.IMPRESSIONS,
  [FIELD_TYPES.CLICKS]: PATH_NAME.CLICKS,
  [FIELD_TYPES.CTR]: PATH_NAME.CTR,
  [COUNTRY_DATA_FIELD_TYPES.COUNTRY]: PATH_NAME.COUNTRY,
};
