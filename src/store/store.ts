import { createStore } from "redux";
import reducer from "./reducer";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "../common/utils/localeStorageData";

const store = createStore(reducer, loadStateFromLocalStorage());

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
