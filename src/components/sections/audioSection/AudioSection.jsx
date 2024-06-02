import { useRef, useState } from 'react';

import boombayahAudio from '../../../assets/audios/BLACKPINK – BOOMBAYAH.mp3';
import dduAudio from '../../../assets/audios/Black Pink - Ddu-du ddu-du_(muzfan.net).mp3';
import howYouAudio from '../../../assets/audios/BLACKPINK – How You Like That.mp3';

import boombaya from '../../../assets/images/audioSection/boombaya.jpeg';
import howYou from '../../../assets/images/audioSection/how you.jpeg';
import dudu from '../../../assets/images/audioSection/dudu.jpeg';
import pause from '../../../assets/icons/pause.png';

const songs = [
  { title: 'BOOMBAYAH', artist: 'BLACKPINK', src: boombayahAudio, img: boombaya },
  { title: 'How You Like That', artist: 'BLACKPINK', src: howYouAudio, img: howYou },
  { title: 'DDU-DU DDU-DU', artist: 'BLACKPINK', src: dduAudio, img: dudu },
];

function AudioSection() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRefs = useRef([]);

  const playAudio = (index) => {
    if (currentAudio && currentAudio !== audioRefs.current[index]) {
      currentAudio.pause();
    }
    audioRefs.current[index].play();
    setCurrentAudio(audioRefs.current[index]);
  };

  const pauseAudio = (index) => {
    audioRefs.current[index].pause();
    setCurrentAudio(null);
  };

  return (
    <main
      id="songs"
      className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">
          Песни <span className="text-pink-300">BLACKPINK</span>
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {songs.map((song, index) => (
            <div key={index} className="bg-gray-900 shadow-lg rounded p-3">
              <div className="group relative">
                <img className="w-full md:w-72 block rounded" src={song.img} alt={song.title} />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <audio ref={(el) => (audioRefs.current[index] = el)} src={song.src}></audio>
                  {currentAudio === audioRefs.current[index] ? (
                    <img
                      className="w-10 cursor-pointer hover:scale-110"
                      onClick={() => pauseAudio(index)}
                      src={pause}
                      alt="Pause"
                    />
                  ) : (
                    <button
                      onClick={() => playAudio(index)}
                      className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-play-circle-fill"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg">{song.title}</h3>
                <p className="text-gray-400">{song.artist}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default AudioSection;
