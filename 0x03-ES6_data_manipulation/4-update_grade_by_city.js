export default function updateStudentGradeByCity(students, city, newGrades) {
  const Grade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)[0] || Grade).grade,
      }));
  }
  return [];
}
