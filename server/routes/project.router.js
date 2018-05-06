const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM project;';
    pool.query(queryText)
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET projects in router', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    let m = req.body;
    const queryText = `INSERT INTO project (
        person_id,
        project_title,
        description
    ) VALUES ($1, $2, $3);`;
    pool.query(queryText, [m.person_id, m.project_title, m.description])
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET projects in router', err);
            res.sendStatus(500);
        });
});

// router.put('/:id', (req, res) => {
//     let m = req.body;
//     const queryText = `UPDATE method SET 
//         person_id,
//         project_title,
//         description
//         WHERE id = $10;`;
//     pool.query(queryText, [m.title, m.statements, m.description, m.time_amount, 
//         m.diffculty, m.need, m.participants, m.steps, m.image, m.id])
//         .then(result => { res.send(result.rows); })
//         .catch(err => {
//             console.log('Error completing GET methods in router', err);
//             res.sendStatus(500);
//         });
// });

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    const queryText = `DELETE FROM project WHERE id=$1`
    pool.query(queryText, [id])
    .then(result => { res.send(result.rows); })
    .catch(err => {
        console.log('Error completing GET project in router', err);
        res.sendStatus(500);
    })
})

module.exports = router;
