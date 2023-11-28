type Student = {
  name: string;
  dormitory: string;
  age: number;
};

const hogwartStudents = [
  {
    name: "Harry Potter",
    dormitory: "Gryffindor",
    age: 17,
    equipment: {
      wand: "Phoenix Feather",
      broomstick: "Firebolt",
    },
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

// 1. Find student with dormitory Gryffindor
const gryffindorStudents = hogwartStudents.filter(
  (student) => student.dormitory === "Gryffindor"
);

// 2. Find student with dormitory Hufflepuff
const hufflepuffStudents = hogwartStudents.filter(
  (student) => student.dormitory === "Hufflepuff"
);

// 3. Find student with dormitory Ravenclaw
const ravenclawStudents = hogwartStudents.filter(
  (student) => student.dormitory === "Ravenclaw"
);

// 4. Find student with dormitory Slytherin
const slytherinStudents = hogwartStudents.filter(
  (student) => student.dormitory === "Slytherin"
);

// get all students (only name) with dormitory Gryffindor
const gryffindorStudentsName = gryffindorStudents.map(
  (student) => student.name
);
console.log(gryffindorStudentsName);

// update student dormitory
const updateDormitory = (name: string, dormitory: string) => {
  const student = hogwartStudents.find((student) => student.name === name);
  if (student) {
    student.dormitory = dormitory;
  }

  return { name, dormitory };
};
console.log(updateDormitory("Harry Potter", "Slytherin"));

// update student age
const updateAge = (name: string, age: number) => {
  const student = hogwartStudents.find((student) => student.name === name);
  if (student) {
    student.age = age;
  }

  return { name, age };
};
console.log(updateAge("Harry Potter", 18));

// update student with full data
const updateStudent = (updatedStudent: Student) => {
  const { name, age, dormitory } = updatedStudent;

  const student = hogwartStudents.find((student) => student.name === name);

  if (student) {
    student.name = name;
    student.age = age;
    student.dormitory = dormitory;
  }

  return hogwartStudents;
};
console.log(
  updateStudent({ name: "Harry Potter", dormitory: "Ravenclaw", age: 19 })
);

// add new student
const addStudent = (newStudent: Student) => {
  hogwartStudents.push(newStudent);

  return hogwartStudents;
};
console.log(
  addStudent({ name: "Damar Anshary", dormitory: "Slytherin", age: 22 })
);

const deleteStudent = (name: string) => {
}

const hogwartStudentsAge20 = hogwartStudents
  .filter((student) => student.age > 20)
  .map((student) => student.name);
console.log(hogwartStudentsAge20);

const searchStudentByName = (name: string) => {
  const student = hogwartStudents.find((student) => student.name.toLowerCase().includes(name.toLowerCase()));

  console.log(student);
}
searchStudentByName("an");
