import React from "react";

import {Drawer } from "antd";

import FilterSection from "./FilterSection";

const DrawerSection = ({ onClose, open }) => {
  return (
    <Drawer
      title={
        <div className="flex justify-between items-center ">
          <div onClick={onClose} className="cursor-pointer text-lg font-bold">
            Characters
          </div>
        </div>
      }
      placement={"top"}
      closable={false}
      height={200}
      onClose={onClose}
      open={open}
      key={"top"}
    >
      <FilterSection />
    </Drawer>
  );
};

export default DrawerSection;
