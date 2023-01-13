export const GET_CAT_FACT = "GET_CAT_FACT";
const SET_CAT_LIST = "SET_CAT_LIST";
export const REMOVE_CAT_FACT = "REMOVE_CAT_FACT"

export const getCatFact = () => ({
    type: GET_CAT_FACT
})

export const setCatList = (newCatFact) => ({
    type: SET_CAT_LIST,
    newCatFact
})
export const removeCatFact = (index) => ({
    type: REMOVE_CAT_FACT,
    index
})
const initialState = {
    catList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CAT_LIST:
            const { newCatFact } = action;
            return { ...state, catList: state.catList.length === 0 ? ([newCatFact]) : ([...state.catList, newCatFact]) }
        case REMOVE_CAT_FACT:
            const { index } = action;
            return { ...state, catList: state.catList.filter((item) => item !== state.catList[index]) }
        default:
            return state;
    }
}