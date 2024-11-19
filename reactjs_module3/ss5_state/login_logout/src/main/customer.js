const infoLists =[
    {
        email: 'tranlenhathoang357@gmail.com',
        password: '0000'
    },
    {
        email: 'tranhoang30071998@gmail.com',
        password: '1111'
    }
]

export function check(person){
    const checkInfo= infoLists.some((info) => info.email === person.email && info.password === person.password);
    return checkInfo;
}