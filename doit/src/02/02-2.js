/* 기존 문법 */
/* 배열 내장 함수를 일일이 기억해야 하고 코드가 길어진다 */
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
function func() {
    var args = Array.prototype.slice.call(arguments);
    var first = args[0];
    var others = args.slice(1, args.length);
}

/* ES6 전개 연산자 도입 */
// 함수 인자 배열을 args 변수에 할당했다.
//  ...~~ 로 각 위치에 있는 요소를 추출할 수 있다
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
const [ first, second, three = 'empty', ...others ] = array1;
function func(...args) {var [first, ...others] = args;}