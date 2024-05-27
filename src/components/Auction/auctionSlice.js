import { createSlice } from '@reduxjs/toolkit';

const auctionSlice = createSlice({
  name: 'auction',
  initialState: {
    auctions: {}, // 각 artId별로 경매 상태를 저장
  },
  reducers: {
    placeBid: (state, action) => {
      const { artId, user, amount } = action.payload;
      if (!state.auctions[artId]) {
        state.auctions[artId] = {
          highestBid: 0,
          highestBidder: null,
          bids: [],
        };
      }
      state.auctions[artId].bids.push({ user, amount });

      if (amount > state.auctions[artId].highestBid) {
        state.auctions[artId].highestBid = amount;
        state.auctions[artId].highestBidder = user;
      }
    },
  },
});

export const { placeBid } = auctionSlice.actions;
export default auctionSlice.reducer;
