const fizzBuzz = (n) => {
  let num = 0;
  const innerfizz = (num) => {
    if (num > n) return;
    console.log(
      (num % 3 === 0 ? "fizz" : "") + (num % 5 === 0 ? "buzz" : "") || num
    );
    innerfizz(num + 1);
  };
  innerfizz(num);
};

fizzBuzz(15);
