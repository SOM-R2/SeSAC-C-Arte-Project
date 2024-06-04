import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import '../styles/auction.css';
import artData from '../data/auction.json';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AuctionCountdown from '../components/Auction/AuctionCountdown';
import { useDispatch, useSelector } from 'react-redux';
import { placeBid } from '../components/Auction/auctionSlice';

const AuctionPage = () => {
  // 커튼 요소를 참조하기 위한 ref 생성
  const curtainRef = useRef(null);

  // 커튼 애니메이션이 종료되면 커튼을 숨기는 함수
  const hideCurtain = () => {
    // 커튼 요소가 존재하고 애니메이션이 끝나면
    if (curtainRef.current) {
      // 커튼 숨기기
      curtainRef.current.style.display = 'none';
    }
  };

  // 컴포넌트가 마운트된 후 애니메이션이 종료되면 커튼을 숨기도록 설정
  useEffect(() => {
    // 애니메이션 지속 시간 (8초) 후에 커튼 숨기기 함수 호출
    const timeoutId = setTimeout(hideCurtain, 5000); // 8초는 애니메이션 지속 시간과 동일해야 합니다.

    // 컴포넌트 언마운트 시 타임아웃 클리어
    return () => clearTimeout(timeoutId);
  }, []); // 컴포넌트가 처음 렌더링될 때만 호출
  const [showModal, setShowModal] = useState(false);
  const [showBidSubmittedModal, setShowBidSubmittedModal] = useState(false);
  const [bidDetails, setBidDetails] = useState({
    amount: '',
    name: '',
    email: '',
    phone: '',
  });

  const { artId } = useParams();
  const [selectedArt, setSelectedArt] = useState(null);
  const handleSelectArt = (artId) => {
    const auction = artData.find((item) => item.id === Number(artId));
    setSelectedArt(auction);
  };
  useEffect(() => {
    // Select the first artwork initially
    if (artData.length > 0) {
      handleSelectArt(artId);
    }
  }, [artId]);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleCloseBidSubmittedModal = () => setShowBidSubmittedModal(false);

  const [bidAmount, setBidAmount] = useState('');
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  // 최고 입찰가를 가져옴
  const highestBidAmount = useSelector(
    (state) => state.auction.auctions[artId]?.highestBid || 0
  );

  const handleBid = () => {
    if (
      bidAmount.trim() === '' ||
      isNaN(bidAmount) ||
      parseInt(bidAmount, 10) <= 0
    ) {
      alert('유효한 입찰가를 입력하세요.');
      return;
    }

    // 입찰가가 시작 가격보다 작은 경우 경고 메시지 표시
    if (parseInt(bidAmount, 10) < selectedArt.bid_starting_price) {
      alert(
        `입찰가는 시작 가격(${selectedArt.bid_starting_price}원)보다 커야 합니다.`
      );
      return;
    }

    // 사용자가 입력한 입찰가와 현재 최고 입찰가를 비교
    if (parseInt(bidAmount, 10) > highestBidAmount) {
      setShowBidSubmittedModal(true);
      dispatch(placeBid({ artId, user, amount: parseInt(bidAmount, 10) }));
      setBidAmount('');
      setShowModal(false);
    } else {
      alert('최고가가 아닙니다. 입찰가를 다시 입력해주세요.');
    }
  };

  const auctionStarted = useSelector(
    (state) => state.auctionStatus.auctionStarted
  );

  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const handleAuctionEnd = () => {
    setIsAuctionEnded(true);
  };
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const navigate = useNavigate(); // 라우팅을 위해 useNavigate 훅 사용

  const handleButtonClick = () => {
    if (auctionStarted) {
      if (isLoggedIn) {
        handleShowModal();
      } else {
        alert('로그인이 필요한 서비스입니다.');
        navigate('/login'); // 로그인 페이지로 이동
      }
    } else {
      alert('경매가 시작되지 않았습니다.');
    }
  };

  // 오늘 날짜를 YYYY-MM-DD 형식으로 포맷하는 함수
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const today = formatDate(new Date());

  return (
    <>
      <Header />

      <div className="auction-page">
        {/*------ curtain effect-------- */}
        <div className="outer">
          <div className="tcell">
            <div className="curtain-wrapper">
              <div className="curtain" ref={curtainRef}>
                <div className="panel-left"></div>
                <div className="panel-right"></div>
                <div className="jacket" title="Play"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="artwork-container">
          {selectedArt && (
            <>
              <div className="artwork-img-section">
                <img
                  src={selectedArt.bid_art_img ? selectedArt.bid_art_img : ''}
                  className="artwork-image"
                  alt=" artwork"
                />
              </div>
              <div className="artwork-info">
                <h2 className="artwork-title">{selectedArt.bid_art_title}</h2>
                <h3 className="artist">Artist: {selectedArt.artist}</h3>
                <p className="description">
                  작품 설명: {selectedArt.description}
                </p>

                <div className="price-section">
                  <div>
                    예상 가격:{' '}
                    <span className="price-value">
                      ₩{selectedArt.bid_estimate_price}
                    </span>
                  </div>
                  <div>
                    시작 가격:{' '}
                    <span className="price-value">
                      ₩{selectedArt.bid_starting_price}
                    </span>
                  </div>
                </div>

                <div key={selectedArt.id}>
                  <p>제작 연도: {selectedArt.published_year}</p>
                  <p>경매 번호: {selectedArt.bid_code}</p>
                  <p>경매일: {today}</p>
                </div>
                <AuctionCountdown onAuctionEnd={handleAuctionEnd} />
                {bidDetails.amount && (
                  <div className="bid-details">
                    <h4>Your Bid Details:</h4>
                    <p>
                      <strong>Amount:</strong> ${bidDetails.amount}
                    </p>
                    <p>
                      <strong>Name:</strong> {bidDetails.name}
                    </p>
                  </div>
                )}
                <button
                  className={`bid-button ${isAuctionEnded ? 'disabled' : ''}`}
                  onClick={handleButtonClick}
                  disabled={isAuctionEnded}
                >
                  Place your bid
                </button>
              </div>
            </>
          )}
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Place Your Bid</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="bidAmount" className="form-label">
                  경매 가격
                </label>
                <div className="input-group">
                  <span className="input-group-text">₩</span>
                  <input
                    type="number"
                    className="form-control"
                    id="bidAmount"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="입찰 금액"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="bidderName" className="form-label">
                  성함
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bidderName"
                  value={localStorage.getItem('name')}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="입찰자 성함"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bidderEmail" className="form-label">
                  이메일
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="bidderEmail"
                  value={localStorage.getItem('email')}
                  onChange={(e) =>
                    setBidDetails({ ...bidDetails, email: e.target.value })
                  }
                  placeholder="이메일"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bidderPhone" className="form-label">
                  전화번호
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="bidderPhone"
                  value={localStorage.getItem('phone')}
                  onChange={(e) =>
                    setBidDetails({ ...bidDetails, phone: e.target.value })
                  }
                  placeholder="010-1111-1111"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleBid}>
              Submit Bid
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showBidSubmittedModal}
          onHide={handleCloseBidSubmittedModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Bid Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/successful-bid-3-613041.png"
                alt="Success Icon"
                style={{ width: '100px', marginBottom: '20px' }}
              />
              <h4>Congratulations!</h4>
              <p>입찰서가 성공적으로 제출되었습니다!</p>
            </div>
            {bidDetails.amount && (
              <div className="bid-details">
                <h4>Your Bid Details:</h4>
                <p>
                  <strong>Amount:</strong> ${bidDetails.amount}
                </p>
                <p>
                  <strong>Name:</strong> {bidDetails.name}
                </p>
                <p>
                  <strong>Email:</strong> {bidDetails.email}
                </p>
                <p>
                  <strong>Phone:</strong> {bidDetails.phone}
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseBidSubmittedModal}>
              닫기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default AuctionPage;
