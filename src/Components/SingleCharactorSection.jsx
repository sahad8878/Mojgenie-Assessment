import React from "react";
import { useSelector } from "react-redux";
import SingleDetails from "./SingleDetails/SingleDetails";
const SingleCharactorSection = () => {
  const character = useSelector((state) => state.characterDetails.character);
  const data = [
    {
      label: ["Name", "WikiUrl"],
      value: [character?.name, character?.wikiUrl],
    },
    { label: ["Race", "Gendar"], value: [character?.race, character?.gender] },
    { label: ["Height", "Hair"], value: [character?.height, character?.hair] },
    { label: ["Realm", "Birth"], value: [character?.realm, character?.spouse] },
    { label: ["Spouse", "Death"], value: [character?.realm, character?.death] },
  ];
  return (
    <>
      <div className="shadow-2xl     md:space-y-10 p-8 md:p-12">
        {data.map((ele) => (
          <SingleDetails label={ele.label} detail={ele.value} />
        ))}
      </div>
    </>
  );
};

export default SingleCharactorSection;
