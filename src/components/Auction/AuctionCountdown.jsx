// AuctionCountdown.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startAuction, endAuction } from './auctionStatusSlice';

function AuctionCountdown({ onAuctionEnd }) {
  const [timeLeft, setTimeLeft] = useState('');
  const auctionStarted = useSelector(
    (state) => state.auctionStatus.auctionStarted
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const auctionStartTime = new Date();
    auctionStartTime.setHours(14, 0, 0, 0); // 오늘 날짜의 14:00:00으로 설정
    const auctionEndTime = new Date(auctionStartTime);
    auctionEndTime.setHours(auctionEndTime.getHours() + 2); // 경매 종료 시간은 경매 시작 시간으로부터 2시간 후로 설정

    const calculateTimeLeft = () => {
      const currentTime = new Date();
      const difference = auctionStartTime - currentTime;

      if (difference <= 0) {
        // 경매 시작 후 2시간 내에
        if (!auctionStarted) {
          dispatch(startAuction());
        }

        const differenceToEnd = auctionEndTime - currentTime;
        if (differenceToEnd > 0) {
          const seconds = Math.floor((differenceToEnd / 1000) % 60);
          const minutes = Math.floor((differenceToEnd / 1000 / 60) % 60);
          const hours = Math.floor(differenceToEnd / (1000 * 60 * 60));

          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        } else {
          setTimeLeft('경매 종료');
          dispatch(endAuction());
          onAuctionEnd(); // 경매 종료 시 이벤트 호출
        }
      } else {
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor(difference / (1000 * 60 * 60));

        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        if (auctionStarted) {
          dispatch(endAuction()); // 경매 시작 전 또는 종료 후에는 경매 종료 상태로 설정
        }
      }
    };

    calculateTimeLeft(); // 처음 렌더링 시에도 시간 계산
    const timer = setInterval(calculateTimeLeft, 1000); // 1초마다 업데이트

    return () => clearInterval(timer); // 컴포넌트가 언마운트되면 타이머 해제
  }, [dispatch, auctionStarted, onAuctionEnd]);

  return (
    <div>
      <div style={{ color: auctionStarted ? 'red' : 'black' }}>{timeLeft}</div>
    </div>
  );
}

export default AuctionCountdown;
