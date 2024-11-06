const sv1={
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};
const sv2={
    name: 'John',
    gender: 'male',
    english: 'English'
};
const getInfo = ({firstName='Quân',gender, degree='NA', english}) => {
    console.log(`firstName: ${firstName} degree: ${degree}`);
};
getInfo(sv1);
getInfo(sv2);