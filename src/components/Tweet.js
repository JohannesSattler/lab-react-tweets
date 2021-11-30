import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {

  const {
    username,
    userimg,
    userhandle,
    timestamp,
    message
  } = props

  return (
    <div className="tweet">
      <ProfileImage
        userimg={userimg}
      />
      <div className="body">
        <div className="top">
          <User
            username={username}
            userhandle={userhandle}
          />
          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message}/>
        <Actions/>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
