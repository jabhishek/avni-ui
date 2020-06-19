// eslint-disable-next-line @typescript-eslint/no-var-requires
const Color = require('color');

export const getColor = function getColor(color: string): any {
  return Color(color);
};
