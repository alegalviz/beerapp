export function colored (number) {
  var r = Math.floor((255 * number) / 100),
    g = Math.floor((255 * (100 - number)) / 100),
    b = 0;
  return "rgb(" + r + "," + g + "," + b + ")"
}

export function randomize (number) {
  return Math.floor(Math.random() * number)
}

export function capitalize (s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}