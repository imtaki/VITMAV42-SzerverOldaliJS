const trainerView = trainer => {
    if (!trainer) return null;
    const value = trainer.toObject ? trainer.toObject() : trainer;
    return { ...value, id: String(value._id || value.id), initial: value.initial || value.name?.charAt(0).toUpperCase() };
};

const workoutView = workout => {
    if (!workout) return null;
    const value = workout.toObject ? workout.toObject() : workout;
    const trainer = value._trainerId;
    return {
        ...value,
        id: String(value._id || value.id),
        trainerId: String(trainer?._id || trainer?.id || trainer || value.trainerId || '') ,
        trainerName: trainer?.name || value.trainerName || '',
        typeLabel: value.type === 'kardio' ? 'Kardió' : 'Súlyzós'
    };
};

module.exports = { trainerView, workoutView };
