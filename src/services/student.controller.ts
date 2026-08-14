//ici se trouve les methodes et calculs pour renvoyer ensuite les reponses vers notre controlleur
import { Request, Response } from 'express';
import { pool } from './db';

// Recuperer tous les etudiants
export const getListOfStudents = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM student ORDER BY id ASC');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error in fetching students', error });
  }
};
