function getDate() {
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const shipOn = new Date();
  const firstDate = new Date(shipOn.setDate(shipOn.getDate() + 3));
  const soonest: string = `${firstDate.getDate()} ${
    allMonths[firstDate.getMonth()]
  }`;
  const lastDate = new Date(shipOn.setDate(shipOn.getDate() + 5));
  const latest: string = `${lastDate.getDate()} ${
    allMonths[lastDate.getMonth()]
  }`;

  return { soonest, latest };
}

export default getDate;
