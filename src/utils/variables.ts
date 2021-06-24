const get = (name: string) : string => {
  return String(process.env[name]);
};

export default get;
