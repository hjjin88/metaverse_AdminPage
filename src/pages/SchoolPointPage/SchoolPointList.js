import { useEffect, useState } from "react";

const SchoolPointList = ({ setPopName }) => {

    const [isOn, setisOn] = useState(false);

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
                            <div className="item_img">
                                <img className="icon" src="/resources/img/icon_point_shop.svg" alt="포인트 상점 아이콘" />
                                <p className="num">P<span className="p-num">100,000</span></p>
                            </div>
                            <div className="item_info">
                                <p className="item_tit"><span>복지포인트 100,000</span></p>
                                <p className="item_txt">
                                    <span>
                                        도서관 및 학생회관에 있는 <br />복사기, 프린트 이용 가능한 포인트복사기, 프린트 이용 가능한 포인트복사기, 프린트 이용 가능한 포인트복사기, 프린트 이용 가능한 포인트복사기, 프린트 이용 가능한 포인트복사기, 프린트 이용 가능한 포인트
                                        도서관 및 학생회관에 있는 <br />복사기, 프린트 이용 가능한 포인트<br />
                                        도서관 및 학생회관에 있는 <br />복사기, 프린트 이용 가능한 포인트<br />
                                    </span>
                                </p>
                            </div>
                        </div> 
                        <div className="btns">
                            <button type="button" className="btn_pink disabled" onClick={() => {setisOn(!isOn)}}>구매하기</button>
                        </div>
                        {isOn && 
                            <div className="layer">
                                <div className="Alarm">
                                    <dl>
                                        <dt>구매하기</dt>
                                        <dd className="txt-15Gy5 lh140">
                                            복사포인트 200을 구매하시겠습니까? <br />
                                            200포인트가 차감됩니다.
                                        </dd>
                                    </dl>
                                    <div className="Alarm-Btns">
                                        <button onClick={ e => { setPopName(); }}>취소</button>
                                        <button type="button">확인</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </li>
                    <li className="item_box">
                       <div className="item">
                            <div className="item_img">
                                <img className="icon" src="/resources/img/tb_bg.png" alt="포인트 상점 아이콘" />
                                <p className="num">P<span className="p-num">200</span></p>
                            </div>
                            <div className="item_info">
                                <p className="item_tit"><span>복지포인트 200</span></p>
                                <p className="item_txt"><span>도서관 및 학생회관에 있는 <br />복사기, 프린트 이용 가능한 포인트</span></p>
                            </div>
                        </div> 
                        <div className="btns">
                            <button type="button" className="btn_pink">구매하기</button>
                        </div>
                    </li>
                    <li className="item_box">
                       <div className="item">
                            <div className="item_img">
                                <img className="icon" src="/resources/img/icon_point_shop.svg" alt="포인트 상점 아이콘" />
                                <p className="num">P<span className="p-num">200</span></p>
                            </div>
                            <div className="item_info">
                                <p className="item_tit"><span>복지포인트 200</span></p>
                                <p className="item_txt"><span>도서관 및 학생회관에 있는 <br />복사기, 프린트 이용 가능한 포인트</span></p>
                            </div>
                        </div> 
                        <div className="btns">
                            <button type="button" className="btn_pink">구매하기</button>
                        </div>
                    </li>
                    <li className="item_box">
                       <div className="item">
                            <div className="item_img">
                                <img className="icon" src="/resources/img/icon_point_shop.svg" alt="포인트 상점 아이콘" />
                                <p className="num">P<span className="p-num">200</span></p>
                            </div>
                            <div className="item_info">
                                <p className="item_tit"><span>복지포인트 200</span></p>
                                <p className="item_txt"><span>도서관 및 학생회관에 있는 <br />복사기, 프린트 이용 가능한 포인트</span></p>
                            </div>
                        </div> 
                        <div className="btns">
                            <button type="button" className="btn_pink">구매하기</button>
                        </div>
                    </li>
                    <li className="item_box">
                       <div className="item">
                            <div className="item_img">
                                <img className="icon" src="/resources/img/icon_point_shop.svg" alt="포인트 상점 아이콘" />
                                <p className="num">P<span className="p-num">200</span></p>
                            </div>
                            <div className="item_info">
                                <p className="item_tit"><span>복지포인트 200</span></p>
                                <p className="item_txt"><span>도서관 및 학생회관에 있는 <br />복사기, 프린트 이용 가능한 포인트</span></p>
                            </div>
                        </div> 
                        <div className="btns">
                            <button type="button" className="btn_pink">구매하기</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SchoolPointList;