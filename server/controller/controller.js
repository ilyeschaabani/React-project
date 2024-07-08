import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'


export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error });
    }
}

/** insert all questions */
export async function insertQuestions(req, res){
    try {
        await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}


/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function storeResult(req, res){
   try {
        const { username, answers } = req.body;
        if(!username || !answers) {
            throw new Error('Incomplete data provided.');
        }

        // Calculate result based on answers (you can customize this based on your ChatGPT API interaction)
        const results = await fetchUniversitiesByResponses(answers);

        // Save result to database
        await Results.create({ username, results });

        res.json({ msg : "Result Saved Successfully...!"});
   } catch (error) {
        res.status(500).json({ error: error.message });
   }
}

export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Results Deleted Successfully...!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}