const Projects = () => {
  return (
    <div>
      <h1 className="mb-3">Projects</h1>

      <div className="grid grid-cols-2 gap-6 font-poppins">
        <div className="flex border-2 border-y-purple-600 rounded-3xl p-5 bg-gradient-to-br from-projectcard via-navbar to-backfill">
          <div className="flex p-5 justify-items-center">
            <img src="/src/assets/mail.jpeg" alt="" width="70" />
          </div>
          <div className="w-3/4">
            <h2 className="text-4xl mb-3 mt-3">V-Mail</h2>
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
            </p>
            <div className="w-fit border-2 border-x-purple-600 rounded-3xl px-2 mt-3">
              <button>Github</button>
            </div>
          </div>
        </div>
        <div className="border-2 border-y-purple-600 rounded-3xl p-5 bg-gradient-to-bl from-projectcard via-navbar to-backfill">
          <h2>Vmail</h2>
          <p>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
          </p>
        </div>

        <div className="border-2 rounded-3xl p-5 bg-gradient-to-tr from-projectcard via-navbar to-backfill">
          <h2>Vmail</h2>
          <p>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
          </p>
        </div>

        <div className="border-2 rounded-3xl p-5 bg-gradient-to-tl from-projectcard via-navbar to-backfill">
          <h2>Vmail</h2>
          <p>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
