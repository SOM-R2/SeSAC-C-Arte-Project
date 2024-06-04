import { useState } from 'react';
import AuctionCountdown from '../components/Auction/AuctionCountdown';
import AuctionItemList from '../components/Auction/AuctionItemList';
import auctionData from '../data/auction.json';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../styles/AuctionList.scss';

export default function AuctionList() {
  const today = new Date();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const formattedDate = `${months[today.getMonth()]} ${today.getDate()}`;
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);

  const handleAuctionEnd = () => {
    setIsAuctionEnded(true);
  };

  return (
    <>
      <Header />
      <div className="auction-List">
        <div className="auction-title">
          <h3>today's auction</h3>
          <span>{formattedDate}(14PM)</span>
          <span className="auction-open"> Open</span>
          <AuctionCountdown onAuctionEnd={handleAuctionEnd} />
        </div>
        <div>오늘의 특별한 작품들을 만나보세요.</div>
        <AuctionItemList data={auctionData} type="bid" />
      </div>
      <Footer />
    </>
  );
}
