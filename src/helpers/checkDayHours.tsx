const checkDayHours = (startHour: number, endHour: number): boolean => {
  const hour = new Date().getHours();
  if (hour > startHour && hour < endHour) return true;

  return false;
};

export default checkDayHours;
