import { getListOfStudents } from '../controllers/student.js';
import { postNewStudent } from '../controllers/student.js';
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

router.put("/students/:id" , (req , res) => {
    //...
    res.json({message: "Changing on a student !"});
});

router.patch("/students/:id" , (req , res) =>{
    //...
    res.json({message: "Partial modification of a student !"})
});

router.delete("/:id" , deleteStudent );

export default router;