import { useEffect, useState } from "react";
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
  return <MeetupList meetups={props.meetups} />;
};

// export const getStaticProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  // This code will never reach the clients. It will only run during the build process.
  // Fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
};

export default HomePage;
