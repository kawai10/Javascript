// Model
// 모델은 테이블을 추상화 한것.
// 추상화이기 때문에 모델이 바뀌었다고 실제 테이블이 바뀌지 않음.
// 모델의 이름과 데이터베이스의 테이블 이름이 일치하지 않아도 됨.
// 보통 모델은 User와 같은 단수 이름을 가지고 테이블은 Users와 같은 복수 이름을 가짐


// Model 정의
// Model을 정의하는 방법은 define과 init을 사용하는 두가지 방법이 있음
// define과 init은 내부적으로 동일하다고 함.
// 아래는 공식문서에서 발췌함.

// Using sequelize.define:
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

// Extending Model
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

// Sequelize는 id를 자동으로 넣어주기 때문에 id를 굳이 넣어주지 않아도 됨.

