"use client";

import getHospital from "@/libs/getHospital";
import Image from "next/image";

const HospitalDetailPage = async ({ params }: { params: { hid: string } }) => {
  const hospitalData = await getHospital(params.hid);

  return (
    <div className="flex flex-row gap-2 p-5">
      <Image
        src={hospitalData?.data.picture}
        alt={hospitalData?.data.name}
        className="w-1/2"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2 text-black">
        <h1>{hospitalData?.data.name}</h1>
        <p>
          <strong>Address:</strong> {hospitalData?.data.address}
        </p>
        <p>
          <strong>District:</strong> {hospitalData?.data.district}
        </p>
        <p>
          <strong>Postal:</strong> {hospitalData?.data.postalcode}
        </p>
        <p>
          <strong>Tel:</strong> {hospitalData?.data.tel}
        </p>
      </div>
    </div>
  );
};

export default HospitalDetailPage;
