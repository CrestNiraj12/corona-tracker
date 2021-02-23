import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchedData = () =>
  axios
    .get(url)
    .then((res) => {
      const { confirmed, recovered, deaths, lastUpdate } = res.data;
      return { confirmed, recovered, deaths, lastUpdate };
    })
    .catch((err) => err);

export const fetchDailyData = () =>
  axios
    .get(`${url}/daily`)
    .then((res) =>
      res.data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }))
    )
    .catch((err) => err);

export const fetchCountries = () =>
  axios
    .get(`${url}/countries`)
    .then((res) => {
      const { countries } = res.data;
      return countries.map((country) => country.name);
    })
    .catch((err) => err);
