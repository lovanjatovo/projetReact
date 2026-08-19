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
  firstName?: string;
  lastName?: string;
}