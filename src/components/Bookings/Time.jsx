/** @format */

import React, { useState } from "react";
import Calendar from "./Calendar";
import Next from "./Next";

export default function SelectTime({
  booking,
  selectedDate,
  ChangeBack,
  onSeeLess,
}) {
  const weekday = selectedDate.toLocaleDateString("en-US", { weekday: "long" });
  const day = selectedDate.toLocaleDateString("en-US", { day: "numeric" });
  const month = selectedDate.toLocaleDateString("en-US", { month: "long" });
  const year = selectedDate.toLocaleDateString("en-US", { year: "numeric" });

  const formattedDate = `${weekday}, ${day} ${month}, ${year}`;

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [isCalendar, setisCalendar] = useState(false);
  const times = ["9:00", "10:30", "12:00", "1:30", "3:00", "4:30"];
  const [isNext, setisNext] = useState("true");
  const [selectedTime, setSelectedTime] = useState(null);
  const handleClick = (index) => {
    setActiveButtonIndex(index);
    setSelectedTime(times[index]);
  };

  function changeDate() {
    setisCalendar(true);
  }

  function NextPage() {
    setisNext(false);
  }

  return (
    <>
      {isNext ? (
        isCalendar ? (
          <Calendar
            booking={booking}
            selectedDate={selectedDate}
            ChangeBack={ChangeBack}
          />
        ) : (
          <>
            <div className='selected-date-container'>
              <div className='change-date'>
                <label className='formatted-date'>{formattedDate}</label>

                <button onClick={changeDate} className='change'>
                  Change
                </button>
              </div>
              <span className='select-time'>Select Time</span>

              <label className='duration'>Duration: {booking.hour}</label>
              <div className='time-selection-container'>
                {times.map((time, index) => (
                  <div key={index} className='button-container'>
                    <button
                      onClick={() => handleClick(index)}
                      className={`button-time ${
                        activeButtonIndex === index ? "active" : ""
                      }`}
                    >
                      {time}
                    </button>
                    <button
                      onClick={NextPage}
                      className={`button-next ${
                        activeButtonIndex === index ? "show" : ""
                      }`}
                    >
                      Next
                    </button>{" "}
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      ) : (
        <Next
          formattedDate={formattedDate}
          time={selectedTime}
          selectedDate={selectedDate}
          booking={booking}
          ChangeBack={ChangeBack}
          onSeeLess={onSeeLess}
        />
      )}
    </>
  );
}
