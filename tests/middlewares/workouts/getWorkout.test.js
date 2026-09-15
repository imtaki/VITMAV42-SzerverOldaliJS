const getWorkoutMW = require('../../../middlewares/workouts/getWorkout');

test('loads and formats a workout', async () => {
		const workout = {
			_id: '1',
			type: 'kardio',
			_trainerId: { _id: '1', name: 'Anna' }
		};
		const populate = jest.fn().mockResolvedValue(workout);
		const findById = jest.fn().mockReturnValue({ populate });
		const req = { params: { id: '1' } };
		const res = { locals: {} };
		const next = jest.fn();

		await getWorkoutMW({ EdzesModel: { findById } })(req, res, next);

		expect(findById).toHaveBeenCalledWith('1');
		expect(populate).toHaveBeenCalledWith('_trainerId');
		expect(res.locals.workout).toEqual({
			...workout,
			id: '1',
			trainerId: '1',
			trainerName: 'Anna',
			typeLabel: 'Kardió'
		});
		expect(next).toHaveBeenCalled();
});
