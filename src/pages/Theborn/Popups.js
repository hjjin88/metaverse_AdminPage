import Quest from "./Quest";
import Pop_ty01 from "./Pop_ty01";
import Pop_ty02 from "./Pop_ty02";
import Kiosk from "./Kiosk";
import NpcMessage from "./NpcMessage";
import MessageInner from "./MessageInner";
import QuestIcon from "./QuestIcon";
import Stamp from "./Stamp";
import Message from "./Message";

const Popups = ({ popName, setPopName }) => {
    return (
        <>
        { popName === 'Quest' && (
          <Quest setPopName={setPopName} />
        )}
        { popName === 'Pop_ty01' && (
          <Pop_ty01 setPopName={setPopName} />
        )}
        { popName === 'Pop_ty02' && (
          <Pop_ty02 setPopName={setPopName} />
        )}
        { popName === 'Kiosk' && (
          <Kiosk setPopName={setPopName} />
        )}
        { popName === 'NpcMessage' && (
          <NpcMessage setPopName={setPopName} />
        )}
        { popName === 'MessageInner' && (
          <MessageInner setPopName={setPopName} />
        )}
        { popName === 'QuestIcon' && (
          <QuestIcon setPopName={setPopName} />
        )}
        { popName === 'Stamp' && (
          <Stamp setPopName={setPopName} />
        )}
        { popName === 'Message' && (
          <Message setPopName={setPopName} />
        )}
        </>
    )
}

export default Popups;