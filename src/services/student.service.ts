import * as studentRepository from '../repository/student.repository';
import { StudentDTO, CreateStudentDTO, UpdateStudentDTO } from '../model/students.model';

export const getAllStudents = async (): Promise<StudentDTO[]> => {
  return await studentRepository.findAllStudents();
};

export const getStudentById = async (id: number): Promise<StudentDTO | null> => {
  return await studentRepository.findStudentById(id);
};

export const addStudent = async (studentData: CreateStudentDTO): Promise<StudentDTO> => {
  return await studentRepository.createStudent(studentData);
};

export const removeStudent = async (id: number): Promise<boolean> => {
  return await studentRepository.deleteStudentById(id);
};

export const updateStudentFull = async (id: number, studentData: CreateStudentDTO): Promise<StudentDTO | null> => {
  return await studentRepository.updateStudentFull(id, studentData);
};

export const editStudentFully = async (id: number, studentData: CreateStudentDTO): Promise<StudentDTO | null> => {
  return await updateStudentFull(id, studentData);
};

export const updateStudentPartial = async (id: number, studentData: UpdateStudentDTO): Promise<StudentDTO | null> => {
  return await studentRepository.updateStudentPartial(id, studentData);
};

export const editStudentPartially = async (id: number, studentData: UpdateStudentDTO): Promise<StudentDTO | null> => {
  return await updateStudentPartial(id, studentData);
};