import { pool } from '../configurations/studentDB.ts';
import { StudentDTO, CreateStudentDTO} from '../model/studentsModel.ts';

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
    'INSERT INTO students ("firstName", "lastName") VALUES ($1, $2) RETURNING *',
    [firstName, lastName]
  );
  return result.rows[0];
};

export const deleteStudentById = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM students WHERE id = $1', [id]);
  return (result.rowCount ?? 0) > 0;
};
