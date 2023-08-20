import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
const TableRow = ({ char, index }) => {
  return (
    <tr>
      <td class="p-2 whitespace-nowrap">
        <div class="flex items-center">
          <div class="font-medium text-gray-800">{index + 1}</div>
        </div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left font-medium">
          {char.name ? char.name : "Not available"}
        </div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left ">{char.race ? char.race : "Not available"}</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class=" text-center">
          {char.gender ? char.gender : "Not available"}
        </div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <Link to={`/characterDetails/${char._id}`}>
          <div class=" hover:text-slate-800 font-medium text-center flex justify-center items-center gap-2">
            <span>Details</span>

            <ArrowRightOutlined style={{ color: "gray" }} />
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
