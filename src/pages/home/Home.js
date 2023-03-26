import React from "react";
import { useEffect, useContext} from "react";
import { DataContext } from "../../contexts/DataContext";
import TransportRegister from "../tabs/TransportRegister";

const FILE_PATH = "/data/DNIT-Distancias.csv";

function Home() {
  const { setCities, setCitiesDistances }= useContext(DataContext);

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
        const cityColumnKey = header[index];
        columns[cityColumnKey] = column;
      });

      const cityRowKey = header[index];
      rows[cityRowKey] = columns;
    });
    setCitiesDistances(rows);
    setCities(header);
  };
  return <div>{<TransportRegister/>}</div>;
}

export default Home;
