const listStudent =[
    {
      name: 'Hoàng',
      phone: '0935527186',
      email: 'stu2@gmail.com',
    },
    {
        name: 'Châu',
        phone: '0935527186',
        email: 'stu1@gmail.com',
    },
    {
        name: 'Trung',
        phone: '0935527186',
        email: 'stu3@gmail.com',
    },
  ]
  export function getStudent(){
    return listStudent;
  }
  export function deleteStudent(inputStudent){
    const newStudent= listStudent.findIndex(student => student === inputStudent);
    if (newStudent !== -1 ){
      listStudent.splice(newStudent,1)
    }
    return [...listStudent];
  }
  