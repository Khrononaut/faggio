import React, { useEffect } from "react";
import Cal from "../components/bookings/bookingsCal/Cal";
import CalEditControls from "../components/bookings/bookingsCal/CalEditControls";
import ContextBookingsProvider from "../components/contexts/ContextBookings";

export default function Bookings() {
  useEffect(() => {}, []);
  return (
    <ContextBookingsProvider>
      <>
        <Cal />;
        <CalEditControls />
      </>
    </ContextBookingsProvider>
  );
}
