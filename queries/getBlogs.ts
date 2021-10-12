import HOST from "../constants/host";

const getBlogs = async () => {
  const data = await fetch(`${HOST}/blogs?_sort=Created_At:ASC`);
  return data.json();
};

export default getBlogs;
