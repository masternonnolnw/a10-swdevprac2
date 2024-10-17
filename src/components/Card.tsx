import React from "react";
import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import Image from "next/image";

interface CardProps {
  hospitalName: string;
  imgSrc: string;
  hospitalRating?: number;

  onRatingChange?: (hospital: string, rating: number) => void;

  hid: string;
}

const Card = ({
  hospitalName,
  imgSrc,
  hospitalRating,
  hid,
  onRatingChange
}: CardProps) => {
  return (
    <InteractiveCard hid={hid}>
      <Image src={imgSrc} alt="Vaccine Information" width={300} height={300} />
      <div className={styles.textContainer}>
        <h2>{hospitalName}</h2>
        <p>description</p>
      </div>
      {hospitalRating && (
        <Rating
          id={`${hospitalName} Rating`}
          name={`${hospitalName} Rating`}
          data-testid={`${hospitalName} Rating`}
          value={hospitalRating}
          onChange={(e, newValue) => {
            onRatingChange && onRatingChange(hospitalName, newValue ?? 0);
          }}
        />
      )}
    </InteractiveCard>
  );
};

export default Card;
