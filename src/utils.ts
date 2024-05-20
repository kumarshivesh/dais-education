interface CardData {
  title: string;
  subTitle: string;
  link?: string;
  description: string;
  image: ImageMetadata;
}

import img1 from "./img/academicLandscape/img1.jpg";
import img2 from "./img/academicLandscape/img2.jpg";
import img3 from "./img/academicLandscape/preparatory.jpg";
import img4 from "./img/academicLandscape/image4.png";

export const  cardData: CardData[] = [
  {
    title: "Play <span>Group</span>",
    subTitle: "(2.5 - 2.8 Years)",
    link: "https://navigate-designer-808266.framer.app/academic-stages#pp-grade2",
    description: "Designed to be entirely activity-based, we ensure our children not only learn but thrive in our nurturing environment.",
    image: img1,
  },

  {
    title: "Pre <span><span>School</span></span>",
    subTitle: "(3 - 6 Years)",
    link: "https://navigate-designer-808266.framer.app/academic-stages#grade3-grade5",
    description:
      "Our children's early years are enriched by hands-on exploration and engaging activities designed to foster holistic development.",
    image: img2,
  },

  {
    title: "Primary <span>School</span>",
    subTitle: "(Grade I - IV)",
    link: "https://navigate-designer-808266.framer.app/academic-stages#grade9-grade12",
    description: "We foster integrated knowledge, emphasising core subjects like English, Mathematics, Environmental Sciences, and Social Science, alongside multi-dimensional learning.",
    image: img3,
  },

  {
    title: "Middle <span>School</span>",
    subTitle: "(Grade V - VIII)",
    link: "https://navigate-designer-808266.framer.app/academic-stages#grade6-grade8",
    description:
      "Students handle expanded curriculum sections including English, Mathematics, Hindi, General Science, and Social Studies, with specialised teachers aiding deeper exploration.",
    image: img4,
  },

  {
    title: "Secondary <span>School</span>",
    subTitle: "(Grade IX-X)",
    link: "https://navigate-designer-808266.framer.app/academic-stages#grade9-grade12",
    description: "Students excel with unique achievements, driven by their perseverance. They also organise school events with energy, showcasing their leadership and dedication.",
    image: img3,
  },
  
  {
    title: "Senior <span>Secondary</span>",
    subTitle: "(Grade XI-XII)",
    link: "https://navigate-designer-808266.framer.app/academic-stages#grade6-grade8",
    description:
      "Students thrive in our nature-friendly campus, where modern teaching blends with traditional values. Explore our Science and Commerce streams tailored for your ambitions!",
    image: img4,
  },
];
