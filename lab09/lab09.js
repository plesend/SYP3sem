let square = {
    form: "square",
    color: "yellow",
    angles: 90,
    size: "big",
    getInfo() {
        console.log(Object.keys(this));
    }
}
square.getInfo();
let littleSquare = {
    __proto__: square,
    size: "tiny"
}
littleSquare.getInfo();
let circle = {
    form: "circle",
    color: "none",
    angles: 360,
    size: "big",
}
let anotherCircle = {
    __proto__: circle,
    color: "green"
}
let triangle = {
    color: "none",
    countLines: 1,
}
let anotherTriangle = {
    __proto__: triangle,
    countLines: 3
}

class Human {
    constructor(name, surname, birthYear, address) {

        this.name = name;
        this.surname = surname;
        this.address = address;
        this.birthYear = birthYear
    }
    setAge(NewAge){
      let current_year = new Date().getFullYear();
      this.birthYear =current_year- NewAge;
    }
    get age(){
        let current_year = new Date().getFullYear();
        return current_year - this.birthYear;
    }
    setAddress(NewAddress){
        this.address = NewAddress;
    }
    
  };

let human1 = new Human("Сергей", "Разумовский", 24, 2000, "Арпухова, 45");
console.log(human1.address);
class Student extends Human {
    constructor(name, surname, age, birthYear, adress, faculty, course, group, id) {
        super(name, surname, age, birthYear, adress);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.id = id;
    }
    
    change(course, group) {
        course += course;
        group += group;
    }
    getFullName() {
        console.log("Имя и фамилия студента: " + this.name + " " + this.surname);
    }
}
let student1 = new Student("Ия", "Порельская", 18, 2006, "ул. Эщкерембуса, 52", "ИТ", 2, 6, 71231007);
let student5 = new Student("Гречкин","Жожка",20,2005,"Крутая улица","ИД",2,6,61231129);

student1.getFullName();
console.log(student1.group + " " + student1.course);
student1.change();
console.log(student1.group + " " + student1.course);

class Faculty {
    constructor(name, countGroup, countStudents){
        this.name = name;
        this.group_count = countGroup;
        this.students_count = countStudents;
        this.students = [];
    }
    setGroups(NewGroups){
        this.group_count = NewGroups;
    }
    setStudents(NewStudents){
        this.students_count = NewStudents;
    }
    getDev(){
        let dev_count = 0;
        this.students.forEach(element => {
            let str_id = element.id.toString();
            if(str_id[1]==3){
                dev_count++;
            }
        });
        return dev_count;
    }
    getGroup(num){
        let group_list = [];
        this.students.forEach(element => {
            if(element.group==num){
                group_list.push(element);
            }
        });
        return group_list;
    }
  
  }
 
  let student2 = new Student("Наруто", "Узумаки", 13, 2007,"Крутая улица","ИД",1,4,62242567);
  let student3 = new Student("Бипкин","Что такое", 17, 2004,"Крутая улица","ФИТ",4,3,73211226);
  let student4 = new Student("Пальма","Артур", 56, 2006,"Крутая улица","ФИТ",2,6,71231128);
student5.getFullName();
  
  let FIT = new Faculty("FIT",10,1000);

  FIT.students.push(student3);
  FIT.students.push(student4);
  console.log(FIT)
  console.log(student1.id)
  console.log(FIT.getDev());
  console.log(FIT.getGroup(6));
  console.groupEnd();
