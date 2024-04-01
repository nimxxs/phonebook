let initialState = {
    contactList: [],
    keyword: ""
}

function reducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case "ADD_CONTACT": 
            // 연락처가 저장되어야 할 장소 : contactList
            // contactList를 가지고 오는데 array에 있는 값은 유지를 하되, 뒤에 객체를 더해줌.
            // 그 객체는 name과 phoneNumber.
            return {...state, contactList:[...state.contactList, {name:payload.name, phoneNumber:payload.phoneNumber}]};
        case "SEARCH_BY_USERNAME":
            return { ...state, keyword: payload.keyword };
            default:
            return { ...state };

    }
    

}

export default reducer