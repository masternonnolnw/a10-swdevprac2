"use client";

import React, { useState } from "react";
import styles from "./banner.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const Banner: React.FC = () => {
  //   รองรับกำรเปลี่ยนรูปภำพของ Banner เมื่อคลิกลงบน Banner โดยกำรใช้ useState • โดยมีภำพ Banner รวม 4 ภำพ และเมื่อคลิกภำพจะเปลี่ยนเป็นภำพถัดไป เมื่อครบแล้วจะวนกลับมำภำพแรก
  // ไฟล์ภำพเป็น
  // - /img/cover.jpg - /img/cover2.jpg - /img/cover3.jpg - /img/cover4.jpg ให้ /img/cover.jpg

  const images = ["/cover.jpg", "/cover2.jpg", "/cover3.jpg", "/cover4.jpg"];

  const [imageIndex, setImageIndex] = useState(0);

  const handleImageChange = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  return (
    <div className={styles.banner} onClick={handleImageChange}>
      <img
        src={images[imageIndex]}
        alt="Banner Image"
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h1>Vaccine Service Center</h1>
        <p>Providing safe and effective vaccines for all.</p>
      </div>

      <Link href="/hospital" passHref className="absolute bottom-2 right-2">
        <Button variant="outlined" className="bg-white hover:bg-slate-400">
          Select Hospital
        </Button>
      </Link>
    </div>
  );
};

export default Banner;
