

 export function getDayOrDate(inputDate) {
  var inputDate=new Date(inputDate)
  // Get today's date
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate the start and end dates of the current week
  var startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  var endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  // Check if the input date is in the current week
  if (inputDate >= startOfWeek && inputDate <= endOfWeek) {
    // If yes, return the name of the day
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = daysOfWeek[inputDate.getDay()];
    if(inputDate.getDay() == new Date().getDay()) dayName= "Today";
    return dayName;
  } else {
    // If no, return the formatted date
    var formattedDate = (inputDate.getMonth() + 1) + '/' + inputDate.getDate() + '/' + inputDate.getFullYear();
    return formattedDate;
  }
}



 export const Time_Date=(date)=>{
    const date_= new Date(date);
    let h=date_.getHours();
    let m=date_.getMinutes();
    h=h.toString();
    m=m.toString()
    if (h.length ==1) h=`0${h}`;
    if (m.length ==1) m=`0${m}`;
    
    return `${h}:${m}`;
  }