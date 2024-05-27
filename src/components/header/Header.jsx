import { Link } from 'react-router-dom';
import '../../styles/header.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import DropDownProfile from '../dropdownProfile/DropDownProfile';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom/dist';

export default function Header() {
  //Search Toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [openProfile, setOpenProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setOpenProfile(!openProfile);
  };

  // console.log(isNavOpen);
  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem('isLoggedIn')));
  }, [isLoggedIn]);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
    // setIsNavOpen(true);
  };

  // const toggleNav = () => {
  //   setIsNavOpen(!isNavOpen);
  //   setIsSearchOpen(false);
  // };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false); // Close nav when opening search
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // 엔터를 눌렀을 때 검색 결과 페이지로 이동하고 입력된 검색어를 쿼리 문자열로 전달
      navigate(`/search?query=${searchText}`);
    }
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)',
  });

  return (
    <>
      <header>
        <div className={`nav ${isNavOpen ? 'none' : ''}`}>
          <Link to={'/'}>
            <img src={logo} alt="" className="logo" />
          </Link>
          {/* MenuList */}
          {(isDesktop || isNavOpen) && (
            <ul
              id="text"
              className="navbar active"
              style={{ display: isSearchOpen ? 'none' : '' }}
            >
              <li>
                <Link to={'/auctionlist'} className="link">
                  경매
                </Link>
              </li>
              <li>
                <Link to={'/search?query='} className="link">
                  판매
                </Link>
              </li>
              <li>
                <Link to={'/artist'} className="link">
                  이달의 작가
                </Link>
              </li>
            </ul>
          )}
          <div className="search-login">
            {isSearchOpen && (
              <input
                className="input"
                type="text"
                placeholder="검색..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리
              />
            )}
            <div className="search-icon" onClick={toggleSearch}>
              {/* Search icon goes here */}
              <FaSearch />
            </div>

            {isLoggedIn ? (
              <div className="profileImage" onClick={handleProfileClick}>
                <FaUser className="user-icon" />
                {openProfile && (
                  <DropDownProfile
                    setIsLoggedIn={setIsLoggedIn}
                    setOpenProfile={setOpenProfile}
                  />
                )}
              </div>
            ) : (
              <Link className="lab-btn" to="/login">
                로그인
              </Link>
            )}
          </div>
          <div id="mobile" onClick={handleClick}>
            {isNavOpen ? (
              <FaTimes className="mobileicon" />
            ) : (
              <FaBars className="mobileicon" />
            )}
          </div>{' '}
        </div>
      </header>
    </>
  );
}
