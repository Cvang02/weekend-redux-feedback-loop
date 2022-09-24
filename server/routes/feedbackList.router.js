const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST ROUTE 
router.post('/', (req, res) => {

    console.log('SERVER REQ.BODY DATA IS:', req.body);
   
    const sqlText = `INSERT INTO "feedback" 
                        ("feeling", "understanding", "support", "comments")
                    VALUES 
                        ($1, $2, $3, $4)`;
    
    const sqlValue = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]

    pool.query(sqlText, sqlValue)

    .then((postRes) => {
        console.log('POST Route Successful', postRes);
        res.sendStatus(201);
    })
    .catch((postErr) => {
        console.log('POST Route Unsuccessful', postErr);
        res.sendStatus(500);
    })

}) // END OF router.post



module.exports = router;