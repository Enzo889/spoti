import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Queen",
    color: colors.yellow,
    cover:
      "https://i.pinimg.com/564x/07/b1/94/07b19460f1ad245903ff792fefd58da6.jpg",
    artists: ["Queen", "Freddie Mercury"],
  },
  {
    id: '2',
    albumId: 2,
    title: "This is Charly García",
    color: colors.green,
    cover:
      "https://i.pinimg.com/564x/53/80/b8/5380b883ff3c443805c3eb9d849015de.jpg",
    artists: ["Charly García"],
  },
  {
    id: '3',
    albumId: 3,
    title: "R&B",
    color: colors.rose,
    cover:
      "https://purplemelonmu.files.wordpress.com/2022/09/301051181_485242300273234_285861862833726307_n.jpeg?w=2000&h=1366&crop=1",
    artists: ["Akon", "Daniel Caesar", "Giveon"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Kanye's best",
    color: colors.blue,
    cover:
      "https://i.redd.it/q2dmul9v30d71.jpg",
    artists: ["Kanye West"],
  },
  {
    id: '5',
    albumId: 5,
    title: "The Best of Intoxicados",
    color: colors.purple,
    cover:
      "https://pbs.twimg.com/profile_images/701857068496588802/iBcDSPkG_400x400.jpg",
    artists: ["Intoxicados"],
  },
  {
    id: '6',
    albumId: 6,
    title: "'80s Rock Argentino",
    color: colors.orange,
    cover:
      "https://i.pinimg.com/564x/35/eb/b7/35ebb7df91897cc68c9041e1fb49ed7d.jpg",
    artists: ["Fito Páez", "Charly García"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Love Of My Life",
    "image": `https://lh3.googleusercontent.com/9CrMB2k2WFBUGXQXlaFfwP8e5_Q8FiUqQ8ljMGWm22VyLmvLZEqBMPUNjf6FNZrmMDUBTlEsFxk88_kOCQ=w544-h544-l90-rj`,
    "artists": ["Queen"],
    "album": "A Night At The Opera",
    "duration": "3:37"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Under Pressure",
    "image": `https://lh3.googleusercontent.com/WP68L9dF-c3P9mWhmmx-Whhxf0b5L2rd-wOZS8pcwnxXfF5meFCqCqZQOg35XOpFvH71b9Z21JMnZ0DK=w544-h544-s-l90-rj`,
    "artists": ["Queen", "David Bowie"],
    "album": "Hot Space",
    "duration": "4:08"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Don't Stop Me Now",
    "image": `https://lh3.googleusercontent.com/1OCPTD9Vomtm5Hqt3d0-naampTDQVUix7EgeCWX0rHKRrD4_z70cZ-65Pn3pWWs6ME1F-lxK4ELlfhgy=w544-h544-l90-rj`,
    "artists": ["Queen"],
    "album": "Jazz",
    "duration": "3:29"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Somebody To Love",
    "image": `https://lh3.googleusercontent.com/iSp4bKNyFnhc63fM6J5DQLxJ35Jip-mnXfMx9nns1bbqCvRZoGQYWMtFRadASJo23NLHiA_ZcW-AoDB-qw=w544-h544-l90-rj`,
    "artists": ["Queen"],
    "album": "A Day At The Races",
    "duration": "4:56"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Another One Bites The Dust",
    "image": `https://lh3.googleusercontent.com/b41vQwnO9ifWbnxc9fK_IC18TnZpWe5HONbxQUMpPniAnjfo0UotCMfDUS7LKNTUNQT49u16jX0wm50=w544-h544-l90-rj`,
    "artists": ["Queen"],
    "album": "The Game",
    "duration": "3:34"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "La Máquina de Ser Feliz",
    "image": `https://lh3.googleusercontent.com/cmitYCwLlQSThqYu93VCuAF-OK83_ebdyHGidao9nA4-d1M75Gvcdwk6vlkr62N36Fn4JzXSeDnUaF8=w544-h544-l90-rj`,
    "artists": ["Charly García"],
    "album": "La Máquina de Ser Feliz",
    "duration": "4:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Mientes",
    "image": `https://lh3.googleusercontent.com/Gr0WOvKRy3krefTitVWMflFmMsJYJNYXCiSfAGIhPiKBhpqOEsHaWTws-m7uAsWYQZPHyvtDndEw1kD-jg=w544-h544-l90-rj`,
    "artists": ["Charly García", "Pedro Aznar"],
    "album": "Tango 4",
    "duration": "4:14"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Canción para Mi Muerte",
    "image": `https://lh3.googleusercontent.com/qVnQ8tLusiRxK1kC78pFajt2-ofkAeTdPfaXpmO_60wXAEIPTunSSeyg-tyatz0u4caLe_06L_cEY7Yz=w544-h544-l90-rj`,
    "artists": ["Sui Generis"],
    "album": "Vida",
    "duration": "3:35"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "Buscando un Símbolo de Paz",
    "image": `https://lh3.googleusercontent.com/9HttfddR8JUc_KBy0p_CroPqmD0JD76UcIeuOju5vnU2Xy7waBXSClFt5lBnO9a7qCQHdea5t8AnTLEX2A=w544-h544-l90-rj`,
    "artists": ["Charly García"],
    "album": "Parte De La Religion",
    "duration": "4:42"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Seminare",
    "image": `https://lh3.googleusercontent.com/lcnIqMKOmhmbgWSADj5t2M0IPIUsHg4HqRPjxMC_TMCpvd7G4-cc6JJ0JhQBBZ3J4HwGQFVQIf_bAMOZDQ=w544-h544-l90-rj`,
    "artists": ["Serú Girán"],
    "album": "Serú Girán",
    "duration": "3:22"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Leave The Door Open",
    "image": `https://lh3.googleusercontent.com/HVal6U-xElhq8fBSqlsB7A30zFeXxDbigq5ADD2g47zYkajUwlpe7XZpBP35VfexjQP4fgB5oeOs4Fj7=w544-h544-l90-rj`,
    "artists": ["Bruno Mars", "Anderson .Paak"],
    "album": "An Evening With Silk Sonic",
    "duration": "4:02"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Lonely",
    "image": `https://lh3.googleusercontent.com/U9NvTSPKt54NC76MNr3mc7uq5ixRB_unT-8QDjjBxLdoFMgV0Cq8XoxswhJifk2F0WGS0sKS2Ma7BD-h=w544-h544-s-l90-rj`,
    "artists": ["Akon"],
    "album": "Trouble",
    "duration": "3:55"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Go Crazy",
    "image": `https://lh3.googleusercontent.com/ifxR4BvLBSW9Rs6y2DiDURSAf5JiUY1247RD7N1PMvFbLjHOk3-bOB_EoEkuVhPtNrEV9O0rWO0dfzrLVA=w544-h544-l90-rj`,
    "artists": ["Chris Brown", "Young Thug"],
    "album": "Slime & B",
    "duration": "2:56"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "Japanese Denim",
    "image": `https://lh3.googleusercontent.com/oTgPHkMi5XFOibQdLtJ_G--gAvZJYNwE30N2IZgdEkwYDgTRu7CyRVsG23QCZBJrVI6bsh0fnao-sULT=w544-h544-l90-rj`,
    "artists": ["Daniel Caesar"],
    "album": "Get You",
    "duration": "4:30"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "Stuck On You",
    "image": `https://lh3.googleusercontent.com/tSa7wZqeBVYnt3OlkhExndWBxxAupAkT2NKQulVFhnBzqx0QVxithx5OkFb4AImOHD4KnxL1olguDwytJQ=w544-h544-l90-rj`,
    "artists": ["Giveon"],
    "album": "TAKE TIME",
    "duration": "3:25"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Runaway",
    "image": "https://lh3.googleusercontent.com/tSZcuqpZPhJIK8ItC4tkokRmIA6zEo408LFJnWb-3Nm8fv5adFiE1ArPTd_UqhaC-o8KI8tMNZIuFEo=w544-h544-l90-rj",
    "artists": ["Kanye West", "Pusha T"],
    "album": "My Beautiful Dark Twisted Fantasy",
    "duration": "9:07"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "We Major",
    "image": "https://lh3.googleusercontent.com/c-AY0SDYVHyA9v9YnM8E8gCkxiyaTud8--8LclhnS6w-xnM9D-Imgquv3PgoZp6TTrXgOvCgs-8kMoLv7w=w544-h544-s-l90-rj",
    "artists": ["Kanye West", "Really Doe"],
    "album": "Late Registration",
    "duration": "7:27"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Spaceship",
    "image": "https://lh3.googleusercontent.com/0tTCyDcqCFtvEs95I_HhisHOkj1IlmnJ_3tplZhfoYQGp1NVgekJ9gO-ZFHhQCzK6ycHJR9dUQfstUUK=w544-h544-l90-rj",
    "artists": ["Kanye West", "GLC", "Consequence"],
    "album": "The College Dropout",
    "duration": "5:24"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "Ghost Town",
    "image": "https://lh3.googleusercontent.com/BJS73TPvpRmmiHnZDbrnLSHDwcIjB4VgqAqQuVabTyv7Ppp8FoJm1SVvmCX5psvG-MJdu9Wklt7Ts7w=w544-h544-l90-rj",
    "artists": ["Kanye West", "Kid Cudi", "PARTYNEXTDOOR", "070 Shake"],
    "album": "ye",
    "duration": "4:311"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "Bound 2",
    "image": "https://lh3.googleusercontent.com/IlOU83T0SWGj7h7qpDaZJwwGVfKnky9Veu8Nm6JzxzmvoWOFJQusAdTKhAqYla-3ZJBgIVWAhrDMikSfbA=w544-h544-l90-rj",
    "artists": ["Kanye West"],
    "album": "Yeezus",
    "duration": "3:49"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Fuiste lo mejor",
    "image": "https://lh3.googleusercontent.com/I97tO3TwkhDyCoxvPitGpnkIEUXDt-_6KLBjr7qAr2Hi5OciTf_imo9EpFaDP305TS_IHNUOwoQW0_Ou=w544-h544-l90-rj",
    "artists": ["Intoxicados"],
    "album": "Otro Dia en el Planeta Tierra",
    "duration": "4:29"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Nunca Quise",
    "image": "https://lh3.googleusercontent.com/I97tO3TwkhDyCoxvPitGpnkIEUXDt-_6KLBjr7qAr2Hi5OciTf_imo9EpFaDP305TS_IHNUOwoQW0_Ou=w544-h544-l90-rj",
    "artists": ["Intoxicados"],
    "album": "Otro Dia en el Planeta Tierra",
    "duration": "4:20"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Necesito",
    "image": "https://lh3.googleusercontent.com/I97tO3TwkhDyCoxvPitGpnkIEUXDt-_6KLBjr7qAr2Hi5OciTf_imo9EpFaDP305TS_IHNUOwoQW0_Ou=w544-h544-l90-rj",
    "artists": ["Intoxicados"],
    "album": "Otro Dia en el Planeta Tierra",
    "duration": "3:57"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Las cosas que no se tocan",
    "image": "https://lh3.googleusercontent.com/I97tO3TwkhDyCoxvPitGpnkIEUXDt-_6KLBjr7qAr2Hi5OciTf_imo9EpFaDP305TS_IHNUOwoQW0_Ou=w544-h544-l90-rj",
    "artists": ["Intoxicados"],
    "album": "Otro Dia en el Planeta Tierra",
    "duration": "3:34"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Fuego",
    "image": "https://lh3.googleusercontent.com/I97tO3TwkhDyCoxvPitGpnkIEUXDt-_6KLBjr7qAr2Hi5OciTf_imo9EpFaDP305TS_IHNUOwoQW0_Ou=w544-h544-l90-rj",
    "artists": ["Intoxicados", "Andres Calamaro"],
    "album": "Otro Dia en el Planeta Tierra",
    "duration": "4:22"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "Himno De Mi Corazón",
    "image": "https://lh3.googleusercontent.com/-u7dyChh5FY4zZ7vBkHQFnKBh1imkRjp0a36UUmkAjkcBHDczNa19BGEeNVB7U6ZZ1ZdBbjkWf5ZUyd0Xw=w544-h544-s-l90-rj",
    "artists": ["Los Abuelos De La Nada"],
    "album": "Himno De Mi Corazon",
    "duration": "5:04"
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "Rezo por Vos",
    "image": "https://lh3.googleusercontent.com/9HttfddR8JUc_KBy0p_CroPqmD0JD76UcIeuOju5vnU2Xy7waBXSClFt5lBnO9a7qCQHdea5t8AnTLEX2A=w544-h544-l90-rj",
    "artists": ["Charly García"],
    "album": "Parte De La Religion",
    "duration": "4:30"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "Barro Tal Vez",
    "image": "https://lh3.googleusercontent.com/cFo6TFlhwRm4-9lNvGqEAuX-_lopdwNp-WYG5Rpe21uO5ToMarm0AuaUsjv6aPSI-0W8wPT7owcr-oE=w544-h544-l90-rj",
    "artists": ["Luis Alberto Spinetta"],
    "album": "Kamikaze",
    "duration": "3:18"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "11 Y 6",
    "image": "https://lh3.googleusercontent.com/XhsPrXSXBliWXTz1YDzey-0lqQy-HBxz9KnLHZaFJKiVN9HCec5sXwOcKOca9SWOb7HyvuGfgeOqX7jR=w544-h544-l90-rj",
    "artists": ["Fito Paéz"],
    "album": "Giros",
    "duration": "2:59"
  },
  {
    "id": 5,
    "albumId": 6,
    "title": "Mil Horas",
    "image": "https://lh3.googleusercontent.com/cRfWaS7vvztZWY4AplHN4aQ46O_bYAtsDQ9eb2a73ALoamS3YOd7OWsO7QMG1ulDqGZwEBLCcV_0CsUAsA=w544-h544-l90-rj",
    "artists": ["Los Abuelos De La Nada"],
    "album": "Los Abuelos De La Nada 1",
    "duration": "2:48"
  },
]