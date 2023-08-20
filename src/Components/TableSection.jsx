import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { InfinitySpin } from "react-loader-spinner";

import Table from "./Table/Table";
import SelectOne from "./Select/SelectOne";
import { fetchCharacters } from "../Features/Actions/CharactersActions";
import { updateFilters } from "../Features/Reducers/CharactersSlice.js";

const TableSection = () => {
  const dispatch = useDispatch();
  const { error, limit, total, characters, loading, filters } = useSelector(
    (state) => state.characters
  );
  const { page } = filters;

  const [currentPage, setCurrentPage] = useState(page);
  const [limitState, setLimitState] = useState("10");

  const handlePageChange = (current) => {
    setCurrentPage(current);
    dispatch(updateFilters({ page: currentPage }));
    dispatch(fetchCharacters({ filters, limit: Number(limitState) }));
  };

  const handleLimit = (e) => {
    const newLimit = e.target.value;
    setLimitState(newLimit);
    setCurrentPage(1);
    dispatch(updateFilters({ page: 1 }));
    dispatch(fetchCharacters({ filters, limit: Number(newLimit) }));
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full  h-full mt-24">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center font-semibold text-xl mt-16">
          {error}
        </div>
      ) : characters.length === 0 ? (
        <div className="flex justify-center h-full items-center font-semibold text-2xl mt-36 ">
          No data available
        </div>
      ) : (
        <div class="flex flex-col justify-center h-full">
          <div class="w-full mt-2  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div class="p-3 ">
              <div class="overflow-auto max-h-[400px]">
                <Table />
              </div>
            </div>
          </div>

          {total < 10 ? (
            <div className="h-10 bg-white w-full"></div>
          ) : (
            <div className="w-full flex justify-between p-6 border bg-white">
              <div>
                <Pagination
                  size="small"
                  total={total}
                  showQuickJumper
                  showSizeChanger={false}
                  pageSize={limit}
                  current={page}
                  onChange={handlePageChange}
                />
              </div>
              <div className="flex space-x-2 items-center">
                <SelectOne
                  value={limitState}
                  handleFuction={handleLimit}
                  label={"Limit"}
                  options={["10", "20", "30"]}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TableSection;
