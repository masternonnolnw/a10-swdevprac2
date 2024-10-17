"use client";

import { useReducer, useState } from "react";
import Card from "./Card";

const initialState = new Map<string, number>([
  ["Chulalongkorn Hospital", 0],
  ["Rajavithi Hospital", 0],
  ["Thammasat University Hospital", 0]
]);

// Reducer function to manage state changes
function ratingReducer(
  state: Map<string, number>,
  action: { type: string; hospital: string; rating: number }
) {
  switch (action.type) {
    case "update":
      const newState = new Map(state);
      newState.set(action.hospital, action.rating ?? 0);
      return newState;
    case "remove":
      const updatedState = new Map(state);
      updatedState.delete(action.hospital);
      return updatedState;
    default:
      return state;
  }
}

export const MOCK_HOSPITALS = [
  { hid: "001", name: "Chulalongkorn Hospital", imgSrc: "/chula.jpg" },
  { hid: "002", name: "Rajavithi Hospital", imgSrc: "/rajavithi.jpg" },
  {
    hid: "003",
    name: "Thammasat University Hospital",
    imgSrc: "/thammasat.jpg"
  }
];

const CardPanel = () => {
  const hospitals = MOCK_HOSPITALS;

  const [ratings, dispatch] = useReducer(ratingReducer, initialState);

  const handleRatingChange = (hospital: string, rating: number) => {
    dispatch({ type: "update", hospital, rating });
  };

  const [hideHospital, setHideHospital] = useState<String[]>([]);

  return (
    <div className="grid grid-cols-3 gap-4 max-w-[1500px] mx-auto">
      {hospitals.map((hospital) => (
        <Card
          key={hospital.hid}
          hospitalName={hospital.name}
          imgSrc={hospital.imgSrc}
          hospitalRating={ratings.get(hospital.name) ?? 0}
          onRatingChange={handleRatingChange}
          hid={hospital.hid}
        />
      ))}

      {/* display hospital name with rating */}
      <div className="col-span-3 text-black">
        <h2 className="text-center">Hospital Ratings</h2>
        <ul>
          {Array.from(ratings).map(([hospital, rating]) =>
            hideHospital.includes(hospital) ? null : (
              <li
                key={hospital}
                onClick={() => setHideHospital([...hideHospital, hospital])}
                className="cursor-pointer"
                data-testid={hospital}
              >
                {hospital}: {rating}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CardPanel;
