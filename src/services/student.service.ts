//ici se trouve les methodes et calculs pour renvoyer ensuite les reponses vers notre controlleur

import { Request, Response } from 'express';
import * as studentService from '../controllers/student.ts';

export const getListOfStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'internal server error', error });
  }
};

export const getStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string, 10);
    const student = await studentService.getStudentById(id);

    if (!student) {
      return res.status(404).json({ message: 'student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'internal server error', error });
  }
};

export const postNewStudent = async (req: Request, res: Response) => {
  try {
    const newStudent = await studentService.addStudent(req.body);
    res.status(201).json({
      message: 'student created !!',
      student: newStudent
    });
  } catch (error) {
    res.status(500).json({ message: 'internal server error', error });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string, 10);
    const success = await studentService.removeStudent(id);

    if (!success) {
      return res.status(404).json({ message: 'student not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'iinternal server error', error });
  }
};

export const putStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string , 10);
    const updatedStudent = await studentService.editStudentFully(id, req.body);

    if (!updatedStudent) {
      return res.status(404).json({ message: 'student not found' });
    }

    res.status(200).json({
      message: 'Student updated totally !',
      student: updatedStudent
    });
  } catch (error) {
    res.status(500).json({ message: 'intenal server error', error });
  }
};

export const patchStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string , 10);
    const updatedStudent = await studentService.editStudentPartially(id, req.body);

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({
      message: 'Student partially updated',
      student: updatedStudent
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};