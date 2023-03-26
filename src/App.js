import { DataProvider } from "./contexts/DataContext";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <GlobalStyle />
        <Header/>
        <Outlet />
      </DataProvider>
    </div>
  );
}

export default App;
