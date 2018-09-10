function takeANumber(line) {
 line.push(line.length + 1);
 return line.length;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    let lineAddition = [];
      lineAddition.push(${line[i]});
    return 'The line is currently:' + line;
  }
}
