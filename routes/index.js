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

    app.use('/',
        loadTrainersCountMW(objRepo),
        loadWorkoutCountMW(objRepo),
        renderMW(objRepo, 'index'));

    
    app.use('/trainers',
        getTrainersMW(objRepo),
        renderMW(objRepo, 'trainers'));

    
    app.use('/workouts',
        getWorkoutsMW(objRepo),
        renderMW(objRepo, 'workouts'));

    
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
