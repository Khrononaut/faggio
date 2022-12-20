import { useState, useEffect } from "react";
import useCalendar from "../../stores/SCalendar";
import mapCalendar from "../../helpers/mapCalendar";
import { getDate } from "date-fns";

export default function CalBody() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const displayedWeekdays = useCalendar((s) => s.displayedWeekdays);
  const [displayedMonth, setDisplayedMonth]: any[] = useState(() => {
    return mapCalendar(selectedMonth, selectedYear);
  });

  useEffect(() => {
    setDisplayedMonth(mapCalendar(selectedMonth, selectedYear));
  }, [selectedYear, selectedMonth, displayedWeekdays]);

  return (
    <table className="h-full w-full grow table-fixed bg-emerald-700 text-emerald-100">
      <thead>
        <tr>
          {displayedWeekdays.map((weekday: string, i: number) => {
            if (weekday === "Sa" || weekday === "So") {
              return null;
            } else if (weekday === "KW") {
              return (
                <th
                  key={i}
                  className="p-2 text-center font-mono text-lg font-thin text-emerald-900 opacity-75"
                >
                  {weekday}
                </th>
              );
            } else {
              return (
                <th
                  key={i}
                  className="p-2 text-center text-xl font-bold text-emerald-400"
                >
                  {weekday}
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        {displayedMonth.map((week: any[], i: number) => {
          return (
            <tr key={i}>
              {week.map((weekday: any, i: number) => {
                if (weekday.isNoDayOfMonth) {
                  return <td key={i}></td>;
                } else if (weekday.calWeek) {
                  return (
                    <td
                      key={i}
                      className={`border-emerald-800 p-2 text-center font-mono text-base font-thin text-emerald-900 opacity-50 hover:cursor-pointer hover:bg-emerald-600`}
                    >
                      {weekday.calWeek}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={i}
                      className={`cursor-pointer p-3 text-center text-xl hover:bg-emerald-500`}
                    >
                      {getDate(weekday.date)}
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
