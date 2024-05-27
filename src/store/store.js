import { configureStore } from '@reduxjs/toolkit';
import auctionReducer from '../components/Auction/auctionSlice';
import auctionStatusReducer from '../components/Auction/auctionStatusSlice';

const store = configureStore({
  reducer: {
    auction: auctionReducer,
    auctionStatus: auctionStatusReducer,
  },
});

export default store;
