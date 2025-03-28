import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./component/Redux/contactsSlice";
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
import storage from "redux-persist/lib/storage"; // Використовує localStorage

// ✅ Зберігаємо тільки поле `items` у contacts
const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // Зберігати тільки items
};

// ✅ Обгортаємо `contactsReducer` у persistReducer
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Використовуємо персистентний редюсер
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// ✅ Створюємо persistor для PersistGate
export const persistor = persistStore(store);

export default store;


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

