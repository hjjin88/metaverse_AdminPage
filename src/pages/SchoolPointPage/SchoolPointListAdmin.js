import { useEffect, useRef, useState } from "react";

const SchoolPointListAdmin = ({ setPopName}) => {

    const [CountList, setCountList] = useState();
    const [isOn, setisOn] = useState();

    return (

      <div className="layer new_pop02 pointSystem">
        <div>
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="layer_top">
                <h1 className="layer_tit"><strong>캠퍼스 포인트 상점</strong></h1>
            </div>
            
            <div className="layer_cont">
                <ul className="shop_list">
                    <li className="item_box">                        
                       <div className="item">
                            <button type="button" className="btn_modify">
                                <img src="/resources/img/icon_menu_gray.svg" alt="햄버거 메뉴 아이콘" />
                            </button>
                            <div className="item_img">
                                <img className="icon" src="/resources/img/icon_point_shop.svg" alt="포인트 상점 아이콘" />
                                <p className="num">P<span className="p-num">100,000</span></p>
                            </div>
                            <div className="item_info">
                                <p className="item_tit">
                                    <span>복지포인트 100,000</span>
                                </p>
                                <p className="item_txt">
                                    <span>도서관 및 학생회관에 있는 <br />복사기, 프린트 이용 가능한 포인트</span>
                                </p>
                            </div>
                        </div> 
                        <div className="btns">
                            <button type="button" className="btn_pink">수정</button>
                            <button type="button" className="btn_pink">삭제</button>
                        </div>
                    </li>                    
                    <li className="item_box">
                       <div className="item">
                            <button type="button" className="btn_modify">
                                <img src="/resources/img/icon_menu_gray.svg" alt="햄버거 메뉴 아이콘" />
                            </button>
                            <div className="item_img">
                                <button type="button" class="icon Add">
                                    <img src="/resources/img/icon_plus_gray.svg" alt="플러스 아이콘" />
                                </button>
                                <p className="num">
                                    P
                                    {/* <span className="p-num">200</span> */}
                                    <button type="button" className="btn_modify">
                                        <img src="/resources/img/icon_pen_white.svg" alt="포인트 수정 아이콘" />
                                    </button>
                                </p>
                            </div>
                            <div className="item_info">
                                <p className="item_tit">
                                    <span>상품명</span>
                                    <button type="button" class="edit-pen"></button>
                                </p>
                                <p className="item_txt">
                                    <span>상품설명</span>
                                    <button type="button" class="edit-pen"></button>
                                </p>
                            </div>
                        </div> 
                        <div className="btns">
                            <button type="button" className="btn_pink disabled">완료</button>
                            <button type="button" className="btn_pink">삭제</button>                            
                        </div>
                    </li>
                    {CountList  && 
                        <li className="item_box" >
                        <div className="item">
                            <button type="button" className="btn_modify">
                                <img src="/resources/img/icon_menu_gray.svg" alt="햄버거 메뉴 아이콘" />
                            </button>
                            <div className="item_img">
                                <img className="icon" src="/resources/img/icon_point_shop.svg" alt="포인트 상점 아이콘" />
                                <p className="num">
                                    P
                                    <span className="p-num">200</span>
                                    <button type="button" className="btn_modify">
                                        <img src="/resources/img/icon_pen_white.svg" alt="포인트 수정 아이콘" />
                                    </button>
                                </p>
                            </div>
                            <div className="item_info">
                                <p className="item_tit">
                                    <span>상품명</span>
                                    <button type="button" class="edit-pen"></button>
                                </p>
                                <p className="item_txt">
                                    <span>상품설명</span>
                                    <button type="button" class="edit-pen"></button>
                                </p>
                            </div>
                        </div> 
                        <div className="btns">
                            <button type="button" className="btn_pink">수정</button>
                            <button type="button" className="btn_pink">삭제</button>
                        </div>
                    </li>
                    }
                    <li className="item_box item_plus">
                       <button type="button" onClick={() => {setisOn(!isOn)}}>
                            <img src="/resources/img/icon_plus_gray.svg" alt="플러스 아이콘" />
                       </button>
                    </li>
                </ul>
            </div>
            <div className="layer_bottom">
                <div className="layer_btns">
                    <button type="button" className="sec-btn-L-on02 tit-20Gy3" onClick={() => {setisOn(!isOn)}}>등록</button>
                </div>
            </div>
            {isOn ? 
                <div className="layer">
                    <div className="Alarm">
                        <dl>
                            <dt>상점 등록하기</dt>
                            <dd className="txt-15Gy5 lh140">
                                리스트 등록을 완료하시겠습니까?<br />
                                확인을 누르면 상점 목록이 저장, 업데이트 됩니다.
                            </dd>
                        </dl>
                        <div className="Alarm-Btns">
                            <button onClick={ e => { setPopName(); }}>취소</button>
                            <button type="button" onClick={ e => {setCountList(!CountList); setisOn(!isOn);}}>확인</button>
                        </div>
                    </div>
                </div>
                 : null
                }
        </div>
    </div>
  )
}


export default SchoolPointListAdmin;