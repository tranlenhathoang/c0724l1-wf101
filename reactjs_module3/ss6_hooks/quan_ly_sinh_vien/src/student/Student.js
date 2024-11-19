const listStudent = [
  {
    id: 1,
    name: "Hoàng",
    phone: "0935527186",
    email: "stu2@gmail.com",
  },
  {
    id: 2,
    name: "Châu",
    phone: "0935527186",
    email: "stu1@gmail.com",
  },
  {
    id: 3,
    name: "Trung",
    phone: "0935527186",
    email: "stu3@gmail.com",
  },
];
export function getStudent() {
  return listStudent;
}
export function addStudentList(newStudent){
    listStudent.push({...newStudent})
    return listStudent;
}
