//Simple INSERT queries

const user = await User.create({
    username : 'alice123',
    isAdmin : true
}, { fields : ['username']});

console.log(user.username); // 'alice123'
console.log(user.isAdmin); // false

//Simple SELECT queries

// Find all users
const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));

// Specifying attributes for SELECT queries

Model.findAll({
    attributes: ['foo', 'bar']
});
// SELECT foo, bar FROM ....

Model.findAll({
    attributes: ['foo', ['bar', 'baz'], 'qux']
});
// SELECT foo, bar AS baz, qux FROM ...

// use sequelize.fn to do aggregations

Model.findAll({
    attributes : [
        'foo',
        [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'],
        'bar'
    ]
});
// SELECT foo, COUNT(hats) AS n_hats, bar FROM ...

//---------------------------------------------------------

Model.findAll({
    attributes: [
      'id', 'foo', 'bar', 'baz', 'qux', 'hats', // We had to list all attributes...
      [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'] // To add the aggregation...
    ]
});
// -> 더 짧게, 더 적은 오류를 발생시키는 방법(include 활용)

Model.findAll({
    attributes: {
      include: [
        [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']
      ]
    }
});
// SELECT id, foo, bar, baz, qux, hats, COUNT(hats) AS n_hats FROM ...

//-------------------------------------------------------------

// WHERE

Post.findAll({
    where : {
        authorId : 2
    }
});
// SELECT * FROM post WHERE authorId = 2;


// ------------------------------------------------------------

// Simple UPDATE queries
// Change everyone without a last name to "Doe"
await User.update({ lastName: "Doe" }, {
    where: {
      lastName: null
    }
});

// Simple DELETE queries
// Delete everyone named "Jane"
await User.destroy({
    where: {
      firstName: "Jane"
    }
  });