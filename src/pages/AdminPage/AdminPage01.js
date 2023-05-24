import { useEffect, useState } from "react";

const AdminPage01 = ({ popName, setPopName }) => {

  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
      setisOn(!isOn)
    }

  return (
    <div className="SpaceAdmin">
      <div className="AdminTit">스페이스 관리자 설정</div>
      <div className="space-list-wrap">
          <div className="space-list-inner">
            <ul className="space-list-cont">
              <li>
                <div className="space-list-tit">일이삼사오육칠팔구십일이삼사오</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button" onClick={ e => { setPopName('UserSearchPop'); }}>
                    <img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" />
                  </button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">석우문화체육관 박람회</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">캠퍼스</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
              <li>
                <div className="space-list-tit">상담실</div>
                <div className="space-list-search">
                  <input type="text" />
                  <button type="button"><img src="/resources/img/icon_search_gray.svg" alt="돋보기 아이콘" /></button>
                </div>
                <button type="button" 
                className={`AdminBtn small ${isOn ? "on" : "off"}`}
                onClick={toggleHandler}
                >저장</button>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default AdminPage01;