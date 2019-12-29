import React from "react";

function Hero({ heroname }) {
  if (heroname === "Joker") {
    throw new Error(heroname + " is not a SuperHero");
  }
  return <div>{heroname}</div>;
}

export default Hero;
