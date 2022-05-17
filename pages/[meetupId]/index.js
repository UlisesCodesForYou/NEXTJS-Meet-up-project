import { MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="123 fake street, city country 123445"
      description="This is a nice city"
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://ulisesorozco6:3nkd513iNhKYH35y@cluster0.utzdw.mongodb.net/newmeetUp?retryWrites=true&w=majority"
  );
  const db = client.db(); // DB = database

  const meetupsCollection = db.collection("meetUp");

  const meetups = await meetupsCollection.find({},{})

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "23 fake street, city country 123445",
        description: "This is a nice city",
      },
    },
  };
};
export default MeetupDetails;
