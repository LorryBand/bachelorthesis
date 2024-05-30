import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import Switch from "components/switch";
import React from "react";

function Notification() {
  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Notifications
        </h4>

      </div>
      <div className="flex flex-col">
        {/* the custom checkbox desing added in src/index.js */}
        <div className="mt-3 flex items-center gap-3">
          <Switch id="switch1" />
          <label
            for="checkbox1"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Enable Telegram Notifications
          </label>
        </div>
      </div>
    </Card>
  );
}

export default Notification;
