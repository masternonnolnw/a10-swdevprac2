import { FC } from "react";
import Card from "./Card";

interface HospitalCatalogProps {
  hospitalsJson?: HospitalJson;
}

const HospitalCatalog: FC<HospitalCatalogProps> = ({ hospitalsJson }) => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-[1500px] mx-auto">
      {hospitalsJson?.data?.map((hospital) => (
        <Card
          key={hospital.id}
          hid={hospital.id}
          hospitalName={hospital.name}
          imgSrc={hospital.picture}
        />
      ))}
    </div>
  );
};

export default HospitalCatalog;
