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