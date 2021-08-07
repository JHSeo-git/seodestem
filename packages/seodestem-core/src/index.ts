function sum(i: number, j: number): number {
  return i + j;
}

function sub(i: number, j: number): number {
  return i - j;
}

function logger(text: string) {
  return text;
}

export { sum };
export { sub };
export { logger };
export default {
  sum,
  sub,
  logger,
};
