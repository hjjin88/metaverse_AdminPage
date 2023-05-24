import { Fragment, useEffect, useRef, useState } from "react";
import LtTopBar from "./LtTopBar";
import RtBar from "../RtBar";
import AdminPageBtBar from "../AdminPageBtBar";
import Popups from "../Popups";
import AdminPage01 from "./AdminPage01";
import AdminPage02 from "./AdminPage02";
import AdminPage03 from "./AdminPage03";
import AdminPage04 from "./AdminPage04";
import AdminPage0401 from "./AdminPage0401";
import AdminPage0402 from "./AdminPage0402";
import AdminPage0403 from "./AdminPage0403";
import AdminPage05 from "./AdminPage05";
import AdminPage0601 from "./AdminPage0601";
import AdminPage0602 from "./AdminPage0602";
import AdminPage0603 from "./AdminPage0603";
import AdminPage07 from "./AdminPage07";

const AdminPage = () => {
  const unityRef = useRef();

  // 페이지 리사이즈, 스크롤 대응 state 업데이트 목적
  const [changeHeight, setChangeHeight] = useState(0);
  const [changeScrollTop, setScrollTop] = useState(0);
  const handleResize = () => {
    setChangeHeight(document.documentElement.scrollHeight);
    setScrollTop(document.documentElement.clientHeight - document.documentElement.scrollHeight + document.documentElement.scrollTop);
  }

  // 유니티 캔버스 높이 가져오기
  const [unityHeight, setUnityHeight] = useState(0);

  useEffect(() => {
    if(unityRef.current) {
      setUnityHeight(unityRef.current.clientHeight);
    }
    
  }, [unityRef, changeHeight, changeScrollTop]);  

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    return () => {

      // unmount 이벤트 리스너 제거
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    }
  }, []);

  const [popName, setPopName] = useState();

  const [menuArr, setMenuArr] = useState([
    { id: 10,   name: '스페이스 관리자 설정', parentId: 0, menuId: 0, isOpen: false, content: <AdminPage01 setPopName={setPopName} /> },
    { id: 20,   name: '강사 관리',         parentId: 0, menuId: 0, isOpen: false, content: <AdminPage02 /> },
    { id: 30,   name: '상담사 관리',        parentId: 0, menuId: 0, isOpen: false, content: <AdminPage03 /> },

    // 1차메뉴에도 컨텐츠가 있고 하위메뉴에도 있는 경우
    { id: 40,   name: '사용자 관리',       parentId: 0, isOpen: false, content: <AdminPage04 /> },
    { id: 410,  name: '· 사용자 활동 내역',   parentId: 40, isOpen: false, content: <AdminPage0401 /> },
    { id: 420,  name: '· 블랙리스트',        parentId: 40, isOpen: false, content: <AdminPage0402 /> },
    { id: 430,  name: '· 화이트리스트',       parentId: 40, isOpen: false, content: <AdminPage0403 /> },

    { id: 50,   name: '메시지 관리',       parentId: 0, isOpen: false, content: <AdminPage05 /> },

    // 1차메뉴에는 컨텐츠가 없고 하위메뉴는 있는 경우
    { id: 60,   name: '포인트 관리',       parentId: 0, isOpen: false },
    { id: 610,  name: '· 포인트 자동 지급',   parentId: 60, isOpen: false, content: <AdminPage0601 /> },
    { id: 620,  name: '· 포인트 지급/차감',   parentId: 60, isOpen: false, content: <AdminPage0602 /> },
    { id: 630,  name: '· 사용자 포인트 내역',  parentId: 60, isOpen: false, content: <AdminPage0603 /> },

    { id: 70,   name: '작업 가이드', parentId: 0, menuId: 0, isOpen: false, content: <AdminPage07 /> },
  ])

  const [menuId, setMenuId] = useState(0);                  // 선택한 1차메뉴
  const [selectedMenuId, setSelectedMenuId] = useState(0);  // 선택한 서브 메뉴

  const handleMenuClick = (item) => {
    // 선택한 메뉴를 오픈. 
    setMenuArr([...menuArr.map(m => m.id === item.id ? {...m, isOpen: !m.isOpen} : m)]);
    // 1개의 메뉴만 오픈하고 다른걸 닫으려면 아래
    // setMenuArr([...menuArr.map(m => m.id === item.id ? {...m, isOpen: !m.isOpen} : {...m, isOpen: false} )]);
    setMenuId(item.id);
    if(!menuArr.some(s => s.parentId === item.id)) {
      setSelectedMenuId(item.id);
    }
  }

  return (
    <div id="unity_container">
      {/* 유니티 WebGL 캔버스 영역 */}
      <canvas id="react-unity-webgl-canvas"
        ref={unityRef} 
        style={{ 
          position: 'absolute',
          color: '#fff',
          width: '100%', 
          height: '100vh', 
          background : '#7C758F',
        }}
      />
      <div className="wrap Admin">
        <LtTopBar popName={popName} setPopName={setPopName} />
        <RtBar popName={popName} setPopName={setPopName} />
        <AdminPageBtBar popName={popName} setPopName={setPopName} />
        <Popups popName={popName} setPopName={setPopName} />
        
        <div className="AdminScreenLnbs">
        { menuArr.filter(item => item.parentId === 0).map(item => (
          <Fragment key={item.id} >
          <div style={{ cursor: 'pointer' }} className={`${menuId === item.id ? 'Tab-On' : ''}`} onClick={e => { handleMenuClick(item); item.content && setSelectedMenuId(item.id); }}>{item.name}</div>
          
          {/* 1차 메뉴가 열려있고 1차 메뉴를 부모로 가진 하위 메뉴가 있으면 오픈 */}
          { (item.isOpen && menuArr.some(s => s.parentId === item.id)) && (
            <div className="SubTab">
            {/* 1차메뉴를 부모로 가진 하위 메뉴 리스트 */}
            { menuArr.filter(s => s.parentId === item.id).map(sub => (
              <div key={sub.id} style={{ cursor: 'pointer' }} className={`${selectedMenuId === sub.id ? 'Tab-On' : ''}`} onClick={e => setSelectedMenuId(sub.id)}>{sub.name}</div>
            ))}
            </div>
          )}
          </Fragment>
        ))}
        </div>
        <div className="AdminCont" >
          {menuArr.find(m => m.id === selectedMenuId)?.content}
        </div>
      </div>
    </div>
  )
}

export default AdminPage;