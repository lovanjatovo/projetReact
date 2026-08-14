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

// Recuperer un etudiant par ID
export const getStudent = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  try {
    const result = await pool.query('SELECT * FROM student WHERE id = $1', [id]);

    if (result.length === 0) {
      return res.status(404).json({ message: 'The student you looked for is not found' });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error in fetching student', error });
  }
};
