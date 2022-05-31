import StudentData from "../models/student.js";

export const getStudents = async (req, res) => {
    try {
        const allStudents = await StudentData.find();

        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createStudent = async (req, res) => {
    const student = req.body;

    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateStudent = async (req, res) => {
    const student = await StudentData.findById(req.student._id);

    if(student) {
        student.studentName = req.body.studentName || student.studentName;
        student.regNo = req.body.regNo || student.regNo;
        student.grade = req.body.grade || student.grade;
        student.section = req.body.section || student.section;
    }
    
    try {
        const updatedStudent = await student.save();

        res.json({
            _id:updatedStudent._id,
            regNo:updatedStudent.regNo,
            studentName:updatedStudent.studentName,
            grade:updatedStudent.grade,
            section:updatedStudent.section,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteStudent = async (req, res) => {
    const id = req.params.id;

    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}

export const showStudent = async (req, res) => {
    const id = req.params.id;

    try {
        const studentProfile = await StudentData.findById(id);

        res.status(200).json(studentProfile);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}