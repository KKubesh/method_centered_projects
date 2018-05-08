const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body);
    
    let p = req.body;    
    const queryText = 'SELECT * FROM project WHERE person_id = $1;';
    pool.query(queryText)
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET projects in router', err);
            res.sendStatus(500);
        });
});

router.get('/overview', (req, res) => {    
    let p = req.body;
    let user_id = req.user.id;
    const queryText = 'SELECT * FROM project WHERE person_id = $1 AND id = $2;';
    pool.query(queryText, [user_id, p.id])
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET projects/overview in router', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    let p = req.body;
    const queryText = `INSERT INTO project (
        person_id,
        project_title,
        description
    ) VALUES ($1, $2, $3);`;
    pool.query(queryText, [p.person_id, p.project_title, p.description])
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET projects in router', err);
            res.sendStatus(500);
        });
});

// router.put('/:id', (req, res) => {
//     let p = req.body;
//     const queryText = `UPDATE method SET 
//         project_title = $1,
//         description = $2
//         WHERE id = $3;`;
//     pool.query(queryText, [p.project_title, p.description, p.id])
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
