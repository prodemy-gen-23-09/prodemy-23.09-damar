const hogwartsStudents = [
  {
    name: "Harry Potter",
    dormitory: "Gryffindor",
    age: 17,
  },
  {
    name: "Ronald Weasley",
    dormitory: "Gryffindor",
    age: 17,
  },
  {
    name: "Hermione Granger",
    dormitory: "Gryffindor",
    age: 18,
  },
  {
    name: "Ginny Weasley",
    dormitory: "Gryffindor",
    age: 16,
  },
  {
    name: "Neville Longbottom",
    dormitory: "Gryffindor",
    age: 19,
  },
  {
    name: "Draco Malfoy",
    dormitory: "Slytherin",
    age: 20,
  },
  {
    name: "Vincent Crabbe",
    dormitory: "Slytherin",
    age: 19,
  },
  {
    name: "Gregory Goyle",
    dormitory: "Slytherin",
    age: 20,
  },
  {
    name: "Cho Chang",
    dormitory: "Ravenclaw",
    age: 18,
  },
  {
    name: "Luna Lovegood",
    dormitory: "Ravenclaw",
    age: 17,
  },
  {
    name: "Cedric Diggory",
    dormitory: "Hufflepuff",
    age: 21,
  },
  {
    name: "Hannah Abbott",
    dormitory: "Hufflepuff",
    age: 22,
  },
];

// Find student with dormitory Gryffindor
const gryffindorStudents = hogwartsStudents.filter(
  (student) => student.dormitory === "Gryffindor"
);
// console.log(gryffindorStudents);

// Find student with dormitory Hufflepuff
const hufflepuffStudents = hogwartsStudents.filter(
  (student) => student.dormitory === "Hufflepuff"
);

// Find student with dormitory Ravenclaw
const ravenclawStudents = hogwartsStudents.filter(
  (student) => student.dormitory === "Ravenclaw"
);

// Find student with dormitory Slytherin
const slytherinStudents = hogwartsStudents.filter(
  (student) => student.dormitory === "Slytherin"
);

// get all students (only name) with dormitory Gryffindor
const gryffindorStudentsName = gryffindorStudents.map(
  (student) => student.name
);
// console.log(gryffindorStudentsName);

const getStudentByName = (name) => {
  return hogwartsStudents.find((student) => student.name === name);
}

// update student dormitory
const updateDormitory = (name, dormitory) => {
  const student = getStudentByName(name);

  if (!student) {
    return "Student not found";
  }

  student.dormitory = dormitory;
  return student;
};
console.log(updateDormitory("Harry Potter", "Slytherin"));

// update student age
const updateAge = (name, age) => {
  const student = getStudentByName(name);

  if (!student) {
    return "Student not found";
  }

  student.age = age;

  return student;
};
// console.log(updateAge("Harry Potter", 18));

// update student with full data
const updateStudent = (updatedStudent) => {
  const { name, age, dormitory } = updatedStudent;

  const student = getStudentByName(name);

  if (!student) {
    return "Student not found";
  }

  student.name = name;
  student.age = age;
  student.dormitory = dormitory;

  return hogwartsStudents;
};
// console.log(
//   updateStudent({ name: "Harry Potter", dormitory: "Ravenclaw", age: 19 })
// );

// add new student
const addStudent = (newStudent) => {
  hogwartsStudents.push(newStudent);

  return hogwartsStudents;
};
console.log(
  addStudent({ name: "Damar Anshary", dormitory: "Slytherin", age: 22 })
);

// delete student
const deleteStudent = (name) => {
  const studentIndex = hogwartsStudents.findIndex(
    (student) => student.name === name
  );

  if (studentIndex === -1) {
    return "Student not found";
  }

  hogwartsStudents.splice(studentIndex, 1);

  return hogwartsStudents;
};
console.log(deleteStudent("Damar Anshary"));

// search student with age > 20 and return only the name
const hogwartsStudentAge20 = hogwartsStudents
  .filter((student) => student.age > 20)
  .map((student) => student.name);
// console.log(hogwartStudentsAge20);

// search student by matches name
const searchStudentByName = (name) => {
  const student = hogwartsStudents.filter((student) =>
    student.name.toLowerCase().includes(name.toLowerCase())
  );

  if (student.length < 1) {
    return "Student not found";
  }

  return student;
};
// console.log(searchStudentByName("Weasley"));

// add equipment to student (equipment is object)
const addEquipment = (name, newEquipment) => {
  const student = getStudentByName(name);

  if (student) {
    if (!student.equipment) {
      student.equipment = {};
    }

    student.equipment = newEquipment;
  } else {
    return "Student not found";
  }
  return hogwartsStudents.map(student => student.equipment);
}

console.log(
  addEquipment("Harry Potter", {
    wand: "Phoenix Feather",
    broomstick: "Firebolt",
  })
);
