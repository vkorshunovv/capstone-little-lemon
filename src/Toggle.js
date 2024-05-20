import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState("ON");

  function handleClick() {
    if (toggle == "ON") {
      return setToggle("OFF");
    } else {
      return setToggle("ON");
    }
  }
  console.log(toggle);
  return (
    <>
      <button onClick={handleClick} id="toggleButton" role="button">
        {toggle}
      </button>
    </>
  );
}
