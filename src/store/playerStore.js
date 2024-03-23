import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: {
    playlist: { id: 6 }, song: {
      id: 4,
      title: "11 Y 6",
      artists: ["Fito Paéz"],
      image: "https://lh3.googleusercontent.com/XhsPrXSXBliWXTz1YDzey-0lqQy-HBxz9KnLHZaFJKiVN9HCec5sXwOcKOca9SWOb7HyvuGfgeOqX7jR=w544-h544-l90-rj",
    }, songs: []
  },
  volume: 1,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}))