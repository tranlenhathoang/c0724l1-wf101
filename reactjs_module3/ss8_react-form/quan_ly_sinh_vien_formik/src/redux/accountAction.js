// action quản lý trạng thái login/logout 

export const login = (user)=>({
    type: 'LOGIN',
    payload: user, //user thông tin của người dùng nhập vào 
});

export const logout = ()=>({
    type: 'LOGOUT',
});
