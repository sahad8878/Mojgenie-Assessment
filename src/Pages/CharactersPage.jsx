import React, { useState, useEffect } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../Features/Actions/CharactersActions";
import TableSection from "../Components/TableSection";
import FilterSection from "../Components/FilterSection";
import DrawerSection from "../Components/DrawerSection";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.characters);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCharacters({ filters: filters, limit: 10 }));
  }, [dispatch]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="p-4 sm:p-6 shadow-lg text-white bg-[#4C516D]  font-bold text-2xl flex justify-between md:justify-center items-center">
        <div className="font-bold text-2xl">Characters</div>
        <div className=" md:hidden flex justify-end ">
          <button onClick={showDrawer} className="p-3">
            <UnorderedListOutlined />
          </button>
        </div>
      </div>
      <DrawerSection onClose={onClose} open={open} />
      <section className="bg-[#B0C4DE] hidden md:block font-semibold">
        <FilterSection />
      </section>
      <section class="antialiased   px-4">
        <TableSection />
      </section>
    </>
  );
};

export default CharactersPage;
