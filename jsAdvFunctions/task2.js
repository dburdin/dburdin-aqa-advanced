const func = (num) => {
  console.log(num);

  if (num > 0) {
    return func(num - 1);
  }
};

func(5);
