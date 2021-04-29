var students = ['Santiago', 'Maria', 'Sergio', 'Rosa', 'Daniel'];

function saluteStudents(student)
{
    console.log(`Hola, ${student}`)
}

/* FOR */

for(var i = 0; i < students.length; i++)
{
    saluteStudents(students[i]);
}

/*FOR OF*/

for(var student of students)
{
    saluteStudents(student);
}


/* WHILE */

var students = ['Maria', 'Sergio', 'Rosa', 'Daniel']
function saluteStudents(student) {
    console.log(`Hola ${student}`);
}

while(students.length > 0)
{
    console.log(students);
    var student = students.shift();
    saluteStudents(student);
}