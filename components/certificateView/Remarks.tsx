import React from "react";

import ChatIcon from "@heroicons/react/outline/ChatIcon";

function Remarks({ remarks }: { remarks: string }) {
  return (
    <div className="shadow-xl py-8 px-4 rounded">
      <div className="flex flex-row items-center gap-2">
        <h5 className="font-bold text-gray-500">Remarks</h5>
        <ChatIcon className="w-5 text-gray-600" />
      </div>

      <p className="font-light text-gray-700 text-md mt-4">{remarks}</p>
    </div>
  );
}

export default Remarks;
