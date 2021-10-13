import HOST from "../constants/host";

const getBlogs = async () => {
  const res = await fetch(`${HOST}/blogs?_sort=Created_At:ASC`);
  return res.json();
};

export default getBlogs;
