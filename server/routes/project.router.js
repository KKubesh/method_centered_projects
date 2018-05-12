const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    let userId = req.user.id;   
    const queryText = 'SELECT * FROM project WHERE person_id = $1;';
    pool.query(queryText, [userId])
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET projects in router', err);
            res.sendStatus(500);
        });
});

router.post('/', rejectUnauthenticated, (req, res) => {
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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
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
