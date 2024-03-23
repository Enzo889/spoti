import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useRef, useState } from "react";
import { Slider } from "./Slider";

export const Pause = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const Backward = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 16 16"
    className={className}
  >
    <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" />
  </svg>
);

export const Forward = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 16 16"
    className={className}
  >
    <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" />
  </svg>
);

export const VolumeSilence = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen apagado"
    viewBox="0 0 16 16"
  >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>
);

export const Volume = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen alto"
    id="volume-icon"
    viewBox="0 0 16 16"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

export const Loop = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 16 16"
  >
    <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z" />
  </svg>
);

export const Mix = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 16 16"
  >
    <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z" />
  </svg>
);

export const Like = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 16 16"
  >
    <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z" />
  </svg>
);
export const LikeActive = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 16 16"
  >
    <path fill="none" d="M0 0h16v16H0z" />
    <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" />
  </svg>
);
const CurrentSong = ({ image, title, artists }) => {
  return (
    <div
      className={`
        flex items-center gap-5 relative
        overflow-hidden
      `}
    >
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title} />
      </picture>

      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">{title}</h3>
        <span className="text-xs opacity-80">{artists?.join(", ")}</span>
      </div>
    </div>
  );
};

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  const formatTime = (time) => {
    if (time == null) return `0:00`;

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const duration = audio?.current?.duration ?? 0;

  return (
    <div className="flex gap-x-3 text-xs pt-2">
      <span className="opacity-50 w-12 text-right">
        {formatTime(currentTime)}
      </span>

      <Slider
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className="w-[400px] max-md:w-[200px]"
        onValueChange={(value) => {
          const [newCurrentTime] = value;
          audio.current.currentTime = newCurrentTime;
        }}
      />

      <span className="opacity-50 w-12">
        {duration ? formatTime(duration) : "0:00"}
      </span>
    </div>
  );
};

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeSilenced = volume < 0.1;

  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex justify-center gap-x-2 text-white max-md:hidden">
      <button
        className="opacity-70 hover:opacity-100 transition"
        onClick={handleClickVolumen}
      >
        {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[95px] "
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
};

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume, setCurrentMusic } =
    usePlayerStore((state) => state);
  const audioRef = useRef();

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBackward = () => {
    const { playlist, songs, song } = currentMusic;

    // Encontramos el índice de la canción actual en la lista de reproducción
    const currentIndex = songs.findIndex((s) => s.id === song.id);

    // Calculamos el índice de la canción anterior
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : songs.length - 1;

    // Actualizamos la canción actual con la canción anterior
    const newSong = songs[previousIndex];
    setCurrentMusic({ song: newSong, playlist, songs });

    // Actualizamos la fuente de audio con la nueva canción
    const src = `/music/${playlist?.id}/0${newSong.id}.mp3`;
    audioRef.current.src = src;
    audioRef.current.play();
  };

  const handleForward = () => {
    const { playlist, songs, song } = currentMusic;

    // Encontramos el índice de la canción actual en la lista de reproducción
    const currentIndex = songs.findIndex((s) => s.id === song.id);

    // Calculamos el índice de la siguiente canción
    const nextIndex = currentIndex < songs.length - 1 ? currentIndex + 1 : 0;

    // Actualizamos la canción actual con la siguiente canción
    const newSong = songs[nextIndex];
    setCurrentMusic({ song: newSong, playlist, songs });

    // Actualizamos la fuente de audio con la nueva canción
    const src = `/music/${playlist?.id}/0${newSong.id}.mp3`;
    audioRef.current.src = src;
    audioRef.current.play();
  };

  const handleSongEnd = () => {
    handleForward();
  };

  useEffect(() => {
    audioRef.current.addEventListener("ended", handleSongEnd);
  }, [currentMusic]);

  // active Element
  const [isActiveMix, setIsActiveMix] = useState(false);
  const [isActiveLoop, setIsActiveLoop] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleClickActiveMix = () => {
    setIsActiveMix(!isActiveMix);
  };

  const handleClickActiveLoop = () => {
    setIsActiveLoop(!isActiveLoop);
  };

  const handleClickLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-row justify-between w-full px-1 z-50 ">
      <div className="w-[200px] max-md:hidden">
        <CurrentSong {...currentMusic.song} />
      </div>
      <button
        className="fill-green-500 max-md:hidden"
        onClick={handleClickLiked}
      >
        {isLiked ? <LikeActive /> : <Like />}
      </button>

      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-col items-center">
          <div className="flex justify-center gap-8 items-center ">
            <button
              className={`${
                isActiveMix ? "fill-green-500" : "fill-white"
              } opacity-${isActiveMix ? "100" : "75"} hover:opacity-100 `}
              onClick={handleClickActiveMix}
            >
              <Mix />
            </button>
            <button onClick={handleBackward}>
              <Backward className="fill-white opacity-75 hover:opacity-100" />
            </button>
            <button
              className="bg-white rounded-full p-2 hover:scale-110"
              onClick={handleClick}
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <button onClick={handleForward}>
              <Forward className="fill-white opacity-75 hover:opacity-100" />
            </button>
            <button
              className={`${
                isActiveLoop ? "fill-green-500" : "fill-white"
              } opacity-${isActiveLoop ? "100" : "75"} hover:opacity-100 `}
              onClick={handleClickActiveLoop}
            >
              <Loop />
            </button>
          </div>
          <SongControl audio={audioRef} />
          <audio ref={audioRef} />
        </div>
      </div>

      <div className="grid place-content-center">
        <VolumeControl />
      </div>
    </div>
  );
}
