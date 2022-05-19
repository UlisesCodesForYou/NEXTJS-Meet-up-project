import Head from "next/head";

import { MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export const getStaticPaths = async (x) => {
  const client = await MongoClient.connect(
    "mongodb+srv://ulisesorozco6:3nkd513iNhKYH35y@cluster0.utzdw.mongodb.net/newmeetUp?retryWrites=true&w=majority"
  );
  const db = client.db(); // DB = database

  const meetupsCollection = db.collection("meetUp");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const client = await MongoClient.connect(
    "mongodb+srv://ulisesorozco6:3nkd513iNhKYH35y@cluster0.utzdw.mongodb.net/newmeetUp?retryWrites=true&w=majority"
  );
  const db = client.db(); // DB = database

  const meetupsCollection = db.collection("meetUp");

  const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId }, {});

  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: selectedMeetup,
    },
  };
};
export default MeetupDetails;
