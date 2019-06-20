
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        { name: 'Elden ring' },
        { name: 'Watch Dogs: Legion' },
        { name: 'Cyberpunk 2077' },
        { name: 'Outer Worlds' },
        { name: 'Bleeding edge' },
        { name: 'DeathLoop' },
        { name: 'Ghostwire: Tokyo' },
        { name: 'Baldurs Gate III' },
        { name: 'Jedi' },
        { name: 'Outriders' },    
      ]);
    });
};
