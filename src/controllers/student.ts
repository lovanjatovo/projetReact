// ici se trouve notre traiteur de requete de CRUD

import * as studentRepository from '../repository/student.repository.ts';
import { Student, CreateStudent, UpdateStudent } from '../model/students.model.ts';

export const getAllStudents = async (): Promise<Student[]> => {
  return await studentRepository.findAllStudents();
};

export const getStudentById = async (id: number): Promise<Student | null> => {
  return await studentRepository.findStudentById(id);
};

export const addStudent = async (studentData: CreateStudent): Promise<Student> => {
  return await studentRepository.createStudent(studentData);
};

export const removeStudent = async (id: number): Promise<boolean> => {
  return await studentRepository.deleteStudentById(id);
};

export const editStudentFully = async (id: number, studentData: CreateStudent): Promise<Student | null> => {
  return await studentRepository.updateStudentFull(id, studentData);
};

export const editStudentPartially = async (id: number, studentData: UpdateStudent): Promise<Student | null> => {
  return await studentRepository.updateStudentPartial(id, studentData);
};