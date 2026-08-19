import * as studentRepository from '../repository/studentRepository.ts';
import { StudentDTO, CreateStudentDTO} from '../model/studentsModel.ts';

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
