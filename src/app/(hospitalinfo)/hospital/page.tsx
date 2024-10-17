"use client";

import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

const HospitalPage = async () => {
  const hospitalData = await getHospitals();

  if (!hospitalData?.success) {
    return (
      <LinearProgress className="fixed top-0 left-0 w-full" color="primary" />
    );
  }

  return (
    <div className="w-full min-h-screen bg-white pb-12 flex flex-col gap-5">
      <HospitalCatalog hospitalsJson={hospitalData ?? undefined} />
    </div>
  );
};

export default HospitalPage;
