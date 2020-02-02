let students = [];
let position = 0;
//setDisplay(0)
function doSomeTest() {
    students[students.length] = addStudent("TLV", "You", 4)
    students[students.length] = addStudent("po", "he", 14)
    students[students.length] = addStudent("Sham", "she", 4)
    setDisplay(0)
}
//doSomeTest()
function setDisplay(position) {
    console.log(`Position: ${position}`)
    //position = students.length % position;

    if (position >= students.length) {
        position = students.length - 1;
        console.log("Lasssssssssssssssssssssssssssttttttttttttt")
    }
    if (position < 0) {
        position = 0;
        console.log("firsssssssssssssssttttttttttttt")
    }
    var City = document.getElementById('City');
    var FName = document.getElementById('FName');
    var Age = document.getElementById('Age');
    City.value = students[position].City
    FName.value = students[position].FName
    Age.value = students[position].Age

}



//overLoad 
function addStudentNP() {
    var City = document.getElementById('City').value;
    var FName = document.getElementById('FName').value;
    var Age = document.getElementById('Age').value;
    console.log(FName)
    return addStudent(City, FName, Age);
}

function addStudent(City, FName, Age) {
    let student = {
        City: City,
        FName: FName,
        Age: Age
    }
    return student;
}



        // var myJSON = '{"name":"John", "age":31, "city":"New York"}';
        // console.log(`the type is: ${typeof (myJSON)} the value ${myJSON}`)

        // //convert from string 2 object
        // var myObj = JSON.parse(myJSON);
        // console.log(`the type is: ${typeof (myObj)} the value ${myObj}`)
        // console.log(myObj.age)

        // //convert from object 2 string
        // var strJson = JSON.stringify(myObj)
        // console.log(strJson)

        // var myStrJSON = '{"name":"John", "age":31, "city":"New York"}';
        // let student = {
        //     name: "John",
        //     age: 31,
        //     city: "New York"
        // }

        // students[0] = student;
        // students[1] = {
        //     name: "Nativ",
        //     age: 19,
        //     city: document.getElementById("City").value
        // }
        // students[2] = JSON.parse('{"name":"John", "age":31, "city":"New York"}');




        // console.log(`Student age:  ${student.age}`)
        // console.log(addStudent('TLV', 'Eyal', 700))
        // students[students.length] = addStudent('TLV', 'Eyal', 700)
        // students[students.length] = addStudent('Sham', 'Ilan', 70)
        // students[students.length] = addStudent('Po', 'Alex', 7)
        // console.log(students);
