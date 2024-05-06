import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { format } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-day-picker/dist/style.css";
interface idFOrTImeObh {
  idOF: string;
}
const CalenderCom = (props: idFOrTImeObh) => {
  const [selected, setSelected] = useState<Date>();
  const notify = () => toast("Wow so easy!");
  let footer = <p>Please Book Event.</p>;
  if (selected) {
    footer = <p>You Booked at {format(selected, "PP")}.</p>;
  }
  const showTime = () => {
    if (selected && props.idOF !== "") {
      toast("Congratulations Your booking was successfull");
    } else if (!selected) {
      toast("Please select a date");
    } else if (props.idOF === "") {
      toast("Please select a time");
    }
  };

  return (
    <div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
      <ToastContainer />
      <button type="button" className="confirm-btn" onClick={showTime}>
        Confirm
      </button>
    </div>
  );
};

export default CalenderCom;
