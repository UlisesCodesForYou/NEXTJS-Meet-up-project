import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const MeetUp = () => {
  const onAddMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default MeetUp;
