const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => { 
    let projectId = req.params.id;
    const queryText = 'SELECT * FROM project_methods WHERE project_id = $1;';
    pool.query(queryText, [projectId])
        .then(result => { res.send(result.rows); })
        .catch(err => {
            console.log('Error completing GET bookmark in router', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {    
    let methodId = req.body.method_id;
    let projectId = req.body.project_id;
    const queryText = `INSERT INTO project_methods (
        method_id,
        project_id
    ) VALUES ($1, $2);`;
    pool.query(queryText, [methodId, projectId])
    .then(result => { res.send(result.rows); })
    .catch(err => {
        console.log('Error completeing bookmark per project', err);
        res.sendStatus(500);        
    })
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    const queryText = `DELETE FROM project_methods WHERE method_id = $1;`
    pool.query(queryText, [id])
    .then(result => { res.send(result.rows); })
    .catch(err => {
        console.log('Error completing DEL methods in router', err);
        res.sendStatus(500);
    })
})

module.exports = router;