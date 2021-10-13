import React from "react";

const Videos: React.FC = () => {
  return (
    <>
      <main className="videos">
        <div className="video">
          <div className="img-container">
            <img src="https://i.ytimg.com/vi/xTOsVIvyLxY/hqdefault.jpg" alt="" />
          </div>
          <div className="thumbnail-overlay">
            <h1 className="thumbnail-title">Title 1</h1>
            <p className="thumbnail-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, unde?
            </p>
          </div>
        </div>
        <div className="video">
          <div className="img-container">
            <img src="https://i.ytimg.com/vi/jjJX5XvkoSE/hqdefault.jpg" alt="" />
          </div>
          <div className="thumbnail-overlay">
            <h1 className="thumbnail-title">Title 1</h1>
            <p className="thumbnail-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, unde?
            </p>
          </div>
        </div>
        <div className="video">
          <div className="img-container">
            <img src="https://i.ytimg.com/vi/jjJX5XvkoSE/hqdefault.jpg" alt="" />
          </div>
          <div className="thumbnail-overlay">
            <h1 className="thumbnail-title">Title 1</h1>
            <p className="thumbnail-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, unde?
            </p>
          </div>
        </div>
        <div className="video">
          <div className="img-container">
            <img src="https://i.ytimg.com/vi/jjJX5XvkoSE/hqdefault.jpg" alt="" />
          </div>
          <div className="thumbnail-overlay">
            <h1 className="thumbnail-title">Title 1</h1>
            <p className="thumbnail-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, unde?
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .videos {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 50px;
          width: 90%;
          margin: 100px auto;
        }

        .video {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .img-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 5px;
        }

        .img-container img {
          width: 100%;
          object-fit: cover;
          height: 100%;
          border-radius: 5px;
          transition: all 0.2s;
          pointer-events: none;
        }

        .video:hover .img-container img {
          transform: scale(1.1);
        }

        .video:hover {
          cursor: pointer;
        }

        .thumbnail-overlay {
          position: absolute;
          padding: 30px 30px;
          bottom: 0;
          background: linear-gradient(
            0deg,
            rgba(19, 19, 19, 1) 0%,
            rgba(79, 79, 79, 0) 100%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 5px;
          width: 100%;
        }

        .thumbnail-title {
          font-size: 1.2em;
          margin-bottom: 5px;
        }

        .thumbnail-desc {
          font-size: 0.8em;
        }
      `}</style>
    </>
  );
};

export default Videos;
