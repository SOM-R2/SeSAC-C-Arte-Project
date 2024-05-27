import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../../styles/Item.module.scss';

export default function Item({ item, type }) {
  const imagePath = type === 'bid' ? `${item.bid_art_img}` : `${item.art_img}`;
  const linkPath =
    type === 'bid' ? `/auction/${item.id}` : `/artDetail/${item.id}`;

  const highestBid = useSelector((state) => {
    const auction = state.auction.auctions[item.id];
    return auction ? auction.highestBid : null;
  });

  return (
    <div className={styles.card}>
      <Link to={linkPath} className={styles.link}>
        <div className={styles.imgSection}>
          <img
            className={styles.img}
            src={imagePath}
            alt={type === 'bid' ? item.bid_art_title : item.title}
          />
        </div>
        {type === 'bid' ? (
          <>
            <span className={styles.code}>No.{item.bid_code}</span>
            <div>{item.bid_art_title}</div>
            <div className={styles.artist}>{item.artist}</div>
            <div className="auction-price">
              예상 가격: {item.bid_estimate_price}
            </div>
            <div className="auction-price">
              현재 최고 입찰가:{' '}
              {highestBid !== null ? `₩${highestBid}` : '아직 입찰 없음'}
              <br />
              (시작 가격 : {item.bid_starting_price})
            </div>
            <div className="auction-button">
              <button>작품 보러 가기</button>
            </div>
          </>
        ) : (
          <>
            <span className={styles.code}>No.{item.code}</span>
            <div>{item.title}</div>
            <div className={styles.artist}>작가: {item.artist_name}</div>
            <div>가격: {item.price}</div>
          </>
        )}
      </Link>
    </div>
  );
}
