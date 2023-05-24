
import { useEffect, useState } from "react";

const Map = ({setPopName }) => {

    const [Favorites, setFavorites] = useState(false);
    const [LocaBtn, setLocaBtn] = useState(false);

    return (
        <>
        <div className="layer" />
        <div className="Map">
            <button type="button" className="mapclose" onClick={ e => { setPopName(); }}><img src="/resources/img/close16.svg" alt="닫기 버튼 이미지" /></button>
            <div className="MapCon">
                <div className="MapSearch">
                    <div className="MapSearchBox">
                        <input type="text" placeholder="순헌관으로 가보자요" />
                        <button type="button" className="search24" />
                    </div>
                    <ul className="SearchList">
                        <li>
                            <p>눈꽃광앙앙아아아아장</p>
                            <button type="button" className="close24"/>
                        </li>
                        <li>
                            <p>미수루루루대학</p>
                            <button type="button" className="close24" />
                        </li>
                    </ul>
                </div>
                <ul className="MapLists">
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">순헌관</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">순헌관</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                    <li>
                        <div className="MapList">
                            <img className="bldgImg" src="/resources/img/sunheonHall.svg" alt="순헌관 이미지" />  
                            <div>
                                <div className="tit pdb10">
                                    <p className="txtEp">평화문(제1캠퍼스입니다)</p>
                                    <button type="button" onClick={() => {setFavorites(!Favorites)}}>
                                        {Favorites ? <div className="favoritesOff12" /> : <div className="favoritesOn12" />} 
                                    </button>
                                </div>
                                <p className="titDesc pdb5">숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관숙명여대 본관</p>
                                <p className="distance">50m</p>
                            </div>
                        </div>
                        <button type="button" onClick={() => {setLocaBtn(!LocaBtn)}}>
                            {LocaBtn ? <div className="locationBtnOn40" /> : <div className="locationBtnOff40" />} 
                        </button>
                    </li>
                </ul>
            <div className="MapScreen">
                <div className="locationTxt">
                    <button type="button">
                        <img src="/resources/img/locationBtnMap40.svg" alt="위치 아이콘 이미지" />
                        <p>순헌관열글자까지표시해야합니다</p>
                    </button>
                </div>
                <div className="currentLoc">
                    <div className="currentLocBg"><img src="/resources/img/bg.png" alt="프로필 이미지 이미지" /></div>
                    <p>현위치</p>
                </div>
                <div className="MapScreenBtns">
                    <button type="button" className="currentLocBtn mapCurrentLocation40"/>
                    <div className="zoomInOut">
                        <button type="button" className="zoomIn" />
                        <button type="button" className="zoomOut" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Map;
