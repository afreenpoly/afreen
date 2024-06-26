const Featured = () => {
  return (
    <div className="">
      <div className="flex py-6 justify-center">
        <div className="w-1/2">
          <h2>Example Project</h2>
          <p>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>
        <div className="flex">
          <img
            src="/src/assets/computer.jpeg"
            alt="computer image"
            width="230rem"
          />
        </div>
      </div>

      <div className="flex py-6 justify-center">
        <div className="flex ">
          <img
            src="/src/assets/laptop.jpg"
            alt="computer image"
            width="230rem"
          />
        </div>
        <div className="w-1/2">
          <h2>Example Project</h2>
          <p>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Featured;