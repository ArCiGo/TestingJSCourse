const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
    const originalGetWinner = utils.getWinner;
    utils.getWinner = jest.fn((p1, p2) => p1);

    const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
    expect(winner).toBe('Kent C. Dodds');
    // console.log(utils.getWinner);
    // console.log(utils.getWinner.mock.calls);
    expect(utils.getWinner.mock.calls).toEqual([
        ['Kent C. Dodds', 'Ken Wheeler'],
        ['Kent C. Dodds', 'Ken Wheeler'],
    ]);
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
    expect(utils.getWinner).toHaveBeenCalledWith(
        'Kent C. Dodds',
        'Ken Wheeler',
    );
    expect(utils.getWinner).toHaveBeenNthCalledWith(
        1,
        'Kent C. Dodds',
        'Ken Wheeler',
    );
    expect(utils.getWinner).toHaveBeenNthCalledWith(
        2,
        'Kent C. Dodds',
        'Ken Wheeler',
    );

    // cleanup
    utils.getWinner = originalGetWinner;
});

// to run this test, in the console type npx jest
