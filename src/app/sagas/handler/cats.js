import { call, put } from "redux-saga/effects";
import { setCatList } from "../../reducers/cats";
import { getNewCatFact } from "../requests/cats";


export function* handleGetNewCatFact(action) {
    try {
        const response = yield call(getNewCatFact);
        const { data } = response;
        console.log(data)
        yield put(setCatList(data.data));
    } catch(error){
        console.log(error);
    }
}