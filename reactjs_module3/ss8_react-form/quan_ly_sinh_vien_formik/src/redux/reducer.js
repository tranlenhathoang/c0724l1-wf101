
import {combineReducers} from 'redux';
const initialState ={
    currentUser: null
};

// reducer xử lý các trạng thái đăng nhập và đăng xuất
const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state,
                currentUser: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
};

// reducer bao tổng 
export const rootReducer = combineReducers({
    user: userReducer
    //có thể có nhiều reducer nhỏ bên trong này
});