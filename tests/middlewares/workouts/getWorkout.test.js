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

test('returns 404 when the workout does not exist', async () => {
		const populate = jest.fn().mockResolvedValue(null);
		const findById = jest.fn().mockReturnValue({ populate });
		const req = { params: { id: 'missing-id' } };
		const json = jest.fn();
		const status = jest.fn().mockReturnValue({ json });
		const res = { locals: {}, status };
		const next = jest.fn();

		await getWorkoutMW({ EdzesModel: { findById } })(req, res, next);

		expect(findById).toHaveBeenCalledWith('missing-id');
		expect(populate).toHaveBeenCalledWith('_trainerId');
		expect(status).toHaveBeenCalledWith(404);
		expect(json).toHaveBeenCalledWith({ error: 'Workout not found' });
		expect(next).not.toHaveBeenCalled();
});

test('passes lookup errors to next', async () => {
		const error = new Error('database unavailable');
		const populate = jest.fn().mockRejectedValue(error);
		const findById = jest.fn().mockReturnValue({ populate });
		const req = { params: { id: '1' } };
		const res = { locals: {} };
		const next = jest.fn();

		await getWorkoutMW({ EdzesModel: { findById } })(req, res, next);

		expect(next).toHaveBeenCalledWith(error);
		expect(res.locals.workout).toBeUndefined();
});
