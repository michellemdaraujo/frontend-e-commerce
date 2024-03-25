export type ObjectType = {
  [key: string]: number | string;
};

export const getValuableObject = (obj: ObjectType) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) =>
        !(
          (typeof v === 'string' && !v.length) ||
          v === null ||
          typeof v === 'undefined'
        ),
    ),
  );
};
