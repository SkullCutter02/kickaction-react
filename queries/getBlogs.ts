import HOST from "../constants/host";

const getBlogs = async () => {
  try {
    const res = await fetch(`${HOST}/blogs?_sort=Created_At:ASC`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getBlogs;
