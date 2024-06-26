import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import HomeFilterButton from "../HomeFilterButton";
import AllianFooter from "../AllianFooter";
import EachContainer from "../EachContainer";

import "./index.css";

// Object For diplaying List Of Events
const eventsObj = [
  {
    id: uuidv4(),
    category: "PRESS",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814454/Component_92_gehjyi.png",
  },
  {
    id: uuidv4(),
    category: "BUSSINESS",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814454/Component_92_gehjyi.png",
  },
  {
    id: uuidv4(),
    category: "BUSSINESS",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814454/Component_95_if7eqj.png",
  },
  {
    id: uuidv4(),
    category: "PRESS",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814454/Component_95_if7eqj.png",
  },
  {
    id: uuidv4(),
    category: "BRANDING",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814454/Component_95_if7eqj.png",
  },
  {
    id: uuidv4(),
    category: "ALL",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_100_qhj83p.png",
  },
  {
    id: uuidv4(),
    category: "BRANDING",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814454/Component_92_gehjyi.png",
  },
  {
    id: uuidv4(),
    category: "CULTURE",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_100_qhj83p.png",
  },
  {
    id: uuidv4(),
    category: "BUSSINESS",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814454/Component_95_if7eqj.png",
  },
  {
    id: uuidv4(),
    category: "PRESS",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_100_qhj83p.png",
  },
  {
    id: uuidv4(),
    category: "BRANDING",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_99_kmafmn.png",
  },

  {
    id: uuidv4(),
    category: "CULTURE",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_99_kmafmn.png",
  },
  {
    id: uuidv4(),
    category: "MORE",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_99_kmafmn.png",
  },

  {
    id: uuidv4(),
    category: "MORE",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_99_kmafmn.png",
  },
  {
    id: uuidv4(),
    category: "MORE",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_103_dkgw4x.png",
  },

  {
    id: uuidv4(),
    category: "CULTURE",
    imgUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1714814453/Component_103_dkgw4x.png",
  },
];

// Object For display Filter button
const homeFilterObjs = [
  { id: uuidv4(), name: "ALL" },
  { id: uuidv4(), name: "BUSSINESS" },
  { id: uuidv4(), name: "BRANDING" },
  { id: uuidv4(), name: "PRESS" },
  { id: uuidv4(), name: "CULTURE" },
  { id: uuidv4(), name: "MORE" },
];

const Home = () => {
  const [categoryName, setCategoryName] = useState("ALL"); //To Store categroy name
  const [idForFilterBtn, setIdForFilterBtn] = useState(homeFilterObjs[0].id); // To store id of filter button
  /*useEffect(() => {
    const fetchEventsData = async () => {
      const url = `https://api.seatgeek.com/2/events?client_id=NDEzNDM3ODR8MTcxNDgxMzIxNy42MzIxMDA4`;

      const serverResponse = await fetch(url);
      const jsonRes = await serverResponse.json();

      /*   const camelCaseOfData = data.map((each: serverEventsTypes) => ({
        description: each.description,
        eventId: each.event_id,
        link: each.link,
        name: each.name,
        startTime: each.start_time,
        thumbnail: each.thumbnail,
        venue: each.venue,
      }));
    };
    fetchEventsData();
  }, []);
  */

  useEffect(() => {
    gsap.fromTo(
      ".home-filter-ul",
      {
        x: -500,
      },
      { x: -40, duration: 1 }
    );
    gsap.fromTo(".categories ", { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(".allian-evnets", { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(
      ".magical-meeting",
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );
  }, []);

  // Funtion to get Category
  const getCategory = (name: string) => {
    setCategoryName(name);
  };

  // To filter Objects based on user selection
  const filter = eventsObj.filter((each) => {
    if (categoryName === "ALL") {
      return eventsObj;
    } else if (each.category === categoryName) {
      return each;
    }
  });

  // Funtion for get Id of Active Filter Button
  const getIdForFilter = (id: string) => {
    setIdForFilterBtn(id);
  };
  return (
    <div>
      <Header />
      <div>
        <h1 className="allian-evnets">ALLIAN EVENTS</h1>

        <p className="magical-meeting">MAGICAL MEETING PLACE</p>
      </div>

      <div className="home-div">
        <div className="category-div">
          <div className="child-category">
            <h1 className="categories">CATEGORIES</h1>
            <ul className="home-filter-ul">
              {homeFilterObjs.map((each) => (
                <HomeFilterButton
                  single={each}
                  key={each.id}
                  getCategory={getCategory}
                  getIdForFilter={getIdForFilter}
                  isFilterBtnActive={idForFilterBtn === each.id}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="each-item-cls">
          <ul className="each-card-container">
            {filter.map((each) => (
              <EachContainer
                id={each.id}
                category={each.category}
                imgUrl={each.imgUrl}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
