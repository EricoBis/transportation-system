import { useEffect, useContext, React } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { Flex } from "../../styles";
import Consult from "../tabs/Consult";
import HomeMenu from "../tabs/HomeMenu";
import TransportRegister from "../tabs/TransportRegister";

const FILE_PATH = "/data/DNIT-Distancias.csv";

const TAB = {
  consult: "consult",
  register: "register",
  statistics: "statistics",
};

function Home() {
  const { setCities, setCitiesDistances } =
    useContext(DataContext);

  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");

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
  return (
    <Flex dir="column" align="center" justify="center">
      {!tabParam && <HomeMenu />}
      {tabParam === TAB.consult && <Consult></Consult>}
      {tabParam === TAB.register && <TransportRegister />}
      {tabParam === TAB.statistics && <></>}
    </Flex>
  );
}

export default Home;
