import React, { useState } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import SelectOne from "./Select/SelectOne";
import { fetchCharacters } from "../Features/Actions/CharactersActions";
import { updateFilters } from "../Features/Reducers/CharactersSlice.js";

function FilterSection() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [raceFilter, setRaceFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const { filters, limit } = useSelector((state) => state.characters);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  const handleGenderFilter = (e) => {
    setGenderFilter(e.target.value);
  };
  const handleRaceFilter = (values) => {
    if (values.length <= 2) {
      setRaceFilter(values);
    }
  };
  const options = [
    { label: "Human", value: "Human" },
    { label: "Men", value: "Men" },
    { label: "Dwarves", value: "Dwarves" },
    { label: "Elves", value: "Elves" },
    { label: "Elf", value: "Elf" },
    { label: "Ainur", value: "Ainur" },
    { label: "Hobbit", value: "Hobbit" },
    { label: "Urulóki", value: "Urulóki" },
    { label: "Great Spiders", value: "Great Spiders" },
    { label: "Stone-trolls", value: "Stone-trolls" },
  ];

  const handleSubmit = () => {
    dispatch(
      updateFilters({
        name: search,
        sort: sortBy === "Ascending" ? "asc" : "desc",
        race: raceFilter,
        gender: genderFilter === "Any" ? "" : genderFilter,
        page: 1,
      })
    );
    dispatch(fetchCharacters({ filters, limit }));
  };
  const handleReset = () => {
    setSearch("");
    setSortBy("");
    setRaceFilter([]);
    setGenderFilter("");
    dispatch(
      fetchCharacters({
        filters: { name: "", sort: "", race: [], gender: "" },
        limit: 10,
      })
    );
  };

  return (
    <>
      <div className=" flex flex-col sm:flex-row   w-full   sm:py-7 sm:px-9 ">
        <div className="sm:w-[60%] flex  w-full  space-x-4 px-3 sm:px-12 justify-center items-center">
          <label htmlFor="">Search</label>

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="border border-black  p-1 rounded-lg w-full "
            placeholder="By Name "
          />
        </div>
        <div className="sm:w-[40%] w-full mt-2 px-3 sm:mt-0 space-x-4 flex sm:ml-24  items-center ">
          <SelectOne
            value={sortBy}
            handleFuction={handleSort}
            label={"Sort by"}
            options={["Ascending", "Descending"]}
          />
        </div>
      </div>

      <div className=" flex flex-col sm:flex-row space-y-2 sm:space-y-0  w-full mt-2 sm:mt-0   sm:py-7 sm:px-9 ">
        <div className="sm:w-1/3 flex sm:justify-center items-center px-3 space-x-3">
          <label htmlFor="" className="mr-4 sm:mr-0">
            Race
          </label>
          <div className="w-60  ">
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
                border: "1px solid",
                cursor: "pointer",
                borderRadius: "7px",
              }}
              placeholder="Please select"
              value={raceFilter}
              onChange={handleRaceFilter}
              options={options}
            />
          </div>
        </div>
        <div className="sm:w-1/3 flex sm:justify-center items-center px-3 space-x-3">
          <SelectOne
            value={genderFilter}
            handleFuction={handleGenderFilter}
            label={"Gender"}
            options={["Male", "Female", "Any"]}
          />
        </div>
        <div className="sm:w-1/3  flex justify-center space-x-4">
          <button
            onClick={handleSubmit}
            className="px-5 py-1 sm:py-1 border-black  border bg-white hover:border-black"
          >
            submit
          </button>
          <button
            onClick={handleReset}
            className="px-5 py-1 sm:py-1 border-black  border bg-white hover:border-black"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
