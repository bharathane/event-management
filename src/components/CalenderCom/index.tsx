import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
const CalenderCom = () => {
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
};

export default CalenderCom;