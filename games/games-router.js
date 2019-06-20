const router = require('express').Router()
const Games = require('./games-model.js')

router.get('/', (req, res) => {
    Games.find()
        .then(games => {
            res.status(200).json(games);
        }).catch(err => {
            res.status(500).json({ message: 'error getting games' })
        })
})
router.get('/:id', (req, res) => {
    Games.findById(req.params.id)
        .then(game=> {
            if (game) {
                res.status(200).json(game);
            } else {
                res.status(404).json({ message: 'game not found' });
            }

        }).catch(err => {
            res.status(500).json({ message: 'error getting games' })
        })
})

router.post('/', (req, res) => {
    Games.insert(req.body)
        .then(game => {
            res.status(200).json(game);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error adding the game' });
        });
});

router.delete('/:id', (req, res) => {
    Gmaes.remove(req.params.id)
        .then(game => {
            res.status(200).json(game);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error deleting the game' });
        });
});

router.put('/:id', (req, res) => {
    Games.update(req.params.id, req.body)
      .then(game => {
        res.status(200).json(game);
      })
      .catch(error => {
        res.status(500).json({ message: 'We ran into an error updating the game' });
      });
  });

module.exports = router