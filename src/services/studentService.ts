import {
  createStudent as createStudentRepository,
  findAllStudents as getStudentsRepository,
  findStudentById as getStudentByIdRepository,
  updateStudent as updateStudentRepository,
} from "../repository/studentRepository";

import { deleteStudentById } from "../repository/studentRepository";

import {
  StudentDTO,
  CreateStudentDTO,
  UpdateStudentDTO
} from "../model/studentsModel";

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

import { createHmac } from 'crypto';
import { findStudentByEmail } from '../repository/studentRepository';
import { LoginDTO, LoginResponseDTO } from '../model/studentsModel';

const base64UrlEncode = (value: string): string =>
  Buffer.from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const signJwt = (payload: Record<string, unknown>, secret: string): string => {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const data = `${header}.${encodedPayload}`;
  const signature = createHmac('sha256', secret).update(data).digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return `${data}.${signature}`;
};

export const loginStudent = async (credentials: LoginDTO): Promise<LoginResponseDTO> => {
  const { email, password } = credentials;

  const student = await findStudentByEmail(email);
  if (!student) {
    throw new Error('INVALID_CREDENTIALS');
  }
  
  const secret = process.env.JWT_SECRET || 'your_fallback_secret_key';
  const expiresIn = '2h'; // delai d'expiration du token

  const token = signJwt(
    {
      id: student.id,
      email: student.email,
      firstName: student.firstName,
      lastName: student.lastName,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 2 * 60 * 60,
    },
    secret
  );

  const { password: _, ...studentWithoutPassword } = student;

  return {
    token,
    student: studentWithoutPassword,
  };
};

