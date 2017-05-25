
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {id: 1, test_name: 'Ava', img_url: 'https://raw.githubusercontent.com/avajs/ava/master/media/header.png', description: 'Ava is a test runner that runs your tests in parallel - see https://github.com/avajs/ava for more information.', installation: 'https://github.com/avajs/ava#usage'},
        {id: 2, test_name: 'Enzyme', img_url: '', description: "A react testing utility that makes it easier to assert, manipulate, and traverse your React Components' output", installation: 'https://github.com/airbnb/enzyme#installation'},
        {id: 3, test_name: 'Tape', img_url: '', description: '', installation: ''},
        {id: 4, test_name: 'Supertest', img_url: '', description: '', installation: ''},
        {id: 5, test_name: 'Cheerio', img_url: '', description: '', installation: ''}
      ]);
    });
};
