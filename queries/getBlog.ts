import HOST from "../constants/host";

const getBlog = async (id: number) => {
  try {
    const res = await fetch(`${HOST}/blogs/${id}`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getBlog;
