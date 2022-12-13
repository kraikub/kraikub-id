export const serialize = (o: any) => {
  return JSON.parse(JSON.stringify(o));
};

export const serializeEach = (arr: any[]): any[] => {
  const res: any[] = [];
  arr.forEach((e) => {
    res.push(JSON.parse(JSON.stringify(e)));
  });
  return res;
};
