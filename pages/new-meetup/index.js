import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const MeetUp = () => {
  const router = useRouter();
  const onAddMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/newmeetUp", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
    </>
  );
};

export default MeetUp;
