import { ChangeEvent, FormEvent, useState } from "react";
import Header from "../Header";
import "./index.css";
import { setPriority } from "os";
const Reservation = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [eventType, seteventType] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [promocode, setPomocode] = useState<string>("");
  const [cardNomber, setCardNom] = useState<string>("");
  const [cardMonth, setCardMOnth] = useState<string>("");
  const [cardValid, setCardCalid] = useState<string>("");
  const [showPhoneError, setShowPhoneError] = useState<boolean>(false);

  const onChangeNameInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const onChangeEmailInputVal = (e: ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value);
  };

  const onChangePhoneNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const onChangePromo = (e: ChangeEvent<HTMLInputElement>) => {
    setPomocode(e.target.value);
  };
  const onChangeCardNO = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNom(e.target.value);
  };
  const onChangecardMonth = (e: ChangeEvent<HTMLInputElement>) => {
    setCardMOnth(e.target.value);
  };
  const onchangeCardValid = (e: ChangeEvent<HTMLInputElement>) => {
    setCardCalid(e.target.value);
  };
  const onChangeEventType = (e: ChangeEvent<HTMLInputElement>) => {
    seteventType(e.target.value);
  };

  const onSubmitFormData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Phone number validation regular expression
    const phoneRegex = /^\d{10}$/;
    if (fullName === "") {
      alert("Please Enter a Name");
    } else if (!phoneRegex.test(phoneNumber)) {
      // If phone number is in wrong format
      setPhoneError("Invalid phone number. Must be 10 digits.");
      setShowPhoneError(true);
    } else if (eventType === "") {
      alert("Please Select an Event Type");
    } else {
      // If phone number is in correct format
      setShowPhoneError(false);

      const postUrl = "https://event-registra-backend.onrender.com/postEvents";

      const postBody = {
        username: fullName,
        email: email,
        phone: phoneNumber,
        eventType: eventType,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      };
      // Send request to this server
      const resposnse = await fetch(postUrl, options);
      const jsonResponse = await resposnse.json();

      setFullName("");
      setPhoneNumber("");
      setemail("");
      seteventType("");
      setCardCalid("");
      setCardMOnth("");
      setCardNom("");
      setPomocode("");
    }
  };

  return (
    <div>
      <Header />
      <div className="checkOutCon">
        <div className="checkoutForm">
          <h1>CHECK OUT</h1>
          <hr className="hr-for-check" />
          <form onSubmit={onSubmitFormData}>
            <div>
              <br />
              <label htmlFor="fullName">FULL NAME :</label>
              <input
                type="text"
                id="fullName"
                placeholder="BHARATH MANDA"
                className="full-name-input"
                onChange={onChangeNameInputValue}
                value={fullName}
              />
              <hr className="hr-for-check" />
            </div>
            <div>
              <br />
              <label htmlFor="emailAdd">EMAIL :</label>
              <input
                type="email"
                id="emailAdd"
                placeholder="bharath@gmail.com"
                className="full-name-input"
                onChange={onChangeEmailInputVal}
                value={email}
              />
              <hr className="hr-for-check" />
            </div>
            <div>
              <br />
              <label htmlFor="promocode">PROMO CODE :</label>
              <input
                type="text"
                id="promocode"
                placeholder="123ABC"
                className="full-name-input"
                value={promocode}
                onChange={onChangePromo}
              />
              <hr className="hr-for-check" />
            </div>

            <div>
              <br />
              <label htmlFor="phoneNumber">PHONE NUMBER :</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="7452136981"
                className="full-name-input"
                onChange={onChangePhoneNumberValue}
                value={phoneNumber}
              />
              {showPhoneError && <p>{phoneError}</p>}
              <hr className="hr-for-check" />
            </div>

            <div>
              <br />
              <label htmlFor="eventType">EVENT TYPE :</label>
              <input
                type="text"
                id="eventType"
                placeholder="CONFERENCE"
                className="full-name-input"
                onChange={onChangeEventType}
                value={eventType}
              />
              <hr className="hr-for-check" />
            </div>

            <div>
              <br />
              <label htmlFor="cardNO">CARD NO :</label>
              <input
                type="text"
                id="cardNO"
                placeholder="0000 0000"
                className="full-name-input"
                value={cardNomber}
                onChange={onChangeCardNO}
              />
              <input
                type="text"
                placeholder="MM/YY"
                className="full-name-input"
                value={cardMonth}
                onChange={onChangecardMonth}
              />
              <input
                type="text"
                placeholder="CVV"
                className="full-name-input"
                value={cardValid}
                onChange={onchangeCardValid}
              />

              <hr className="hr-for-check" />
            </div>
            <div className="total-container">
              <p>TOTAL: </p>
              <p style={{ backgroundColor: "Green", color: "white" }}>$250</p>
            </div>
            <hr className="hr-for-check" />
            <button type="submit" className="reserveBtn">
              RESERVE
            </button>
          </form>
          <hr className="hr-for-check" />
          <div className="footer-container">
            <ul className="footer-ul">
              <li>PRIVACY & POLICY</li>
              <li>TERMS & CONDITIONS</li>
              <li>CONTACT US</li>
            </ul>
            <p>ALL IN FUND 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
