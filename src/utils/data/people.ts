import { get, update } from 'utils/api';

const ranges = [
  ['A', 2],
  ['S', 150],
];

const sheetRange = `2022!${
  ranges[0][0] +
  String(ranges[0][1]) +
  ':' +
  ranges[1][0] +
  String(ranges[1][1])
}`;

export const getPeople = async () => {
  const rows = await get(sheetRange);

  return { rows, ranges };
};

export const updatePeople = async (values: string[][]) => {
  await update(sheetRange, values);

  return true;
};
