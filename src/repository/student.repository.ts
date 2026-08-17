import { pool } from './studentDB';
import { StudentDTO, CreateStudentDTO, UpdateStudentDTO } from '../model/students.model';

export const findAllStudents = async (): Promise<StudentDTO[]> => {
  const result = await pool.query('SELECT * FROM student ORDER BY id ASC');
  return result.rows;
};

export const findStudentById = async (id: number): Promise<StudentDTO | null> => {
  const result = await pool.query('SELECT * FROM student WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const createStudent = async (studentData: CreateStudentDTO): Promise<StudentDTO> => {
  const { firstName, lastName } = studentData;
  const result = await pool.query(
    'INSERT INTO student ("firstName", "lastName") VALUES ($1, $2) RETURNING *',
    [firstName, lastName]
  );
  return result.rows[0];
};

export const deleteStudentById = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM student WHERE id = $1', [id]);
  return (result.rowCount ?? 0) > 0;
};

export function updateStudentFull(id: number, studentData: CreateStudentDTO): StudentDTO | PromiseLike<StudentDTO | null> | null {
  throw new Error('Function not implemented.');
}
export function updateStudentPartial(id: number, studentData: UpdateStudentDTO): StudentDTO | PromiseLike<StudentDTO | null> | null {
  throw new Error('Function not implemented.');
}

