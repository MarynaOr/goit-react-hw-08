import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filtersSlice";

const persistConfig = {
  key: "myBookContacts",
  version: 1,
  storage,
  // whitelist: ["contacts"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// export const store = configureStore(
//     {
//         contacts: {
//               items: []
//           },
//         filters: {
//               name: ""
//           }
//       }
// )

