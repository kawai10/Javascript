// sequelize를 사용하여 반환된 객체는 typeof 로 확인해보면 object 객체를 나타내고 있다.
// 이때 객체의 모든 값을 추출하기 위해서는 toJSON() method를 사용하여야 함.

async function retrievePrice(req, res) {
  const price_id = req.body.price_id;
  const priceObject = await price.getPriceObject(price_id);
  console.log(priceObject);
  res.status(200).json(priceObject);
}

// 위 코드는 price_id를 파라미터로 받아서 price의 값을 가져오는 함수이다.
// 위에서 보이는 priceObject를 console.log로 확인해보면 다음과 같이 나타난다.
/*
    price {
        dataValues: {
            price_id: 'price_ite8b019yp8',
            active: true,
            currency: 'usd',
            interval: 'year',
            interval_account: 0,
            type: 'recurring',
            unit_amount: 5000000,
            createdAt: '2022-03-12',
            updatedAt: '2022-03-12',
            productId: 'prod_ye9j93msyk'
        },
        ......
    }
*/

// priceObject 내부의 특정한 하나의 값에 접근하기 위해서는 priceObject.get('active') 하면 된다.
// 다만 전체 값을 가져오고 싶을때는 priceObject.toJSON()을 사용하여야 한다.
// priceObject.toJSON()
/*
    {
        price_id: 'price_ite8b019yp8',
        active: true,
        currency: 'usd',
        interval: 'year',
        interval_account: 0,
        type: 'recurring',
        unit_amount: 5000000,
        createdAt: '2022-03-12',
        updatedAt: '2022-03-12',
        productId: 'prod_ye9j93msyk'
    }
*/
// 변수에 값을 초기화 하고 꺼내서 사용하면 됨.
