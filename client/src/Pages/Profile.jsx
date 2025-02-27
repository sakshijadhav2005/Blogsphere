import React from "react";

const Profile = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white bg-opacity-10 backdrop-blur-lg p-6 flex flex-col items-center rounded-r-3xl shadow-lg border border-white border-opacity-20">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-purple-500 shadow-lg hover:scale-105 transition-transform"
        />
        <nav className="mt-6 space-y-4 text-center">
          {["ABOUT", "EXPERIENCE", "PORTFOLIO", "SKILLS", "AWARDS", "CONTACT"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="block text-lg font-semibold text-gray-200 hover:text-purple-400 transition duration-300"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col justify-center items-start px-16">
        <h1 className="text-5xl font-bold">
          <span className="text-white">JOHDON </span>
          <span className="text-purple-400">BONSEN</span>
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          THE NEXT BIG IDEA IS WAITING FOR ITS NEXT BIG CHANGER WITH{" "}
          <span className="text-purple-400 font-semibold">THEMSBIT</span>
        </p>
        <p className="mt-4 text-gray-400 max-w-2xl">
          I am experienced in leveraging agile frameworks to provide a robust synopsis for high-level overviews.
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
        </p>
      </main>
    </div>
  );
};

export default Profile;
