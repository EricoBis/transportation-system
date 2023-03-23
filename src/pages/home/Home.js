import React from "react";
import { useEffect, useState } from "react";

const FILE_PATH = "/data/DNIT-Distancias.csv";

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(FILE_PATH)
      .then((res) => res.text())
      .then((text) => {
        parseCSV(text);
      });
  }, []);

  const parseCSV = (csv) => {
    let [header, ...splitRows] = csv.split(/\r?\n/);
    header = header.split(";");

    const rows = {};
    splitRows.forEach((row, index) => {
      const columns = {};

      row.split(";").forEach((column, index) => {
        columns[header[index]] = column;
      });

      rows[header[index]] = columns;
    });
    setData(rows);
  };

  return <div>Home</div>;
}

export default Home;
