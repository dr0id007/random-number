const random = level => {
  const difficulty = level * 100;
  const rand = Math.floor(Math.random() * difficulty);
  return rand;
};

export default random;
