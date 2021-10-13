import HOST from "../constants/host";

const getBlogs = async () => {
  try {
    const res = await fetch(`${HOST}/blogs`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getBlogs;
