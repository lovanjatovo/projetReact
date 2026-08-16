import { pool } from './studentDB.ts';
import { Student } from '../model/students.model.ts';
import { CreateStudent } from '../model/students.model.ts';
import { UpdateStudent } from '../model/students.model.ts';

export const findAllStudents = async (): Promise<Student[]> => {
  const result = await pool.query('SELECT * FROM student ORDER BY id ASC');
  return result.rows;
};

export const findStudentById = async (id: number): Promise<Student | null> => {
  const result = await pool.query('SELECT * FROM student WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const createStudent = async (studentData: CreateStudent): Promise<Student> => {
  const { firstName, lastName } = studentData;
  const result = await pool.query(
    'INSERT INTO student ("firstName", "lastName") VALUES ($1, $2) RETURNING',
    [firstName, lastName]
  );
  return result.rows[0];
};

export const deleteStudentById = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM student WHERE id = $1 RETURNING', [id]);
  return (result.rowCount ?? 0) > 0;
};

export const updateStudentFull = async (id: number, studentData: CreateStudent): Promise<Student | null> => {
  const { firstName, lastName } = studentData;
  const result = await pool.query(
    'UPDATE student SET "firstName" = $1, "lastName" = $2 WHERE id = $3 RETURNING',
    [firstName, lastName, id]
  );
  return result.rows[0] || null;
};

export const updateStudentPartial = async (id: number, studentData: UpdateStudent): Promise<Student | null> => {
  const exist = await findStudentById(id);
  if (!exist) return null;

  const newFirstName = studentData.firstName !== undefined ? studentData.firstName : exist.firstName;
  const newLastName = studentData.lastName !== undefined ? studentData.lastName : exist.lastName;

  const result = await pool.query(
    'UPDATE student SET "firstName" = $1, "lastName" = $2 WHERE id = $3 RETURNING',
    [newFirstName, newLastName, id]
  );
  return result.rows[0] || null;
};