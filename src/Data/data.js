import Template1 from "../Templetes/Template1";
import Template2 from "../Templetes/Template2";
import Template3 from "../Templetes/Template3";

// Stores All Templates As a json State
const temp = [
  {
    thumbnail: "/images/Templete1.png",
    data: <Template1 />,
  },

  {
    thumbnail: "/images/Templete2.jpg",
    data: <Template2 />,
  },

  {
    thumbnail: "/images/Templete3.jpg",
    data: <Template3 />,
  },
];

export default temp;
