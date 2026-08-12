import { getListOfStudents } from '../controllers/student.js';
import { postNewStudent } from '../controllers/student.js';
import { putStudent } from '../controllers/student.js';
import { patchStudent } from '../controllers/student.js';
import { deleteStudent } from '../controllers/student.js';
import express from 'express';
import statuses from 'statuses';
const message = statuses;
const router = express.Router();

router.get("/" , getListOfStudents);

router.get("/students/:id" , (req , res) =>{
    //...
    res.json({message: "About a student who has the id :" + req.body.id });
});

router.post("/students" , postNewStudent);

router.put("/:id" , putStudent);

router.patch("/:id" , patchStudent);

router.delete("/:id" , deleteStudent );

export default router;