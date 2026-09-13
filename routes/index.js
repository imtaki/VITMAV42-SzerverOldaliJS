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

const EdzoModel = require('../models/Edzo');
const EdzesModel = require('../models/Edzes');

module.exports = function (app) {
    const objRepo = {EdzoModel: EdzoModel, EdzesModel: EdzesModel};
    const sendLocal = key => (req, res) => res.json(res.locals[key]);

    app.get('/',
        loadTrainersCountMW(objRepo),
        loadWorkoutCountMW(objRepo),
        getLatestWorkoutsMW(objRepo),
        renderMW(objRepo, 'index'));

    
    app.get('/trainers',
        getTrainersMW(objRepo),
        renderMW(objRepo, 'edzok'));

    
    app.get('/workouts',
        getWorkoutsMW(objRepo),
        renderMW(objRepo, 'edzesek'));

    app.get('/trainer/new',
        renderMW(objRepo, 'edzo-new', { trainer: {} }));

    app.get('/trainer/edit/:id',
        getTrainerMW(objRepo),
        renderMW(objRepo, 'edzo-edit'));

    app.get('/workout/new',
        getTrainersMW(objRepo),
        renderMW(objRepo, 'edzes-new', { workout: {} }));

    app.get('/workout/edit/:id',
        getWorkoutMW(objRepo),
        getTrainersMW(objRepo),
        renderMW(objRepo, 'edzes-edit'));

    
    app.get('/trainer/',
        getTrainersMW(objRepo), sendLocal('trainers'));

    app.get('/trainer/most/',
        getMostTrainerMW(objRepo), sendLocal('trainer'));

    app.get('/trainer/:id',
        getTrainerMW(objRepo), sendLocal('trainer'));

    app.post('/trainer/new',
        postTrainerMW(objRepo));

    app.put('/trainer/edit/:id',
        updateTrainerMW(objRepo));

    app.post('/trainer/edit/:id',
        updateTrainerMW(objRepo));

    app.delete('/trainer/delete/:id',
        deleteTrainerMW(objRepo));

    app.get('/trainer/delete/:id',
        deleteTrainerMW(objRepo));

    app.get('/workout/',
        getWorkoutsMW(objRepo), sendLocal('workouts'));

    app.get('/workout/latest',
        getLatestWorkoutsMW(objRepo), sendLocal('latestWorkouts'));

    app.get('/workout/:id',
        getWorkoutMW(objRepo), sendLocal('workout'));

    app.post('/workout/new',
        postWorkoutMW(objRepo));

    app.put('/workout/edit/:id',
        updateWorkoutMW(objRepo));

    app.post('/workout/edit/:id',
        updateWorkoutMW(objRepo));

    app.delete('/workout/delete/:id',
        deleteWorkoutMW(objRepo));

    app.get('/workout/delete/:id',
        deleteWorkoutMW(objRepo));
};
