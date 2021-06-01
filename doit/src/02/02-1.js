/* ES6의 문자열은 밴틱(`)으로 표시하고
   변수는 ${} 로 표기한다 */
var cart = {name: '도서', price: 1500};
var getTotal = function(cart) {
    return `${cart.price}원`;
};
var myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(cart)}입니다`;
/* 문자열(`)안에 변수,연산을 포함시킬 수도 있다 */