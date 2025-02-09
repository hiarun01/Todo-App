import {useEffect, useState} from "react";
import "../TodoApp.css";

const DateAndTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();

      setDateTime(`${date} - ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  });
  return (
    <div className="date-time">
      <span>
        <strong>{dateTime}</strong>
      </span>
    </div>
  );
};

export default DateAndTime;
