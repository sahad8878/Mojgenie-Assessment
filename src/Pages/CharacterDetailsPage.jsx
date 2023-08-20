import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
import { fetchCharacterDetails } from "../Features/Actions/CharacterDetailsActions";
import SingleCharactorSection from "../Components/SingleCharactorSection";

const CharacterDetailsPage = () => {
  const { charactorId } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetails.character);
  const loading = useSelector((state) => state.characterDetails.loading);
  const error = useSelector((state) => state.characterDetails.error);

  useEffect(() => {
    dispatch(fetchCharacterDetails(charactorId));
  }, [charactorId, dispatch]);

  return (
    <>
      <div className="">
        <div className="p-6 shadow-lg text-white bg-[#4C516D] font-semibold text-2xl flex justify-center items-center">
          Characters &gt; {character?.name}
        </div>
        <div className=" p-7 sm:px-12 md:px-40 sm:pt-20">
          {loading ? (
            <div className="flex justify-center items-center h-full mt-36">
              <InfinitySpin width="200" color="#4fa94d" />
            </div>
          ) : error ? (
            <div className="flex justify-center">{error}</div>
          ) : (
            <SingleCharactorSection />
          )}
          <div className="flex justify-end">
            <Link to="/">
              <button className="p-2 rounded-lg  px-10 mt-6 font-semibold hover:bg-white hover:border hover:border-black bg-[#B0C4DE]">
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetailsPage;
