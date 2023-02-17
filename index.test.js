const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({bandName: "Aerosmith", genre: "Rock"})
        expect(testBand.bandName).toBe('Aerosmith');
        expect(testBand.genre).toBe('Rock');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({musicianName: "Adele", musicianInstrument: "Voice"})
        expect(testMusician.musicianName).toBe("Adele");
        expect(testMusician.musicianInstrument).toBe("Voice");
    })
})
/*
test('can create a Band', async () => {
    const testUser = await User.create({ name: 'George', password: '123' });
    expect(testUser.name).toBe('George');
}
*/