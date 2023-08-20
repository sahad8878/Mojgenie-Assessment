import TableRow from "./TableRow";
import { useSelector } from "react-redux";

const Table = () => {
  const characters = useSelector((state) => state.characters.characters);

  return (
    <table class="table-auto w-full ">
      <thead class="text-sm font-bold uppercase text-slate-800  bg-gray-200">
        <tr>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">ID</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Name</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Race</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-center">Gender</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-center">Action</div>
          </th>
        </tr>
      </thead>

      <tbody class="text-sm divide-y divide-gray-100 ">
        {characters.map((char, index) => (
          <TableRow char={char} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
