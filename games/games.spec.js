const { insert } = require('./games-model')
const db = require('../data/dbConfig.js')

describe('games model', () =>{
    beforeEach(async () =>{
        await db('games').truncate();
    });

    it('should send env to testing', () =>{
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('insert()', () => {
        it('should insert games', async () => {
            await insert({ name: 'test game 1' })
            await insert({ name: 'test game 2' })

            const games = await db('games');
            expect(games).toHaveLength(2)
        })
    })

    describe('insert()', () => {
        it('should insert the provided game', async () => {
            let game  = { name: 'Toms test 1' };
            let inserted = await insert(game)
            expect(inserted.name).toBe(game.name)
            
            game = { name: 'Toms test 2' }
            inserted = await insert(game)
            expect(inserted.name).toBe(game.name)
        })
    })


})