
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    tittle: "first meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "12355 some city",
    description: "This is the first meet up",
  },
  {
    id: "m2",
    tittle: "first meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "4321 other city",
    description: "This is the second meet up",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
