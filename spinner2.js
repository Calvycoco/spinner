const spinner = () => {
  const spinny = ['\r| ','\r/ ', '\r- ', '\r\\ ', '\r|']; //Declare an array of spinny's positions
  let delay = 0; //set delay of index

  for (const spin of spinny) { // loop through array (spinny)
    setTimeout(() => {
      process.stdout.write(spin);
    }, delay);
    delay += 200; //Let the speed of spinny increment by 200
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};
spinner();