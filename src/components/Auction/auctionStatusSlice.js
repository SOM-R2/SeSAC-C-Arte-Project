import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auctionStarted: false,
};

const auctionStatusSlice = createSlice({
  name: 'auctionStatus',
  initialState,
  reducers: {
    startAuction: (state) => {
      state.auctionStarted = true;
    },
    endAuction: (state) => {
      state.auctionStarted = false;
    },
  },
});

export const { startAuction, endAuction } = auctionStatusSlice.actions;
export default auctionStatusSlice.reducer;
