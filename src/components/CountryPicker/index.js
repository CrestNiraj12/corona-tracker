import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries());
    };

    fetchApi();
  }, []);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect>
          <option value="global">Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country.toLowerCase()}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
