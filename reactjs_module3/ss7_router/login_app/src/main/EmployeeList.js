const employeeList =[
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]
export function getEmployee(){
    return employeeList;
}
export function findById(id){
    return employeeList.find(employee=> employee.id === id)
    // for (let i=0; i<employeeList.length; i++){
    //     if(employeeList[i].id === id){
    //         return employeeList[i];
    //     }
    // }
}