"use client";

import { useEffect, useState } from "react";

export default async function getHospitals(): Promise<HospitalJson> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    "https://vaccine-app-backend-six.vercel.app/api/v1/hospitals"
  );

  const data = await response.json();

  return data;
}
