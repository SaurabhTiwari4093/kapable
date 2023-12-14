import { React, useState } from "react";
import StartButton from "./startButton";
import { ArrayCountry } from "./arrayCountry";

// const countryCode=Array.from({length: 90}, (_, i) => "+"+(i + 10))

function TopForm(props) {
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [showSuccesBookDemo, setShowSuccessBookDemo] = useState("");
  const [country, setCountry] = useState("+91");
  const checkBoxArr = props.checkBoxArr;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseurl = "https://kapable-backend.exampur.xyz/api/create-checkbox";
    const arrCheckBox = [];
    for (var i = 0; i < 6; i++) {
      if (checkBoxArr[i] != "") {
        arrCheckBox.push(checkBoxArr[i]);
      }
    }
    var data = {
      parentName: parentName,
      childName: childName,
      contactDetails: country + " " + phoneNumber,
      emailID: emailId,
      dob: dob.slice(8, 10) + "/" + dob.slice(5, 7) + "/" + dob.slice(0, 4),
      location: "india",
      checkbox: arrCheckBox,
      description: "test data",
    };
    console.log(data);
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        KAPABLE: "kapable123",
      },
      body: JSON.stringify(data),
    };
    try {
      const res = await fetch(baseurl, requestOptions);
      const result = await res.json();
      console.log("result: " + result);
      setShowSuccessBookDemo("Demo Booked Successfully");
      setParentName("");
      setChildName("");
      setCountry("+91");
      setDob("");
      setEmailId("");
      setPhoneNumber("");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <>
      <div className="shadow-lg rounded-tl-[60px] rounded-br-[60px] p-6 md:p-12 py-14 border bg-white">
        <div className="mx-2 text-2xl md:text-3xl text-center font-semibold">
          Let&apos;s make it happen
        </div>
        <div className="text-sm mt-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="outline-none w-full p-2 pb-3 border-b my-2 text-base"
              placeholder="Parents Name"
              required={true}
              value={parentName}
              onChange={(e) => {
                setParentName(e.target.value);
              }}
            />
            <input
              type="text"
              className="outline-none w-full p-2 pb-3 border-b my-2 text-base"
              placeholder="Child Name"
              required={true}
              value={childName}
              onChange={(e) => {
                setChildName(e.target.value);
              }}
            />
            <div className="outline-none w-full p-2 pb-3 border-b my-2 text-base flex flex-row items-center">
              <p className={"flex-1 " + (dob == "" ? "opacity-30" : "")}>
                Child&apos;s Birth Date:
              </p>
              <input
                type="date"
                min="2000-01-01"
                max="2023-12-31"
                className={
                  "outline-none flex-1 px-2 text-base " +
                  (dob == "" ? "opacity-30" : "")
                }
                placeholder="Child's Birth Date"
                required={true}
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </div>
            <div className="flex mr-2 pb-3">
              {/* <select value={country} onChange={(e)=>setCountry(e.target.value)} className="outline-none px-1 w-2/5 text-gray-600 text-lg">
                                <option value={"+91 "} key={"1"}>INDIA +91</option>
                            </select> */}
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="outline-none px-1 w-2/5 text-gray-600 text-lg"
              >
                {ArrayCountry.map((value, key) => (
                  <option value={value.dial_code} key={key}>
                    {value.name + " " + value.dial_code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                pattern="[0-9]{10}"
                className="outline-none w-full p-2 pb-3 border-b my-2 text-base"
                placeholder="Phone Number"
                required={true}
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
            <input
              type="email"
              className="outline-none w-full p-2 pb-3 border-b my-2 text-base"
              placeholder="Email Id"
              required={true}
              value={emailId}
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
            />
            <button className="mt-8 w-full" type="submit">
              <StartButton />
            </button>
            <div className="mt-4 justify-center flex text-green-600 w-full">
              <div>{showSuccesBookDemo}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TopForm;
