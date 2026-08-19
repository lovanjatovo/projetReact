import * as studentRepository from '../repository/studentRepository.ts';
import { StudentDTO, CreateStudentDTO} from '../model/studentsModel.ts';
import { deleteStudentById } from '../repository/studentRepository.ts';

export const getAllStudents = async (): Promise<StudentDTO[]> => {
  return await studentRepository.findAllStudents();
};

export const getStudentById = async (id: number): Promise<StudentDTO | null> => {
  return await studentRepository.findStudentById(id);
};

export const addStudent = async (studentData: CreateStudentDTO): Promise<StudentDTO> => {
  return await studentRepository.createStudent(studentData);
};

export const deleteStudent = async (id: number): Promise<StudentDTO | null> =>{
  return await deleteStudentById(id);
}