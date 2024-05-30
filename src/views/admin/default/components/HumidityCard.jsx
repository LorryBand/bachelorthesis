import React, { useEffect, useState } from "react";
import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "components/card";
import { LineChart } from "@mui/x-charts/LineChart";
import { useSelector } from "react-redux";
import axios from "axios";

const TemperatureCard = () => {
  const userData = useSelector((state) => state.auth?.data);
  const isAuth = useSelector((state) => state.auth?.data);
  const [temperatureData, setTemperatureData] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemperatureData = async () => {


      try {
        const response = await axios.get(
          `http://localhost:4444/hum/${userData.deviceId}`
        );
        const data = response.data;

        // Ensure the data is in the correct format
        const tempData = data.map((d) => parseFloat(d.temperature));
        const timeData = data.map(
          (d) =>
            new Date(d.timestamp).getHours() +
            new Date(d.timestamp).getMinutes() / 60
        );

        setTemperatureData(tempData);
        setTimestamps(timeData);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching temperature data:", error);
      }
    };

    fetchTemperatureData();
  }, [userData]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
            Humidity
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">Change (24h)</p>
            <div className="flex flex-row items-center justify-center">
            </div>
          </div>
        </div>
        {isAuth ? (


          
            <LineChart
              height={200}
              xAxis={[{ data: timestamps }]}
              series={[
                {
                  data: temperatureData,
                },
              ]}

            />

        ) : (

          <LineChart
          height={200}
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
          />

        )}
      </div>
    </Card>
  );
};

export default TemperatureCard;
