import React from "react";
import type { Colleague } from "../../pages/api/teams";

export default function UserCardInfo({ forename, surname, office }: Colleague) {
  return (
    <div className="flex h-full flex-col justify-center px-2">
      <div className="flex flex-col gap-2">
        <span className="text-3xl font-thin tracking-wide">{forename}</span>
        <span className="text-xl font-bold uppercase tracking-widest">
          {surname}
        </span>
      </div>
      {/* <div className="flex items-center gap-2">
        {office && (
          <Icon icon="buildingOffice" className="h-6 w-6 opacity-50" />
        )}
        <span className="text-sm tracking-widest">{office}</span>
      </div> */}
    </div>
  );
}
