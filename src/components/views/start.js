import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Random from "../stateless/random";
import Check from "../stateless/check";
import "../../style/start.css";

const Start = () => {
  const [value, setValue] = useState("");
  const [random, setRandom] = useState("");
  const [res, setRes] = useState("");
  const [showgif, setShowgif] = useState(false);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const val = Random(level);
    setRandom(val);
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    console.log(value, random);
    const result = await Check(random, value);
    await setRes(result);
    if (res.value === 0) {
      setLevel(level + 1);
      const val = Random(level);
      setRandom(val);

      //showgif and try again..
    }
  };

  return showgif ? (
    "hello"
  ) : (
    <div className="container start">
      <div className="container text-center">
        <h2 className="text-title">Random number generator</h2>
      </div>

      <p className="mt-2">Level:- {level}</p>

      <form className="form text-center" onSubmit={onSubmit}>
        <label className="text-guess">
          Guess the number <i className="fas fa-arrow-right"></i>
        </label>
        <input
          name="value"
          value={value}
          className="input input-guess"
          onChange={e => {
            setValue(e.target.value);
          }}
          placeholder={"Range 0-" + level * 100}
        />
        <button type="submit" className="btn guess-btn">
          Guess
        </button>
      </form>
      <div className="result">{res.msg}</div>
      <div className="again">
        <button
          onClick={() => {
            window.location.reload();
          }}
          to={"/"}
          className="btn gray again"
        >
          Start Again <i className="fas fa-redo"></i>
        </button>
      </div>
      <div className="illustrate">
        <img
          height="500"
          width="400"
          className="img-responsive"
          src={require("../../assets/undraw_gaming_6oy3.svg")}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Start;
