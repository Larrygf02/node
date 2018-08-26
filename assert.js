/*El modulo assert proporciona un conjunto simple de
pruebas de afirmacion 
*/
const assert = require('assert');

//Equal evalua la condicion ==
assert.equal(1,1);
assert.equal(1,'1'); 
assert.notEqual(1,2);
//assert.notEqual(1,1); Lanza un AssertionError

//Asser ok evalua que la condicion sea verdad, sino lanza un AssertionError
assert.ok(true);

//StrictEqual evalua la condicion ===
assert.strictEqual(1,1);
//assert.strictEqual(1,'1');//Lanza un error tipos distintos



