import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist'
import bannersReducer from '../features/banner/bannersSlice';
import cinemaSystemReducer from '../features/cinemaSystem/cinemaSystemSlice';
import ticketsRoomReducer from '../features/ticketsRoom/ticketRoomSlice';
import showTimesReducer from '../features/showTimes/showTimesSlice';
import moviesReducer from '../features/movies/moviesSlice';
import userReducer from '../features/user/userSlice';
import trailerReducer from '../features/trailer/trailerSlice';

export const store = configureStore({
  reducer: {
    bannersReducer,
    cinemaSystemReducer,
    showTimesReducer,
    ticketsRoomReducer,
    moviesReducer,
    userReducer,
    trailerReducer
    // counter: counterReducer,
  },
});


// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch

// export const persistor = persistStore(store)
