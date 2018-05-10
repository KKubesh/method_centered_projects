const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => { 
    let projectId = req.params.id;
    let userId = req.user.id;
    const queryText = 'SELECT * FROM project WHERE person_id = $1 AND id = $2;';
    pool.query(queryText, [userId, projectId])
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET projects where id in router', err);
            res.sendStatus(500);
        });
});

module.exports = router;