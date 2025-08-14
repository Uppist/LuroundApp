/** @format */
import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Next from "./Next";
import styles from "./Calendar.module.css";

export default function SelectTime({
  booking,
  selectedDate,
  ChangeBack,
  onSeeLess,
}) {
  // Format to "Tue Aug 12 2025" (only if date exists)
  const formattedDate = selectedDate
    ? selectedDate.toDateString()
    : "No date selected";

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);

  const times = ["9:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"];

  // Handle when "Next" is clicked for a given time
  const handleNext = (index) => {
    const timePicked = times[index];
    setActiveButtonIndex(index);
    setSelectedTime(timePicked);
    setIsNext(false); // Move to Next page immediately
  };

  useEffect(() => {
    if (selectedDate || selectedTime) {
      console.log("Date:", selectedDate);
      console.log("Time:", selectedTime);
    }
  }, [selectedDate, selectedTime]);

  function changeDate() {
    setIsCalendar(true);
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
          <div className={styles.selecteddatecontainer}>
            <div className={styles.changedate}>
              <label className={styles.formatteddate}>{formattedDate}</label>
              <button onClick={changeDate} className={styles.change}>
                Change
              </button>
            </div>

            <span className={styles.selecttime}>Select Time</span>
            <label className={styles.duration}>Duration: {booking.hour}</label>

            <div className={styles.timeselectioncontainer}>
              {times.map((time, index) => (
                <div key={index} className={styles.buttoncontainer}>
                  <button
                    onClick={() => setActiveButtonIndex(index)}
                    className={`${styles.buttontime} ${
                      activeButtonIndex === index ? styles.active : ""
                    }`}
                  >
                    {time}
                  </button>
                  <button
                    onClick={() => handleNext(index)}
                    className={`${styles.buttonnext} ${
                      activeButtonIndex === index ? styles.show : ""
                    }`}
                    disabled={activeButtonIndex !== index} // Prevent clicking without picking time
                  >
                    Next
                  </button>
                </div>
              ))}
            </div>
          </div>
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
