const getMostTrainerMW = require('../../../middlewares/trainers/getMostTrainer');

test('uses empty values when no trainer is found', async () => {
    const aggregate = jest.fn().mockResolvedValue([]);
    const res = { locals: {} };
    const next = jest.fn();

    await getMostTrainerMW({ EdzesModel: { aggregate } })({}, res, next);

    expect(res.locals.trainer).toBe(null);
    expect(res.locals.workoutCount).toBe(0);
    expect(next).toHaveBeenCalled();
});