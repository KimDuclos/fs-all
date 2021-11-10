
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "kim", website: "www.kimssite.com" }, 
        { username: "kim2" }, 
        { username: "kim3" }
      ]);
    });
};
