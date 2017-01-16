export const MINUTE = 1000 * 60;
export const SECOND = 1000;

export function convertFromMS(time) {
  let min = Math.floor((time / 1000 / 60) % 60);
  let sec = Math.floor((time / 1000) % 60);
  sec = (sec < 10) ? `0${sec}` : sec
  return `${min}:${sec}`;
}
