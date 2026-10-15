import type { StaticImageData } from "next/image";

import g01 from "./gallery-01.webp";
import g02 from "./gallery-02.webp";
import g03 from "./gallery-03.webp";
import g04 from "./gallery-04.webp";
import g05 from "./gallery-05.webp";
import g06 from "./gallery-06.webp";
import g07 from "./gallery-07.webp";
import g08 from "./gallery-08.webp";
import g09 from "./gallery-09.webp";
import g10 from "./gallery-10.webp";
import g11 from "./gallery-11.webp";
import g12 from "./gallery-12.webp";
import g13 from "./gallery-13.webp";
import g14 from "./gallery-14.webp";
import g15 from "./gallery-15.webp";
import g16 from "./gallery-16.webp";
import g17 from "./gallery-17.webp";
import g18 from "./gallery-18.webp";
import g19 from "./gallery-19.webp";
import g20 from "./gallery-20.webp";
import g21 from "./gallery-21.webp";
import g22 from "./gallery-22.webp";
import g23 from "./gallery-23.webp";
import g24 from "./gallery-24.webp";
import g25 from "./gallery-25.webp";
import g26 from "./gallery-26.webp";
import g27 from "./gallery-27.webp";
import g28 from "./gallery-28.webp";
import g29 from "./gallery-29.webp";
import g30 from "./gallery-30.webp";
import g31 from "./gallery-31.webp";
import g32 from "./gallery-32.webp";
import g33 from "./gallery-33.webp";
import g34 from "./gallery-34.webp";
import g35 from "./gallery-35.webp";
import g36 from "./gallery-36.webp";
import g37 from "./gallery-37.webp";

export interface GalleryImageItem {
  id: number;
  src: StaticImageData;
  orientation: "horizontal" | "vertical";
  alt: string;
}

export const galleryItems: GalleryImageItem[] = [
  { id: 1, src: g01, orientation: "horizontal", alt: "Acharya Defence Academy activities and training" },
  { id: 2, src: g02, orientation: "vertical", alt: "Acharya Defence Academy ceremony and leadership" },
  { id: 3, src: g03, orientation: "horizontal", alt: "Cadets training at Acharya Defence Academy" },
  { id: 4, src: g04, orientation: "horizontal", alt: "Guard of honour parade by cadets" },
  { id: 5, src: g05, orientation: "horizontal", alt: "Cadet campus life and discipline" },
  { id: 6, src: g06, orientation: "horizontal", alt: "Acharya Defence Academy cadets group" },
  { id: 7, src: g07, orientation: "vertical", alt: "Academy mentor and cadet interaction" },
  { id: 8, src: g08, orientation: "horizontal", alt: "Academy drills and campus routine" },
  { id: 9, src: g09, orientation: "horizontal", alt: "Cadets classroom and study session" },
  { id: 10, src: g10, orientation: "horizontal", alt: "Felicitation and achievement awards" },
  { id: 11, src: g11, orientation: "horizontal", alt: "Acharya Defence Academy faculty and student meet" },
  { id: 12, src: g12, orientation: "vertical", alt: "Academy recognition and honours" },
  { id: 13, src: g13, orientation: "horizontal", alt: "Academy interactive learning hall" },
  { id: 14, src: g14, orientation: "horizontal", alt: "Cadets physical fitness and training ground" },
  { id: 15, src: g15, orientation: "horizontal", alt: "Morning parade and drills formation" },
  { id: 16, src: g16, orientation: "horizontal", alt: "Classroom instruction and strategy session" },
  { id: 17, src: g17, orientation: "vertical", alt: "Academy director felicitating cadets" },
  { id: 18, src: g18, orientation: "horizontal", alt: "Defence preparation batch assembly" },
  { id: 19, src: g19, orientation: "horizontal", alt: "Residential campus event and briefing" },
  { id: 20, src: g20, orientation: "horizontal", alt: "Cadets training under experienced mentors" },
  { id: 21, src: g21, orientation: "horizontal", alt: "Acharya Defence Academy entrance signboard" },
  { id: 22, src: g22, orientation: "vertical", alt: "Cadet award presentation ceremony" },
  { id: 23, src: g23, orientation: "horizontal", alt: "Classroom interactive mentorship" },
  { id: 24, src: g24, orientation: "horizontal", alt: "Cadets preparing for Sainik and RMS tests" },
  { id: 25, src: g25, orientation: "vertical", alt: "Cadet in uniform receiving honour" },
  { id: 26, src: g26, orientation: "horizontal", alt: "Cadets obstacle course training drill" },
  { id: 27, src: g27, orientation: "horizontal", alt: "Cadets assembly and motivational address" },
  { id: 28, src: g28, orientation: "horizontal", alt: "Study hall and focused self-learning session" },
  { id: 29, src: g29, orientation: "horizontal", alt: "Academy group celebration and success" },
  { id: 30, src: g30, orientation: "vertical", alt: "Ceremonial honours at defence academy" },
  { id: 31, src: g31, orientation: "horizontal", alt: "Cadets in academic revision lecture" },
  { id: 32, src: g32, orientation: "horizontal", alt: "Cadet team-building activity" },
  { id: 33, src: g33, orientation: "vertical", alt: "Acharya Defence Academy top performers wall" },
  { id: 34, src: g34, orientation: "horizontal", alt: "Cadets outdoor physical conditioning" },
  { id: 35, src: g35, orientation: "horizontal", alt: "Hostel life and structured routine" },
  { id: 36, src: g36, orientation: "vertical", alt: "Hall of fame and achiever banner" },
  { id: 37, src: g37, orientation: "horizontal", alt: "Grand assembly of Acharya Defence Academy cadets" },
];

export {
  g01, g02, g03, g04, g05, g06, g07, g08, g09, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
  g31, g32, g33, g34, g35, g36, g37,
};
