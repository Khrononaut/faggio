import React, { useEffect, useContext } from "react";
import SearchAndSelect from "../../SearchAndSelect";
import useOffice from "../../../stores/SOffices";
import { CBookings } from "../../contexts/CBookings";
import useTheme from "../../../hooks/useTheme";
import useBookings from "../../../stores/SBookings";
import IBooking from "../../../typings/interfaces/IBooking";

export default function BookingsMyHeader() {
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const bookings = useBookings((s) => s.bookings);
  const context = useContext(CBookings);
  const theme = useTheme();
  const c = useContext(CBookings);

  let bookedOffice = bookings.filter((booking: IBooking) => booking.office === c?.locallySelectedOfficeName)

  useEffect(() => {
    context?.setLocallySelectedOfficeName(globallySelectedOfficeName);
  }, []);

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-around rounded-t-lg bg-emerald-900 p-6">
      <div className="flex h-full items-end font-thin text-slate-50">
        <span className="flex w-3/4 flex-wrap items-center">
          Meine{" "}
          <span className="mx-2 font-bold">
            {bookedOffice.length > 1 ? bookedOffice.length : ""}
          </span>
          Buchung{bookings.length !== 1 ? "en" : ""} in
        </span>
        <SearchAndSelect
          value={context?.locallySelectedOfficeName}
          setValue={context!.setLocallySelectedOfficeName}
          listOfValues={allOfficeNames}
          theme={theme}
        />
      </div>
    </div>
  );
}
