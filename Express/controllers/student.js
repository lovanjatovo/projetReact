import { json } from 'body-parser';
import fs from 'fs';
import statuses from 'statuses';
const message = statuses;

// requete get pour lister les students
export const getListOfStudents = (req, res) => {
  const data = fs.readFileSync('./datas/students.json');
  const allStudents = JSON.parse(data); // cette parametre permet de changer le texte brut du json en objet javascript
  res.status(200).json(allStudents); // renvoyer la reponse sous forme de json
}


// requete get pour afficher un student specifique selon son id
export const getStudent = (req , res) => {
    const data = fs.readFileSync('./datas/students.json');
    const ListOfStudent = JSON.parse(data);
    ListOfStudent.forEach((element) => {
        if(element.id == parseInt(req.params.id)){
            return element;
        }
    });
    res.status(200).json({
        message: "Here is the student you looked for "
    })
}

// requete post pour creer un nouveau student
export const postNewStudent = (req, res) => {
  const data1 = fs.readFileSync('./datas/students.json');
  const allStudents = JSON.parse(data1);

    if(!req.body.name || req.body.firstName){
        return res.status(400).json({
            message: "Error: missing parameter in the request's body !"
        });
    }

  const newStudent = {
    id: allStudents.length + 1,
    name: req.body.name,
    firstName: req.body.firstName
  };

  allStudents.push(newStudent);

  fs.writeFileSync('./datas/students.json',JSON.stringify(allStudents),null,2);

  res.status(201).json({
    message: "creation of a new student inside the API",
    student: newStudent
  });
}


// requete delete poyr supprimer un student 
export const deleteStudent = (req , res) => {
    const idStudent = req.params.id;
    const data1 = fs.readFileSync('./datas/students.json');
    const allStudents = JSON.parse(data1);

    const newList = allStudents.filter((element) , () => {
        return element.id !== parseInt(idStudent);
    })

    fs.writeFileSync("./datas/students.json",JSON.stringify(newList),null,2);
    res.status(204).json({
        message: "No content"
    })
}


// requete put pout modifier un student completement
export const putStudent = (req , res) => {
    const idStudent = req.params.id;
    const data = fs.readFileSync('./datas/students.json');
    const allStudents = JSON.parse(data);

    if(!req.body.name || !req.body.firstName){
        return res.status(400).json({
            message: "missing parameter inside the request's body !"
        })
    }

    const newList = allStudents.forEach(element => {
        if( element.id == parseInt(idStudent)){
            element.name = req.body.name;
            element.firstName = req.body.firstName
        }
    });

    fs.writeFileSync('./datas/students.json',JSON.stringify(allStudents),null,2);
    res.status(200).json({
        message: "student changed at all"
    })
}


// requete patch pour modifier partiellemetn un student
export const patchStudent = (req , res) => {
    const idStudent = req.params.id;
    const data = fs.readFileSync('./datas/students.json');
    const allStudents = JSON.parse(data);

    const newList = allStudents.forEach((element) => {
        if (req.body.name !== undefined) {
            element.name = req.body.name;
        }
        if( element.id == parseInt(idStudent)){
            element.name = req.body.name;
            element.firstName = req.body.firstName
        }
    })

    fs.writeFileSync('./datas/students.json',JSON.stringify(allStudents),null,2);
    res.status(200).json({
        message: "student changed by your parameter "
    });
}