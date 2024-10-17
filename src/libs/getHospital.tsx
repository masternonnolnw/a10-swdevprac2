"use client";

import { useEffect, useState } from "react";

export default async function getHospital(
  id: string
): Promise<SingleHospitalJson> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://vaccine-app-backend-six.vercel.app/api/v1/hospitals/${id}`
  );
  const data = await response.json();

  return data;
}
