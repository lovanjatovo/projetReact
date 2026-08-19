import { Request, Response } from 'express';
import * as studentService from '../services/studentService.ts';

export const getListOfStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export const getStudent = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? Number(idParam[0]) : Number(idParam);

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'Invalid student id' });
    }

    const student = await studentService.getStudentById(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export const postNewStudent = async (req: Request, res: Response) => {
  try {
    const newStudent = await studentService.addStudent(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};