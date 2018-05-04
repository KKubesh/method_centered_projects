const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM method';
    pool.query(queryText)
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET methods in router', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    let m = req.body;
    const queryText = `INSERT INTO method (
        title,
        statements,
        description,
        time_amount,
        diffculty,
        need,
        participants,
        steps,
        image
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
    pool.query(queryText, [m.title, m.statements, m.description, m.time_amount, 
        m.diffculty, m.need, m.participants, m.steps, m.image])
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET methods in router', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    const queryText = `DELETE FROM method WHERE id=$1`
    pool.query(queryText, [id])
    .then(result => { res.send(result.rows); })
    .catch(err => {
        console.log('Error completing GET methods in router', err);
        res.sendStatus(500);
    })
})

module.exports = router;
