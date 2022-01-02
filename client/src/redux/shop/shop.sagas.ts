import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync(): any {
  yield console.log("Hello from saga!");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error: any) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
