// ici va se placer les entites dont la structure va etre suivie par notre base de donnees

export interface StudentDTO {
  id: number;
  firstName: string;
  lastName: string;
}

export interface CreateStudentDTO {
  firstName: string;
  lastName: string;
}

export interface UpdateStudentDTO {
  id: number;
  firstName?: string;
  lastName?: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
  student: StudentDTO;
}