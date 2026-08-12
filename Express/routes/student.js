import { getListOfStudents } from '../controllers/student.js';
import express from 'express';
import statuses from 'statuses';
const message = statuses;
const router = express.Router();

router.get("/" , getListOfStudents);

router.get("/students/:id" , (req , res) =>{
    //...
    res.json({message: "About a student who has the id :" + req.body.id });
});

router.post("/students" , (req , res) => {
    //...
    res.json({message: "Creation of a new student in the API !"});
});

router.put("/students" , (req , res) => {
    //...
    res.json({message: "Changing on a student !"});
});

router.patch("/students/:id" , (req , res) =>{
    //...
    res.json({message: "Partial modification of a student !"})
});

router.delete("/students/:id" , (req, res) =>{
    //...
    res.json({message: "Student deleted !"})
});

export default router;