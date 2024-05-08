import { ChangeEvent, FormEvent, useState } from "react";
import Header from "../Header";
import { useEffect } from "react";
import gsap from "gsap";
import AllianFooter from "../AllianFooter";
import { ToastContainer, toast } from "react-toastify";
import "./index.css";
import { fstat } from "fs";

const Reservation = () => {
  const [fullName, setFullName] = useState<string>(""); // To Store User's FullName
  const [email, setemail] = useState<string>(""); // To Store User's Email
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // To Store User's phone number
  const [eventType, seteventType] = useState<string>(""); // To Store User's Event Type
  const [phoneError, setPhoneError] = useState<string>(""); // To Store User's Phone Number Error
  const [promocode, setPomocode] = useState<string>(""); // To Store User's Promo Code
  const [cardNomber, setCardNom] = useState<string>(""); // To Store User's Card Number
  const [cardMonth, setCardMOnth] = useState<string>(""); // To Store User's Card Month
  const [cardValid, setCardCalid] = useState<string>(""); // To Store User's Card Validation
  const notify = () => toast("Wow so easy!");
  const [showPhoneError, setShowPhoneError] = useState<boolean>(false); // To display phone number Error

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(".hr-for-check", { x: 500 }, { x: 0, duration: 1 });
    gsap.fromTo(".input-label", { x: -400 }, { x: 0, duration: 1 });
    gsap.fromTo(
      ".full-name-input",
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );
  }, []);
  // Funtion For Change UserName Input Value
  const onChangeNameInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  // Funtion For Change Email Input Value
  const onChangeEmailInputVal = (e: ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value);
  };

  // Funtion For Change Phone Number Input Value
  const onChangePhoneNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  // Funtion For Change Promo Code Input Value
  const onChangePromo = (e: ChangeEvent<HTMLInputElement>) => {
    setPomocode(e.target.value);
  };

  // Funtion For Change Card Number Input Value
  const onChangeCardNO = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNom(e.target.value);
  };

  // Funtion For Change Card Month Input Value
  const onChangecardMonth = (e: ChangeEvent<HTMLInputElement>) => {
    setCardMOnth(e.target.value);
  };

  // Funtion For Change Card Valid Input Value
  const onchangeCardValid = (e: ChangeEvent<HTMLInputElement>) => {
    setCardCalid(e.target.value);
  };

  // Funtion For Change Event Type Input Value
  const onChangeEventType = (e: ChangeEvent<HTMLInputElement>) => {
    seteventType(e.target.value);
  };

  // Funtion For Form Submition
  const onSubmitFormData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Phone number validation regular expression
    const phoneRegex = /^\d{10}$/;
    if (fullName === "") {
      toast("Please Enter a Name");
    } else if (!phoneRegex.test(phoneNumber)) {
      // If phone number is in wrong format
      setPhoneError("Invalid phone number. Must be 10 digits.");
      setShowPhoneError(true);
    } else if (eventType === "") {
      toast("Please Select an Event Type");
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
      toast("Congratulations Your Reservation was successfull");
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="checkOutCon">
        <div className="checkoutForm">
          <h1>CHECK OUT</h1>
          <hr className="hr-for-check" />
          <form onSubmit={onSubmitFormData}>
            <div>
              <br />
              <label htmlFor="fullName" className="input-label">
                FULL NAME :
              </label>
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
              <label htmlFor="emailAdd" className="input-label">
                EMAIL :
              </label>
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
              <label htmlFor="promocode" className="input-label">
                PROMO CODE :
              </label>
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
              <label htmlFor="phoneNumber" className="input-label">
                PHONE NUMBER :
              </label>
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
              <label htmlFor="eventType" className="input-label">
                EVENT TYPE :
              </label>
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
              <label htmlFor="cardNO" className="input-label">
                CARD NO :
              </label>
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
          <AllianFooter />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
