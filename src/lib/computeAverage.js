export const computeAverage = (grades) => {
  if (!Array.isArray(grades)) return;

  const average = grades.reduce((total, grade, _, { length }) => {
    if (!Number(grade)) {
      return 0;
    }

    return total + grade / length;
  }, 0);

  return `${average}%`;
};
