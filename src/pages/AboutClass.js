import User from "../components/User";
import UserClass from "../components/UserClass";

const AboutClass = () => {
  return (
    <>
      <h1>About Me</h1>
      <User name={"Govind Singh (Function)"} />
      <hr></hr>
      <UserClass name={"GOVIND KUMAR (CLASS)"} />
    </>
  );
};
export default AboutClass;
