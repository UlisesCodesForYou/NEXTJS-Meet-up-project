import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
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

  // ## START OF MONGODB CONNECTING CODE ######
  const client = await MongoClient.connect(
    "mongodb+srv://ulisesorozco6:3nkd513iNhKYH35y@cluster0.utzdw.mongodb.net/newmeetUp?retryWrites=true&w=majority"
  );
  const db = client.db(); // DB = database

  const meetupsCollection = db.collection("meetUp");

  // END OF CONNECTING CODE #######
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
