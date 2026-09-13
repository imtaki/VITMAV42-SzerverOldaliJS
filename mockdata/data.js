/**
 * TODO: Once DB is in place, remove this file and use the DB instead.
 * Mock data for the list of trainers and workouts.
 * @const trainers - Mock data for the list of trainers.
 * @const workouts - Mock data for the list of workouts.
 * @const defaultViewData - Default data to be passed to the view.
 */

const trainers = [
    { id: 1, name: 'Péter', initial: 'P', age: 30, height: 190, certified: true },
    { id: 2, name: 'Anna', initial: 'A', age: 27, height: 176, certified: true },
    { id: 3, name: 'Gábor', initial: 'G', age: 35, height: 183, certified: false }
];

// only for now, until DB is in place, stats array kinda does this anyway, for now.  we will use this function to get the count of trainers and workouts
const getCount = (array) => {
    return array.length;
};

const workouts = [
    { id: 1, name: 'Mell és hát', type: 'sulyzos', typeLabel: 'Súlyzós', duration: 60, trainerId: 1, trainerName: 'Péter' },
    { id: 2, name: 'Teljes testes edzés', type: 'sulyzos', typeLabel: 'Súlyzós', duration: 75, trainerId: 2, trainerName: 'Anna' },
    { id: 3, name: 'Kardió alapok', type: 'kardio', typeLabel: 'Kardió', duration: 45, trainerId: 3, trainerName: 'Gábor' }
];

const defaultViewData = {
    trainers,
    workouts,
    latestWorkouts: workouts,
    stats: [
        { label: 'Személyi edzők', value: trainers.length, icon: '<circle cx="12" cy="8" r="3.5" /><path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />' },
        { label: 'Edzések', value: workouts.length, icon: '<path d="M7 4v16M17 4v16M4 8h16M4 16h16" />' }
    ]
};

module.exports = {
    trainers,
    workouts,
    defaultViewData,
    getCount
};