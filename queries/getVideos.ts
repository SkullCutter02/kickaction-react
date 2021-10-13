import HOST from "../constants/host";

const getVideos = async () => {
  try {
    const res = await fetch(`${HOST}/videos`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getVideos;
