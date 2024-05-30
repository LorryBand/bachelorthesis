import React from "react";
import defaultavatar from "assets/img/avatars/avatar2.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../../../redux/slices/auth";

const Banner = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(
    (state) => state.auth.data
  );

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={defaultavatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {isAuth ? <>{userData.fullName}</> : <>Guest</>}
        </h4>
        <p className="text-base font-normal text-gray-600">User</p>
      </div>

      {/* Post followers */}

    </Card>
  );
};

export default Banner;
