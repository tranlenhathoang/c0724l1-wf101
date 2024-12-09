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
  };
  export function addStudent(student){
    listStudent.push(student);
  }
  export function deleteStudent(id){
    const index= listStudent.findIndex(prev => prev.id === id)
    if (index !== -1){
      listStudent.splice(index,1)
    }
  }