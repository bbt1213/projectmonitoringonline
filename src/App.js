import "./App.css";
import { React, useState } from "react";
import BarChart from "./components/common/BarChart";
import { UserData } from "./SampleData/Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Actual",
        data: UserData.map((data) => data.Actual),
        backgroundColor: ["blue"],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Target",
        data: UserData.map((data) => data.Target),
        backgroundColor: ["green"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div style={{ width: 700 }}>
      {" "}
      <BarChart chartData={userData} />
    </div>
  );
}

export default App;
