import React, { useState } from "react";
import Modal from "react-modal";
const Home = () => {
  const [activeAbout, setActiveAbout] = useState(null);
  const handleAboutToggle = () => {
    setActiveAbout(activeAbout === true ? null : true);
  };

  return (
    <div
      className="min-h-screen flex justify-end items-center bg-cover bg-center bg-fixed pr-12"
      style={{ backgroundImage: "url('../../images/spore.gif')" }}
    >
      {/* Main Container */}
      <div className="bg-white/30 p-12 rounded-2xl shadow-md backdrop-blur-md max-w-4xl w-full text-center mx-auto">
        <h3 className="text-4xl font-normal text-black mb-6">Welcome to Manasthali</h3>
        <p className="text-lg font-medium">A platform to connect with people based on your personality.</p>

        {/* Buttons */}
        <div className="grid gap-4 w-1/2 mx-auto mt-8">
          <button className="font-bold text-black border border-black px-6 py-3 shadow transition-transform duration-300 hover:scale-105">
            Sign Up
          </button>
          <button className="font-bold text-black border border-black px-6 py-3 shadow transition-transform duration-300 hover:scale-105">
            Sign In
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={activeAbout !== null}
        onRequestClose={() => setActiveAbout(null)}
        contentLabel="About Modal"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fbf8f8] rounded-lg w-1/2 h-1/2 z-[9999] flex flex-col justify-start p-4"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9998]"
      >
        <div className="text-xl font-semibold mb-2">About</div>
        <button
          className="w-6 h-6 rounded-full border border-gray-400 text-xs font-bold text-gray-500 bg-white self-end"
          onClick={() => setActiveAbout(null)}
        >
          X
        </button>
      </Modal>
    </div>
  );
};
export default Home;