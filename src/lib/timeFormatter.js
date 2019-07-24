/*
  Helper library for formatting time
*/

// Returns time object ({h, m, s}) for given amount of seconds
function secondsToHMS(sec) {
  let remainingSec = sec;
  const hours = Math.floor(remainingSec / (60 * 60));
  remainingSec %= 60 * 60;
  const mins = Math.floor(remainingSec / 60);
  remainingSec %= 60;
  const secs = Math.floor(remainingSec);
  return {
    h: hours,
    m: mins,
    s: secs
  };
}

// Returns time string for given time object, formatted as HH:MM:SS
function HMStoHHMMSS(time) {
  const { h, m, s } = time;
  let hour = h.toString().padStart(2, "0");
  let min = m.toString().padStart(2, "0");
  let sec = s.toString().padStart(2, "0");
  return `${hour}:${min}:${sec}`;
}

// Returns the time string formatted as HH:MM:SS for given amount of seconds
export default function secondsToHHMMSS(seconds) {
  let timeObject = secondsToHMS(seconds);
  let formattedTimeString = HMStoHHMMSS(timeObject);
  return formattedTimeString;
}