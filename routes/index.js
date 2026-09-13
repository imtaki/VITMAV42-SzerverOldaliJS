const getTrainerMW = require('../middlewares/trainers/getTrainer');
const getTrainersMW = require('../middlewares/trainers/getTrainers');
const getMostTrainerMW = require('../middlewares/trainers/getMostTrainer');
const postTrainerMW = require('../middlewares/trainers/postTrainer');
const updateTrainerMW = require('../middlewares/trainers/updateTrainer');
const deleteTrainerMW = require('../middlewares/trainers/deleteTrainer');

const getWorkoutMW = require('../middlewares/workouts/getWorkout');
const getWorkoutsMW = require('../middlewares/workouts/getWorkouts');
const getLatestWorkoutsMW = require('../middlewares/workouts/getLatestWorkouts');
const postWorkoutMW = require('../middlewares/workouts/postWorkout');
const updateWorkoutMW = require('../middlewares/workouts/updateWorkout');
const deleteWorkoutMW = require('../middlewares/workouts/deleteWorkout');

const loadTrainersCountMW = require('../middlewares/utility/loadTrainersCount');
const loadWorkoutCountMW = require('../middlewares/utility/loadWorkoutCount');
const renderMW = require('../middlewares/utility/render');

module.exports = function (app) {
    const objRepo = {};

    app.get('/',
        loadTrainersCountMW(objRepo),
        loadWorkoutCountMW(objRepo),
        renderMW(objRepo, 'index'));

    
    app.use('/trainers',
        getTrainersMW(objRepo),
        renderMW(objRepo, 'edzok'));

    
    app.use('/workouts',
        getWorkoutsMW(objRepo),
        renderMW(objRepo, 'edzesek'));

    app.get('/trainer/new',
        renderMW(objRepo, 'edzo-new', { trainer: {} }));

    app.get('/trainer/edit/:id',
        renderMW(objRepo, 'edzo-edit', req => ({
            trainer: {
                id: req.params.id,
                name: 'Péter',
                initial: 'P',
                age: 30,
                height: 190,
                certified: true
            }
        })));

    app.get('/workout/new',
        renderMW(objRepo, 'edzes-new', { workout: {} }));

    app.get('/workout/edit/:id',
        renderMW(objRepo, 'edzes-edit', req => ({
            workout: {
                id: req.params.id,
                name: 'Mell és hát',
                type: 'sulyzos',
                typeLabel: 'Súlyzós',
                duration: 60,
                trainerId: 1,
                trainerName: 'Péter'
            }
        })));

    
    app.get('/trainer/:id',
        getTrainerMW(objRepo));

    app.get('/trainer/',
        getTrainersMW(objRepo));

    app.get('/trainer/most/',
        getMostTrainerMW(objRepo));

    app.post('/trainer/new',
        postTrainerMW(objRepo));

    app.put('/trainer/edit/:id',
        updateTrainerMW(objRepo));

    app.delete('/trainer/delete/:id',
        deleteTrainerMW(objRepo));

    app.get('/workout/:id',
        getWorkoutMW(objRepo));

    app.get('/workout/',
        getWorkoutsMW(objRepo));

    app.get('/workout/latest',
        getLatestWorkoutsMW(objRepo));

    app.post('/workout/new',
        postWorkoutMW(objRepo));

    app.put('/workout/edit/:id',
        updateWorkoutMW(objRepo));

    app.delete('/workout/delete/:id',
        deleteWorkoutMW(objRepo));
};
