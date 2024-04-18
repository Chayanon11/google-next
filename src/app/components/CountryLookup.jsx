"use client";

import { useState, useEffect } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/thailand"
      )
        .then((res) => res.json())
        .then((data) => data[0].name.common);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);

  return (
    <>
      <h1>{country}</h1>
    </>
  );
}
