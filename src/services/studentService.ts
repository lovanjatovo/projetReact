import {
  createStudent as createStudentRepository,
  findAllStudents as getStudentsRepository,
  findStudentById as getStudentByIdRepository,
  updateStudent as updateStudentRepository,
} from "../repository/studentRepository.ts";

import { deleteStudentById } from "../repository/studentRepository.ts";

import {
  StudentDTO,
  CreateStudentDTO,
  UpdateStudentDTO
} from "../model/studentsModel.ts";

export const getStudents = async(): Promise<StudentDTO[]> => {
  return await getStudentsRepository();
}

export const getStudentById = async (
  id: number
): Promise<StudentDTO | null> => {
  return await getStudentByIdRepository(id)
};

export const createStudent = async (
  studentData: CreateStudentDTO
): Promise<StudentDTO> =>{
  return await createStudentRepository(studentData)
};

export const updateStudent = async(
  studentData: UpdateStudentDTO
): Promise<UpdateStudentDTO | null> => {
  return await updateStudentRepository(studentData)
};

export const deleteStudent = async (
  id: number
): Promise<StudentDTO | null> => {
  return await deleteStudentById(id);
};
