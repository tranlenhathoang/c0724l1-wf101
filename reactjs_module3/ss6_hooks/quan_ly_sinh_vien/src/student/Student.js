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
export function deleteStudent(inputStudent){
    const index = listStudent.findIndex(student => student.id === inputStudent)
    if (index !== -1) {
        listStudent.splice(index,1)
    }
    return [...listStudent];
}
export function searchStudent(studentId){
   return listStudent.filter(student => student.id === parseInt(studentId));
}