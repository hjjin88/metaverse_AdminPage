import PopLogin_01 from "./PopLogin_01";
import PopLogin_02 from "./PopLogin_02";
import PopLogin_03 from "./PopLogin_03";
import PopLogin_04 from "./PopLogin_04";
import PopLogin_05 from "./PopLogin_05";
import PopLogin_06 from "./PopLogin_06";
import PopLogin_07 from "./PopLogin_07";
import PopLogin_08 from "./PopLogin_08";
import PopLogin_09 from "./PopLogin_09";


const Popups = ({ popName, setPopName }) => {
    return (
        <>
        { popName === 'PopLogin_01' && (
          <PopLogin_01 setPopName={setPopName} />
        )}
        { popName === 'PopLogin_02' && (
          <PopLogin_02 setPopName={setPopName} />
        )}
        { popName === 'PopLogin_03' && (
          <PopLogin_03 setPopName={setPopName} />
        )}
        { popName === 'PopLogin_04' && (
          <PopLogin_04 setPopName={setPopName} />
        )}
        { popName === 'PopLogin_05' && (
          <PopLogin_05 setPopName={setPopName} />
        )}
        { popName === 'PopLogin_06' && (
          <PopLogin_06 setPopName={setPopName} />
        )}
        { popName === 'PopLogin_07' && (
          <PopLogin_07 setPopName={setPopName} />
        )}
        { popName === 'PopLogin_08' && (
          <PopLogin_08 setPopName={setPopName} />
        )}
        { popName === 'PopLogin_09' && (
          <PopLogin_09 setPopName={setPopName} />
        )}
        </>
    )
}

export default Popups;