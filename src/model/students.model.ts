// ici va se placer les entites dont la structure va etre suivie par notre base de donnees

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
}

export interface CreateStudent {
  firstName: string;
  lastName: string;
}

export interface UpdateStudent {
  firstName?: string;
  lastName?: string;
}