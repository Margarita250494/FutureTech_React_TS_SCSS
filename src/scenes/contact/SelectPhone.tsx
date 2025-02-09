import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const SelectPhone = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <PhoneInput
        country={"in"} // Sets default to India (+91)
        value={phone}
        onChange={(phone) => setPhone(phone)}
        inputProps={{
          id: "phoneNumber",
        }}
      />
    </div>
  );
};