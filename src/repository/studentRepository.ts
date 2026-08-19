import pool from '../configurations/studentDB.ts';
import { StudentDTO, CreateStudentDTO, UpdateStudentDTO} from '../model/studentsModel.ts';

export const findAllStudents = async (): Promise<StudentDTO[]> => {
  const result = await pool.query('SELECT * FROM students ORDER BY id ASC');
  return result.rows;
};

export const findStudentById = async (id: number): Promise<StudentDTO | null> => {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const createStudent = async (studentData: CreateStudentDTO): Promise<StudentDTO> => {
  const { firstName, lastName } = studentData;
  const result = await pool.query(
    'INSERT INTO students (first_name, last_name) VALUES ($1, $2) RETURNING *',
    [
      studentData.firstName,
      studentData.lastName
    ]
  );
  return result.rows[0];
};

export const updateStudent = async (studentData: UpdateStudentDTO): Promise<StudentDTO | null> =>{
  const updates: string[] = [];
  const values: unknown[] = [];
  let incrementation = 1;
  if(studentData.firstName !== undefined){
    updates.push('first_name = $${incrementation++}');
    values.push(studentData.firstName);
  }
  if(studentData.lastName !== undefined){
    updates.push('last_name = $${incrementation++}');
    values.push(studentData.lastName);
  }

  const result = await pool.query(
    'UPDATE students SET ${updates.join(", ")} WHERE id = $${incrementation} RETURNING *',
    [...values,studentData.id]
  )
  return result.rows[0] || null;
}

export const deleteStudentById = async (
  id: number
): Promise<StudentDTO | null> => {
  const result = await pool.query(
    'DELETE FROM students WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0] || null;
}
