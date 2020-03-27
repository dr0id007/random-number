const check = (random, number) => {
  const val = Math.abs(random - number);
  console.log(val);
  if (val === 0) {
    return {
      value: 0,
      style: { backgroudColor: "#51d4ab" },
      color: "green",
      msg: "Yaay.! Correct"
    };
  }
  if (val >= 1 && val <= 4) {
    return {
      value: 1,
      style: { backgroundColor: "#5190c6", color: "white" },
      color: "red",
      msg: "So close but not correct"
    };
  }
  if (val > 4 && val <= 15) {
    return {
      value: 2,
      style: { backgroundColor: "#5190c6" },
      color: "yellow",
      msg: "Close , yet not so close"
    };
  } else {
    return {
      value: 3,
      style: { backgroundColor: "#92c9e8" },
      // "#08b0c8" },
      color: "blue",
      msg: "Nice try but far from mystery number"
    };
  }
};

export default check;
