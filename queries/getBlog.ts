import HOST from "../constants/host";

const getBlog = async (id: number) => {
  const res = await fetch(`${HOST}/blogs/${id}`);
  return res.json();
};

export default getBlog;
