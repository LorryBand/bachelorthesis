import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

const Marketplace = () => {
  const userData = useSelector((state) => state.auth.data);
  const [deviceId, setDeviceId] = useState("");
  console.log(userData);

  const handleChange = (event) => {
    setDeviceId(event.target.value);
  };

  const handleInputBlur = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4444/auth/${userData._id}/${deviceId}`);
      console.log("Device ID updated:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error updating device ID:", error);
    }

  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFT Banner */}
        <Banner />

        {/* NFT Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            IoT Devices
          </h4>
        </div>

        {/* Conditional rendering based on deviceId */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {userData && userData.deviceId ? (
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="SEHM v1"
              author="SEHM Systems"
              price={userData.deviceId}
              image={NFt3}
            />
          ) : (
            <form onSubmit={handleInputBlur}>
              <input 
                onChange={handleChange}
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your device ID"
              />
              <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">Submit</button>
            </form>
          )}
        </div>
      </div>

      {/* Right side section */}
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
      </div>
    </div>
  );
};

export default Marketplace;
