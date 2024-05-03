import "./App.css";
import { Main } from "./Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LineGraph } from "./components/line-graph";
import { FIELD_TYPES, PATH_NAME } from "./constants/commonConstants";
import { BarGraph } from "./components/bar-graph";
import { PieChart } from "./components/pie-chart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH_NAME.HOME} element={<Main />} />
        <Route
          path={PATH_NAME.CLICKS}
          element={<LineGraph fieldType={FIELD_TYPES.CLICKS} />}
        />
        <Route
          path={PATH_NAME.IMPRESSIONS}
          element={<LineGraph fieldType={FIELD_TYPES.IMPRESSIONS} />}
        />
        <Route path={PATH_NAME.CTR} element={<BarGraph />} />
        <Route path={PATH_NAME.COUNTRY} element={<PieChart />} />
      </Routes>
    </Router>
  );
}

export default App;
