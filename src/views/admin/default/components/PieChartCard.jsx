import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "components/card";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartCard = () => {
  const userData = useSelector((state) => state.auth?.data);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const isAuth = useSelector((state) => state.auth?.data);
  useEffect(() => {
    const fetchTemperatureData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4444/mq5/${userData.deviceId}`
        );
        const data = response.data;
        console.log(data);

        // Ensure the data is in the correct format and sort it
        const zeros = data.filter((value) => value.temperature === 0).length;
        const ones = data.filter((value) => value.temperature === 1).length;

        console.log(zeros);

        const total = zeros + ones;
        const zeroPercentage = ((zeros / total) * 100).toFixed(2);
        const onePercentage = ((ones / total) * 100).toFixed(2);

        setChartData([
          { id: 0, value: parseFloat(zeroPercentage), label: "Zeros" },
          { id: 1, value: parseFloat(onePercentage), label: "Ones" },
        ]);
      } catch (error) {
        console.error("Error fetching temperature data:", error);
        setError(error);
      }
    };

    if (userData) {
      fetchTemperatureData();
    }
  }, [userData]);

  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Environmental Condition (24h)
          </h4>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        {isAuth ? (
          <PieChart
            series={[
              {
                data: chartData,
              },
            ]}
            className="h-full w-full"
          />
        ) : (
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                ],
              },
            ]}
            height={200}
          />
        )}
      </div>
    </Card>
  );
};

export default PieChartCard;
