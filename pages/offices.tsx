import React, { useEffect, useContext, useState } from "react";
import MapOffices from "../components/offices/MapOffices";
import OfficeInformationCard from "../components/offices/OfficeInformationCard";
import useOffice from "../stores/SOffices";

export default function Offices() {
  const globallySelectedOffice = useOffice((s) => s.globallySelectedOffice);
  useEffect(
    () => console.dir(globallySelectedOffice),
    [globallySelectedOffice]
  );
  return (
    <div className="flex w-full grow flex-col items-center items-stretch gap-16">
      <div className="w-full">
        <div className="rounded-t-lg bg-amber-900 p-4">
          <h2 className="text-2xl font-light tracking-widest text-amber-300/50">
            Standort wählen
          </h2>
        </div>
        <div className="bg-gradient-to-b from-amber-700 to-slate-900">
          <MapOffices />
        </div>
      </div>
      <OfficeInformationCard {...globallySelectedOffice} />
    </div>
  );
}
