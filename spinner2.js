const spinner = () => {
  const spinny = ['\r| ','\r/ ', '\r- ', '\r\\ ', '\r|'];
  let delay = 0; //set delay of index

  for (let i in spinny) { // loop through array (spinny)
    setTimeout(() => {
      process.stdout.write(spinny[i]);
    }, delay);
    delay += 200; //Let the speed of spinny increment by 200
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};
spinner();