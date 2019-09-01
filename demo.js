(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$Main$UrlChanged = function (a) {
	return {$: 'UrlChanged', a: a};
};
var author$project$Main$UrlRequested = function (a) {
	return {$: 'UrlRequested', a: a};
};
var author$project$Demo$Url$Button = {$: 'Button'};
var author$project$Demo$Url$Card = {$: 'Card'};
var author$project$Demo$Url$Checkbox = {$: 'Checkbox'};
var author$project$Demo$Url$Chips = {$: 'Chips'};
var author$project$Demo$Url$DenseTopAppBar = {$: 'DenseTopAppBar'};
var author$project$Demo$Url$Dialog = {$: 'Dialog'};
var author$project$Demo$Url$DismissibleDrawer = {$: 'DismissibleDrawer'};
var author$project$Demo$Url$Drawer = {$: 'Drawer'};
var author$project$Demo$Url$Elevation = {$: 'Elevation'};
var author$project$Demo$Url$Error404 = function (a) {
	return {$: 'Error404', a: a};
};
var author$project$Demo$Url$Fab = {$: 'Fab'};
var author$project$Demo$Url$FixedTopAppBar = {$: 'FixedTopAppBar'};
var author$project$Demo$Url$IconButton = {$: 'IconButton'};
var author$project$Demo$Url$ImageList = {$: 'ImageList'};
var author$project$Demo$Url$LayoutGrid = {$: 'LayoutGrid'};
var author$project$Demo$Url$LinearProgress = {$: 'LinearProgress'};
var author$project$Demo$Url$List = {$: 'List'};
var author$project$Demo$Url$Menu = {$: 'Menu'};
var author$project$Demo$Url$ModalDrawer = {$: 'ModalDrawer'};
var author$project$Demo$Url$PermanentDrawer = {$: 'PermanentDrawer'};
var author$project$Demo$Url$ProminentTopAppBar = {$: 'ProminentTopAppBar'};
var author$project$Demo$Url$RadioButton = {$: 'RadioButton'};
var author$project$Demo$Url$Ripple = {$: 'Ripple'};
var author$project$Demo$Url$Select = {$: 'Select'};
var author$project$Demo$Url$ShortCollapsedTopAppBar = {$: 'ShortCollapsedTopAppBar'};
var author$project$Demo$Url$ShortTopAppBar = {$: 'ShortTopAppBar'};
var author$project$Demo$Url$Slider = {$: 'Slider'};
var author$project$Demo$Url$Snackbar = {$: 'Snackbar'};
var author$project$Demo$Url$StandardTopAppBar = {$: 'StandardTopAppBar'};
var author$project$Demo$Url$StartPage = {$: 'StartPage'};
var author$project$Demo$Url$Switch = {$: 'Switch'};
var author$project$Demo$Url$TabBar = {$: 'TabBar'};
var author$project$Demo$Url$TextField = {$: 'TextField'};
var author$project$Demo$Url$Theme = {$: 'Theme'};
var author$project$Demo$Url$TopAppBar = {$: 'TopAppBar'};
var author$project$Demo$Url$Typography = {$: 'Typography'};
var author$project$Demo$Url$fromString = function (url) {
	switch (url) {
		case '':
			return author$project$Demo$Url$StartPage;
		case 'buttons':
			return author$project$Demo$Url$Button;
		case 'cards':
			return author$project$Demo$Url$Card;
		case 'checkbox':
			return author$project$Demo$Url$Checkbox;
		case 'chips':
			return author$project$Demo$Url$Chips;
		case 'dialog':
			return author$project$Demo$Url$Dialog;
		case 'drawer':
			return author$project$Demo$Url$Drawer;
		case 'dismissible-drawer':
			return author$project$Demo$Url$DismissibleDrawer;
		case 'modal-drawer':
			return author$project$Demo$Url$ModalDrawer;
		case 'permanent-drawer':
			return author$project$Demo$Url$PermanentDrawer;
		case 'elevation':
			return author$project$Demo$Url$Elevation;
		case 'fab':
			return author$project$Demo$Url$Fab;
		case 'icon-button':
			return author$project$Demo$Url$IconButton;
		case 'image-list':
			return author$project$Demo$Url$ImageList;
		case 'layout-grid':
			return author$project$Demo$Url$LayoutGrid;
		case 'linear-progress':
			return author$project$Demo$Url$LinearProgress;
		case 'lists':
			return author$project$Demo$Url$List;
		case 'radio-buttons':
			return author$project$Demo$Url$RadioButton;
		case 'ripple':
			return author$project$Demo$Url$Ripple;
		case 'select':
			return author$project$Demo$Url$Select;
		case 'menu':
			return author$project$Demo$Url$Menu;
		case 'slider':
			return author$project$Demo$Url$Slider;
		case 'snackbar':
			return author$project$Demo$Url$Snackbar;
		case 'switch':
			return author$project$Demo$Url$Switch;
		case 'tabbar':
			return author$project$Demo$Url$TabBar;
		case 'text-field':
			return author$project$Demo$Url$TextField;
		case 'theme':
			return author$project$Demo$Url$Theme;
		case 'top-app-bar':
			return author$project$Demo$Url$TopAppBar;
		case 'top-app-bar/standard':
			return author$project$Demo$Url$StandardTopAppBar;
		case 'top-app-bar/fixed':
			return author$project$Demo$Url$FixedTopAppBar;
		case 'top-app-bar/dense':
			return author$project$Demo$Url$DenseTopAppBar;
		case 'top-app-bar/prominent':
			return author$project$Demo$Url$ProminentTopAppBar;
		case 'top-app-bar/short':
			return author$project$Demo$Url$ShortTopAppBar;
		case 'top-app-bar/short-collapsed':
			return author$project$Demo$Url$ShortCollapsedTopAppBar;
		case 'typography':
			return author$project$Demo$Url$Typography;
		default:
			return author$project$Demo$Url$Error404(url);
	}
};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var author$project$Demo$Url$fromUrl = function (url) {
	return author$project$Demo$Url$fromString(
		A2(elm$core$Maybe$withDefault, '', url.fragment));
};
var author$project$Demo$Buttons$defaultModel = {};
var author$project$Demo$Cards$defaultModel = {};
var author$project$Material$Checkbox$Checked = {$: 'Checked'};
var author$project$Material$Checkbox$Unchecked = {$: 'Unchecked'};
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var author$project$Demo$Checkbox$defaultModel = {
	checkboxes: elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('checked-hero-checkbox', author$project$Material$Checkbox$Checked),
				_Utils_Tuple2('unchecked-hero-checkbox', author$project$Material$Checkbox$Unchecked),
				_Utils_Tuple2('unchecked-checkbox', author$project$Material$Checkbox$Unchecked),
				_Utils_Tuple2('checked-checkbox', author$project$Material$Checkbox$Checked)
			]))
};
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var elm$core$Set$empty = elm$core$Set$Set_elm_builtin(elm$core$Dict$empty);
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A3(elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var elm$core$Set$fromList = function (list) {
	return A3(elm$core$List$foldl, elm$core$Set$insert, elm$core$Set$empty, list);
};
var author$project$Demo$Chips$defaultModel = {
	choiceChip: elm$core$Maybe$Just('chips-choice-medium'),
	selectedChips: elm$core$Set$fromList(
		_List_fromArray(
			['chips-choice-medium', 'chips-filter-chips-tops', 'chips-filter-chips-bottoms', 'chips-filter-chips-alice']))
};
var author$project$Demo$DenseTopAppBar$defaultModel = {};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var author$project$Demo$Dialog$defaultModel = {openDialog: elm$core$Maybe$Nothing};
var elm$core$Basics$False = {$: 'False'};
var author$project$Demo$DismissibleDrawer$defaultModel = {drawerOpen: false, selectedIndex: 0};
var author$project$Demo$Drawer$defaultModel = {};
var author$project$Demo$Elevation$defaultModel = {};
var author$project$Demo$Fabs$defaultModel = {};
var author$project$Demo$FixedTopAppBar$defaultModel = {};
var author$project$Demo$IconButton$defaultModel = {iconButtons: elm$core$Dict$empty};
var author$project$Demo$ImageList$defaultModel = {};
var author$project$Demo$LayoutGrid$defaultModel = {};
var author$project$Demo$LinearProgress$defaultModel = {};
var author$project$Demo$Lists$defaultModel = {activatedIndex: 1, checkboxIndices: elm$core$Set$empty, radioIndex: elm$core$Maybe$Nothing, shapedActivatedIndex: 1};
var author$project$Demo$Menus$defaultModel = {open: false};
var author$project$Demo$ModalDrawer$defaultModel = {drawerOpen: false, selectedIndex: 0};
var author$project$Demo$PermanentDrawer$defaultModel = {selectedIndex: 0};
var author$project$Demo$ProminentTopAppBar$defaultModel = {};
var author$project$Demo$RadioButtons$defaultModel = {
	radios: elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('hero', 'radio-buttons-hero-radio-1'),
				_Utils_Tuple2('example', 'radio-buttons-example-radio-1')
			]))
};
var author$project$Demo$Ripple$defaultModel = {};
var author$project$Demo$Selects$defaultModel = {enhancedValue: '', value: ''};
var author$project$Demo$ShortCollapsedTopAppBar$defaultModel = {};
var author$project$Demo$ShortTopAppBar$defaultModel = {};
var author$project$Demo$Slider$defaultModel = {
	sliders: elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('hero-slider', 25),
				_Utils_Tuple2('continuous-slider', 25),
				_Utils_Tuple2('discrete-slider', 25),
				_Utils_Tuple2('discrete-slider-with-tick-marks', 25)
			]))
};
var author$project$Material$Snackbar$initialQueue = {messageId: 0, messages: _List_Nil};
var author$project$Demo$Snackbar$defaultModel = {queue: author$project$Material$Snackbar$initialQueue};
var author$project$Demo$StandardTopAppBar$defaultModel = {};
var elm$core$Basics$True = {$: 'True'};
var author$project$Demo$Switch$defaultModel = {
	switches: elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('hero-switch', true)
			]))
};
var author$project$Demo$TabBar$defaultModel = {activeHeroTab: 0, activeIconTab: 0, activeScrollingTab: 0, activeStackedTab: 0};
var author$project$Demo$TextFields$defaultModel = {value: ''};
var author$project$Demo$Theme$defaultModel = {};
var author$project$Demo$TopAppBar$defaultModel = {};
var author$project$Demo$Typography$defaultModel = {};
var author$project$Main$defaultModel = function (key) {
	return {buttons: author$project$Demo$Buttons$defaultModel, cards: author$project$Demo$Cards$defaultModel, catalogDrawerOpen: false, checkbox: author$project$Demo$Checkbox$defaultModel, chips: author$project$Demo$Chips$defaultModel, denseTopAppBar: author$project$Demo$DenseTopAppBar$defaultModel, dialog: author$project$Demo$Dialog$defaultModel, dismissibleDrawer: author$project$Demo$DismissibleDrawer$defaultModel, drawer: author$project$Demo$Drawer$defaultModel, elevation: author$project$Demo$Elevation$defaultModel, fabs: author$project$Demo$Fabs$defaultModel, fixedTopAppBar: author$project$Demo$FixedTopAppBar$defaultModel, iconButton: author$project$Demo$IconButton$defaultModel, imageList: author$project$Demo$ImageList$defaultModel, key: key, layoutGrid: author$project$Demo$LayoutGrid$defaultModel, linearProgress: author$project$Demo$LinearProgress$defaultModel, lists: author$project$Demo$Lists$defaultModel, menus: author$project$Demo$Menus$defaultModel, modalDrawer: author$project$Demo$ModalDrawer$defaultModel, permanentDrawer: author$project$Demo$PermanentDrawer$defaultModel, prominentTopAppBar: author$project$Demo$ProminentTopAppBar$defaultModel, radio: author$project$Demo$RadioButtons$defaultModel, ripple: author$project$Demo$Ripple$defaultModel, selects: author$project$Demo$Selects$defaultModel, shortCollapsedTopAppBar: author$project$Demo$ShortCollapsedTopAppBar$defaultModel, shortTopAppBar: author$project$Demo$ShortTopAppBar$defaultModel, slider: author$project$Demo$Slider$defaultModel, snackbar: author$project$Demo$Snackbar$defaultModel, standardTopAppBar: author$project$Demo$StandardTopAppBar$defaultModel, _switch: author$project$Demo$Switch$defaultModel, tabbar: author$project$Demo$TabBar$defaultModel, textfields: author$project$Demo$TextFields$defaultModel, theme: author$project$Demo$Theme$defaultModel, topAppBar: author$project$Demo$TopAppBar$defaultModel, typography: author$project$Demo$Typography$defaultModel, url: author$project$Demo$Url$Button};
};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$init = F3(
	function (flags, url, key) {
		var initialModel = author$project$Main$defaultModel(key);
		return _Utils_Tuple2(
			_Utils_update(
				initialModel,
				{
					url: author$project$Demo$Url$fromUrl(url)
				}),
			elm$core$Platform$Cmd$none);
	});
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var author$project$Main$subscriptions = function (model) {
	return elm$core$Platform$Sub$none;
};
var author$project$Demo$Buttons$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Cards$update = F2(
	function (msg, model) {
		return model;
	});
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === 'RBNode_elm_builtin') {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === 'RBNode_elm_builtin') {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === 'RBNode_elm_builtin') {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (_n0.$ === 'Just') {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var author$project$Demo$Checkbox$update = F2(
	function (msg, model) {
		var index = msg.a;
		var checkboxes = A3(
			elm$core$Dict$update,
			index,
			function (state) {
				return _Utils_eq(
					state,
					elm$core$Maybe$Just(author$project$Material$Checkbox$Checked)) ? elm$core$Maybe$Just(author$project$Material$Checkbox$Unchecked) : elm$core$Maybe$Just(author$project$Material$Checkbox$Checked);
			},
			model.checkboxes);
		return _Utils_update(
			model,
			{checkboxes: checkboxes});
	});
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (_n0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return A2(elm$core$Dict$member, key, dict);
	});
var elm$core$Set$remove = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A2(elm$core$Dict$remove, key, dict));
	});
var author$project$Demo$Chips$update = F2(
	function (msg, model) {
		var chipType = msg.a;
		var index = msg.b;
		if (chipType.$ === 'Choice') {
			return _Utils_update(
				model,
				{
					choiceChip: _Utils_eq(
						model.choiceChip,
						elm$core$Maybe$Just(index)) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(index)
				});
		} else {
			return _Utils_update(
				model,
				{
					selectedChips: (A2(elm$core$Set$member, index, model.selectedChips) ? elm$core$Set$remove(index) : elm$core$Set$insert(index))(model.selectedChips)
				});
		}
	});
var author$project$Demo$DenseTopAppBar$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Dialog$update = F2(
	function (msg, model) {
		if (msg.$ === 'Close') {
			return _Utils_update(
				model,
				{openDialog: elm$core$Maybe$Nothing});
		} else {
			var index = msg.a;
			return _Utils_update(
				model,
				{
					openDialog: elm$core$Maybe$Just(index)
				});
		}
	});
var elm$core$Basics$not = _Basics_not;
var author$project$Demo$DismissibleDrawer$update = F2(
	function (msg, model) {
		if (msg.$ === 'ToggleDrawer') {
			return _Utils_update(
				model,
				{drawerOpen: !model.drawerOpen});
		} else {
			var index = msg.a;
			return _Utils_update(
				model,
				{selectedIndex: index});
		}
	});
var author$project$Demo$Drawer$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Elevation$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Fabs$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$FixedTopAppBar$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$IconButton$update = F2(
	function (msg, model) {
		var index = msg.a;
		return _Utils_update(
			model,
			{
				iconButtons: A3(
					elm$core$Dict$update,
					index,
					function (state) {
						return elm$core$Maybe$Just(
							!A2(elm$core$Maybe$withDefault, false, state));
					},
					model.iconButtons)
			});
	});
var author$project$Demo$ImageList$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$LayoutGrid$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$LinearProgress$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Lists$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'ToggleCheckbox':
				var index = msg.a;
				return _Utils_update(
					model,
					{
						checkboxIndices: A2(elm$core$Set$member, index, model.checkboxIndices) ? A2(elm$core$Set$remove, index, model.checkboxIndices) : A2(elm$core$Set$insert, index, model.checkboxIndices)
					});
			case 'SetRadio':
				var index = msg.a;
				return _Utils_update(
					model,
					{
						radioIndex: elm$core$Maybe$Just(index)
					});
			case 'SetActivated':
				var index = msg.a;
				return _Utils_update(
					model,
					{activatedIndex: index});
			default:
				var index = msg.a;
				return _Utils_update(
					model,
					{shapedActivatedIndex: index});
		}
	});
var author$project$Demo$Menus$update = F2(
	function (msg, model) {
		if (msg.$ === 'Open') {
			return _Utils_update(
				model,
				{open: true});
		} else {
			return _Utils_update(
				model,
				{open: false});
		}
	});
var author$project$Demo$ModalDrawer$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'OpenDrawer':
				return _Utils_update(
					model,
					{drawerOpen: true});
			case 'CloseDrawer':
				return _Utils_update(
					model,
					{drawerOpen: false});
			default:
				var index = msg.a;
				return _Utils_update(
					model,
					{selectedIndex: index});
		}
	});
var author$project$Demo$PermanentDrawer$update = F2(
	function (msg, model) {
		var index = msg.a;
		return _Utils_update(
			model,
			{selectedIndex: index});
	});
var author$project$Demo$ProminentTopAppBar$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$RadioButtons$update = F2(
	function (msg, model) {
		var group = msg.a;
		var index = msg.b;
		return _Utils_update(
			model,
			{
				radios: A3(elm$core$Dict$insert, group, index, model.radios)
			});
	});
var author$project$Demo$Ripple$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Selects$update = F2(
	function (msg, model) {
		if (msg.$ === 'SetValue') {
			var value = msg.a;
			return _Utils_update(
				model,
				{value: value});
		} else {
			var value = msg.a;
			return _Utils_update(
				model,
				{enhancedValue: value});
		}
	});
var author$project$Demo$ShortCollapsedTopAppBar$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$ShortTopAppBar$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Slider$update = F2(
	function (msg, model) {
		var id = msg.a;
		var value = msg.b;
		return _Utils_update(
			model,
			{
				sliders: A3(elm$core$Dict$insert, id, value, model.sliders)
			});
	});
var author$project$Demo$Snackbar$Click = {$: 'Click'};
var author$project$Demo$Snackbar$SnackbarMsg = function (a) {
	return {$: 'SnackbarMsg', a: a};
};
var author$project$Material$Snackbar$AddMessage = function (a) {
	return {$: 'AddMessage', a: a};
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var author$project$Material$Snackbar$addMessage = F2(
	function (lift, message) {
		return A2(
			elm$core$Task$perform,
			lift,
			elm$core$Task$succeed(
				author$project$Material$Snackbar$AddMessage(message)));
	});
var author$project$Material$Snackbar$snackbarMessage = {actionButton: elm$core$Maybe$Nothing, actionIcon: elm$core$Maybe$Nothing, label: '', leading: false, onActionButtonClick: elm$core$Maybe$Nothing, onActionIconClick: elm$core$Maybe$Nothing, stacked: false, timeoutMs: 5000};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var author$project$Material$Snackbar$update = F3(
	function (lift, msg, queue) {
		if (msg.$ === 'AddMessage') {
			var message = msg.a;
			var nextMessageId = elm$core$List$isEmpty(queue.messages) ? (queue.messageId + 1) : queue.messageId;
			return _Utils_Tuple2(
				_Utils_update(
					queue,
					{
						messageId: nextMessageId,
						messages: _Utils_ap(
							queue.messages,
							_List_fromArray(
								[message]))
					}),
				elm$core$Platform$Cmd$none);
		} else {
			var messages = A2(elm$core$List$drop, 1, queue.messages);
			var nextMessageId = (!elm$core$List$isEmpty(messages)) ? (queue.messageId + 1) : queue.messageId;
			return _Utils_Tuple2(
				_Utils_update(
					queue,
					{messageId: nextMessageId, messages: messages}),
				elm$core$Platform$Cmd$none);
		}
	});
var elm$core$Tuple$mapFirst = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var author$project$Demo$Snackbar$update = F2(
	function (msg, model) {
		var stackedMessage = _Utils_update(
			author$project$Material$Snackbar$snackbarMessage,
			{
				actionButton: elm$core$Maybe$Just('Add a new label'),
				actionIcon: elm$core$Maybe$Just('close'),
				label: 'This item already has the label \"travel\". You can add a new label.',
				onActionButtonClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$Click),
				onActionIconClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$Click),
				stacked: true
			});
		var leadingMessage = _Utils_update(
			author$project$Material$Snackbar$snackbarMessage,
			{
				actionButton: elm$core$Maybe$Just('Undo'),
				actionIcon: elm$core$Maybe$Just('close'),
				label: 'Your photo has been archived.',
				leading: true,
				onActionButtonClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$Click),
				onActionIconClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$Click)
			});
		var baselineMessage = _Utils_update(
			author$project$Material$Snackbar$snackbarMessage,
			{
				actionButton: elm$core$Maybe$Just('Retry'),
				actionIcon: elm$core$Maybe$Just('close'),
				label: 'Can\'t send photo. Retry in 5 seconds.',
				onActionButtonClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$Click),
				onActionIconClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$Click)
			});
		switch (msg.$) {
			case 'ShowBaseline':
				return _Utils_Tuple2(
					model,
					A2(author$project$Material$Snackbar$addMessage, author$project$Demo$Snackbar$SnackbarMsg, baselineMessage));
			case 'ShowLeading':
				return _Utils_Tuple2(
					model,
					A2(author$project$Material$Snackbar$addMessage, author$project$Demo$Snackbar$SnackbarMsg, leadingMessage));
			case 'ShowStacked':
				return _Utils_Tuple2(
					model,
					A2(author$project$Material$Snackbar$addMessage, author$project$Demo$Snackbar$SnackbarMsg, stackedMessage));
			case 'SnackbarMsg':
				var snackbarMsg = msg.a;
				return A2(
					elm$core$Tuple$mapFirst,
					function (queue) {
						return _Utils_update(
							model,
							{queue: queue});
					},
					A3(author$project$Material$Snackbar$update, author$project$Demo$Snackbar$SnackbarMsg, snackbarMsg, model.queue));
			default:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var author$project$Demo$StandardTopAppBar$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Switch$update = F2(
	function (msg, model) {
		var id = msg.a;
		return _Utils_update(
			model,
			{
				switches: A3(
					elm$core$Dict$update,
					id,
					function (state) {
						return elm$core$Maybe$Just(
							!A2(elm$core$Maybe$withDefault, false, state));
					},
					model.switches)
			});
	});
var author$project$Demo$TabBar$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'SetActiveHeroTab':
				var index = msg.a;
				return _Utils_update(
					model,
					{activeHeroTab: index});
			case 'SetActiveIconTab':
				var index = msg.a;
				return _Utils_update(
					model,
					{activeIconTab: index});
			case 'SetActiveStackedTab':
				var index = msg.a;
				return _Utils_update(
					model,
					{activeStackedTab: index});
			default:
				var index = msg.a;
				return _Utils_update(
					model,
					{activeScrollingTab: index});
		}
	});
var author$project$Demo$TextFields$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Theme$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$TopAppBar$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Typography$update = F2(
	function (msg, model) {
		return model;
	});
var author$project$Demo$Url$toString = function (url) {
	switch (url.$) {
		case 'StartPage':
			return '#';
		case 'Button':
			return '#buttons';
		case 'Card':
			return '#cards';
		case 'Checkbox':
			return '#checkbox';
		case 'Chips':
			return '#chips';
		case 'Dialog':
			return '#dialog';
		case 'Drawer':
			return '#drawer';
		case 'DismissibleDrawer':
			return '#dismissible-drawer';
		case 'ModalDrawer':
			return '#modal-drawer';
		case 'PermanentDrawer':
			return '#permanent-drawer';
		case 'Elevation':
			return '#elevation';
		case 'Fab':
			return '#fab';
		case 'IconButton':
			return '#icon-button';
		case 'ImageList':
			return '#image-list';
		case 'LayoutGrid':
			return '#layout-grid';
		case 'LinearProgress':
			return '#linear-progress';
		case 'List':
			return '#lists';
		case 'RadioButton':
			return '#radio-buttons';
		case 'Ripple':
			return '#ripple';
		case 'Select':
			return '#select';
		case 'Menu':
			return '#menu';
		case 'Slider':
			return '#slider';
		case 'Snackbar':
			return '#snackbar';
		case 'Switch':
			return '#switch';
		case 'TabBar':
			return '#tabbar';
		case 'TextField':
			return '#text-field';
		case 'Theme':
			return '#theme';
		case 'TopAppBar':
			return '#top-app-bar';
		case 'StandardTopAppBar':
			return '#top-app-bar/standard';
		case 'FixedTopAppBar':
			return '#top-app-bar/fixed';
		case 'DenseTopAppBar':
			return '#top-app-bar/dense';
		case 'ProminentTopAppBar':
			return '#top-app-bar/prominent';
		case 'ShortTopAppBar':
			return '#top-app-bar/short';
		case 'ShortCollapsedTopAppBar':
			return '#top-app-bar/short-collapsed';
		case 'Typography':
			return '#typography';
		default:
			var requestedHash = url.a;
			return requestedHash;
	}
};
var author$project$Main$SnackbarMsg = function (a) {
	return {$: 'SnackbarMsg', a: a};
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Navigation$load = _Browser_load;
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$Platform$Cmd$map = _Platform_map;
var elm$core$Tuple$mapSecond = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'UrlRequested':
				if (msg.a.$ === 'Internal') {
					var url = msg.a.a;
					return _Utils_Tuple2(
						model,
						elm$browser$Browser$Navigation$load(
							author$project$Demo$Url$toString(
								author$project$Demo$Url$fromUrl(url))));
				} else {
					var string = msg.a.a;
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			case 'UrlChanged':
				var url = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							catalogDrawerOpen: (!_Utils_eq(
								author$project$Demo$Url$fromUrl(url),
								author$project$Demo$Url$StartPage)) ? model.catalogDrawerOpen : false,
							url: author$project$Demo$Url$fromUrl(url)
						}),
					elm$core$Platform$Cmd$none);
			case 'Navigate':
				var url = msg.a;
				return _Utils_Tuple2(
					model,
					elm$browser$Browser$Navigation$load(
						author$project$Demo$Url$toString(url)));
			case 'OpenCatalogDrawer':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{catalogDrawerOpen: true}),
					elm$core$Platform$Cmd$none);
			case 'CloseCatalogDrawer':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{catalogDrawerOpen: false}),
					elm$core$Platform$Cmd$none);
			case 'ButtonsMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							buttons: A2(author$project$Demo$Buttons$update, msg_, model.buttons)
						}),
					elm$core$Platform$Cmd$none);
			case 'CardsMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							cards: A2(author$project$Demo$Cards$update, msg_, model.cards)
						}),
					elm$core$Platform$Cmd$none);
			case 'CheckboxMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							checkbox: A2(author$project$Demo$Checkbox$update, msg_, model.checkbox)
						}),
					elm$core$Platform$Cmd$none);
			case 'ChipsMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							chips: A2(author$project$Demo$Chips$update, msg_, model.chips)
						}),
					elm$core$Platform$Cmd$none);
			case 'DialogMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							dialog: A2(author$project$Demo$Dialog$update, msg_, model.dialog)
						}),
					elm$core$Platform$Cmd$none);
			case 'ElevationMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							elevation: A2(author$project$Demo$Elevation$update, msg_, model.elevation)
						}),
					elm$core$Platform$Cmd$none);
			case 'DrawerMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							drawer: A2(author$project$Demo$Drawer$update, msg_, model.drawer)
						}),
					elm$core$Platform$Cmd$none);
			case 'DismissibleDrawerMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							dismissibleDrawer: A2(author$project$Demo$DismissibleDrawer$update, msg_, model.dismissibleDrawer)
						}),
					elm$core$Platform$Cmd$none);
			case 'ModalDrawerMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							modalDrawer: A2(author$project$Demo$ModalDrawer$update, msg_, model.modalDrawer)
						}),
					elm$core$Platform$Cmd$none);
			case 'PermanentDrawerMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							permanentDrawer: A2(author$project$Demo$PermanentDrawer$update, msg_, model.permanentDrawer)
						}),
					elm$core$Platform$Cmd$none);
			case 'FabsMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							fabs: A2(author$project$Demo$Fabs$update, msg_, model.fabs)
						}),
					elm$core$Platform$Cmd$none);
			case 'IconButtonMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							iconButton: A2(author$project$Demo$IconButton$update, msg_, model.iconButton)
						}),
					elm$core$Platform$Cmd$none);
			case 'ImageListMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							imageList: A2(author$project$Demo$ImageList$update, msg_, model.imageList)
						}),
					elm$core$Platform$Cmd$none);
			case 'MenuMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							menus: A2(author$project$Demo$Menus$update, msg_, model.menus)
						}),
					elm$core$Platform$Cmd$none);
			case 'RadioButtonsMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							radio: A2(author$project$Demo$RadioButtons$update, msg_, model.radio)
						}),
					elm$core$Platform$Cmd$none);
			case 'RippleMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ripple: A2(author$project$Demo$Ripple$update, msg_, model.ripple)
						}),
					elm$core$Platform$Cmd$none);
			case 'SelectMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							selects: A2(author$project$Demo$Selects$update, msg_, model.selects)
						}),
					elm$core$Platform$Cmd$none);
			case 'SliderMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							slider: A2(author$project$Demo$Slider$update, msg_, model.slider)
						}),
					elm$core$Platform$Cmd$none);
			case 'SnackbarMsg':
				var msg_ = msg.a;
				return A2(
					elm$core$Tuple$mapSecond,
					elm$core$Platform$Cmd$map(author$project$Main$SnackbarMsg),
					A2(
						elm$core$Tuple$mapFirst,
						function (snackbar) {
							return _Utils_update(
								model,
								{snackbar: snackbar});
						},
						A2(author$project$Demo$Snackbar$update, msg_, model.snackbar)));
			case 'SwitchMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							_switch: A2(author$project$Demo$Switch$update, msg_, model._switch)
						}),
					elm$core$Platform$Cmd$none);
			case 'TextFieldMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							textfields: A2(author$project$Demo$TextFields$update, msg_, model.textfields)
						}),
					elm$core$Platform$Cmd$none);
			case 'TabBarMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							tabbar: A2(author$project$Demo$TabBar$update, msg_, model.tabbar)
						}),
					elm$core$Platform$Cmd$none);
			case 'LayoutGridMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							layoutGrid: A2(author$project$Demo$LayoutGrid$update, msg_, model.layoutGrid)
						}),
					elm$core$Platform$Cmd$none);
			case 'ListsMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							lists: A2(author$project$Demo$Lists$update, msg_, model.lists)
						}),
					elm$core$Platform$Cmd$none);
			case 'ThemeMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							theme: A2(author$project$Demo$Theme$update, msg_, model.theme)
						}),
					elm$core$Platform$Cmd$none);
			case 'TopAppBarMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							topAppBar: A2(author$project$Demo$TopAppBar$update, msg_, model.topAppBar)
						}),
					elm$core$Platform$Cmd$none);
			case 'LinearProgressMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							linearProgress: A2(author$project$Demo$LinearProgress$update, msg_, model.linearProgress)
						}),
					elm$core$Platform$Cmd$none);
			case 'TypographyMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							typography: A2(author$project$Demo$Typography$update, msg_, model.typography)
						}),
					elm$core$Platform$Cmd$none);
			case 'StandardTopAppBarMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							standardTopAppBar: A2(author$project$Demo$StandardTopAppBar$update, msg_, model.standardTopAppBar)
						}),
					elm$core$Platform$Cmd$none);
			case 'FixedTopAppBarMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							fixedTopAppBar: A2(author$project$Demo$FixedTopAppBar$update, msg_, model.fixedTopAppBar)
						}),
					elm$core$Platform$Cmd$none);
			case 'DenseTopAppBarMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							denseTopAppBar: A2(author$project$Demo$DenseTopAppBar$update, msg_, model.denseTopAppBar)
						}),
					elm$core$Platform$Cmd$none);
			case 'ProminentTopAppBarMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							prominentTopAppBar: A2(author$project$Demo$ProminentTopAppBar$update, msg_, model.prominentTopAppBar)
						}),
					elm$core$Platform$Cmd$none);
			case 'ShortCollapsedTopAppBarMsg':
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							shortCollapsedTopAppBar: A2(author$project$Demo$ShortCollapsedTopAppBar$update, msg_, model.shortCollapsedTopAppBar)
						}),
					elm$core$Platform$Cmd$none);
			default:
				var msg_ = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							shortTopAppBar: A2(author$project$Demo$ShortTopAppBar$update, msg_, model.shortTopAppBar)
						}),
					elm$core$Platform$Cmd$none);
		}
	});
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var author$project$Demo$Buttons$heroMargin = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'margin', '16px 32px')
	]);
var author$project$Material$Button$buttonConfig = {additionalAttributes: _List_Nil, dense: false, disabled: false, icon: elm$core$Maybe$Nothing, onClick: elm$core$Maybe$Nothing, trailingIcon: false};
var author$project$Material$Button$Outlined = {$: 'Outlined'};
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Material$Button$clickHandler = function (_n0) {
	var onClick = _n0.onClick;
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, onClick);
};
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var author$project$Material$Button$denseCs = function (_n0) {
	var dense = _n0.dense;
	return dense ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-button--dense')) : elm$core$Maybe$Nothing;
};
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$disabled = elm$html$Html$Attributes$boolProperty('disabled');
var author$project$Material$Button$disabledAttr = function (_n0) {
	var disabled = _n0.disabled;
	return elm$core$Maybe$Just(
		elm$html$Html$Attributes$disabled(disabled));
};
var elm$html$Html$span = _VirtualDom_node('span');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$Material$Button$labelElt = function (label) {
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-button__label')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				])));
};
var elm$html$Html$i = _VirtualDom_node('i');
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var author$project$Material$Button$iconElt = function (_n0) {
	var icon = _n0.icon;
	return A2(
		elm$core$Maybe$map,
		function (iconName) {
			return A2(
				elm$html$Html$i,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-button__icon material-icons'),
						A2(elm$html$Html$Attributes$attribute, 'aria-hidden', 'true')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(iconName)
					]));
		},
		icon);
};
var author$project$Material$Button$leadingIconElt = function (config) {
	return (!config.trailingIcon) ? author$project$Material$Button$iconElt(config) : elm$core$Maybe$Nothing;
};
var author$project$Material$Button$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-button'));
var author$project$Material$Button$trailingIconElt = function (config) {
	return config.trailingIcon ? author$project$Material$Button$iconElt(config) : elm$core$Maybe$Nothing;
};
var author$project$Material$Button$variantCs = function (variant) {
	switch (variant.$) {
		case 'Text':
			return elm$core$Maybe$Nothing;
		case 'Raised':
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-button--raised'));
		case 'Unelevated':
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-button--unelevated'));
		default:
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-button--outlined'));
	}
};
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var author$project$Material$Button$button = F3(
	function (variant, config, label) {
		return A3(
			elm$html$Html$node,
			'mdc-button',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Button$rootCs,
							author$project$Material$Button$variantCs(variant),
							author$project$Material$Button$denseCs(config),
							author$project$Material$Button$disabledAttr(config),
							author$project$Material$Button$clickHandler(config)
						])),
				config.additionalAttributes),
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Button$leadingIconElt(config),
						author$project$Material$Button$labelElt(label),
						author$project$Material$Button$trailingIconElt(config)
					])));
	});
var author$project$Material$Button$outlinedButton = F2(
	function (config, label) {
		return A3(author$project$Material$Button$button, author$project$Material$Button$Outlined, config, label);
	});
var author$project$Material$Button$Raised = {$: 'Raised'};
var author$project$Material$Button$raisedButton = F2(
	function (config, label) {
		return A3(author$project$Material$Button$button, author$project$Material$Button$Raised, config, label);
	});
var author$project$Material$Button$Text = {$: 'Text'};
var author$project$Material$Button$textButton = F2(
	function (config, label) {
		return A3(author$project$Material$Button$button, author$project$Material$Button$Text, config, label);
	});
var author$project$Material$Button$Unelevated = {$: 'Unelevated'};
var author$project$Material$Button$unelevatedButton = F2(
	function (config, label) {
		return A3(author$project$Material$Button$button, author$project$Material$Button$Unelevated, config, label);
	});
var author$project$Demo$Buttons$heroButtons = _List_fromArray(
	[
		A2(
		author$project$Material$Button$textButton,
		_Utils_update(
			author$project$Material$Button$buttonConfig,
			{additionalAttributes: author$project$Demo$Buttons$heroMargin}),
		'Text'),
		A2(
		author$project$Material$Button$raisedButton,
		_Utils_update(
			author$project$Material$Button$buttonConfig,
			{additionalAttributes: author$project$Demo$Buttons$heroMargin}),
		'Raised'),
		A2(
		author$project$Material$Button$unelevatedButton,
		_Utils_update(
			author$project$Material$Button$buttonConfig,
			{additionalAttributes: author$project$Demo$Buttons$heroMargin}),
		'Unelevated'),
		A2(
		author$project$Material$Button$outlinedButton,
		_Utils_update(
			author$project$Material$Button$buttonConfig,
			{additionalAttributes: author$project$Demo$Buttons$heroMargin}),
		'Outlined')
	]);
var author$project$Demo$Buttons$rowMargin = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'margin', '8px 16px')
	]);
var elm$html$Html$div = _VirtualDom_node('div');
var author$project$Demo$Buttons$buttonsRow = F2(
	function (button, buttonConfig) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					button,
					_Utils_update(
						buttonConfig,
						{
							additionalAttributes: _Utils_ap(buttonConfig.additionalAttributes, author$project$Demo$Buttons$rowMargin)
						}),
					'Default'),
					A2(
					button,
					_Utils_update(
						buttonConfig,
						{
							additionalAttributes: _Utils_ap(buttonConfig.additionalAttributes, author$project$Demo$Buttons$rowMargin),
							dense: true
						}),
					'Dense'),
					A2(
					button,
					_Utils_update(
						buttonConfig,
						{
							additionalAttributes: _Utils_ap(buttonConfig.additionalAttributes, author$project$Demo$Buttons$rowMargin),
							icon: elm$core$Maybe$Just('favorite')
						}),
					'Icon')
				]));
	});
var author$project$Demo$Buttons$outlinedButtons = A2(author$project$Demo$Buttons$buttonsRow, author$project$Material$Button$outlinedButton, author$project$Material$Button$buttonConfig);
var author$project$Demo$Buttons$raisedButtons = A2(author$project$Demo$Buttons$buttonsRow, author$project$Material$Button$raisedButton, author$project$Material$Button$buttonConfig);
var author$project$Demo$Buttons$shapedButtons = A2(
	author$project$Demo$Buttons$buttonsRow,
	author$project$Material$Button$unelevatedButton,
	_Utils_update(
		author$project$Material$Button$buttonConfig,
		{
			additionalAttributes: _List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'border-radius', '18px')
				])
		}));
var author$project$Demo$Buttons$textButtons = A2(author$project$Demo$Buttons$buttonsRow, author$project$Material$Button$textButton, author$project$Material$Button$buttonConfig);
var author$project$Demo$Buttons$unelevatedButtons = A2(author$project$Demo$Buttons$buttonsRow, author$project$Material$Button$unelevatedButton, author$project$Material$Button$buttonConfig);
var author$project$Material$Typography$subtitle1 = elm$html$Html$Attributes$class('mdc-typography--subtitle1');
var elm$html$Html$h3 = _VirtualDom_node('h3');
var author$project$Demo$Buttons$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Text Button')
					])),
				author$project$Demo$Buttons$textButtons,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Raised Button')
					])),
				author$project$Demo$Buttons$raisedButtons,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Unelevated Button')
					])),
				author$project$Demo$Buttons$unelevatedButtons,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Outlined Button')
					])),
				author$project$Demo$Buttons$outlinedButtons,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Shaped Button')
					])),
				author$project$Demo$Buttons$shapedButtons
			]),
		hero: author$project$Demo$Buttons$heroButtons,
		prelude: 'Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/buttons/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-buttons'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-button')
		},
		title: 'Button'
	};
};
var author$project$Material$Card$Block = function (a) {
	return {$: 'Block', a: a};
};
var author$project$Material$Card$cardBlock = author$project$Material$Card$Block;
var author$project$Material$Theme$textSecondaryOnBackground = elm$html$Html$Attributes$class('mdc-theme--text-secondary-on-background');
var author$project$Material$Typography$body2 = elm$html$Html$Attributes$class('mdc-typography--body2');
var author$project$Demo$Cards$demoBody = author$project$Material$Card$cardBlock(
	A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'padding', '0 1rem 0.5rem 1rem'),
				author$project$Material$Typography$body2,
				author$project$Material$Theme$textSecondaryOnBackground
			]),
		_List_fromArray(
			[
				elm$html$Html$text('\n            Visit ten places on our planet that are undergoing the biggest\n            changes today.\n          ')
			])));
var author$project$Material$Card$SixteenToNine = {$: 'SixteenToNine'};
var author$project$Material$Card$aspectCs = function (_n0) {
	var aspect = _n0.aspect;
	if (aspect.$ === 'Just') {
		if (aspect.a.$ === 'Square') {
			var _n2 = aspect.a;
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-card__media--square'));
		} else {
			var _n3 = aspect.a;
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-card__media--16-9'));
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$Card$backgroundImageAttr = function (url) {
	return elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$style, 'background-image', 'url(\"' + (url + '\")')));
};
var author$project$Material$Card$mediaCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-card__media'));
var author$project$Material$Card$cardMedia = F2(
	function (config, backgroundImage) {
		return author$project$Material$Card$Block(
			A2(
				elm$html$Html$div,
				_Utils_ap(
					A2(
						elm$core$List$filterMap,
						elm$core$Basics$identity,
						_List_fromArray(
							[
								author$project$Material$Card$mediaCs,
								author$project$Material$Card$backgroundImageAttr(backgroundImage),
								author$project$Material$Card$aspectCs(config)
							])),
					config.additionalAttributes),
				_List_Nil));
	});
var author$project$Material$Card$cardMediaConfig = {additionalAttributes: _List_Nil, aspect: elm$core$Maybe$Nothing};
var author$project$Demo$Cards$demoMedia = A2(
	author$project$Material$Card$cardMedia,
	_Utils_update(
		author$project$Material$Card$cardMediaConfig,
		{
			aspect: elm$core$Maybe$Just(author$project$Material$Card$SixteenToNine)
		}),
	'images/photos/3x2/2.jpg');
var author$project$Material$Typography$headline6 = elm$html$Html$Attributes$class('mdc-typography--headline6');
var author$project$Material$Typography$subtitle2 = elm$html$Html$Attributes$class('mdc-typography--subtitle2');
var elm$html$Html$h2 = _VirtualDom_node('h2');
var author$project$Demo$Cards$demoTitle = author$project$Material$Card$cardBlock(
	A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'padding', '1rem')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$h2,
				_List_fromArray(
					[
						author$project$Material$Typography$headline6,
						A2(elm$html$Html$Attributes$style, 'margin', '0')
					]),
				_List_fromArray(
					[
						elm$html$Html$text('Our Changing Planet')
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[
						author$project$Material$Typography$subtitle2,
						author$project$Material$Theme$textSecondaryOnBackground,
						A2(elm$html$Html$Attributes$style, 'margin', '0')
					]),
				_List_fromArray(
					[
						elm$html$Html$text('by Kurt Wagner')
					]))
			])));
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var author$project$Material$Card$actionsElt = function (content) {
	var _n0 = content.actions;
	if (_n0.$ === 'Just') {
		var buttons = _n0.a.a.buttons;
		var icons = _n0.a.a.icons;
		var fullBleed = _n0.a.a.fullBleed;
		return _List_fromArray(
			[
				A2(
				elm$html$Html$div,
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							elm$core$Maybe$Just(
							elm$html$Html$Attributes$class('mdc-card__actions')),
							fullBleed ? elm$core$Maybe$Just(
							elm$html$Html$Attributes$class('mdc-card__actions--full-bleed')) : elm$core$Maybe$Nothing
						])),
				elm$core$List$concat(
					_List_fromArray(
						[
							(!elm$core$List$isEmpty(buttons)) ? _List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('mdc-card__action-buttons')
									]),
								A2(
									elm$core$List$map,
									function (_n1) {
										var button = _n1.a;
										return button;
									},
									buttons))
							]) : _List_Nil,
							(!elm$core$List$isEmpty(icons)) ? _List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('mdc-card__action-icons')
									]),
								A2(
									elm$core$List$map,
									function (_n2) {
										var icon = _n2.a;
										return icon;
									},
									icons))
							]) : _List_Nil
						])))
			]);
	} else {
		return _List_Nil;
	}
};
var author$project$Material$Card$blocksElt = function (_n0) {
	var blocks = _n0.blocks;
	return A2(
		elm$core$List$map,
		function (_n1) {
			var html = _n1.a;
			return html;
		},
		blocks);
};
var author$project$Material$Card$outlinedCs = function (_n0) {
	var outlined = _n0.outlined;
	return outlined ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-card--outlined')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Card$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-card'));
var author$project$Material$Card$card = F2(
	function (config, content) {
		return A3(
			elm$html$Html$node,
			'mdc-card',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Card$rootCs,
							author$project$Material$Card$outlinedCs(config)
						])),
				config.additionalAttributes),
			elm$core$List$concat(
				_List_fromArray(
					[
						author$project$Material$Card$blocksElt(content),
						author$project$Material$Card$actionsElt(content)
					])));
	});
var author$project$Material$Card$cardConfig = {additionalAttributes: _List_Nil, outlined: false};
var author$project$Material$Card$primaryActionClickHandler = function (_n0) {
	var onClick = _n0.onClick;
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, onClick);
};
var author$project$Material$Card$primaryActionCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-card__primary-action'));
var author$project$Material$Card$cardPrimaryAction = F2(
	function (config, blocks) {
		return _List_fromArray(
			[
				author$project$Material$Card$Block(
				A2(
					elm$html$Html$div,
					_Utils_ap(
						A2(
							elm$core$List$filterMap,
							elm$core$Basics$identity,
							_List_fromArray(
								[
									author$project$Material$Card$primaryActionCs,
									author$project$Material$Card$primaryActionClickHandler(config)
								])),
						config.additionalAttributes),
					A2(
						elm$core$List$map,
						function (_n0) {
							var html = _n0.a;
							return html;
						},
						blocks)))
			]);
	});
var author$project$Material$Card$cardPrimaryActionConfig = {additionalAttributes: _List_Nil, onClick: elm$core$Maybe$Nothing};
var author$project$Demo$Cards$exampleCard1 = A2(
	author$project$Material$Card$card,
	_Utils_update(
		author$project$Material$Card$cardConfig,
		{
			additionalAttributes: _List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'margin', '48px 0'),
					A2(elm$html$Html$Attributes$style, 'width', '350px')
				])
		}),
	{
		actions: elm$core$Maybe$Nothing,
		blocks: A2(
			author$project$Material$Card$cardPrimaryAction,
			author$project$Material$Card$cardPrimaryActionConfig,
			_List_fromArray(
				[author$project$Demo$Cards$demoMedia, author$project$Demo$Cards$demoTitle, author$project$Demo$Cards$demoBody]))
	});
var author$project$Material$Card$Button = function (a) {
	return {$: 'Button', a: a};
};
var author$project$Material$Card$cardActionButton = F2(
	function (buttonConfig, label) {
		return author$project$Material$Card$Button(
			A2(
				author$project$Material$Button$textButton,
				_Utils_update(
					buttonConfig,
					{
						additionalAttributes: A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$class('mdc-card__action'),
							A2(
								elm$core$List$cons,
								elm$html$Html$Attributes$class('mdc-card__action--button'),
								buttonConfig.additionalAttributes))
					}),
				label));
	});
var author$project$Material$Card$Icon = function (a) {
	return {$: 'Icon', a: a};
};
var author$project$Material$Icon$icon = F2(
	function (config, iconName) {
		return A2(
			elm$html$Html$i,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('material-icons'),
				config.additionalAttributes),
			_List_fromArray(
				[
					elm$html$Html$text(iconName)
				]));
	});
var author$project$Material$Card$cardActionIcon = F2(
	function (iconConfig, iconName) {
		return author$project$Material$Card$Icon(
			A2(
				author$project$Material$Icon$icon,
				_Utils_update(
					iconConfig,
					{
						additionalAttributes: A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$class('mdc-card__action'),
							A2(
								elm$core$List$cons,
								elm$html$Html$Attributes$class('mdc-card__action--icon'),
								iconConfig.additionalAttributes))
					}),
				iconName));
	});
var author$project$Material$Card$Actions = function (a) {
	return {$: 'Actions', a: a};
};
var author$project$Material$Card$cardActions = function (_n0) {
	var buttons = _n0.buttons;
	var icons = _n0.icons;
	return author$project$Material$Card$Actions(
		{buttons: buttons, fullBleed: false, icons: icons});
};
var author$project$Material$Icon$iconConfig = {additionalAttributes: _List_Nil};
var author$project$Demo$Cards$demoActions = author$project$Material$Card$cardActions(
	{
		buttons: _List_fromArray(
			[
				A2(author$project$Material$Card$cardActionButton, author$project$Material$Button$buttonConfig, 'Read'),
				A2(author$project$Material$Card$cardActionButton, author$project$Material$Button$buttonConfig, 'Bookmark')
			]),
		icons: _List_fromArray(
			[
				A2(author$project$Material$Card$cardActionIcon, author$project$Material$Icon$iconConfig, 'favorite_border'),
				A2(author$project$Material$Card$cardActionIcon, author$project$Material$Icon$iconConfig, 'share'),
				A2(author$project$Material$Card$cardActionIcon, author$project$Material$Icon$iconConfig, 'more_vert')
			])
	});
var author$project$Demo$Cards$exampleCard2 = A2(
	author$project$Material$Card$card,
	_Utils_update(
		author$project$Material$Card$cardConfig,
		{
			additionalAttributes: _List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'margin', '48px 0'),
					A2(elm$html$Html$Attributes$style, 'width', '350px')
				])
		}),
	{
		actions: elm$core$Maybe$Just(author$project$Demo$Cards$demoActions),
		blocks: A2(
			author$project$Material$Card$cardPrimaryAction,
			author$project$Material$Card$cardPrimaryActionConfig,
			_List_fromArray(
				[author$project$Demo$Cards$demoTitle, author$project$Demo$Cards$demoBody]))
	});
var author$project$Demo$Cards$exampleCard3 = A2(
	author$project$Material$Card$card,
	_Utils_update(
		author$project$Material$Card$cardConfig,
		{
			additionalAttributes: _List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'margin', '48px 0'),
					A2(elm$html$Html$Attributes$style, 'width', '350px'),
					A2(elm$html$Html$Attributes$style, 'border-radius', '24px 8px')
				])
		}),
	{
		actions: elm$core$Maybe$Just(author$project$Demo$Cards$demoActions),
		blocks: A2(
			author$project$Material$Card$cardPrimaryAction,
			author$project$Material$Card$cardPrimaryActionConfig,
			_List_fromArray(
				[author$project$Demo$Cards$demoTitle, author$project$Demo$Cards$demoBody]))
	});
var author$project$Demo$Cards$heroCard = _List_fromArray(
	[
		A2(
		author$project$Material$Card$card,
		_Utils_update(
			author$project$Material$Card$cardConfig,
			{
				additionalAttributes: _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'width', '350px')
					])
			}),
		{
			actions: elm$core$Maybe$Just(author$project$Demo$Cards$demoActions),
			blocks: A2(
				author$project$Material$Card$cardPrimaryAction,
				author$project$Material$Card$cardPrimaryActionConfig,
				_List_fromArray(
					[author$project$Demo$Cards$demoMedia, author$project$Demo$Cards$demoTitle, author$project$Demo$Cards$demoBody]))
		})
	]);
var author$project$Demo$Cards$view = function (model) {
	return {
		content: _List_fromArray(
			[author$project$Demo$Cards$exampleCard1, author$project$Demo$Cards$exampleCard2, author$project$Demo$Cards$exampleCard3]),
		hero: author$project$Demo$Cards$heroCard,
		prelude: 'Cards contain content and actions about a single subject.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/cards/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-cards'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-card')
		},
		title: 'Card'
	};
};
var author$project$Demo$CatalogPage$catalogDrawerItems = _List_fromArray(
	[
		{label: 'Home', url: author$project$Demo$Url$StartPage},
		{label: 'Button', url: author$project$Demo$Url$Button},
		{label: 'Card', url: author$project$Demo$Url$Card},
		{label: 'Checkbox', url: author$project$Demo$Url$Checkbox},
		{label: 'Chips', url: author$project$Demo$Url$Chips},
		{label: 'Dialog', url: author$project$Demo$Url$Dialog},
		{label: 'Drawer', url: author$project$Demo$Url$Drawer},
		{label: 'Elevation', url: author$project$Demo$Url$Elevation},
		{label: 'FAB', url: author$project$Demo$Url$Fab},
		{label: 'Icon Button', url: author$project$Demo$Url$IconButton},
		{label: 'Image List', url: author$project$Demo$Url$ImageList},
		{label: 'Layout Grid', url: author$project$Demo$Url$LayoutGrid},
		{label: 'Linear Progress Indicator', url: author$project$Demo$Url$LinearProgress},
		{label: 'List', url: author$project$Demo$Url$List},
		{label: 'Menu', url: author$project$Demo$Url$Menu},
		{label: 'Radio Button', url: author$project$Demo$Url$RadioButton},
		{label: 'Ripple', url: author$project$Demo$Url$Ripple},
		{label: 'Select', url: author$project$Demo$Url$Select},
		{label: 'Slider', url: author$project$Demo$Url$Slider},
		{label: 'Snackbar', url: author$project$Demo$Url$Snackbar},
		{label: 'Switch', url: author$project$Demo$Url$Switch},
		{label: 'Tab Bar', url: author$project$Demo$Url$TabBar},
		{label: 'Text Field', url: author$project$Demo$Url$TextField},
		{label: 'Theme', url: author$project$Demo$Url$Theme},
		{label: 'Top App Bar', url: author$project$Demo$Url$TopAppBar},
		{label: 'Typography', url: author$project$Demo$Url$Typography}
	]);
var author$project$Material$Typography$typography = elm$html$Html$Attributes$class('mdc-typography');
var author$project$Demo$CatalogPage$catalogPageContainer = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'position', 'relative'),
		author$project$Material$Typography$typography
	]);
var author$project$Demo$CatalogPage$demoContent = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'height', '100%'),
		A2(elm$html$Html$Attributes$style, '-webkit-box-sizing', 'border-box'),
		A2(elm$html$Html$Attributes$style, 'box-sizing', 'border-box'),
		A2(elm$html$Html$Attributes$style, 'max-width', '100%'),
		A2(elm$html$Html$Attributes$style, 'padding-left', '16px'),
		A2(elm$html$Html$Attributes$style, 'padding-right', '16px'),
		A2(elm$html$Html$Attributes$style, 'padding-bottom', '100px'),
		A2(elm$html$Html$Attributes$style, 'width', '100%'),
		A2(elm$html$Html$Attributes$style, 'overflow', 'auto'),
		A2(elm$html$Html$Attributes$style, 'display', '-ms-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-direction', 'column'),
		A2(elm$html$Html$Attributes$style, 'flex-direction', 'column'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-align', 'center'),
		A2(elm$html$Html$Attributes$style, 'align-items', 'center'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-pack', 'start'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'flex-start')
	]);
var author$project$Demo$CatalogPage$demoContentTransition = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'max-width', '900px'),
		A2(elm$html$Html$Attributes$style, 'width', '100%')
	]);
var author$project$Demo$CatalogPage$demoPanel = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', '-ms-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, 'position', 'relative'),
		A2(elm$html$Html$Attributes$style, 'height', '100vh'),
		A2(elm$html$Html$Attributes$style, 'overflow', 'hidden')
	]);
var author$project$Demo$CatalogPage$demoTitle = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'border-bottom', '1px solid rgba(0,0,0,.87)')
	]);
var author$project$Demo$CatalogPage$hero = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', '-ms-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-flow', 'row nowrap'),
		A2(elm$html$Html$Attributes$style, 'flex-flow', 'row nowrap'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-align', 'center'),
		A2(elm$html$Html$Attributes$style, 'align-items', 'center'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-pack', 'center'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'center'),
		A2(elm$html$Html$Attributes$style, 'min-height', '360px'),
		A2(elm$html$Html$Attributes$style, 'padding', '24px'),
		A2(elm$html$Html$Attributes$style, 'background-color', '#f2f2f2')
	]);
var author$project$Demo$CatalogPage$resourcesGraphic = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'width', '30px'),
		A2(elm$html$Html$Attributes$style, 'height', '30px')
	]);
var author$project$Material$List$avatarListCs = function (_n0) {
	var avatarList = _n0.avatarList;
	return avatarList ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list--avatar-list')) : elm$core$Maybe$Nothing;
};
var author$project$Material$List$denseCs = function (_n0) {
	var dense = _n0.dense;
	return dense ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list--dense')) : elm$core$Maybe$Nothing;
};
var author$project$Material$List$nonInteractiveCs = function (_n0) {
	var nonInteractive = _n0.nonInteractive;
	return nonInteractive ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list--non-interactive')) : elm$core$Maybe$Nothing;
};
var author$project$Material$List$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-list'));
var author$project$Material$List$twoLineCs = function (_n0) {
	var twoLine = _n0.twoLine;
	return twoLine ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list--two-line')) : elm$core$Maybe$Nothing;
};
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$property = elm$virtual_dom$VirtualDom$property;
var author$project$Material$List$wrapFocusProp = function (_n0) {
	var wrapFocus = _n0.wrapFocus;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$property,
			'wrapFocus',
			elm$json$Json$Encode$bool(wrapFocus)));
};
var author$project$Material$List$list = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-list',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$List$rootCs,
							author$project$Material$List$nonInteractiveCs(config),
							author$project$Material$List$denseCs(config),
							author$project$Material$List$avatarListCs(config),
							author$project$Material$List$twoLineCs(config),
							author$project$Material$List$wrapFocusProp(config)
						])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Material$List$listConfig = {additionalAttributes: _List_Nil, avatarList: false, dense: false, nonInteractive: false, twoLine: false, wrapFocus: false};
var author$project$Material$List$activatedCs = function (_n0) {
	var activated = _n0.activated;
	return activated ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list-item--activated')) : elm$core$Maybe$Nothing;
};
var author$project$Material$List$ariaSelectedAttr = function (_n0) {
	var selected = _n0.selected;
	var activated = _n0.activated;
	return (selected || activated) ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'aria-selected', 'true')) : elm$core$Maybe$Nothing;
};
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var author$project$Material$List$clickHandler = function (_n0) {
	var onClick = _n0.onClick;
	return A2(
		elm$core$Maybe$map,
		A2(
			elm$core$Basics$composeL,
			elm$html$Html$Events$on('MDCList:action'),
			elm$json$Json$Decode$succeed),
		onClick);
};
var author$project$Material$List$disabledCs = function (_n0) {
	var disabled = _n0.disabled;
	return disabled ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list-item--disabled')) : elm$core$Maybe$Nothing;
};
var author$project$Material$List$listItemCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-list-item'));
var author$project$Material$List$selectedCs = function (_n0) {
	var selected = _n0.selected;
	return selected ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list-item--selected')) : elm$core$Maybe$Nothing;
};
var author$project$Material$List$listItem = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-list-item',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$List$listItemCs,
							author$project$Material$List$disabledCs(config),
							author$project$Material$List$selectedCs(config),
							author$project$Material$List$activatedCs(config),
							author$project$Material$List$ariaSelectedAttr(config),
							author$project$Material$List$clickHandler(config)
						])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Material$List$listItemConfig = {activated: false, additionalAttributes: _List_Nil, disabled: false, onClick: elm$core$Maybe$Nothing, selected: false};
var author$project$Material$List$listItemGraphic = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-list-item__graphic'),
				additionalAttributes),
			nodes);
	});
var elm$html$Html$img = _VirtualDom_node('img');
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var author$project$Demo$CatalogPage$resourcesList = function (_n0) {
	var materialDesignGuidelines = _n0.materialDesignGuidelines;
	var documentation = _n0.documentation;
	var sourceCode = _n0.sourceCode;
	return A2(
		author$project$Material$List$list,
		author$project$Material$List$listConfig,
		_List_fromArray(
			[
				A2(
				author$project$Material$List$listItem,
				author$project$Material$List$listItemConfig,
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						author$project$Demo$CatalogPage$resourcesGraphic,
						_List_fromArray(
							[
								A2(
								elm$html$Html$img,
								A2(
									elm$core$List$cons,
									elm$html$Html$Attributes$src('images/ic_material_design_24px.svg'),
									author$project$Demo$CatalogPage$resourcesGraphic),
								_List_Nil)
							])),
						elm$html$Html$text('Material Design Guidelines')
					])),
				A2(
				author$project$Material$List$listItem,
				author$project$Material$List$listItemConfig,
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						author$project$Demo$CatalogPage$resourcesGraphic,
						_List_fromArray(
							[
								A2(
								elm$html$Html$img,
								A2(
									elm$core$List$cons,
									elm$html$Html$Attributes$src('images/ic_drive_document_24px.svg'),
									author$project$Demo$CatalogPage$resourcesGraphic),
								_List_Nil)
							])),
						elm$html$Html$text('Documentation')
					])),
				A2(
				author$project$Material$List$listItem,
				author$project$Material$List$listItemConfig,
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						author$project$Demo$CatalogPage$resourcesGraphic,
						_List_fromArray(
							[
								A2(
								elm$html$Html$img,
								A2(
									elm$core$List$cons,
									elm$html$Html$Attributes$src('images/ic_code_24px.svg'),
									author$project$Demo$CatalogPage$resourcesGraphic),
								_List_Nil)
							])),
						elm$html$Html$text('Source Code')
					]))
			]));
};
var author$project$Material$Drawer$appContent = elm$html$Html$Attributes$class('mdc-drawer-app-content');
var author$project$Material$Drawer$dismissibleCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-drawer--dismissible'));
var author$project$Material$Drawer$openAttr = function (_n0) {
	var open = _n0.open;
	return open ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'open', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Drawer$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-drawer'));
var author$project$Material$Drawer$dismissibleDrawer = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-drawer',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Drawer$rootCs,
							author$project$Material$Drawer$dismissibleCs,
							author$project$Material$Drawer$openAttr(config)
						])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Material$Drawer$dismissibleDrawerConfig = {additionalAttributes: _List_Nil, open: false};
var author$project$Material$Drawer$drawerContent = F2(
	function (attributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-drawer__content'),
				attributes),
			nodes);
	});
var author$project$Material$IconButton$clickHandler = function (config) {
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, config.onClick);
};
var author$project$Material$IconButton$materialIconsCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('material-icons'));
var author$project$Material$IconButton$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-icon-button'));
var elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		elm$core$String$fromInt(n));
};
var author$project$Material$IconButton$tabIndexAttr = elm$core$Maybe$Just(
	elm$html$Html$Attributes$tabindex(0));
var author$project$Material$IconButton$iconButton = F2(
	function (config, iconName) {
		return A3(
			elm$html$Html$node,
			'mdc-icon-button',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$IconButton$rootCs,
							author$project$Material$IconButton$materialIconsCs,
							author$project$Material$IconButton$tabIndexAttr,
							author$project$Material$IconButton$clickHandler(config)
						])),
				config.additionalAttributes),
			_List_fromArray(
				[
					elm$html$Html$text(iconName)
				]));
	});
var author$project$Material$IconButton$iconButtonConfig = {additionalAttributes: _List_Nil, disabled: false, label: elm$core$Maybe$Nothing, onClick: elm$core$Maybe$Nothing};
var author$project$Material$TopAppBar$alignStart = elm$html$Html$Attributes$class('mdc-top-app-bar__section--align-start');
var author$project$Material$TopAppBar$fixedAdjust = elm$html$Html$Attributes$class('mdc-top-app-bar--fixed-adjust');
var author$project$Material$TopAppBar$navigationIcon = elm$html$Html$Attributes$class('mdc-top-app-bar__navigation-icon');
var elm$html$Html$section = _VirtualDom_node('section');
var author$project$Material$TopAppBar$row = F2(
	function (attributes, nodes) {
		return A2(
			elm$html$Html$section,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-top-app-bar__row')
					]),
				attributes),
			nodes);
	});
var author$project$Material$TopAppBar$section = F2(
	function (attributes, nodes) {
		return A2(
			elm$html$Html$section,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-top-app-bar__section')
					]),
				attributes),
			nodes);
	});
var author$project$Material$TopAppBar$title = elm$html$Html$Attributes$class('mdc-top-app-bar__title');
var author$project$Material$TopAppBar$Default = {$: 'Default'};
var author$project$Material$TopAppBar$denseCs = function (_n0) {
	var dense = _n0.dense;
	return dense ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-top-app-bar--dense')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TopAppBar$fixedCs = function (_n0) {
	var fixed = _n0.fixed;
	return fixed ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-top-app-bar--fixed')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TopAppBar$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-top-app-bar'));
var author$project$Material$TopAppBar$variantCs = function (variant) {
	switch (variant.$) {
		case 'Default':
			return elm$core$Maybe$Nothing;
		case 'Short':
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-top-app-bar--short'));
		case 'ShortCollapsed':
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-top-app-bar--short mdc-top-app-bar--short-collapsed'));
		default:
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-top-app-bar--prominent'));
	}
};
var author$project$Material$TopAppBar$genericTopAppBar = F3(
	function (variant, config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-top-app-bar',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$TopAppBar$rootCs,
							author$project$Material$TopAppBar$variantCs(variant),
							author$project$Material$TopAppBar$denseCs(config),
							author$project$Material$TopAppBar$fixedCs(config)
						])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Material$TopAppBar$topAppBar = F2(
	function (config, nodes) {
		return A3(author$project$Material$TopAppBar$genericTopAppBar, author$project$Material$TopAppBar$Default, config, nodes);
	});
var author$project$Material$TopAppBar$topAppBarConfig = {additionalAttributes: _List_Nil, dense: false, fixed: false};
var author$project$Material$Typography$body1 = elm$html$Html$Attributes$class('mdc-typography--body1');
var author$project$Material$Typography$headline5 = elm$html$Html$Attributes$class('mdc-typography--headline5');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
var elm$html$Html$p = _VirtualDom_node('p');
var author$project$Demo$CatalogPage$view = F3(
	function (lift, catalogPageConfig, catalogPage) {
		var toggleCatalogDrawer = catalogPageConfig.drawerOpen ? catalogPageConfig.closeDrawer : catalogPageConfig.openDrawer;
		return A2(
			elm$html$Html$div,
			author$project$Demo$CatalogPage$catalogPageContainer,
			_List_fromArray(
				[
					A2(
					author$project$Material$TopAppBar$topAppBar,
					author$project$Material$TopAppBar$topAppBarConfig,
					_List_fromArray(
						[
							A2(
							author$project$Material$TopAppBar$row,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									author$project$Material$TopAppBar$section,
									_List_fromArray(
										[author$project$Material$TopAppBar$alignStart]),
									_List_fromArray(
										[
											A2(
											author$project$Material$IconButton$iconButton,
											_Utils_update(
												author$project$Material$IconButton$iconButtonConfig,
												{
													additionalAttributes: _List_fromArray(
														[author$project$Material$TopAppBar$navigationIcon]),
													onClick: elm$core$Maybe$Just(toggleCatalogDrawer)
												}),
											'menu'),
											A2(
											elm$html$Html$span,
											_List_fromArray(
												[
													author$project$Material$TopAppBar$title,
													A2(elm$html$Html$Attributes$style, 'text-transform', 'uppercase'),
													A2(elm$html$Html$Attributes$style, 'font-weight', '400')
												]),
											_List_fromArray(
												[
													elm$html$Html$text('Material Components for Elm')
												]))
										]))
								]))
						])),
					A2(
					elm$html$Html$div,
					author$project$Demo$CatalogPage$demoPanel,
					_List_fromArray(
						[
							A2(
							author$project$Material$Drawer$dismissibleDrawer,
							_Utils_update(
								author$project$Material$Drawer$dismissibleDrawerConfig,
								{
									additionalAttributes: _List_fromArray(
										[
											author$project$Material$TopAppBar$fixedAdjust,
											A2(elm$html$Html$Attributes$style, 'z-index', '1')
										]),
									open: catalogPageConfig.drawerOpen
								}),
							_List_fromArray(
								[
									A2(
									author$project$Material$Drawer$drawerContent,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											author$project$Material$List$list,
											author$project$Material$List$listConfig,
											A2(
												elm$core$List$map,
												function (_n0) {
													var url = _n0.url;
													var label = _n0.label;
													return A2(
														author$project$Material$List$listItem,
														_Utils_update(
															author$project$Material$List$listItemConfig,
															{
																activated: _Utils_eq(catalogPageConfig.url, url),
																onClick: elm$core$Maybe$Just(
																	catalogPageConfig.navigate(url))
															}),
														_List_fromArray(
															[
																elm$html$Html$text(label)
															]));
												},
												author$project$Demo$CatalogPage$catalogDrawerItems))
										]))
								])),
							A2(
							elm$html$Html$map,
							lift,
							A2(
								elm$html$Html$div,
								A2(
									elm$core$List$cons,
									author$project$Material$TopAppBar$fixedAdjust,
									A2(elm$core$List$cons, author$project$Material$Drawer$appContent, author$project$Demo$CatalogPage$demoContent)),
								_List_fromArray(
									[
										A2(
										elm$html$Html$div,
										author$project$Demo$CatalogPage$demoContentTransition,
										A2(
											elm$core$List$cons,
											A2(
												elm$html$Html$h1,
												_List_fromArray(
													[author$project$Material$Typography$headline5]),
												_List_fromArray(
													[
														elm$html$Html$text(catalogPage.title)
													])),
											A2(
												elm$core$List$cons,
												A2(
													elm$html$Html$p,
													_List_fromArray(
														[author$project$Material$Typography$body1]),
													_List_fromArray(
														[
															elm$html$Html$text(catalogPage.prelude)
														])),
												A2(
													elm$core$List$cons,
													A2(elm$html$Html$div, author$project$Demo$CatalogPage$hero, catalogPage.hero),
													A2(
														elm$core$List$cons,
														A2(
															elm$html$Html$h2,
															A2(elm$core$List$cons, author$project$Material$Typography$headline6, author$project$Demo$CatalogPage$demoTitle),
															_List_fromArray(
																[
																	elm$html$Html$text('Resources')
																])),
														A2(
															elm$core$List$cons,
															author$project$Demo$CatalogPage$resourcesList(catalogPage.resources),
															A2(
																elm$core$List$cons,
																A2(
																	elm$html$Html$h2,
																	A2(elm$core$List$cons, author$project$Material$Typography$headline6, author$project$Demo$CatalogPage$demoTitle),
																	_List_fromArray(
																		[
																			elm$html$Html$text('Demos')
																		])),
																catalogPage.content)))))))
									])))
						]))
				]));
	});
var author$project$Demo$Checkbox$Click = function (a) {
	return {$: 'Click', a: a};
};
var author$project$Material$Checkbox$Indeterminate = {$: 'Indeterminate'};
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$path = elm$svg$Svg$trustedNode('path');
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var author$project$Material$Checkbox$backgroundElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-checkbox__background')
		]),
	_List_fromArray(
		[
			A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('mdc-checkbox__checkmark'),
					elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$class('mdc-checkbox__checkmark-path'),
							elm$svg$Svg$Attributes$fill('none'),
							elm$svg$Svg$Attributes$d('M1.73,12.91 8.1,19.28 22.79,4.59')
						]),
					_List_Nil)
				])),
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-checkbox__mixedmark')
				]),
			_List_Nil)
		]));
var author$project$Material$Checkbox$disabledAttr = function (_n0) {
	var disabled = _n0.disabled;
	return disabled ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'disabled', '')) : elm$core$Maybe$Nothing;
};
var elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var author$project$Material$Checkbox$clickHandler = function (_n0) {
	var onClick = _n0.onClick;
	return A2(
		elm$core$Maybe$map,
		function (msg) {
			return A2(
				elm$html$Html$Events$preventDefaultOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(msg, true)));
		},
		onClick);
};
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var author$project$Material$Checkbox$nativeControlElt = function (config) {
	return A2(
		elm$html$Html$input,
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					elm$core$Maybe$Just(
					elm$html$Html$Attributes$type_('checkbox')),
					elm$core$Maybe$Just(
					elm$html$Html$Attributes$class('mdc-checkbox__native-control')),
					author$project$Material$Checkbox$clickHandler(config)
				])),
		_List_Nil);
};
var author$project$Material$Checkbox$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-checkbox'));
var author$project$Material$Checkbox$stateAttr = function (_n0) {
	var state = _n0.state;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'state',
			function () {
				switch (state.$) {
					case 'Checked':
						return 'checked';
					case 'Unchecked':
						return 'unchecked';
					default:
						return 'indeterminate';
				}
			}()));
};
var author$project$Material$Checkbox$checkbox = function (config) {
	return A3(
		elm$html$Html$node,
		'mdc-checkbox',
		_Utils_ap(
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Checkbox$rootCs,
						author$project$Material$Checkbox$stateAttr(config),
						author$project$Material$Checkbox$disabledAttr(config)
					])),
			config.additionalAttributes),
		_List_fromArray(
			[
				author$project$Material$Checkbox$nativeControlElt(config),
				author$project$Material$Checkbox$backgroundElt
			]));
};
var author$project$Material$Checkbox$checkboxConfig = {additionalAttributes: _List_Nil, disabled: false, onClick: elm$core$Maybe$Nothing, state: author$project$Material$Checkbox$Unchecked};
var author$project$Demo$Checkbox$controlledCheckbox = F3(
	function (index, model, additionalAttributes) {
		var state = A2(
			elm$core$Maybe$withDefault,
			author$project$Material$Checkbox$Indeterminate,
			A2(elm$core$Dict$get, index, model.checkboxes));
		return author$project$Material$Checkbox$checkbox(
			_Utils_update(
				author$project$Material$Checkbox$checkboxConfig,
				{
					additionalAttributes: additionalAttributes,
					onClick: elm$core$Maybe$Just(
						author$project$Demo$Checkbox$Click(index)),
					state: state
				}));
	});
var author$project$Demo$Checkbox$heroMargin = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'margin', '8px 16px')
	]);
var author$project$Demo$Checkbox$heroCheckboxes = function (model) {
	return _List_fromArray(
		[
			A3(author$project$Demo$Checkbox$controlledCheckbox, 'checked-hero-checkbox', model, author$project$Demo$Checkbox$heroMargin),
			A3(author$project$Demo$Checkbox$controlledCheckbox, 'unchecked-hero-checkbox', model, author$project$Demo$Checkbox$heroMargin)
		]);
};
var author$project$Demo$Checkbox$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Unchecked')
					])),
				A3(author$project$Demo$Checkbox$controlledCheckbox, 'unchecked-checkbox', model, _List_Nil),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Indeterminate')
					])),
				A3(author$project$Demo$Checkbox$controlledCheckbox, 'indeterminate-checkbox', model, _List_Nil),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Checked')
					])),
				A3(author$project$Demo$Checkbox$controlledCheckbox, 'checked-checkbox', model, _List_Nil)
			]),
		hero: author$project$Demo$Checkbox$heroCheckboxes(model),
		prelude: 'Checkboxes allow the user to select multiple options from a set.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/input-controls/checkboxes/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-checkboxes'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox')
		},
		title: 'Checkbox'
	};
};
var author$project$Demo$Chips$Action = {$: 'Action'};
var author$project$Demo$Chips$ToggleChip = F2(
	function (a, b) {
		return {$: 'ToggleChip', a: a, b: b};
	});
var author$project$Material$Chips$ChoiceChip = function (a) {
	return {$: 'ChoiceChip', a: a};
};
var author$project$Material$Chips$chipRootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-chip'));
var author$project$Material$Chips$clickHandler = function (config) {
	return A2(
		elm$core$Maybe$map,
		A2(
			elm$core$Basics$composeL,
			elm$html$Html$Events$on('MDCChip:interaction'),
			elm$json$Json$Decode$succeed),
		config.onClick);
};
var author$project$Material$Chips$selectedAttr = function (_n0) {
	var selected = _n0.selected;
	return selected ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'selected', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Chips$textElt = function (label) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-chip__text')
			]),
		_List_fromArray(
			[
				elm$html$Html$text(label)
			]));
};
var author$project$Material$Chips$choiceChip = F2(
	function (config, label) {
		return author$project$Material$Chips$ChoiceChip(
			A3(
				elm$html$Html$node,
				'mdc-chip',
				_Utils_ap(
					A2(
						elm$core$List$filterMap,
						elm$core$Basics$identity,
						_List_fromArray(
							[
								author$project$Material$Chips$chipRootCs,
								author$project$Material$Chips$selectedAttr(config),
								author$project$Material$Chips$clickHandler(config)
							])),
					config.additionalAttributes),
				_List_fromArray(
					[
						author$project$Material$Chips$textElt(label)
					])));
	});
var author$project$Material$Chips$choiceChipConfig = {additionalAttributes: _List_Nil, icon: elm$core$Maybe$Nothing, onClick: elm$core$Maybe$Nothing, selected: false};
var author$project$Material$Chips$chipSetRootCs = elm$html$Html$Attributes$class('mdc-chip-set');
var author$project$Material$Chips$choiceCs = elm$html$Html$Attributes$class('mdc-chip-set--choice');
var author$project$Material$Chips$choiceChipSet = F2(
	function (additionalAttributes, chips) {
		return A3(
			elm$html$Html$node,
			'mdc-chip-set',
			A2(
				elm$core$List$cons,
				author$project$Material$Chips$chipSetRootCs,
				A2(elm$core$List$cons, author$project$Material$Chips$choiceCs, additionalAttributes)),
			A2(
				elm$core$List$map,
				function (_n0) {
					var html = _n0.a;
					return html;
				},
				chips));
	});
var author$project$Demo$Chips$actionChips = function (model) {
	var chip = F2(
		function (index, _n0) {
			var icon = _n0.a;
			var label = _n0.b;
			return A2(
				author$project$Material$Chips$choiceChip,
				_Utils_update(
					author$project$Material$Chips$choiceChipConfig,
					{
						icon: elm$core$Maybe$Just(icon),
						onClick: elm$core$Maybe$Just(
							A2(author$project$Demo$Chips$ToggleChip, author$project$Demo$Chips$Action, index))
					}),
				label);
		});
	return A2(
		author$project$Material$Chips$choiceChipSet,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				chip,
				'chips-action-chips-add-to-calendar',
				_Utils_Tuple2('event', 'Add to calendar')),
				A2(
				chip,
				'chips-action-chips-bookmark',
				_Utils_Tuple2('bookmark', 'Bookmark')),
				A2(
				chip,
				'chips-action-chips-set-alarm',
				_Utils_Tuple2('alarm', 'Set alarm')),
				A2(
				chip,
				'chips-action-chips-get-directions',
				_Utils_Tuple2('directions', 'Get directions'))
			]));
};
var author$project$Demo$Chips$Choice = {$: 'Choice'};
var author$project$Demo$Chips$choiceChips = function (model) {
	var chip = F2(
		function (index, label) {
			return A2(
				author$project$Material$Chips$choiceChip,
				_Utils_update(
					author$project$Material$Chips$choiceChipConfig,
					{
						onClick: elm$core$Maybe$Just(
							A2(author$project$Demo$Chips$ToggleChip, author$project$Demo$Chips$Choice, index)),
						selected: _Utils_eq(
							elm$core$Maybe$Just(index),
							model.choiceChip)
					}),
				label);
		});
	return A2(
		author$project$Material$Chips$choiceChipSet,
		_List_Nil,
		_List_fromArray(
			[
				A2(chip, 'chips-choice-extra-small', 'Extra Small'),
				A2(chip, 'chips-choice-small', 'Small'),
				A2(chip, 'chips-choice-medium', 'Medium'),
				A2(chip, 'chips-choice-large', 'Large'),
				A2(chip, 'chips-choice-extra-large', 'Extra Large')
			]));
};
var author$project$Demo$Chips$Filter = {$: 'Filter'};
var author$project$Material$Chips$FilterChip = function (a) {
	return {$: 'FilterChip', a: a};
};
var elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var author$project$Material$Chips$checkmarkElt = elm$core$Maybe$Just(
	A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-chip__checkmark')
			]),
		_List_fromArray(
			[
				A2(
				elm$svg$Svg$svg,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('mdc-chip__checkmark-svg'),
						elm$svg$Svg$Attributes$viewBox('-2 -3 30 30')
					]),
				_List_fromArray(
					[
						A2(
						elm$svg$Svg$path,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$class('mdc-chip__checkmark-path'),
								elm$svg$Svg$Attributes$fill('none'),
								elm$svg$Svg$Attributes$stroke('black'),
								elm$svg$Svg$Attributes$d('M1.73,12.91 8.1,19.28 22.79,4.59')
							]),
						_List_Nil)
					]))
			])));
var author$project$Material$Chips$filterLeadingIconElt = function (_n0) {
	var icon = _n0.icon;
	var selected = _n0.selected;
	if (icon.$ === 'Just') {
		var iconName = icon.a;
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$i,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('material-icons mdc-chip__icon'),
						selected ? elm$html$Html$Attributes$class('mdc-chip__icon--leading mdc-chip__icon--leading-hidden') : elm$html$Html$Attributes$class('mdc-chip__icon--leading')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(iconName)
					])));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$Chips$filterChip = F2(
	function (config, label) {
		return author$project$Material$Chips$FilterChip(
			A3(
				elm$html$Html$node,
				'mdc-chip',
				_Utils_ap(
					A2(
						elm$core$List$filterMap,
						elm$core$Basics$identity,
						_List_fromArray(
							[
								author$project$Material$Chips$chipRootCs,
								author$project$Material$Chips$selectedAttr(config),
								author$project$Material$Chips$clickHandler(config)
							])),
					config.additionalAttributes),
				_Utils_ap(
					A2(
						elm$core$List$filterMap,
						elm$core$Basics$identity,
						_List_fromArray(
							[
								author$project$Material$Chips$filterLeadingIconElt(config),
								author$project$Material$Chips$checkmarkElt
							])),
					_List_fromArray(
						[
							author$project$Material$Chips$textElt(label)
						]))));
	});
var author$project$Material$Chips$filterChipConfig = {additionalAttributes: _List_Nil, icon: elm$core$Maybe$Nothing, onClick: elm$core$Maybe$Nothing, selected: false};
var author$project$Material$Chips$filterCs = elm$html$Html$Attributes$class('mdc-chip-set--filter');
var author$project$Material$Chips$filterChipSet = F2(
	function (additionalAttributes, chips) {
		return A3(
			elm$html$Html$node,
			'mdc-chip-set',
			A2(
				elm$core$List$cons,
				author$project$Material$Chips$chipSetRootCs,
				A2(elm$core$List$cons, author$project$Material$Chips$filterCs, additionalAttributes)),
			A2(
				elm$core$List$map,
				function (_n0) {
					var html = _n0.a;
					return html;
				},
				chips));
	});
var author$project$Demo$Chips$filterChips1 = function (model) {
	var chip = F2(
		function (index, label) {
			return A2(
				author$project$Material$Chips$filterChip,
				_Utils_update(
					author$project$Material$Chips$filterChipConfig,
					{
						onClick: elm$core$Maybe$Just(
							A2(author$project$Demo$Chips$ToggleChip, author$project$Demo$Chips$Filter, index)),
						selected: A2(elm$core$Set$member, index, model.selectedChips)
					}),
				label);
		});
	return A2(
		author$project$Material$Chips$filterChipSet,
		_List_Nil,
		_List_fromArray(
			[
				A2(chip, 'chips-filter-chips-tops', 'Tops'),
				A2(chip, 'chips-filter-chips-bottoms', 'Bottoms'),
				A2(chip, 'chips-filter-chips-shoes', 'Shoes'),
				A2(chip, 'chips-filter-chips-accessories', 'Accessories')
			]));
};
var author$project$Demo$Chips$filterChips2 = function (model) {
	var chip = F2(
		function (index, label) {
			return A2(
				author$project$Material$Chips$filterChip,
				_Utils_update(
					author$project$Material$Chips$filterChipConfig,
					{
						icon: elm$core$Maybe$Just('face'),
						onClick: elm$core$Maybe$Just(
							A2(author$project$Demo$Chips$ToggleChip, author$project$Demo$Chips$Filter, index)),
						selected: A2(elm$core$Set$member, index, model.selectedChips)
					}),
				label);
		});
	return A2(
		author$project$Material$Chips$filterChipSet,
		_List_Nil,
		_List_fromArray(
			[
				A2(chip, 'chips-filter-chips-alice', 'Alice'),
				A2(chip, 'chips-filter-chips-bob', 'Bob'),
				A2(chip, 'chips-filter-chips-charlie', 'Charlie'),
				A2(chip, 'chips-filter-chips-danielle', 'Danielle')
			]));
};
var author$project$Demo$Chips$heroChips = _List_fromArray(
	[
		A2(
		author$project$Material$Chips$choiceChipSet,
		_List_Nil,
		_List_fromArray(
			[
				A2(author$project$Material$Chips$choiceChip, author$project$Material$Chips$choiceChipConfig, 'Chip One'),
				A2(author$project$Material$Chips$choiceChip, author$project$Material$Chips$choiceChipConfig, 'Chip Two'),
				A2(author$project$Material$Chips$choiceChip, author$project$Material$Chips$choiceChipConfig, 'Chip Three'),
				A2(author$project$Material$Chips$choiceChip, author$project$Material$Chips$choiceChipConfig, 'Chip Four')
			]))
	]);
var author$project$Demo$Chips$shapedChips = function (model) {
	var chip = F2(
		function (index, label) {
			return A2(
				author$project$Material$Chips$choiceChip,
				_Utils_update(
					author$project$Material$Chips$choiceChipConfig,
					{
						additionalAttributes: _List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'border-radius', '4px')
							])
					}),
				label);
		});
	return A2(
		author$project$Material$Chips$choiceChipSet,
		_List_Nil,
		_List_fromArray(
			[
				A2(chip, 'chips-shaped-chips-bookcase', 'Bookcase'),
				A2(chip, 'chips-shaped-chips-tv-stand', 'TV Stand'),
				A2(chip, 'chips-shaped-chips-sofas', 'Sofas'),
				A2(chip, 'chips-shaped-chips-office-chairs', 'Office chairs')
			]));
};
var author$project$Demo$Chips$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h2,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Choice Chips')
					])),
				author$project$Demo$Chips$choiceChips(model),
				A2(
				elm$html$Html$h2,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Filter Chips')
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$body2]),
				_List_fromArray(
					[
						elm$html$Html$text('No leading icon')
					])),
				author$project$Demo$Chips$filterChips1(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$body2]),
				_List_fromArray(
					[
						elm$html$Html$text('With leading icon')
					])),
				author$project$Demo$Chips$filterChips2(model),
				A2(
				elm$html$Html$h2,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Action Chips')
					])),
				author$project$Demo$Chips$actionChips(model),
				A2(
				elm$html$Html$h2,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Shaped Chips')
					])),
				author$project$Demo$Chips$shapedChips(model)
			]),
		hero: author$project$Demo$Chips$heroChips,
		prelude: 'Chips are compact elements that allow users to enter information, select a choice, filter content, or trigger an action.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/chips/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-chips'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips')
		},
		title: 'Chips'
	};
};
var author$project$Material$TopAppBar$actionItem = elm$html$Html$Attributes$class('mdc-top-app-bar__action-item');
var author$project$Material$TopAppBar$alignEnd = elm$html$Html$Attributes$class('mdc-top-app-bar__section--align-end');
var author$project$Material$TopAppBar$denseFixedAdjust = elm$html$Html$Attributes$class('mdc-top-app-bar--dense-fixed-adjust');
var author$project$Demo$DenseTopAppBar$view = function (model) {
	return {
		fixedAdjust: author$project$Material$TopAppBar$denseFixedAdjust,
		topAppBar: A2(
			author$project$Material$TopAppBar$topAppBar,
			_Utils_update(
				author$project$Material$TopAppBar$topAppBarConfig,
				{dense: true}),
			_List_fromArray(
				[
					A2(
					author$project$Material$TopAppBar$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignStart]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$navigationIcon])
										}),
									'menu'),
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[author$project$Material$TopAppBar$title]),
									_List_fromArray(
										[
											elm$html$Html$text('Dense')
										]))
								])),
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignEnd]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'file_download'),
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'print'),
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'bookmark')
								]))
						]))
				]))
	};
};
var author$project$Demo$Dialog$Show = function (a) {
	return {$: 'Show', a: a};
};
var author$project$Demo$Dialog$Close = {$: 'Close'};
var author$project$Material$Dialog$ariaModalAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'aria-modal', 'true'));
var author$project$Material$Dialog$closeHandler = function (_n0) {
	var onClose = _n0.onClose;
	return A2(
		elm$core$Maybe$map,
		A2(
			elm$core$Basics$composeL,
			elm$html$Html$Events$on('MDCDialog:close'),
			elm$json$Json$Decode$succeed),
		onClose);
};
var author$project$Material$Dialog$actionsElt = function (_n0) {
	var actions = _n0.actions;
	return elm$core$List$isEmpty(actions) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
		A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-dialog__actions')
				]),
			actions));
};
var author$project$Material$Dialog$contentElt = function (_n0) {
	var content = _n0.content;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-dialog__content')
				]),
			content));
};
var author$project$Material$Dialog$titleElt = function (_n0) {
	var title = _n0.title;
	if (title.$ === 'Just') {
		var title_ = title.a;
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-dialog__title')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(title_)
					])));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$Dialog$surfaceElt = function (content) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-dialog__surface')
			]),
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					author$project$Material$Dialog$titleElt(content),
					author$project$Material$Dialog$contentElt(content),
					author$project$Material$Dialog$actionsElt(content)
				])));
};
var author$project$Material$Dialog$containerElt = function (content) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-dialog__container')
			]),
		_List_fromArray(
			[
				author$project$Material$Dialog$surfaceElt(content)
			]));
};
var author$project$Material$Dialog$openAttr = function (_n0) {
	var open = _n0.open;
	return open ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'open', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Dialog$roleAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'role', 'alertdialog'));
var author$project$Material$Dialog$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-dialog'));
var author$project$Material$Dialog$scrimElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-dialog__scrim')
		]),
	_List_Nil);
var author$project$Material$Dialog$dialog = F2(
	function (config, content) {
		return A3(
			elm$html$Html$node,
			'mdc-dialog',
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Dialog$rootCs,
						author$project$Material$Dialog$openAttr(config),
						author$project$Material$Dialog$roleAttr,
						author$project$Material$Dialog$ariaModalAttr,
						author$project$Material$Dialog$closeHandler(config)
					])),
			_List_fromArray(
				[
					author$project$Material$Dialog$containerElt(content),
					author$project$Material$Dialog$scrimElt
				]));
	});
var author$project$Material$Dialog$dialogConfig = {additionalAttributes: _List_Nil, onClose: elm$core$Maybe$Nothing, open: false};
var author$project$Demo$Dialog$alertDialog = function (model) {
	return A2(
		author$project$Material$Dialog$dialog,
		_Utils_update(
			author$project$Material$Dialog$dialogConfig,
			{
				onClose: elm$core$Maybe$Just(author$project$Demo$Dialog$Close),
				open: _Utils_eq(
					model.openDialog,
					elm$core$Maybe$Just('dialog-alert-dialog'))
			}),
		{
			actions: _List_fromArray(
				[
					A2(
					author$project$Material$Button$textButton,
					_Utils_update(
						author$project$Material$Button$buttonConfig,
						{
							onClick: elm$core$Maybe$Just(author$project$Demo$Dialog$Close)
						}),
					'Cancel'),
					A2(
					author$project$Material$Button$textButton,
					_Utils_update(
						author$project$Material$Button$buttonConfig,
						{
							onClick: elm$core$Maybe$Just(author$project$Demo$Dialog$Close)
						}),
					'Discard')
				]),
			content: _List_fromArray(
				[
					elm$html$Html$text('Discard draft?')
				]),
			title: elm$core$Maybe$Nothing
		});
};
var author$project$Material$List$listItemText = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-list-item__text'),
				additionalAttributes),
			nodes);
	});
var author$project$Material$Radio$innerCircleElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-radio__inner-circle')
		]),
	_List_Nil);
var author$project$Material$Radio$outerCircleElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-radio__outer-circle')
		]),
	_List_Nil);
var author$project$Material$Radio$backgroundElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-radio__background')
		]),
	_List_fromArray(
		[author$project$Material$Radio$outerCircleElt, author$project$Material$Radio$innerCircleElt]));
var author$project$Material$Radio$checkedAttr = function (_n0) {
	var checked = _n0.checked;
	return checked ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'checked', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Radio$disabledAttr = function (_n0) {
	var disabled = _n0.disabled;
	return disabled ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'disabled', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Radio$clickHandler = function (config) {
	return A2(
		elm$core$Maybe$map,
		function (msg) {
			return A2(
				elm$html$Html$Events$preventDefaultOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(msg, true)));
		},
		config.onClick);
};
var author$project$Material$Radio$nativeControlCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-radio__native-control'));
var author$project$Material$Radio$radioTypeAttr = elm$core$Maybe$Just(
	elm$html$Html$Attributes$type_('radio'));
var author$project$Material$Radio$nativeControlElt = function (config) {
	return A2(
		elm$html$Html$input,
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					author$project$Material$Radio$nativeControlCs,
					author$project$Material$Radio$radioTypeAttr,
					author$project$Material$Radio$clickHandler(config)
				])),
		_List_Nil);
};
var author$project$Material$Radio$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-radio'));
var author$project$Material$Radio$radio = function (config) {
	return A3(
		elm$html$Html$node,
		'mdc-radio',
		_Utils_ap(
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Radio$rootCs,
						author$project$Material$Radio$checkedAttr(config),
						author$project$Material$Radio$disabledAttr(config)
					])),
			config.additionalAttributes),
		_List_fromArray(
			[
				author$project$Material$Radio$nativeControlElt(config),
				author$project$Material$Radio$backgroundElt
			]));
};
var author$project$Material$Radio$radioConfig = {additionalAttributes: _List_Nil, checked: false, disabled: false, onClick: elm$core$Maybe$Nothing};
var author$project$Demo$Dialog$confirmationDialog = function (model) {
	return A2(
		author$project$Material$Dialog$dialog,
		_Utils_update(
			author$project$Material$Dialog$dialogConfig,
			{
				onClose: elm$core$Maybe$Just(author$project$Demo$Dialog$Close),
				open: _Utils_eq(
					model.openDialog,
					elm$core$Maybe$Just('dialog-confirmation-dialog'))
			}),
		{
			actions: _List_fromArray(
				[
					A2(
					author$project$Material$Button$textButton,
					_Utils_update(
						author$project$Material$Button$buttonConfig,
						{
							onClick: elm$core$Maybe$Just(author$project$Demo$Dialog$Close)
						}),
					'Cancel'),
					A2(
					author$project$Material$Button$textButton,
					_Utils_update(
						author$project$Material$Button$buttonConfig,
						{
							onClick: elm$core$Maybe$Just(author$project$Demo$Dialog$Close)
						}),
					'OK')
				]),
			content: _List_fromArray(
				[
					A2(
					author$project$Material$List$list,
					_Utils_update(
						author$project$Material$List$listConfig,
						{avatarList: true}),
					_List_fromArray(
						[
							A2(
							author$project$Material$List$listItem,
							author$project$Material$List$listItemConfig,
							_List_fromArray(
								[
									A2(
									author$project$Material$List$listItemGraphic,
									_List_Nil,
									_List_fromArray(
										[
											author$project$Material$Radio$radio(
											_Utils_update(
												author$project$Material$Radio$radioConfig,
												{checked: true}))
										])),
									A2(
									author$project$Material$List$listItemText,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Never Gonna Give You Up')
										]))
								])),
							A2(
							author$project$Material$List$listItem,
							author$project$Material$List$listItemConfig,
							_List_fromArray(
								[
									A2(
									author$project$Material$List$listItemGraphic,
									_List_Nil,
									_List_fromArray(
										[
											author$project$Material$Radio$radio(author$project$Material$Radio$radioConfig)
										])),
									A2(
									author$project$Material$List$listItemText,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Hot Cross Buns')
										]))
								])),
							A2(
							author$project$Material$List$listItem,
							author$project$Material$List$listItemConfig,
							_List_fromArray(
								[
									A2(
									author$project$Material$List$listItemGraphic,
									_List_Nil,
									_List_fromArray(
										[
											author$project$Material$Radio$radio(author$project$Material$Radio$radioConfig)
										])),
									A2(
									author$project$Material$List$listItemText,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('None')
										]))
								]))
						]))
				]),
			title: elm$core$Maybe$Just('Phone ringtone')
		});
};
var author$project$Demo$Dialog$heroDialog = _List_fromArray(
	[
		A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-dialog mdc-dialog--open'),
				A2(elm$html$Html$Attributes$style, 'position', 'relative')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-dialog__surface')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('mdc-dialog__title')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Get this party started?')
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('mdc-dialog__content')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Turn up the jams and have a good time.')
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('mdc-dialog__actions')
							]),
						_List_fromArray(
							[
								A2(author$project$Material$Button$textButton, author$project$Material$Button$buttonConfig, 'Decline'),
								A2(author$project$Material$Button$textButton, author$project$Material$Button$buttonConfig, 'Accept')
							]))
					]))
			]))
	]);
var author$project$Demo$Dialog$scrollableDialog = function (model) {
	return A2(
		author$project$Material$Dialog$dialog,
		_Utils_update(
			author$project$Material$Dialog$dialogConfig,
			{
				onClose: elm$core$Maybe$Just(author$project$Demo$Dialog$Close),
				open: _Utils_eq(
					model.openDialog,
					elm$core$Maybe$Just('dialog-scrollable-dialog'))
			}),
		{
			actions: _List_fromArray(
				[
					A2(
					author$project$Material$Button$textButton,
					_Utils_update(
						author$project$Material$Button$buttonConfig,
						{
							onClick: elm$core$Maybe$Just(author$project$Demo$Dialog$Close)
						}),
					'Decline'),
					A2(
					author$project$Material$Button$textButton,
					_Utils_update(
						author$project$Material$Button$buttonConfig,
						{
							onClick: elm$core$Maybe$Just(author$project$Demo$Dialog$Close)
						}),
					'Continue')
				]),
			content: _List_fromArray(
				[
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('\n                    Dorothy lived in the midst of the great Kansas prairies,\n                    with Uncle Henry, who was a farmer, and Aunt Em, who was\n                    the farmer\'s wife. Their house was small, for the lumber to\n                    build it had to be carried by wagon many miles. There were\n                    four walls, a floor and a roof, which made one room; and\n                    this room contained a rusty looking cookstove, a cupboard\n                    for the dishes, a table, three or four chairs, and the\n                    beds. Uncle Henry and Aunt Em had a big bed in one corner,\n                    and Dorothy a little bed in another corner. There was no\n                    garret at all, and no cellar--except a small hole dug in\n                    the ground, called a cyclone cellar, where the family could\n                    go in case one of those great whirlwinds arose, mighty\n                    enough to crush any building in its path. It was reached by\n                    a trap door in the middle of the floor, from which a ladder\n                    led down into the small, dark hole.\n                  ')
						])),
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('\n                    When Dorothy stood in the doorway and looked around, she\n                    could see nothing but the great gray prairie on every side.\n                    Not a tree nor a house broke the broad sweep of flat\n                    country that reached to the edge of the sky in all\n                    directions.  The sun had baked the plowed land into a gray\n                    mass, with little cracks running through it. Even the grass\n                    was not green, for the sun had burned the tops of the long\n                    blades until they were the same gray color to be seen\n                    everywhere.  Once the house had been painted, but the sun\n                    blistered the paint and the rains washed it away, and now\n                    the house was as dull and gray as everything else.\n                  ')
						])),
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('\n                    When Aunt Em came there to live she was a young, pretty\n                    wife. The sun and wind had changed her, too. They had taken\n                    the sparkle from her eyes and left them a sober gray; they\n                    had taken the red from her cheeks and lips, and they were\n                    gray also. She was thin and gaunt, and never smiled now.\n                    When Dorothy, who was an orphan, first came to her, Aunt Em\n                    had been so startled by the child\'s laughter that she would\n                    scream and press her hand upon her heart whenever Dorothy\'s\n                    merry voice reached her ears; and she still looked at the\n                    little girl with wonder that she could find anything to\n                    laugh at.\n                  ')
						])),
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('\n                    Uncle Henry never laughed. He worked hard from morning till\n                    night and did not know what joy was. He was gray also, from\n                    his long beard to his rough boots, and he looked stern and\n                    solemn, and rarely spoke.\n                  ')
						])),
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('\n                    It was Toto that made Dorothy laugh, and saved her from\n                    growing as gray as her other surroundings. Toto was not\n                    gray; he was a little black dog, with long silky hair and\n                    small black eyes that twinkled merrily on either side of\n                    his funny, wee nose. Toto played all day long, and Dorothy\n                    played with him, and loved him dearly.\n                  ')
						])),
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('\n                    Today, however, they were not playing. Uncle Henry sat upon\n                    the doorstep and looked anxiously at the sky, which was\n                    even grayer than usual. Dorothy stood in the door with Toto\n                    in her arms, and looked at the sky too. Aunt Em was washing\n                    the dishes.\n                  ')
						])),
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('\n                    From the far north they heard a low wail of the wind, and\n                    Uncle Henry and Dorothy could see where the long grass\n                    bowed in waves before the coming storm.  There now came a\n                    sharp whistling in the air from the south, and as they\n                    turned their eyes that way they saw ripples in the grass\n                    coming from that direction also.\n                  ')
						]))
				]),
			title: elm$core$Maybe$Just('The Wonderful Wizard of Oz')
		});
};
var author$project$Demo$Dialog$simpleDialog = function (model) {
	return A2(
		author$project$Material$Dialog$dialog,
		_Utils_update(
			author$project$Material$Dialog$dialogConfig,
			{
				onClose: elm$core$Maybe$Just(author$project$Demo$Dialog$Close),
				open: _Utils_eq(
					model.openDialog,
					elm$core$Maybe$Just('dialog-simple-dialog'))
			}),
		{
			actions: _List_Nil,
			content: _List_fromArray(
				[
					A2(
					author$project$Material$List$list,
					_Utils_update(
						author$project$Material$List$listConfig,
						{avatarList: true}),
					_List_fromArray(
						[
							A2(
							author$project$Material$List$listItem,
							_Utils_update(
								author$project$Material$List$listItemConfig,
								{
									additionalAttributes: _List_fromArray(
										[
											elm$html$Html$Attributes$tabindex(0),
											elm$html$Html$Events$onClick(author$project$Demo$Dialog$Close)
										])
								}),
							_List_fromArray(
								[
									A2(
									author$project$Material$List$listItemGraphic,
									_List_fromArray(
										[
											A2(elm$html$Html$Attributes$style, 'background-color', 'rgba(0,0,0,.3)'),
											A2(elm$html$Html$Attributes$style, 'color', '#fff')
										]),
									_List_fromArray(
										[
											A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'person')
										])),
									A2(
									author$project$Material$List$listItemText,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('user1@example.com')
										]))
								])),
							A2(
							author$project$Material$List$listItem,
							_Utils_update(
								author$project$Material$List$listItemConfig,
								{
									additionalAttributes: _List_fromArray(
										[
											elm$html$Html$Attributes$tabindex(0),
											elm$html$Html$Events$onClick(author$project$Demo$Dialog$Close)
										])
								}),
							_List_fromArray(
								[
									A2(
									author$project$Material$List$listItemGraphic,
									_List_fromArray(
										[
											A2(elm$html$Html$Attributes$style, 'background-color', 'rgba(0,0,0,.3)'),
											A2(elm$html$Html$Attributes$style, 'color', '#fff')
										]),
									_List_fromArray(
										[
											A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'person')
										])),
									A2(
									author$project$Material$List$listItemText,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('user2@example.com')
										]))
								])),
							A2(
							author$project$Material$List$listItem,
							_Utils_update(
								author$project$Material$List$listItemConfig,
								{
									additionalAttributes: _List_fromArray(
										[
											elm$html$Html$Attributes$tabindex(0),
											elm$html$Html$Events$onClick(author$project$Demo$Dialog$Close)
										])
								}),
							_List_fromArray(
								[
									A2(
									author$project$Material$List$listItemGraphic,
									_List_fromArray(
										[
											A2(elm$html$Html$Attributes$style, 'background-color', 'rgba(0,0,0,.3)'),
											A2(elm$html$Html$Attributes$style, 'color', '#fff')
										]),
									_List_fromArray(
										[
											A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'add')
										])),
									A2(
									author$project$Material$List$listItemText,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Add account')
										]))
								]))
						]))
				]),
			title: elm$core$Maybe$Just('Select an account')
		});
};
var author$project$Demo$Dialog$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				author$project$Material$Button$textButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{
						onClick: elm$core$Maybe$Just(
							author$project$Demo$Dialog$Show('dialog-alert-dialog'))
					}),
				'Alert'),
				elm$html$Html$text(' '),
				A2(
				author$project$Material$Button$textButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{
						onClick: elm$core$Maybe$Just(
							author$project$Demo$Dialog$Show('dialog-simple-dialog'))
					}),
				'Simple'),
				elm$html$Html$text(' '),
				A2(
				author$project$Material$Button$textButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{
						onClick: elm$core$Maybe$Just(
							author$project$Demo$Dialog$Show('dialog-confirmation-dialog'))
					}),
				'Confirmation'),
				elm$html$Html$text(' '),
				A2(
				author$project$Material$Button$textButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{
						onClick: elm$core$Maybe$Just(
							author$project$Demo$Dialog$Show('dialog-scrollable-dialog'))
					}),
				'Scrollable'),
				elm$html$Html$text(' '),
				author$project$Demo$Dialog$alertDialog(model),
				author$project$Demo$Dialog$simpleDialog(model),
				author$project$Demo$Dialog$confirmationDialog(model),
				author$project$Demo$Dialog$scrollableDialog(model)
			]),
		hero: author$project$Demo$Dialog$heroDialog,
		prelude: 'Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/dialogs/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-dialogs'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog')
		},
		title: 'Dialog'
	};
};
var author$project$Demo$DismissibleDrawer$SetSelectedIndex = function (a) {
	return {$: 'SetSelectedIndex', a: a};
};
var author$project$Demo$DismissibleDrawer$ToggleDrawer = {$: 'ToggleDrawer'};
var author$project$Material$Drawer$drawerHeader = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-drawer__header'),
				additionalAttributes),
			nodes);
	});
var author$project$Material$Drawer$drawerSubtitle = elm$html$Html$Attributes$class('mdc-drawer__subtitle');
var author$project$Material$Drawer$drawerTitle = elm$html$Html$Attributes$class('mdc-drawer__title');
var author$project$Material$List$listGroupSubheaderCs = elm$html$Html$Attributes$class('mdc-list-group__subheader');
var author$project$Material$List$listGroupSubheader = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(elm$core$List$cons, author$project$Material$List$listGroupSubheaderCs, additionalAttributes),
			nodes);
	});
var author$project$Material$List$insetCs = function (_n0) {
	var inset = _n0.inset;
	return inset ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list-divider--inset')) : elm$core$Maybe$Nothing;
};
var author$project$Material$List$listDividerCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-list-divider'));
var author$project$Material$List$paddedCs = function (_n0) {
	var padded = _n0.padded;
	return padded ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list-divider--padded')) : elm$core$Maybe$Nothing;
};
var author$project$Material$List$separatorRoleAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'role', 'separator'));
var elm$html$Html$li = _VirtualDom_node('li');
var author$project$Material$List$listItemDivider = function (config) {
	return A2(
		elm$html$Html$li,
		_Utils_ap(
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$List$listDividerCs,
						author$project$Material$List$separatorRoleAttr,
						author$project$Material$List$insetCs(config),
						author$project$Material$List$paddedCs(config)
					])),
			config.additionalAttributes),
		_List_Nil);
};
var author$project$Material$List$listItemDividerConfig = {additionalAttributes: _List_Nil, inset: false, padded: false};
var elm$html$Html$h6 = _VirtualDom_node('h6');
var author$project$Demo$DrawerPage$drawerBody = F2(
	function (setSelectedIndex, selectedIndex) {
		var listItemConfig_ = function (index) {
			return _Utils_update(
				author$project$Material$List$listItemConfig,
				{
					activated: _Utils_eq(selectedIndex, index),
					onClick: elm$core$Maybe$Just(
						setSelectedIndex(index))
				});
		};
		return _List_fromArray(
			[
				A2(
				author$project$Material$Drawer$drawerHeader,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$h3,
						_List_fromArray(
							[author$project$Material$Drawer$drawerTitle]),
						_List_fromArray(
							[
								elm$html$Html$text('Mail')
							])),
						A2(
						elm$html$Html$h6,
						_List_fromArray(
							[author$project$Material$Drawer$drawerSubtitle]),
						_List_fromArray(
							[
								elm$html$Html$text('email@material.io')
							]))
					])),
				A2(
				author$project$Material$Drawer$drawerContent,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						author$project$Material$List$list,
						author$project$Material$List$listConfig,
						_List_fromArray(
							[
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(0),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'inbox')
											])),
										elm$html$Html$text('Inbox')
									])),
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(1),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'star')
											])),
										elm$html$Html$text('Star')
									])),
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(2),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'send')
											])),
										elm$html$Html$text('Sent Mail')
									])),
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(3),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'drafts')
											])),
										elm$html$Html$text('Drafts')
									])),
								author$project$Material$List$listItemDivider(author$project$Material$List$listItemDividerConfig),
								A2(
								author$project$Material$List$listGroupSubheader,
								_List_Nil,
								_List_fromArray(
									[
										elm$html$Html$text('Labels')
									])),
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(4),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'bookmark')
											])),
										elm$html$Html$text('Family')
									])),
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(5),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'bookmark')
											])),
										elm$html$Html$text('Friends')
									])),
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(6),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'bookmark')
											])),
										elm$html$Html$text('Work')
									])),
								author$project$Material$List$listItemDivider(author$project$Material$List$listItemDividerConfig),
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(7),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'settings')
											])),
										elm$html$Html$text('Settings')
									])),
								A2(
								author$project$Material$List$listItem,
								listItemConfig_(8),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'announcement')
											])),
										elm$html$Html$text('Help & feedback')
									]))
							]))
					]))
			]);
	});
var author$project$Demo$DismissibleDrawer$view = function (model) {
	return {
		drawer: A2(
			author$project$Material$Drawer$dismissibleDrawer,
			_Utils_update(
				author$project$Material$Drawer$dismissibleDrawerConfig,
				{open: model.drawerOpen}),
			A2(author$project$Demo$DrawerPage$drawerBody, author$project$Demo$DismissibleDrawer$SetSelectedIndex, model.selectedIndex)),
		onMenuClick: elm$core$Maybe$Just(author$project$Demo$DismissibleDrawer$ToggleDrawer),
		scrim: elm$core$Maybe$Nothing,
		title: 'Dismissible Drawer'
	};
};
var author$project$Material$Drawer$permanentDrawer = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-drawer',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[author$project$Material$Drawer$rootCs])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Material$Drawer$permanentDrawerConfig = {additionalAttributes: _List_Nil};
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var author$project$Demo$Drawer$heroDrawer = _List_fromArray(
	[
		A2(
		author$project$Material$Drawer$permanentDrawer,
		author$project$Material$Drawer$permanentDrawerConfig,
		_List_fromArray(
			[
				A2(
				author$project$Material$Drawer$drawerHeader,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$h3,
						_List_fromArray(
							[author$project$Material$Drawer$drawerTitle]),
						_List_fromArray(
							[
								elm$html$Html$text('Title')
							])),
						A2(
						elm$html$Html$h6,
						_List_fromArray(
							[author$project$Material$Drawer$drawerSubtitle]),
						_List_fromArray(
							[
								elm$html$Html$text('Subtitle')
							]))
					])),
				A2(
				author$project$Material$Drawer$drawerContent,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						author$project$Material$List$list,
						author$project$Material$List$listConfig,
						_List_fromArray(
							[
								A2(
								author$project$Material$List$listItem,
								_Utils_update(
									author$project$Material$List$listItemConfig,
									{
										activated: true,
										additionalAttributes: _List_fromArray(
											[
												elm$html$Html$Attributes$href('#drawer')
											])
									}),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'inbox')
											])),
										elm$html$Html$text('Inbox')
									])),
								A2(
								author$project$Material$List$listItem,
								_Utils_update(
									author$project$Material$List$listItemConfig,
									{
										additionalAttributes: _List_fromArray(
											[
												elm$html$Html$Attributes$href('#drawer')
											])
									}),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'star')
											])),
										elm$html$Html$text('Star')
									])),
								A2(
								author$project$Material$List$listItem,
								_Utils_update(
									author$project$Material$List$listItemConfig,
									{
										additionalAttributes: _List_fromArray(
											[
												elm$html$Html$Attributes$href('#drawer')
											])
									}),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'send')
											])),
										elm$html$Html$text('Sent Mail')
									])),
								A2(
								author$project$Material$List$listItem,
								_Utils_update(
									author$project$Material$List$listItemConfig,
									{
										additionalAttributes: _List_fromArray(
											[
												elm$html$Html$Attributes$href('#drawer')
											])
									}),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItemGraphic,
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'drafts')
											])),
										elm$html$Html$text('Drafts')
									]))
							]))
					]))
			]))
	]);
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$iframe = _VirtualDom_node('iframe');
var elm$html$Html$Attributes$target = elm$html$Html$Attributes$stringProperty('target');
var author$project$Demo$Drawer$iframe = F2(
	function (label, url) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'display', 'inline-block'),
					A2(elm$html$Html$Attributes$style, '-ms-flex', '1 1 80%'),
					A2(elm$html$Html$Attributes$style, 'flex', '1 1 80%'),
					A2(elm$html$Html$Attributes$style, '-ms-flex-pack', 'distribute'),
					A2(elm$html$Html$Attributes$style, 'justify-content', 'space-around'),
					A2(elm$html$Html$Attributes$style, 'min-height', '400px'),
					A2(elm$html$Html$Attributes$style, 'min-width', '400px'),
					A2(elm$html$Html$Attributes$style, 'padding', '15px')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$href(url),
									elm$html$Html$Attributes$target('_blank')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$h3,
									_List_fromArray(
										[author$project$Material$Typography$subtitle1]),
									_List_fromArray(
										[
											elm$html$Html$text(label)
										]))
								]))
						])),
					A2(
					elm$html$Html$iframe,
					_List_fromArray(
						[
							elm$html$Html$Attributes$src(url),
							A2(elm$html$Html$Attributes$style, 'height', '400px'),
							A2(elm$html$Html$Attributes$style, 'width', '100vw'),
							A2(elm$html$Html$Attributes$style, 'max-width', '780px')
						]),
					_List_Nil)
				]));
	});
var author$project$Demo$Drawer$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(author$project$Demo$Drawer$iframe, 'Permanent', '#permanent-drawer'),
				A2(author$project$Demo$Drawer$iframe, 'Dismissible', '#dismissible-drawer'),
				A2(author$project$Demo$Drawer$iframe, 'Modal', '#modal-drawer')
			]),
		hero: author$project$Demo$Drawer$heroDrawer,
		prelude: 'The navigation drawer slides in from the left and contains the navigation destinations for your app.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/drawers/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-navigation-drawer'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer')
		},
		title: 'Drawer'
	};
};
var author$project$Demo$DrawerPage$drawerFrameRoot = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', '-ms-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, 'height', '100vh')
	]);
var author$project$Demo$DrawerPage$loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var author$project$Demo$DrawerPage$mainContent = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'padding-left', '18px'),
			A2(elm$html$Html$Attributes$style, 'padding-right', '18px'),
			A2(elm$html$Html$Attributes$style, 'overflow', 'auto'),
			A2(elm$html$Html$Attributes$style, 'height', '100%'),
			A2(elm$html$Html$Attributes$style, 'box-sizing', 'border-box'),
			author$project$Material$TopAppBar$fixedAdjust,
			author$project$Material$Drawer$appContent
		]),
	A2(
		elm$core$List$repeat,
		4,
		A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(author$project$Demo$DrawerPage$loremIpsum)
				]))));
var author$project$Demo$DrawerPage$view = F2(
	function (lift, _n0) {
		var title = _n0.title;
		var drawer = _n0.drawer;
		var scrim = _n0.scrim;
		var onMenuClick = _n0.onMenuClick;
		return A2(
			elm$html$Html$map,
			lift,
			A2(
				elm$html$Html$div,
				author$project$Demo$DrawerPage$drawerFrameRoot,
				_List_fromArray(
					[
						drawer,
						A2(
						elm$core$Maybe$withDefault,
						elm$html$Html$text(''),
						scrim),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[author$project$Material$Drawer$appContent]),
						_List_fromArray(
							[
								A2(
								author$project$Material$TopAppBar$topAppBar,
								author$project$Material$TopAppBar$topAppBarConfig,
								_List_fromArray(
									[
										A2(
										author$project$Material$TopAppBar$row,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												author$project$Material$TopAppBar$section,
												_List_fromArray(
													[author$project$Material$TopAppBar$alignStart]),
												_List_fromArray(
													[
														function () {
														if (onMenuClick.$ === 'Just') {
															var handleClick = onMenuClick.a;
															return A2(
																author$project$Material$Icon$icon,
																_Utils_update(
																	author$project$Material$Icon$iconConfig,
																	{
																		additionalAttributes: _List_fromArray(
																			[
																				author$project$Material$TopAppBar$navigationIcon,
																				elm$html$Html$Events$onClick(handleClick)
																			])
																	}),
																'menu');
														} else {
															return elm$html$Html$text('');
														}
													}(),
														A2(
														elm$html$Html$span,
														_List_fromArray(
															[author$project$Material$TopAppBar$title]),
														_List_fromArray(
															[
																elm$html$Html$text(title)
															]))
													]))
											]))
									])),
								author$project$Demo$DrawerPage$mainContent
							]))
					])));
	});
var author$project$Demo$Elevation$demoContainer = _List_fromArray(
	[
		elm$html$Html$Attributes$class('elevation-demo-container'),
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, 'flex-flow', 'row wrap'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'space-between')
	]);
var author$project$Demo$Elevation$demoSurface = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', '-ms-inline-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'inline-flex'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-pack', 'distribute'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'space-around'),
		A2(elm$html$Html$Attributes$style, 'min-height', '100px'),
		A2(elm$html$Html$Attributes$style, 'min-width', '200px'),
		A2(elm$html$Html$Attributes$style, 'margin', '15px'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-align', 'center'),
		A2(elm$html$Html$Attributes$style, 'align-items', 'center')
	]);
var author$project$Demo$Elevation$heroSurface = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', '-ms-inline-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'inline-flex'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-pack', 'distribute'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'space-around'),
		A2(elm$html$Html$Attributes$style, 'min-height', '100px'),
		A2(elm$html$Html$Attributes$style, 'min-width', '200px'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-align', 'center'),
		A2(elm$html$Html$Attributes$style, 'align-items', 'center'),
		A2(elm$html$Html$Attributes$style, 'width', '120px'),
		A2(elm$html$Html$Attributes$style, 'height', '48px'),
		A2(elm$html$Html$Attributes$style, 'margin', '24px'),
		A2(elm$html$Html$Attributes$style, 'background-color', '#212121'),
		A2(elm$html$Html$Attributes$style, 'color', '#f0f0f0')
	]);
var author$project$Material$Elevation$z = function (n) {
	return elm$html$Html$Attributes$class(
		'mdc-elevation--z' + elm$core$String$fromInt(n));
};
var author$project$Material$Elevation$z0 = author$project$Material$Elevation$z(0);
var author$project$Material$Elevation$z16 = author$project$Material$Elevation$z(16);
var author$project$Material$Elevation$z8 = author$project$Material$Elevation$z(8);
var author$project$Demo$Elevation$heroElevation = _List_fromArray(
	[
		A2(
		elm$html$Html$div,
		A2(elm$core$List$cons, author$project$Material$Elevation$z0, author$project$Demo$Elevation$heroSurface),
		_List_fromArray(
			[
				elm$html$Html$text('Flat 0dp')
			])),
		A2(
		elm$html$Html$div,
		A2(elm$core$List$cons, author$project$Material$Elevation$z8, author$project$Demo$Elevation$heroSurface),
		_List_fromArray(
			[
				elm$html$Html$text('Raised 8dp')
			])),
		A2(
		elm$html$Html$div,
		A2(elm$core$List$cons, author$project$Material$Elevation$z16, author$project$Demo$Elevation$heroSurface),
		_List_fromArray(
			[
				elm$html$Html$text('Raised 16dp')
			]))
	]);
var author$project$Material$Elevation$z1 = author$project$Material$Elevation$z(1);
var author$project$Material$Elevation$z10 = author$project$Material$Elevation$z(10);
var author$project$Material$Elevation$z11 = author$project$Material$Elevation$z(11);
var author$project$Material$Elevation$z12 = author$project$Material$Elevation$z(12);
var author$project$Material$Elevation$z13 = author$project$Material$Elevation$z(13);
var author$project$Material$Elevation$z14 = author$project$Material$Elevation$z(14);
var author$project$Material$Elevation$z15 = author$project$Material$Elevation$z(15);
var author$project$Material$Elevation$z17 = author$project$Material$Elevation$z(17);
var author$project$Material$Elevation$z18 = author$project$Material$Elevation$z(18);
var author$project$Material$Elevation$z19 = author$project$Material$Elevation$z(19);
var author$project$Material$Elevation$z2 = author$project$Material$Elevation$z(2);
var author$project$Material$Elevation$z20 = author$project$Material$Elevation$z(20);
var author$project$Material$Elevation$z21 = author$project$Material$Elevation$z(21);
var author$project$Material$Elevation$z22 = author$project$Material$Elevation$z(22);
var author$project$Material$Elevation$z23 = author$project$Material$Elevation$z(23);
var author$project$Material$Elevation$z24 = author$project$Material$Elevation$z(24);
var author$project$Material$Elevation$z3 = author$project$Material$Elevation$z(3);
var author$project$Material$Elevation$z4 = author$project$Material$Elevation$z(4);
var author$project$Material$Elevation$z5 = author$project$Material$Elevation$z(5);
var author$project$Material$Elevation$z6 = author$project$Material$Elevation$z(6);
var author$project$Material$Elevation$z7 = author$project$Material$Elevation$z(7);
var author$project$Material$Elevation$z9 = author$project$Material$Elevation$z(9);
var author$project$Demo$Elevation$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$Elevation$demoContainer,
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z0, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('0dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z1, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('1dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z2, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('2dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z3, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('3dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z4, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('4dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z5, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('5dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z6, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('6dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z7, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('7dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z8, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('8dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z9, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('9dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z10, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('10dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z11, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('11dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z12, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('12dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z13, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('13dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z14, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('14dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z15, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('15dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z16, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('16dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z17, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('17dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z18, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('18dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z19, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('19dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z20, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('20dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z21, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('21dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z22, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('22dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z23, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('23dp')
							])),
						A2(
						elm$html$Html$div,
						A2(elm$core$List$cons, author$project$Material$Elevation$z24, author$project$Demo$Elevation$demoSurface),
						_List_fromArray(
							[
								elm$html$Html$text('24dp')
							]))
					]))
			]),
		hero: author$project$Demo$Elevation$heroElevation,
		prelude: 'Elevation is the relative depth, or distance, between two surfaces along the z-axis.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/elevation/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-elevation'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation')
		},
		title: 'Elevation'
	};
};
var author$project$Material$Fab$clickHandler = function (_n0) {
	var onClick = _n0.onClick;
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, onClick);
};
var author$project$Material$Fab$exitedCs = function (_n0) {
	var exited = _n0.exited;
	return exited ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-fab--exited')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Fab$extendedFabCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-fab mdc-fab--extended'));
var author$project$Material$Fab$labelElt = function (label) {
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-fab__label')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				])));
};
var author$project$Material$Fab$leadingIconElt = function (_n0) {
	var icon = _n0.icon;
	var trailingIcon = _n0.trailingIcon;
	var _n1 = _Utils_Tuple2(icon, trailingIcon);
	if ((_n1.a.$ === 'Just') && (!_n1.b)) {
		var iconName = _n1.a.a;
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('material-icons'),
						elm$html$Html$Attributes$class('mdc-fab__icon')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(iconName)
					])));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$Fab$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-fab'));
var author$project$Material$Fab$trailingIconElt = function (_n0) {
	var icon = _n0.icon;
	var trailingIcon = _n0.trailingIcon;
	var _n1 = _Utils_Tuple2(icon, trailingIcon);
	if ((_n1.a.$ === 'Just') && _n1.b) {
		var iconName = _n1.a.a;
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('material-icons'),
						elm$html$Html$Attributes$class('mdc-fab__icon')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(iconName)
					])));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$Fab$extendedFab = F2(
	function (config, label) {
		return A3(
			elm$html$Html$node,
			'mdc-fab',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Fab$rootCs,
							author$project$Material$Fab$extendedFabCs,
							author$project$Material$Fab$exitedCs(config),
							author$project$Material$Fab$clickHandler(config)
						])),
				config.additionalAttributes),
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Fab$leadingIconElt(config),
						author$project$Material$Fab$labelElt(label),
						author$project$Material$Fab$trailingIconElt(config)
					])));
	});
var author$project$Material$Fab$extendedFabConfig = {additionalAttributes: _List_Nil, exited: false, icon: elm$core$Maybe$Nothing, onClick: elm$core$Maybe$Nothing, trailingIcon: false};
var author$project$Material$Fab$iconElt = function (iconName) {
	return A2(
		elm$html$Html$span,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('material-icons'),
				elm$html$Html$Attributes$class('mdc-fab__icon')
			]),
		_List_fromArray(
			[
				elm$html$Html$text(iconName)
			]));
};
var author$project$Material$Fab$miniCs = function (_n0) {
	var mini = _n0.mini;
	return mini ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-fab--mini')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Fab$fab = F2(
	function (config, iconName) {
		return A3(
			elm$html$Html$node,
			'mdc-fab',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Fab$rootCs,
							author$project$Material$Fab$miniCs(config),
							author$project$Material$Fab$exitedCs(config),
							author$project$Material$Fab$clickHandler(config)
						])),
				config.additionalAttributes),
			_List_fromArray(
				[
					author$project$Material$Fab$iconElt(iconName)
				]));
	});
var author$project$Material$Fab$fabConfig = {additionalAttributes: _List_Nil, exited: false, mini: false, onClick: elm$core$Maybe$Nothing};
var author$project$Demo$Fabs$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Standard Floating Action Button')
					])),
				A2(author$project$Material$Fab$fab, author$project$Material$Fab$fabConfig, 'favorite_border'),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Mini Floating Action Button')
					])),
				A2(
				author$project$Material$Fab$fab,
				_Utils_update(
					author$project$Material$Fab$fabConfig,
					{mini: true}),
				'favorite_border'),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Extended FAB')
					])),
				A2(
				author$project$Material$Fab$extendedFab,
				_Utils_update(
					author$project$Material$Fab$extendedFabConfig,
					{
						icon: elm$core$Maybe$Just('add')
					}),
				'Create'),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Extended FAB (Text label followed by icon)')
					])),
				A2(
				author$project$Material$Fab$extendedFab,
				_Utils_update(
					author$project$Material$Fab$extendedFabConfig,
					{
						icon: elm$core$Maybe$Just('add'),
						trailingIcon: true
					}),
				'Create'),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Extended FAB (without icon)')
					])),
				A2(author$project$Material$Fab$extendedFab, author$project$Material$Fab$extendedFabConfig, 'Create'),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('FAB (Shaped)')
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'display', 'flex')
					]),
				_List_fromArray(
					[
						A2(
						author$project$Material$Fab$fab,
						_Utils_update(
							author$project$Material$Fab$fabConfig,
							{
								additionalAttributes: _List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'border-radius', '50% 0'),
										A2(elm$html$Html$Attributes$style, 'margin-right', '24px')
									])
							}),
						'favorite_border'),
						A2(
						author$project$Material$Fab$fab,
						_Utils_update(
							author$project$Material$Fab$fabConfig,
							{
								additionalAttributes: _List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'border-radius', '8px'),
										A2(elm$html$Html$Attributes$style, 'margin-right', '24px')
									]),
								mini: true
							}),
						'favorite_border'),
						A2(
						author$project$Material$Fab$extendedFab,
						_Utils_update(
							author$project$Material$Fab$extendedFabConfig,
							{
								icon: elm$core$Maybe$Just('add')
							}),
						'Create')
					]))
			]),
		hero: _List_fromArray(
			[
				A2(author$project$Material$Fab$fab, author$project$Material$Fab$fabConfig, 'favorite_border')
			]),
		prelude: 'Floating action buttons represents the primary action in an application. Only one floating action button is recommended per screen to represent the most common action.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/buttons/floating-action-buttons/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-fab'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/blob/master/packages/mdc-fab/')
		},
		title: 'Floating Action Button'
	};
};
var author$project$Demo$FixedTopAppBar$view = function (model) {
	return {
		fixedAdjust: author$project$Material$TopAppBar$fixedAdjust,
		topAppBar: A2(
			author$project$Material$TopAppBar$topAppBar,
			_Utils_update(
				author$project$Material$TopAppBar$topAppBarConfig,
				{fixed: true}),
			_List_fromArray(
				[
					A2(
					author$project$Material$TopAppBar$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignStart]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$navigationIcon])
										}),
									'menu'),
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[author$project$Material$TopAppBar$title]),
									_List_fromArray(
										[
											elm$html$Html$text('Fixed')
										]))
								])),
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignEnd]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'file_download'),
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'print'),
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'bookmark')
								]))
						]))
				]))
	};
};
var author$project$Demo$IconButton$Toggle = function (a) {
	return {$: 'Toggle', a: a};
};
var author$project$Demo$IconButton$isOn = F2(
	function (index, model) {
		return A2(
			elm$core$Maybe$withDefault,
			false,
			A2(elm$core$Dict$get, index, model.iconButtons));
	});
var author$project$Material$IconToggle$ariaHiddenAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'aria-hidden', 'true'));
var author$project$Material$IconToggle$ariaLabelAttr = function (_n0) {
	var label = _n0.label;
	return A2(
		elm$core$Maybe$map,
		elm$html$Html$Attributes$attribute('aria-label'),
		label);
};
var author$project$Material$IconToggle$ariaPressedAttr = function (_n0) {
	var on = _n0.on;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'aria-pressed',
			on ? 'true' : 'false'));
};
var author$project$Material$IconToggle$clickHandler = function (config) {
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, config.onClick);
};
var author$project$Material$IconToggle$disabledAttr = function (_n0) {
	var disabled = _n0.disabled;
	return elm$core$Maybe$Just(
		elm$html$Html$Attributes$disabled(disabled));
};
var author$project$Material$IconToggle$iconCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-icon-button__icon'));
var author$project$Material$IconToggle$materialIconsCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('material-icons'));
var author$project$Material$IconToggle$onAttr = function (_n0) {
	var on = _n0.on;
	return on ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'data-on', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$IconToggle$onIconCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-icon-button__icon mdc-icon-button__icon--on'));
var author$project$Material$IconToggle$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-icon-button'));
var author$project$Material$IconToggle$tabIndexAttr = elm$core$Maybe$Just(
	elm$html$Html$Attributes$tabindex(0));
var author$project$Material$IconToggle$iconToggle = F2(
	function (config, _n0) {
		var onIcon = _n0.onIcon;
		var offIcon = _n0.offIcon;
		return A3(
			elm$html$Html$node,
			'mdc-icon-button',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$IconToggle$rootCs,
							author$project$Material$IconToggle$onAttr(config),
							author$project$Material$IconToggle$ariaHiddenAttr,
							author$project$Material$IconToggle$ariaPressedAttr(config),
							author$project$Material$IconToggle$ariaLabelAttr(config),
							author$project$Material$IconToggle$tabIndexAttr,
							author$project$Material$IconToggle$clickHandler(config),
							author$project$Material$IconToggle$disabledAttr(config)
						])),
				config.additionalAttributes),
			_List_fromArray(
				[
					A2(
					elm$html$Html$i,
					A2(
						elm$core$List$filterMap,
						elm$core$Basics$identity,
						_List_fromArray(
							[author$project$Material$IconToggle$materialIconsCs, author$project$Material$IconToggle$onIconCs])),
					_List_fromArray(
						[
							elm$html$Html$text(onIcon)
						])),
					A2(
					elm$html$Html$i,
					A2(
						elm$core$List$filterMap,
						elm$core$Basics$identity,
						_List_fromArray(
							[author$project$Material$IconToggle$materialIconsCs, author$project$Material$IconToggle$iconCs])),
					_List_fromArray(
						[
							elm$html$Html$text(offIcon)
						]))
				]));
	});
var author$project$Material$IconToggle$iconToggleConfig = {additionalAttributes: _List_Nil, disabled: false, label: elm$core$Maybe$Nothing, on: false, onClick: elm$core$Maybe$Nothing};
var author$project$Demo$IconButton$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Icon Button')
					])),
				A2(
				author$project$Material$IconButton$iconButton,
				_Utils_update(
					author$project$Material$IconButton$iconButtonConfig,
					{
						onClick: elm$core$Maybe$Just(
							author$project$Demo$IconButton$Toggle('icon-button'))
					}),
				'wifi'),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Icon Button')
					])),
				A2(
				author$project$Material$IconToggle$iconToggle,
				_Utils_update(
					author$project$Material$IconToggle$iconToggleConfig,
					{
						on: A2(author$project$Demo$IconButton$isOn, 'icon-button-toggle', model),
						onClick: elm$core$Maybe$Just(
							author$project$Demo$IconButton$Toggle('icon-button-toggle'))
					}),
				{offIcon: 'favorite_border', onIcon: 'favorite'})
			]),
		hero: _List_fromArray(
			[
				A2(
				author$project$Material$IconToggle$iconToggle,
				_Utils_update(
					author$project$Material$IconToggle$iconToggleConfig,
					{
						on: A2(author$project$Demo$IconButton$isOn, 'icon-button-hero', model),
						onClick: elm$core$Maybe$Just(
							author$project$Demo$IconButton$Toggle('icon-button-hero'))
					}),
				{offIcon: 'favorite_border', onIcon: 'favorite'})
			]),
		prelude: 'Icons are appropriate for buttons that allow a user to take actions or make a selection, such as adding or removing a star to an item.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/buttons/icon-buttons/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/design/components/buttons.html#toggle-button'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button')
		},
		title: 'Icon Button'
	};
};
var author$project$Material$ImageList$ImageListItem = function (a) {
	return {$: 'ImageListItem', a: a};
};
var author$project$Material$ImageList$imageListItem = F2(
	function (config, image) {
		return author$project$Material$ImageList$ImageListItem(
			{config: config, image: image});
	});
var author$project$Material$ImageList$imageListItemConfig = {additionalAttributes: _List_Nil, href: elm$core$Maybe$Nothing, label: elm$core$Maybe$Nothing};
var author$project$Demo$ImageList$imageListHeroItem = A2(
	author$project$Material$ImageList$imageListItem,
	_Utils_update(
		author$project$Material$ImageList$imageListItemConfig,
		{
			additionalAttributes: _List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'width', 'calc(100% / 5 - 4.2px)'),
					A2(elm$html$Html$Attributes$style, 'margin', '2px')
				]),
			label: elm$core$Maybe$Nothing
		}),
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABNJREFUCB1jZGBg+A/EDEwgAgQADigBA//q6GsAAAAASUVORK5CYII%3D');
var author$project$Demo$ImageList$masonryImages = _List_fromArray(
	['images/photos/3x2/16.jpg', 'images/photos/2x3/1.jpg', 'images/photos/3x2/1.jpg', 'images/photos/2x3/2.jpg', 'images/photos/2x3/3.jpg', 'images/photos/3x2/2.jpg', 'images/photos/2x3/4.jpg', 'images/photos/3x2/3.jpg', 'images/photos/2x3/5.jpg', 'images/photos/3x2/4.jpg', 'images/photos/2x3/6.jpg', 'images/photos/3x2/5.jpg', 'images/photos/2x3/7.jpg', 'images/photos/3x2/6.jpg', 'images/photos/3x2/7.jpg']);
var author$project$Demo$ImageList$masonryItem = function (url) {
	return A2(
		author$project$Material$ImageList$imageListItem,
		_Utils_update(
			author$project$Material$ImageList$imageListItemConfig,
			{
				additionalAttributes: _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin-bottom', '16px')
					]),
				label: elm$core$Maybe$Just('Text label')
			}),
		url);
};
var author$project$Material$ImageList$imageElt = F2(
	function (_n0, _n1) {
		var masonry = _n0.masonry;
		var image = _n1.a.image;
		return masonry ? A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-image-list__image'),
					elm$html$Html$Attributes$src(image)
				]),
			_List_Nil) : A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-image-list__image'),
					A2(elm$html$Html$Attributes$style, 'background-image', 'url(\'' + (image + '\')'))
				]),
			_List_Nil);
	});
var author$project$Material$ImageList$imageAspectContainerElt = F2(
	function (config, listItem) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-image-list__image-aspect-container')
				]),
			_List_fromArray(
				[
					A2(author$project$Material$ImageList$imageElt, config, listItem)
				]));
	});
var author$project$Material$ImageList$supportingElt = function (_n0) {
	var config = _n0.a.config;
	var _n1 = config.label;
	if (_n1.$ === 'Just') {
		var string = _n1.a;
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-image-list__supporting')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('mdc-image-list__label')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(string)
						]))
				]));
	} else {
		return elm$html$Html$text('');
	}
};
var author$project$Material$ImageList$listItemElt = F2(
	function (config_, listItem) {
		var masonry = config_.masonry;
		var config = listItem.a.config;
		var inner = _List_fromArray(
			[
				masonry ? A2(author$project$Material$ImageList$imageElt, config_, listItem) : A2(author$project$Material$ImageList$imageAspectContainerElt, config_, listItem),
				author$project$Material$ImageList$supportingElt(listItem)
			]);
		return A2(
			elm$html$Html$li,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-image-list__item'),
				config.additionalAttributes),
			A2(
				elm$core$Maybe$withDefault,
				inner,
				A2(
					elm$core$Maybe$map,
					function (href) {
						return _List_fromArray(
							[
								A2(
								elm$html$Html$a,
								_List_fromArray(
									[
										elm$html$Html$Attributes$href(href)
									]),
								inner)
							]);
					},
					config.href)));
	});
var author$project$Material$ImageList$masonryCs = function (_n0) {
	var masonry = _n0.masonry;
	return masonry ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-image-list--masonry')) : elm$core$Maybe$Nothing;
};
var author$project$Material$ImageList$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-image-list'));
var author$project$Material$ImageList$withTextProtectionCs = function (_n0) {
	var withTextProtection = _n0.withTextProtection;
	return withTextProtection ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-image-list--with-text-protection')) : elm$core$Maybe$Nothing;
};
var author$project$Material$ImageList$imageList = F2(
	function (config, listItems) {
		return A3(
			elm$html$Html$node,
			'mdc-image-list',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$ImageList$rootCs,
							author$project$Material$ImageList$masonryCs(config),
							author$project$Material$ImageList$withTextProtectionCs(config)
						])),
				config.additionalAttributes),
			A2(
				elm$core$List$map,
				author$project$Material$ImageList$listItemElt(config),
				listItems));
	});
var author$project$Material$ImageList$imageListConfig = {additionalAttributes: _List_Nil, masonry: false, withTextProtection: false};
var author$project$Demo$ImageList$masonryImageList = A2(
	author$project$Material$ImageList$imageList,
	_Utils_update(
		author$project$Material$ImageList$imageListConfig,
		{
			additionalAttributes: _List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'max-width', '900px'),
					A2(elm$html$Html$Attributes$style, 'column-count', '5'),
					A2(elm$html$Html$Attributes$style, 'column-gap', '16px')
				]),
			masonry: true
		}),
	A2(elm$core$List$map, author$project$Demo$ImageList$masonryItem, author$project$Demo$ImageList$masonryImages));
var author$project$Demo$ImageList$standardImages = _List_fromArray(
	['images/photos/3x2/1.jpg', 'images/photos/3x2/2.jpg', 'images/photos/3x2/3.jpg', 'images/photos/3x2/4.jpg', 'images/photos/3x2/5.jpg', 'images/photos/3x2/6.jpg', 'images/photos/3x2/7.jpg', 'images/photos/3x2/8.jpg', 'images/photos/3x2/9.jpg', 'images/photos/3x2/10.jpg', 'images/photos/3x2/11.jpg', 'images/photos/3x2/12.jpg', 'images/photos/3x2/13.jpg', 'images/photos/3x2/14.jpg', 'images/photos/3x2/15.jpg']);
var author$project$Demo$ImageList$standardItem = function (url) {
	return A2(
		author$project$Material$ImageList$imageListItem,
		_Utils_update(
			author$project$Material$ImageList$imageListItemConfig,
			{
				additionalAttributes: _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'width', 'calc(100% / 5 - 4.2px)'),
						A2(elm$html$Html$Attributes$style, 'margin', '2px')
					]),
				label: elm$core$Maybe$Just('Text label')
			}),
		url);
};
var author$project$Demo$ImageList$standardImageList = A2(
	author$project$Material$ImageList$imageList,
	_Utils_update(
		author$project$Material$ImageList$imageListConfig,
		{
			additionalAttributes: _List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'max-width', '900px')
				]),
			withTextProtection: true
		}),
	A2(elm$core$List$map, author$project$Demo$ImageList$standardItem, author$project$Demo$ImageList$standardImages));
var author$project$Demo$ImageList$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Standard Image List with Text Protection')
					])),
				author$project$Demo$ImageList$standardImageList,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Masonry Image List')
					])),
				author$project$Demo$ImageList$masonryImageList
			]),
		hero: _List_fromArray(
			[
				A2(
				author$project$Material$ImageList$imageList,
				_Utils_update(
					author$project$Material$ImageList$imageListConfig,
					{
						additionalAttributes: _List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'width', '300px')
							])
					}),
				A2(elm$core$List$repeat, 15, author$project$Demo$ImageList$imageListHeroItem))
			]),
		prelude: 'Image lists display a collection of images in an organized grid.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/image-lists/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-image-list'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list')
		},
		title: 'Image List'
	};
};
var author$project$Material$LayoutGrid$layoutGridCell = F2(
	function (attributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-layout-grid__cell'),
				attributes),
			nodes);
	});
var author$project$Demo$LayoutGrid$demoCell = function (options) {
	return A2(
		author$project$Material$LayoutGrid$layoutGridCell,
		A2(
			elm$core$List$cons,
			A2(elm$html$Html$Attributes$style, 'background', 'rgba(0,0,0,.2)'),
			A2(
				elm$core$List$cons,
				A2(elm$html$Html$Attributes$style, 'height', '100px'),
				options)),
		_List_Nil);
};
var author$project$Material$LayoutGrid$layoutGrid = F2(
	function (attributes, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-layout-grid',
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-layout-grid'),
				A2(
					elm$core$List$cons,
					A2(elm$html$Html$Attributes$style, 'display', 'block'),
					attributes)),
			nodes);
	});
var author$project$Demo$LayoutGrid$demoGrid = function (options) {
	return author$project$Material$LayoutGrid$layoutGrid(
		A2(
			elm$core$List$cons,
			A2(elm$html$Html$Attributes$style, 'background', 'rgba(0,0,0,.2)'),
			A2(
				elm$core$List$cons,
				A2(elm$html$Html$Attributes$style, 'min-width', '360px'),
				options)));
};
var author$project$Material$LayoutGrid$alignBottom = elm$html$Html$Attributes$class('mdc-layout-grid__cell--align-bottom');
var author$project$Material$LayoutGrid$alignMiddle = elm$html$Html$Attributes$class('mdc-layout-grid__cell--align-middle');
var author$project$Material$LayoutGrid$alignTop = elm$html$Html$Attributes$class('mdc-layout-grid__cell--align-top');
var author$project$Material$LayoutGrid$layoutGridInner = F2(
	function (attributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-layout-grid__inner'),
				attributes),
			nodes);
	});
var author$project$Demo$LayoutGrid$cellAlignmentGrid = function () {
	var innerHeight = _List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'min-height', '200px')
		]);
	var cellHeight = A2(elm$html$Html$Attributes$style, 'max-height', '50px');
	return A2(
		author$project$Demo$LayoutGrid$demoGrid,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'min-height', '200px')
			]),
		_List_fromArray(
			[
				A2(
				author$project$Material$LayoutGrid$layoutGridInner,
				innerHeight,
				_List_fromArray(
					[
						author$project$Demo$LayoutGrid$demoCell(
						_List_fromArray(
							[author$project$Material$LayoutGrid$alignTop, cellHeight])),
						author$project$Demo$LayoutGrid$demoCell(
						_List_fromArray(
							[author$project$Material$LayoutGrid$alignMiddle, cellHeight])),
						author$project$Demo$LayoutGrid$demoCell(
						_List_fromArray(
							[author$project$Material$LayoutGrid$alignBottom, cellHeight]))
					]))
			]));
}();
var author$project$Material$LayoutGrid$span = function (n) {
	return elm$html$Html$Attributes$class(
		'mdc-layout-grid__cell--span-' + elm$core$String$fromInt(n));
};
var author$project$Material$LayoutGrid$span1 = author$project$Material$LayoutGrid$span(1);
var author$project$Material$LayoutGrid$span2 = author$project$Material$LayoutGrid$span(2);
var author$project$Material$LayoutGrid$span3 = author$project$Material$LayoutGrid$span(3);
var author$project$Material$LayoutGrid$span6 = author$project$Material$LayoutGrid$span(6);
var author$project$Material$LayoutGrid$span8 = author$project$Material$LayoutGrid$span(8);
var author$project$Demo$LayoutGrid$columnsGrid = A2(
	author$project$Demo$LayoutGrid$demoGrid,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			author$project$Material$LayoutGrid$layoutGridInner,
			_List_Nil,
			_List_fromArray(
				[
					author$project$Demo$LayoutGrid$demoCell(
					_List_fromArray(
						[author$project$Material$LayoutGrid$span6])),
					author$project$Demo$LayoutGrid$demoCell(
					_List_fromArray(
						[author$project$Material$LayoutGrid$span3])),
					author$project$Demo$LayoutGrid$demoCell(
					_List_fromArray(
						[author$project$Material$LayoutGrid$span2])),
					author$project$Demo$LayoutGrid$demoCell(
					_List_fromArray(
						[author$project$Material$LayoutGrid$span1])),
					author$project$Demo$LayoutGrid$demoCell(
					_List_fromArray(
						[author$project$Material$LayoutGrid$span3])),
					author$project$Demo$LayoutGrid$demoCell(
					_List_fromArray(
						[author$project$Material$LayoutGrid$span1])),
					author$project$Demo$LayoutGrid$demoCell(
					_List_fromArray(
						[author$project$Material$LayoutGrid$span8]))
				]))
		]));
var author$project$Demo$LayoutGrid$heroGrid = _List_fromArray(
	[
		A2(
		author$project$Demo$LayoutGrid$demoGrid,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				author$project$Material$LayoutGrid$layoutGridInner,
				_List_Nil,
				A2(
					elm$core$List$repeat,
					3,
					author$project$Demo$LayoutGrid$demoCell(_List_Nil)))
			]))
	]);
var author$project$Material$LayoutGrid$alignLeft = elm$html$Html$Attributes$class('mdc-layout-grid--align-left');
var author$project$Demo$LayoutGrid$leftAlignedGrid = A2(
	author$project$Demo$LayoutGrid$demoGrid,
	_List_fromArray(
		[
			author$project$Material$LayoutGrid$alignLeft,
			A2(elm$html$Html$Attributes$style, 'max-width', '800px')
		]),
	_List_fromArray(
		[
			A2(
			author$project$Material$LayoutGrid$layoutGridInner,
			_List_Nil,
			_List_fromArray(
				[
					author$project$Demo$LayoutGrid$demoCell(_List_Nil),
					author$project$Demo$LayoutGrid$demoCell(_List_Nil),
					author$project$Demo$LayoutGrid$demoCell(_List_Nil)
				]))
		]));
var author$project$Material$LayoutGrid$alignRight = elm$html$Html$Attributes$class('mdc-layout-grid--align-right');
var author$project$Demo$LayoutGrid$rightAlignedGrid = A2(
	author$project$Demo$LayoutGrid$demoGrid,
	_List_fromArray(
		[
			author$project$Material$LayoutGrid$alignRight,
			A2(elm$html$Html$Attributes$style, 'max-width', '800px')
		]),
	_List_fromArray(
		[
			A2(
			author$project$Material$LayoutGrid$layoutGridInner,
			_List_Nil,
			A2(
				elm$core$List$repeat,
				3,
				author$project$Demo$LayoutGrid$demoCell(_List_Nil)))
		]));
var author$project$Demo$LayoutGrid$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Columns')
					])),
				author$project$Demo$LayoutGrid$columnsGrid,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Grid Left Alignment')
					])),
				A2(
				elm$html$Html$p,
				_List_fromArray(
					[author$project$Material$Typography$body1]),
				_List_fromArray(
					[
						elm$html$Html$text('This requires a max-width on the top-level grid element.')
					])),
				author$project$Demo$LayoutGrid$leftAlignedGrid,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Grid Right Alignment')
					])),
				A2(
				elm$html$Html$p,
				_List_fromArray(
					[author$project$Material$Typography$body1]),
				_List_fromArray(
					[
						elm$html$Html$text('This requires a max-width on the top-level grid element.')
					])),
				author$project$Demo$LayoutGrid$rightAlignedGrid,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Cell Alignment')
					])),
				A2(
				elm$html$Html$p,
				_List_fromArray(
					[author$project$Material$Typography$body1]),
				_List_fromArray(
					[
						elm$html$Html$text('Cell alignment requires a cell height smaller than the inner height of the grid.')
					])),
				author$project$Demo$LayoutGrid$cellAlignmentGrid
			]),
		hero: author$project$Demo$LayoutGrid$heroGrid,
		prelude: 'Material design’s responsive UI is based on a 12-column grid layout.',
		resources: {
			documentation: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/components/web/catalog/layout-grid/'),
			sourceCode: elm$core$Maybe$Nothing
		},
		title: 'Layout Grid'
	};
};
var author$project$Material$LinearProgress$Buffered = F2(
	function (a, b) {
		return {$: 'Buffered', a: a, b: b};
	});
var elm$core$String$fromFloat = _String_fromNumber;
var author$project$Material$LinearProgress$bufferAttr = function (variant) {
	if (variant.$ === 'Buffered') {
		var buffer = variant.b;
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$Attributes$attribute,
				'buffer',
				elm$core$String$fromFloat(buffer)));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$LinearProgress$bufferElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-linear-progress__buffer')
		]),
	_List_Nil);
var author$project$Material$LinearProgress$bufferingDotsElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-linear-progress__buffering-dots')
		]),
	_List_Nil);
var author$project$Material$LinearProgress$closedAttr = function (_n0) {
	var closed = _n0.closed;
	return closed ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'closed', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$LinearProgress$Indeterminate = {$: 'Indeterminate'};
var author$project$Material$LinearProgress$determinateAttr = function (variant) {
	return (!_Utils_eq(variant, author$project$Material$LinearProgress$Indeterminate)) ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'determinate', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$LinearProgress$displayCss = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$style, 'display', 'block'));
var author$project$Material$LinearProgress$barInnerElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-linear-progress__bar-inner')
		]),
	_List_Nil);
var author$project$Material$LinearProgress$primaryBarElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-linear-progress__bar mdc-linear-progress__primary-bar')
		]),
	_List_fromArray(
		[author$project$Material$LinearProgress$barInnerElt]));
var author$project$Material$LinearProgress$progressAttr = function (variant) {
	switch (variant.$) {
		case 'Determinate':
			var progress = variant.a;
			return elm$core$Maybe$Just(
				A2(
					elm$html$Html$Attributes$attribute,
					'progress',
					elm$core$String$fromFloat(progress)));
		case 'Buffered':
			var progress = variant.a;
			return elm$core$Maybe$Just(
				A2(
					elm$html$Html$Attributes$attribute,
					'progress',
					elm$core$String$fromFloat(progress)));
		default:
			return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$LinearProgress$reverseAttr = function (_n0) {
	var reverse = _n0.reverse;
	return reverse ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'reverse', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$LinearProgress$roleAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'role', 'progressbar'));
var author$project$Material$LinearProgress$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-linear-progress'));
var author$project$Material$LinearProgress$secondaryBarElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-linear-progress__bar mdc-linear-progress__secondary-bar')
		]),
	_List_fromArray(
		[author$project$Material$LinearProgress$barInnerElt]));
var author$project$Material$LinearProgress$variantCs = function (variant) {
	if (variant.$ === 'Indeterminate') {
		return elm$core$Maybe$Just(
			elm$html$Html$Attributes$class('mdc-linear-progress--indeterminate'));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$LinearProgress$linearProgress = F2(
	function (variant, config) {
		return A3(
			elm$html$Html$node,
			'mdc-linear-progress',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$LinearProgress$rootCs,
							author$project$Material$LinearProgress$displayCss,
							author$project$Material$LinearProgress$roleAttr,
							author$project$Material$LinearProgress$variantCs(variant),
							author$project$Material$LinearProgress$determinateAttr(variant),
							author$project$Material$LinearProgress$progressAttr(variant),
							author$project$Material$LinearProgress$bufferAttr(variant),
							author$project$Material$LinearProgress$reverseAttr(config),
							author$project$Material$LinearProgress$closedAttr(config)
						])),
				config.additionalAttributes),
			_List_fromArray(
				[author$project$Material$LinearProgress$bufferingDotsElt, author$project$Material$LinearProgress$bufferElt, author$project$Material$LinearProgress$primaryBarElt, author$project$Material$LinearProgress$secondaryBarElt]));
	});
var author$project$Material$LinearProgress$bufferedLinearProgress = F2(
	function (config, _n0) {
		var progress = _n0.progress;
		var buffered = _n0.buffered;
		return A2(
			author$project$Material$LinearProgress$linearProgress,
			A2(author$project$Material$LinearProgress$Buffered, progress, buffered),
			config);
	});
var author$project$Material$LinearProgress$Determinate = function (a) {
	return {$: 'Determinate', a: a};
};
var author$project$Material$LinearProgress$determinateLinearProgress = F2(
	function (config, _n0) {
		var progress = _n0.progress;
		return A2(
			author$project$Material$LinearProgress$linearProgress,
			author$project$Material$LinearProgress$Determinate(progress),
			config);
	});
var author$project$Material$LinearProgress$indeterminateLinearProgress = function (config) {
	return A2(author$project$Material$LinearProgress$linearProgress, author$project$Material$LinearProgress$Indeterminate, config);
};
var author$project$Material$LinearProgress$linearProgressConfig = {additionalAttributes: _List_Nil, closed: false, reverse: false};
var author$project$Demo$LinearProgress$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Buffered')
					])),
				A2(
				author$project$Material$LinearProgress$bufferedLinearProgress,
				author$project$Material$LinearProgress$linearProgressConfig,
				{buffered: 0.75, progress: 0.5}),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Indeterminate')
					])),
				author$project$Material$LinearProgress$indeterminateLinearProgress(author$project$Material$LinearProgress$linearProgressConfig),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Reversed')
					])),
				A2(
				author$project$Material$LinearProgress$determinateLinearProgress,
				_Utils_update(
					author$project$Material$LinearProgress$linearProgressConfig,
					{reverse: true}),
				{progress: 0.5}),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Reversed Buffered')
					])),
				A2(
				author$project$Material$LinearProgress$bufferedLinearProgress,
				_Utils_update(
					author$project$Material$LinearProgress$linearProgressConfig,
					{reverse: true}),
				{buffered: 0.75, progress: 0.5})
			]),
		hero: _List_fromArray(
			[
				A2(
				author$project$Material$LinearProgress$determinateLinearProgress,
				author$project$Material$LinearProgress$linearProgressConfig,
				{progress: 0.5})
			]),
		prelude: 'Progress indicators display the length of a process or express an unspecified wait time.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/linear-progress/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-progress-indicators'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress')
		},
		title: 'Linear Progress Indicator'
	};
};
var author$project$Demo$Lists$SetActivated = function (a) {
	return {$: 'SetActivated', a: a};
};
var author$project$Demo$Lists$demoList = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'max-width', '600px'),
		A2(elm$html$Html$Attributes$style, 'border', '1px solid rgba(0,0,0,.1)')
	]);
var author$project$Demo$Lists$activatedItemList = function (model) {
	var listItemConfig_ = function (index) {
		return _Utils_update(
			author$project$Material$List$listItemConfig,
			{
				activated: _Utils_eq(model.activatedIndex, index),
				onClick: elm$core$Maybe$Just(
					author$project$Demo$Lists$SetActivated(index))
			});
	};
	return A2(
		author$project$Material$List$list,
		_Utils_update(
			author$project$Material$List$listConfig,
			{additionalAttributes: author$project$Demo$Lists$demoList}),
		_List_fromArray(
			[
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(0),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						_List_Nil,
						_List_fromArray(
							[
								A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'inbox')
							])),
						elm$html$Html$text('Inbox')
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(1),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						_List_Nil,
						_List_fromArray(
							[
								A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'star')
							])),
						elm$html$Html$text('Star')
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(2),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						_List_Nil,
						_List_fromArray(
							[
								A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'send')
							])),
						elm$html$Html$text('Sent')
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(3),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						_List_Nil,
						_List_fromArray(
							[
								A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'drafts')
							])),
						elm$html$Html$text('Drafts')
					]))
			]));
};
var author$project$Demo$Lists$demoIcon = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'background', 'rgba(0,0,0,.3)'),
		A2(elm$html$Html$Attributes$style, 'border-radius', '50%'),
		A2(elm$html$Html$Attributes$style, 'color', '#fff')
	]);
var author$project$Material$List$listItemMeta = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-list-item__meta'),
				additionalAttributes),
			nodes);
	});
var author$project$Material$List$listItemPrimaryText = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-list-item__primary-text'),
				additionalAttributes),
			nodes);
	});
var author$project$Material$List$listItemSecondaryText = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				elm$html$Html$Attributes$class('mdc-list-item__secondary-text'),
				additionalAttributes),
			nodes);
	});
var author$project$Demo$Lists$folderList = A2(
	author$project$Material$List$list,
	_Utils_update(
		author$project$Material$List$listConfig,
		{additionalAttributes: author$project$Demo$Lists$demoList, avatarList: true, twoLine: true}),
	_List_fromArray(
		[
			A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$List$listItemGraphic,
					author$project$Demo$Lists$demoIcon,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'folder')
						])),
					A2(
					author$project$Material$List$listItemText,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$List$listItemPrimaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Dog Photos')
								])),
							A2(
							author$project$Material$List$listItemSecondaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('9 Jan 2018')
								]))
						])),
					A2(
					author$project$Material$List$listItemMeta,
					_List_Nil,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'info')
						]))
				])),
			A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$List$listItemGraphic,
					author$project$Demo$Lists$demoIcon,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'folder')
						])),
					A2(
					author$project$Material$List$listItemText,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$List$listItemPrimaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Cat Photos')
								])),
							A2(
							author$project$Material$List$listItemSecondaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('22 Dec 2017')
								]))
						])),
					A2(
					author$project$Material$List$listItemMeta,
					_List_Nil,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'info')
						]))
				])),
			author$project$Material$List$listItemDivider(author$project$Material$List$listItemDividerConfig),
			A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$List$listItemGraphic,
					author$project$Demo$Lists$demoIcon,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'folder')
						])),
					A2(
					author$project$Material$List$listItemText,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$List$listItemPrimaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Potatoes')
								])),
							A2(
							author$project$Material$List$listItemSecondaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('30 Noc 2017')
								]))
						])),
					A2(
					author$project$Material$List$listItemMeta,
					_List_Nil,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'info')
						]))
				])),
			A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$List$listItemGraphic,
					author$project$Demo$Lists$demoIcon,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'folder')
						])),
					A2(
					author$project$Material$List$listItemText,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$List$listItemPrimaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Carrots')
								])),
							A2(
							author$project$Material$List$listItemSecondaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('17 Oct 2017')
								]))
						])),
					A2(
					author$project$Material$List$listItemMeta,
					_List_Nil,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'info')
						]))
				]))
		]));
var author$project$Demo$Lists$heroList = _List_fromArray(
	[
		A2(
		author$project$Material$List$list,
		_Utils_update(
			author$project$Material$List$listConfig,
			{
				additionalAttributes: A2(
					elm$core$List$cons,
					A2(elm$html$Html$Attributes$style, 'background', '#fff'),
					author$project$Demo$Lists$demoList)
			}),
		A2(
			elm$core$List$repeat,
			3,
			A2(
				author$project$Material$List$listItem,
				author$project$Material$List$listItemConfig,
				_List_fromArray(
					[
						elm$html$Html$text('Line item')
					]))))
	]);
var author$project$Demo$Lists$leadingIconList = A2(
	author$project$Material$List$list,
	_Utils_update(
		author$project$Material$List$listConfig,
		{additionalAttributes: author$project$Demo$Lists$demoList}),
	_List_fromArray(
		[
			A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$List$listItemGraphic,
					_List_Nil,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'wifi')
						])),
					elm$html$Html$text('Line item')
				])),
			A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$List$listItemGraphic,
					_List_Nil,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'bluetooth')
						])),
					elm$html$Html$text('Line item')
				])),
			A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$List$listItemGraphic,
					_List_Nil,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'data_usage')
						])),
					elm$html$Html$text('Line item')
				]))
		]));
var author$project$Demo$Lists$ToggleCheckbox = function (a) {
	return {$: 'ToggleCheckbox', a: a};
};
var author$project$Demo$Lists$listWithTrailingCheckbox = function (model) {
	var listItemConfig_ = function (index) {
		return _Utils_update(
			author$project$Material$List$listItemConfig,
			{
				additionalAttributes: _List_fromArray(
					[
						A2(
						elm$html$Html$Attributes$attribute,
						'aria-checked',
						A2(elm$core$Set$member, index, model.checkboxIndices) ? 'true' : 'false')
					])
			});
	};
	var checkbox_ = function (index) {
		return author$project$Material$Checkbox$checkbox(
			_Utils_update(
				author$project$Material$Checkbox$checkboxConfig,
				{
					onClick: elm$core$Maybe$Just(
						author$project$Demo$Lists$ToggleCheckbox(index)),
					state: A2(elm$core$Set$member, index, model.checkboxIndices) ? author$project$Material$Checkbox$Checked : author$project$Material$Checkbox$Unchecked
				}));
	};
	return A2(
		author$project$Material$List$list,
		_Utils_update(
			author$project$Material$List$listConfig,
			{
				additionalAttributes: _Utils_ap(
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$attribute, 'role', 'group')
						]),
					author$project$Demo$Lists$demoList)
			}),
		_List_fromArray(
			[
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(0),
				_List_fromArray(
					[
						elm$html$Html$text('Dog Photos'),
						A2(
						author$project$Material$List$listItemMeta,
						_List_Nil,
						_List_fromArray(
							[
								checkbox_(0)
							]))
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(1),
				_List_fromArray(
					[
						elm$html$Html$text('Cat Photos'),
						A2(
						author$project$Material$List$listItemMeta,
						_List_Nil,
						_List_fromArray(
							[
								checkbox_(1)
							]))
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(2),
				_List_fromArray(
					[
						elm$html$Html$text('Potatoes'),
						A2(
						author$project$Material$List$listItemMeta,
						_List_Nil,
						_List_fromArray(
							[
								checkbox_(2)
							]))
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(3),
				_List_fromArray(
					[
						elm$html$Html$text('Carrots'),
						A2(
						author$project$Material$List$listItemMeta,
						_List_Nil,
						_List_fromArray(
							[
								checkbox_(3)
							]))
					]))
			]));
};
var author$project$Demo$Lists$SetRadio = function (a) {
	return {$: 'SetRadio', a: a};
};
var author$project$Demo$Lists$listWithTrailingRadioButton = function (model) {
	var radio_ = function (index) {
		return author$project$Material$Radio$radio(
			_Utils_update(
				author$project$Material$Radio$radioConfig,
				{
					checked: _Utils_eq(
						model.radioIndex,
						elm$core$Maybe$Just(index)),
					onClick: elm$core$Maybe$Just(
						author$project$Demo$Lists$SetRadio(index))
				}));
	};
	var listItemConfig_ = function (index) {
		return author$project$Material$List$listItemConfig;
	};
	return A2(
		author$project$Material$List$list,
		_Utils_update(
			author$project$Material$List$listConfig,
			{additionalAttributes: author$project$Demo$Lists$demoList}),
		_List_fromArray(
			[
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(0),
				_List_fromArray(
					[
						elm$html$Html$text('Dog Photos'),
						A2(
						author$project$Material$List$listItemMeta,
						_List_Nil,
						_List_fromArray(
							[
								radio_(0)
							]))
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(1),
				_List_fromArray(
					[
						elm$html$Html$text('Cat Photos'),
						A2(
						author$project$Material$List$listItemMeta,
						_List_Nil,
						_List_fromArray(
							[
								radio_(1)
							]))
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(2),
				_List_fromArray(
					[
						elm$html$Html$text('Potatoes'),
						A2(
						author$project$Material$List$listItemMeta,
						_List_Nil,
						_List_fromArray(
							[
								radio_(2)
							]))
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(3),
				_List_fromArray(
					[
						elm$html$Html$text('Carrots'),
						A2(
						author$project$Material$List$listItemMeta,
						_List_Nil,
						_List_fromArray(
							[
								radio_(3)
							]))
					]))
			]));
};
var author$project$Demo$Lists$SetShapedActivated = function (a) {
	return {$: 'SetShapedActivated', a: a};
};
var author$project$Demo$Lists$shapedActivatedItemList = function (model) {
	var listItemConfig_ = function (index) {
		return _Utils_update(
			author$project$Material$List$listItemConfig,
			{
				activated: _Utils_eq(model.shapedActivatedIndex, index),
				additionalAttributes: _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'border-radius', '0 32px 32px 0')
					]),
				onClick: elm$core$Maybe$Just(
					author$project$Demo$Lists$SetShapedActivated(index))
			});
	};
	return A2(
		author$project$Material$List$list,
		_Utils_update(
			author$project$Material$List$listConfig,
			{additionalAttributes: author$project$Demo$Lists$demoList}),
		_List_fromArray(
			[
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(0),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						_List_Nil,
						_List_fromArray(
							[
								A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'inbox')
							])),
						elm$html$Html$text('Inbox')
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(1),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						_List_Nil,
						_List_fromArray(
							[
								A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'star')
							])),
						elm$html$Html$text('Star')
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(2),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						_List_Nil,
						_List_fromArray(
							[
								A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'send')
							])),
						elm$html$Html$text('Sent')
					])),
				A2(
				author$project$Material$List$listItem,
				listItemConfig_(3),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItemGraphic,
						_List_Nil,
						_List_fromArray(
							[
								A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'drafts')
							])),
						elm$html$Html$text('Drafts')
					]))
			]));
};
var author$project$Demo$Lists$singleLineList = A2(
	author$project$Material$List$list,
	_Utils_update(
		author$project$Material$List$listConfig,
		{additionalAttributes: author$project$Demo$Lists$demoList}),
	A2(
		elm$core$List$repeat,
		3,
		A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					elm$html$Html$text('Line item')
				]))));
var author$project$Demo$Lists$trailingIconList = A2(
	author$project$Material$List$list,
	_Utils_update(
		author$project$Material$List$listConfig,
		{additionalAttributes: author$project$Demo$Lists$demoList}),
	A2(
		elm$core$List$repeat,
		3,
		A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					elm$html$Html$text('Line item'),
					A2(
					author$project$Material$List$listItemMeta,
					_List_Nil,
					_List_fromArray(
						[
							A2(author$project$Material$Icon$icon, author$project$Material$Icon$iconConfig, 'info')
						]))
				]))));
var author$project$Demo$Lists$twoLineList = A2(
	author$project$Material$List$list,
	_Utils_update(
		author$project$Material$List$listConfig,
		{additionalAttributes: author$project$Demo$Lists$demoList, twoLine: true}),
	A2(
		elm$core$List$repeat,
		3,
		A2(
			author$project$Material$List$listItem,
			author$project$Material$List$listItemConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$List$listItemText,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$List$listItemPrimaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Line item')
								])),
							A2(
							author$project$Material$List$listItemSecondaryText,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Secondary text')
								]))
						]))
				]))));
var author$project$Demo$Lists$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Single-Line')
					])),
				author$project$Demo$Lists$singleLineList,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Two-Line')
					])),
				author$project$Demo$Lists$twoLineList,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Leading Icon')
					])),
				author$project$Demo$Lists$leadingIconList,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('List with activated item')
					])),
				author$project$Demo$Lists$activatedItemList(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('List with shaped activated item')
					])),
				author$project$Demo$Lists$shapedActivatedItemList(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Trailing Icon')
					])),
				author$project$Demo$Lists$trailingIconList,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Two-Line with Leading and Trailing Icon and Divider')
					])),
				author$project$Demo$Lists$folderList,
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('List with Trailing Checkbox')
					])),
				author$project$Demo$Lists$listWithTrailingCheckbox(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('List with Trailing Radio Buttons')
					])),
				author$project$Demo$Lists$listWithTrailingRadioButton(model)
			]),
		hero: author$project$Demo$Lists$heroList,
		prelude: 'Lists present multiple line items vertically as a single continuous element.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/lists/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-lists'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-list')
		},
		title: 'List'
	};
};
var author$project$Demo$Menus$Close = {$: 'Close'};
var author$project$Demo$Menus$Open = {$: 'Open'};
var author$project$Demo$Menus$heroMenu = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-menu mdc-menu-surface mdc-menu-surface--open'),
				A2(elm$html$Html$Attributes$style, 'position', 'relative'),
				A2(elm$html$Html$Attributes$style, 'transform-origin', 'left top 0px'),
				A2(elm$html$Html$Attributes$style, 'left', '0px'),
				A2(elm$html$Html$Attributes$style, 'top', '0px'),
				A2(elm$html$Html$Attributes$style, 'z-index', '0')
			]),
		_List_fromArray(
			[
				A2(
				author$project$Material$List$list,
				author$project$Material$List$listConfig,
				_List_fromArray(
					[
						A2(
						author$project$Material$List$listItem,
						author$project$Material$List$listItemConfig,
						_List_fromArray(
							[
								elm$html$Html$text('A Menu Item')
							])),
						A2(
						author$project$Material$List$listItem,
						author$project$Material$List$listItemConfig,
						_List_fromArray(
							[
								elm$html$Html$text('Another Menu Item')
							]))
					]))
			]));
};
var author$project$Demo$Menus$menuItemConfig = _Utils_update(
	author$project$Material$List$listItemConfig,
	{
		onClick: elm$core$Maybe$Just(author$project$Demo$Menus$Close)
	});
var author$project$Material$Menu$closeHandler = function (_n0) {
	var onClose = _n0.onClose;
	return A2(
		elm$core$Maybe$map,
		A2(
			elm$core$Basics$composeL,
			elm$html$Html$Events$on('MDCMenu:close'),
			elm$json$Json$Decode$succeed),
		onClose);
};
var author$project$Material$Menu$openAttr = function (_n0) {
	var open = _n0.open;
	return open ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'open', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Menu$quickOpenAttr = function (_n0) {
	var quickOpen = _n0.quickOpen;
	return quickOpen ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'quickopen', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Menu$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-menu mdc-menu-surface'));
var author$project$Material$Menu$menu = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-menu',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Menu$rootCs,
							author$project$Material$Menu$openAttr(config),
							author$project$Material$Menu$quickOpenAttr(config),
							author$project$Material$Menu$closeHandler(config)
						])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Material$Menu$menuConfig = {additionalAttributes: _List_Nil, onClose: elm$core$Maybe$Nothing, open: false, quickOpen: false};
var author$project$Material$Menu$menuSurfaceAnchor = elm$html$Html$Attributes$class('mdc-menu-surface--anchor');
var author$project$Demo$Menus$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Anchored menu')
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[author$project$Material$Menu$menuSurfaceAnchor]),
				_List_fromArray(
					[
						A2(
						author$project$Material$Button$textButton,
						_Utils_update(
							author$project$Material$Button$buttonConfig,
							{
								onClick: elm$core$Maybe$Just(author$project$Demo$Menus$Open)
							}),
						'Open menu'),
						A2(
						author$project$Material$Menu$menu,
						_Utils_update(
							author$project$Material$Menu$menuConfig,
							{
								onClose: elm$core$Maybe$Just(author$project$Demo$Menus$Close),
								open: model.open
							}),
						_List_fromArray(
							[
								A2(
								author$project$Material$List$list,
								_Utils_update(
									author$project$Material$List$listConfig,
									{wrapFocus: true}),
								_List_fromArray(
									[
										A2(
										author$project$Material$List$listItem,
										author$project$Demo$Menus$menuItemConfig,
										_List_fromArray(
											[
												elm$html$Html$text('Passionfruit')
											])),
										A2(
										author$project$Material$List$listItem,
										author$project$Demo$Menus$menuItemConfig,
										_List_fromArray(
											[
												elm$html$Html$text('Orange')
											])),
										A2(
										author$project$Material$List$listItem,
										author$project$Demo$Menus$menuItemConfig,
										_List_fromArray(
											[
												elm$html$Html$text('Guava')
											])),
										A2(
										author$project$Material$List$listItem,
										author$project$Demo$Menus$menuItemConfig,
										_List_fromArray(
											[
												elm$html$Html$text('Pitaya')
											])),
										author$project$Material$List$listItemDivider(author$project$Material$List$listItemDividerConfig),
										A2(
										author$project$Material$List$listItem,
										author$project$Demo$Menus$menuItemConfig,
										_List_fromArray(
											[
												elm$html$Html$text('Pineapple')
											])),
										A2(
										author$project$Material$List$listItem,
										author$project$Demo$Menus$menuItemConfig,
										_List_fromArray(
											[
												elm$html$Html$text('Mango')
											])),
										A2(
										author$project$Material$List$listItem,
										author$project$Demo$Menus$menuItemConfig,
										_List_fromArray(
											[
												elm$html$Html$text('Papaya')
											])),
										A2(
										author$project$Material$List$listItem,
										author$project$Demo$Menus$menuItemConfig,
										_List_fromArray(
											[
												elm$html$Html$text('Lychee')
											]))
									]))
							]))
					]))
			]),
		hero: _List_fromArray(
			[
				author$project$Demo$Menus$heroMenu(model)
			]),
		prelude: 'Menus display a list of choices on a transient sheet of material.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/menus/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-menus'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu')
		},
		title: 'Menu'
	};
};
var author$project$Demo$ModalDrawer$CloseDrawer = {$: 'CloseDrawer'};
var author$project$Demo$ModalDrawer$OpenDrawer = {$: 'OpenDrawer'};
var author$project$Demo$ModalDrawer$SetSelectedIndex = function (a) {
	return {$: 'SetSelectedIndex', a: a};
};
var author$project$Material$Drawer$drawerScrim = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-drawer-scrim')
					]),
				additionalAttributes),
			nodes);
	});
var author$project$Material$Drawer$closeHandler = function (_n0) {
	var onClose = _n0.onClose;
	return A2(
		elm$core$Maybe$map,
		A2(
			elm$core$Basics$composeL,
			elm$html$Html$Events$on('MDCDrawer:close'),
			elm$json$Json$Decode$succeed),
		onClose);
};
var author$project$Material$Drawer$modalCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-drawer--modal'));
var author$project$Material$Drawer$modalDrawer = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-drawer',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Drawer$rootCs,
							author$project$Material$Drawer$modalCs,
							author$project$Material$Drawer$openAttr(config),
							author$project$Material$Drawer$closeHandler(config)
						])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Material$Drawer$modalDrawerConfig = {additionalAttributes: _List_Nil, onClose: elm$core$Maybe$Nothing, open: false};
var author$project$Demo$ModalDrawer$view = function (model) {
	return {
		drawer: A2(
			author$project$Material$Drawer$modalDrawer,
			_Utils_update(
				author$project$Material$Drawer$modalDrawerConfig,
				{
					onClose: elm$core$Maybe$Just(author$project$Demo$ModalDrawer$CloseDrawer),
					open: model.drawerOpen
				}),
			A2(author$project$Demo$DrawerPage$drawerBody, author$project$Demo$ModalDrawer$SetSelectedIndex, model.selectedIndex)),
		onMenuClick: elm$core$Maybe$Just(author$project$Demo$ModalDrawer$OpenDrawer),
		scrim: elm$core$Maybe$Just(
			A2(author$project$Material$Drawer$drawerScrim, _List_Nil, _List_Nil)),
		title: 'Modal Drawer'
	};
};
var author$project$Demo$PermanentDrawer$SetSelectedIndex = function (a) {
	return {$: 'SetSelectedIndex', a: a};
};
var author$project$Demo$PermanentDrawer$view = function (model) {
	return {
		drawer: A2(
			author$project$Material$Drawer$permanentDrawer,
			author$project$Material$Drawer$permanentDrawerConfig,
			A2(author$project$Demo$DrawerPage$drawerBody, author$project$Demo$PermanentDrawer$SetSelectedIndex, model.selectedIndex)),
		onMenuClick: elm$core$Maybe$Nothing,
		scrim: elm$core$Maybe$Nothing,
		title: 'Permanent Drawer'
	};
};
var author$project$Material$TopAppBar$prominentFixedAdjust = elm$html$Html$Attributes$class('mdc-top-app-bar--prominent-fixed-adjust');
var author$project$Material$TopAppBar$Prominent = {$: 'Prominent'};
var author$project$Material$TopAppBar$prominentTopAppBar = F2(
	function (config, nodes) {
		return A3(author$project$Material$TopAppBar$genericTopAppBar, author$project$Material$TopAppBar$Prominent, config, nodes);
	});
var author$project$Demo$ProminentTopAppBar$view = function (model) {
	return {
		fixedAdjust: author$project$Material$TopAppBar$prominentFixedAdjust,
		topAppBar: A2(
			author$project$Material$TopAppBar$prominentTopAppBar,
			author$project$Material$TopAppBar$topAppBarConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$TopAppBar$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignStart]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$navigationIcon])
										}),
									'menu'),
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[author$project$Material$TopAppBar$title]),
									_List_fromArray(
										[
											elm$html$Html$text('Prominent')
										]))
								])),
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignEnd]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'file_download'),
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'print'),
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'bookmark')
								]))
						]))
				]))
	};
};
var author$project$Demo$RadioButtons$Set = F2(
	function (a, b) {
		return {$: 'Set', a: a, b: b};
	});
var author$project$Demo$RadioButtons$isSelected = F3(
	function (group, index, model) {
		return A2(
			elm$core$Maybe$withDefault,
			false,
			A2(
				elm$core$Maybe$map,
				elm$core$Basics$eq(index),
				A2(elm$core$Dict$get, group, model.radios)));
	});
var author$project$Material$FormField$alignEndCs = function (_n0) {
	var alignEnd = _n0.alignEnd;
	return alignEnd ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-form-field--align-end')) : elm$core$Maybe$Nothing;
};
var author$project$Material$FormField$clickHandler = function (_n0) {
	var onClick = _n0.onClick;
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, onClick);
};
var elm$html$Html$Attributes$for = elm$html$Html$Attributes$stringProperty('htmlFor');
var author$project$Material$FormField$forAttr = function (_n0) {
	var _for = _n0._for;
	return A2(elm$core$Maybe$map, elm$html$Html$Attributes$for, _for);
};
var elm$html$Html$label = _VirtualDom_node('label');
var author$project$Material$FormField$labelElt = function (config) {
	var label = config.label;
	return A2(
		elm$html$Html$label,
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					author$project$Material$FormField$forAttr(config),
					author$project$Material$FormField$clickHandler(config)
				])),
		_List_fromArray(
			[
				elm$html$Html$text(label)
			]));
};
var author$project$Material$FormField$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-form-field'));
var author$project$Material$FormField$formField = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-form-field',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$FormField$rootCs,
							author$project$Material$FormField$alignEndCs(config)
						])),
				config.additionalAttributes),
			_Utils_ap(
				nodes,
				_List_fromArray(
					[
						author$project$Material$FormField$labelElt(config)
					])));
	});
var author$project$Material$FormField$formFieldConfig = {additionalAttributes: _List_Nil, alignEnd: false, _for: elm$core$Maybe$Nothing, label: '', onClick: elm$core$Maybe$Nothing};
var author$project$Demo$RadioButtons$radio_ = F4(
	function (model, group, index, label) {
		return A2(
			author$project$Material$FormField$formField,
			_Utils_update(
				author$project$Material$FormField$formFieldConfig,
				{
					additionalAttributes: _List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'margin', '0 10px')
						]),
					_for: elm$core$Maybe$Just(index),
					label: label,
					onClick: elm$core$Maybe$Just(
						A2(author$project$Demo$RadioButtons$Set, group, index))
				}),
			_List_fromArray(
				[
					author$project$Material$Radio$radio(
					_Utils_update(
						author$project$Material$Radio$radioConfig,
						{
							checked: A3(author$project$Demo$RadioButtons$isSelected, group, index, model),
							onClick: elm$core$Maybe$Just(
								A2(author$project$Demo$RadioButtons$Set, group, index))
						}))
				]));
	});
var author$project$Demo$RadioButtons$exampleRadioGroup = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A4(author$project$Demo$RadioButtons$radio_, model, 'example', 'radio-buttons-example-radio-1', 'Radio 1'),
				A4(author$project$Demo$RadioButtons$radio_, model, 'example', 'radio-buttons-example-radio-2', 'Radio 2')
			]));
};
var author$project$Demo$RadioButtons$heroRadio = F3(
	function (model, group, index) {
		return author$project$Material$Radio$radio(
			_Utils_update(
				author$project$Material$Radio$radioConfig,
				{
					additionalAttributes: _List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'margin', '0 10px')
						]),
					checked: A3(author$project$Demo$RadioButtons$isSelected, group, index, model),
					onClick: elm$core$Maybe$Just(
						A2(author$project$Demo$RadioButtons$Set, group, index))
				}));
	});
var author$project$Demo$RadioButtons$heroRadioGroup = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A3(author$project$Demo$RadioButtons$heroRadio, model, 'hero', 'radio-buttons-hero-radio-1'),
				A3(author$project$Demo$RadioButtons$heroRadio, model, 'hero', 'radio-buttons-hero-radio-2')
			]));
};
var author$project$Demo$RadioButtons$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Radio Buttons')
					])),
				author$project$Demo$RadioButtons$exampleRadioGroup(model)
			]),
		hero: _List_fromArray(
			[
				author$project$Demo$RadioButtons$heroRadioGroup(model)
			]),
		prelude: 'Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/buttons/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-buttons'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-button')
		},
		title: 'Radio Button'
	};
};
var author$project$Demo$Ripple$demoBox = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, 'align-items', 'center'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'center'),
		A2(elm$html$Html$Attributes$style, 'width', '200px'),
		A2(elm$html$Html$Attributes$style, 'height', '100px'),
		A2(elm$html$Html$Attributes$style, 'padding', '1rem'),
		A2(elm$html$Html$Attributes$style, 'cursor', 'pointer'),
		A2(elm$html$Html$Attributes$style, 'user-select', 'none'),
		A2(elm$html$Html$Attributes$style, 'background-color', '#fff'),
		A2(elm$html$Html$Attributes$style, 'overflow', 'hidden'),
		A2(elm$html$Html$Attributes$style, 'position', 'relative'),
		author$project$Material$Elevation$z2,
		elm$html$Html$Attributes$tabindex(0)
	]);
var author$project$Demo$Ripple$demoIcon = _List_fromArray(
	[
		elm$html$Html$Attributes$class('material-icons'),
		A2(elm$html$Html$Attributes$style, 'width', '24px'),
		A2(elm$html$Html$Attributes$style, 'height', '24px'),
		A2(elm$html$Html$Attributes$style, 'padding', '12px'),
		A2(elm$html$Html$Attributes$style, 'border-radius', '50%'),
		A2(elm$html$Html$Attributes$style, 'position', 'relative')
	]);
var author$project$Material$Ripple$AccentColor = {$: 'AccentColor'};
var author$project$Material$Ripple$PrimaryColor = {$: 'PrimaryColor'};
var author$project$Material$Ripple$colorCs = function (_n0) {
	var color = _n0.color;
	if (color.$ === 'Just') {
		if (color.a.$ === 'PrimaryColor') {
			var _n2 = color.a;
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-ripple-surface--primary'));
		} else {
			var _n3 = color.a;
			return elm$core$Maybe$Just(
				elm$html$Html$Attributes$class('mdc-ripple-surface--accent'));
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$Ripple$dataUnboundedAttr = function (_n0) {
	var unbounded = _n0.unbounded;
	return unbounded ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'data-mdc-ripple-is-unbounded', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Ripple$rippleSurface = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-ripple-surface'));
var author$project$Material$Ripple$ripple = function (config) {
	return A3(
		elm$html$Html$node,
		'mdc-ripple',
		_Utils_ap(
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Ripple$dataUnboundedAttr(config),
						author$project$Material$Ripple$colorCs(config),
						author$project$Material$Ripple$rippleSurface,
						elm$core$Maybe$Just(
						A2(elm$html$Html$Attributes$style, 'position', 'absolute')),
						elm$core$Maybe$Just(
						A2(elm$html$Html$Attributes$style, 'top', '0')),
						elm$core$Maybe$Just(
						A2(elm$html$Html$Attributes$style, 'left', '0')),
						elm$core$Maybe$Just(
						A2(elm$html$Html$Attributes$style, 'right', '0')),
						elm$core$Maybe$Just(
						A2(elm$html$Html$Attributes$style, 'bottom', '0'))
					])),
			config.additionalAttributes),
		_List_Nil);
};
var author$project$Material$Ripple$rippleConfig = {additionalAttributes: _List_Nil, color: elm$core$Maybe$Nothing, unbounded: false};
var author$project$Material$Ripple$unboundedRipple = function (config) {
	return author$project$Material$Ripple$ripple(
		_Utils_update(
			config,
			{unbounded: true}));
};
var author$project$Demo$Ripple$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Bounded Ripple')
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$Ripple$demoBox,
				_List_fromArray(
					[
						author$project$Material$Ripple$ripple(author$project$Material$Ripple$rippleConfig),
						elm$html$Html$text('Interact with me!')
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Unbounded Ripple')
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$Ripple$demoIcon,
				_List_fromArray(
					[
						author$project$Material$Ripple$unboundedRipple(author$project$Material$Ripple$rippleConfig),
						elm$html$Html$text('favorite')
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Theme Color: Primary')
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$Ripple$demoBox,
				_List_fromArray(
					[
						author$project$Material$Ripple$ripple(
						_Utils_update(
							author$project$Material$Ripple$rippleConfig,
							{
								color: elm$core$Maybe$Just(author$project$Material$Ripple$PrimaryColor)
							})),
						elm$html$Html$text('Primary')
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Theme Color: Secondary')
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$Ripple$demoBox,
				_List_fromArray(
					[
						author$project$Material$Ripple$ripple(
						_Utils_update(
							author$project$Material$Ripple$rippleConfig,
							{
								color: elm$core$Maybe$Just(author$project$Material$Ripple$AccentColor)
							})),
						elm$html$Html$text('Secondary')
					]))
			]),
		hero: _List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$Ripple$demoBox,
				_List_fromArray(
					[
						author$project$Material$Ripple$ripple(author$project$Material$Ripple$rippleConfig),
						elm$html$Html$text('Click here!')
					]))
			]),
		prelude: 'Ripples are visual representations used to communicate the status of a component or interactive element.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/ripples/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-states'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple')
		},
		title: 'Ripple'
	};
};
var author$project$Demo$Selects$SetEnhancedValue = function (a) {
	return {$: 'SetEnhancedValue', a: a};
};
var author$project$Material$Select$Enhanced$Filled = {$: 'Filled'};
var author$project$Material$Select$Enhanced$enhancedSelectConfig = {additionalAttributes: _List_Nil, disabled: false, label: '', variant: author$project$Material$Select$Enhanced$Filled, width: elm$core$Maybe$Nothing};
var author$project$Material$Select$Enhanced$Outlined = {$: 'Outlined'};
var author$project$Material$Select$Enhanced$disabledCs = function (_n0) {
	var disabled = _n0.disabled;
	return disabled ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-select--disabled')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Select$Enhanced$dropdownIconElt = A2(
	elm$html$Html$i,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-select__dropdown-icon')
		]),
	_List_Nil);
var author$project$Material$Select$Enhanced$floatingLabelElt = function (_n0) {
	var label = _n0.label;
	return A2(
		elm$html$Html$label,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-floating-label')
			]),
		_List_fromArray(
			[
				elm$html$Html$text(label)
			]));
};
var author$project$Material$Select$Enhanced$hiddenInputElt = A2(
	elm$html$Html$input,
	_List_fromArray(
		[
			elm$html$Html$Attributes$type_('hidden')
		]),
	_List_Nil);
var author$project$Material$Select$Enhanced$lineRippleElt = A2(
	elm$html$Html$label,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-line-ripple')
		]),
	_List_Nil);
var author$project$Material$Select$Enhanced$listElt = function (nodes) {
	return A2(author$project$Material$List$list, author$project$Material$List$listConfig, nodes);
};
var author$project$Material$Select$Enhanced$menuElt = function (nodes) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-select__menu mdc-menu mdc-menu-surface')
			]),
		_List_fromArray(
			[
				author$project$Material$Select$Enhanced$listElt(nodes)
			]));
};
var author$project$Material$Select$Enhanced$notchedOutlineElt = function (_n0) {
	var label = _n0.label;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-notched-outline')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-notched-outline__leading')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-notched-outline__notch')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('mdc-floating-label')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(label)
							]))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-notched-outline__trailing')
					]),
				_List_Nil)
			]));
};
var author$project$Material$Select$Enhanced$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-select'));
var author$project$Material$Select$Enhanced$selectedTextElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-select__selected-text')
		]),
	_List_Nil);
var author$project$Material$Select$Enhanced$variantCs = function (_n0) {
	var variant = _n0.variant;
	return _Utils_eq(variant, author$project$Material$Select$Enhanced$Outlined) ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-select--outlined')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Select$Enhanced$enhancedSelect = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-enhanced-select',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Select$Enhanced$rootCs,
							author$project$Material$Select$Enhanced$variantCs(config),
							author$project$Material$Select$Enhanced$disabledCs(config)
						])),
				config.additionalAttributes),
			elm$core$List$concat(
				_List_fromArray(
					[
						_List_fromArray(
						[
							author$project$Material$Select$Enhanced$hiddenInputElt,
							author$project$Material$Select$Enhanced$dropdownIconElt,
							author$project$Material$Select$Enhanced$selectedTextElt,
							author$project$Material$Select$Enhanced$menuElt(nodes)
						]),
						_Utils_eq(config.variant, author$project$Material$Select$Enhanced$Outlined) ? _List_fromArray(
						[
							author$project$Material$Select$Enhanced$notchedOutlineElt(config)
						]) : _List_fromArray(
						[
							author$project$Material$Select$Enhanced$floatingLabelElt(config),
							author$project$Material$Select$Enhanced$lineRippleElt
						])
					])));
	});
var author$project$Material$Select$Enhanced$filledEnhancedSelect = F2(
	function (config, nodes) {
		return A2(
			author$project$Material$Select$Enhanced$enhancedSelect,
			_Utils_update(
				config,
				{variant: author$project$Material$Select$Enhanced$Filled}),
			nodes);
	});
var author$project$Material$Select$Enhanced$listItemActivatedCs = function (_n0) {
	var activated = _n0.activated;
	return activated ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list-item--activated')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Select$Enhanced$listItemClickHandler = function (_n0) {
	var onClick = _n0.onClick;
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, onClick);
};
var author$project$Material$Select$Enhanced$listItemCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-list-item'));
var author$project$Material$Select$Enhanced$listItemDisabledCs = function (_n0) {
	var disabled = _n0.disabled;
	return disabled ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list-item--disabled')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Select$Enhanced$listItemSelectedCs = function (_n0) {
	var selected = _n0.selected;
	return selected ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-list-item--selected')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Select$Enhanced$selectItem = F2(
	function (config, nodes) {
		return A2(
			elm$html$Html$li,
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Select$Enhanced$listItemCs,
							author$project$Material$Select$Enhanced$listItemDisabledCs(config),
							author$project$Material$Select$Enhanced$listItemSelectedCs(config),
							author$project$Material$Select$Enhanced$listItemActivatedCs(config),
							author$project$Material$Select$Enhanced$listItemClickHandler(config)
						])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Material$Select$Enhanced$selectItemConfig = {activated: false, additionalAttributes: _List_Nil, disabled: false, onClick: elm$core$Maybe$Nothing, selected: false};
var author$project$Demo$Selects$enhancedFilledSelects = function (model) {
	var selectItemConfig_ = function (value) {
		return _Utils_update(
			author$project$Material$Select$Enhanced$selectItemConfig,
			{
				activated: _Utils_eq(model.enhancedValue, value),
				onClick: elm$core$Maybe$Just(
					author$project$Demo$Selects$SetEnhancedValue(value))
			});
	};
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Filled Enhanced')
					])),
				A2(
				author$project$Material$Select$Enhanced$filledEnhancedSelect,
				_Utils_update(
					author$project$Material$Select$Enhanced$enhancedSelectConfig,
					{label: 'Fruit'}),
				_List_fromArray(
					[
						A2(
						author$project$Material$List$list,
						author$project$Material$List$listConfig,
						_List_fromArray(
							[
								A2(
								author$project$Material$Select$Enhanced$selectItem,
								selectItemConfig_(''),
								_List_fromArray(
									[
										elm$html$Html$text('')
									])),
								A2(
								author$project$Material$Select$Enhanced$selectItem,
								selectItemConfig_('Apple'),
								_List_fromArray(
									[
										elm$html$Html$text('Apple')
									])),
								A2(
								author$project$Material$Select$Enhanced$selectItem,
								selectItemConfig_('Orange'),
								_List_fromArray(
									[
										elm$html$Html$text('Orange')
									])),
								A2(
								author$project$Material$Select$Enhanced$selectItem,
								selectItemConfig_('Banana'),
								_List_fromArray(
									[
										elm$html$Html$text('Banana')
									]))
							]))
					]))
			]));
};
var author$project$Material$Select$SelectOption = function (a) {
	return {$: 'SelectOption', a: a};
};
var author$project$Material$Select$disabledAttr = function (_n0) {
	var disabled = _n0.disabled;
	return elm$html$Html$Attributes$disabled(disabled);
};
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var author$project$Material$Select$optionValueAttr = function (_n0) {
	var value = _n0.value;
	return elm$html$Html$Attributes$value(value);
};
var elm$html$Html$Attributes$selected = elm$html$Html$Attributes$boolProperty('selected');
var author$project$Material$Select$selectedAttr = F2(
	function (topConfig, config) {
		return elm$html$Html$Attributes$selected(
			_Utils_eq(
				A2(elm$core$Maybe$withDefault, '', topConfig.value),
				config.value));
	});
var elm$html$Html$option = _VirtualDom_node('option');
var author$project$Material$Select$selectOption = F2(
	function (config, nodes) {
		return author$project$Material$Select$SelectOption(
			function (topConfig) {
				return A2(
					elm$html$Html$option,
					_Utils_ap(
						_List_fromArray(
							[
								A2(author$project$Material$Select$selectedAttr, topConfig, config),
								author$project$Material$Select$disabledAttr(config),
								author$project$Material$Select$optionValueAttr(config)
							]),
						config.additionalAttributes),
					nodes);
			});
	});
var author$project$Material$Select$selectOptionConfig = {additionalAttributes: _List_Nil, disabled: false, value: ''};
var author$project$Demo$Selects$items = _List_fromArray(
	[
		A2(
		author$project$Material$Select$selectOption,
		_Utils_update(
			author$project$Material$Select$selectOptionConfig,
			{value: ''}),
		_List_fromArray(
			[
				elm$html$Html$text('')
			])),
		A2(
		author$project$Material$Select$selectOption,
		_Utils_update(
			author$project$Material$Select$selectOptionConfig,
			{value: 'Apple'}),
		_List_fromArray(
			[
				elm$html$Html$text('Apple')
			])),
		A2(
		author$project$Material$Select$selectOption,
		_Utils_update(
			author$project$Material$Select$selectOptionConfig,
			{value: 'Orange'}),
		_List_fromArray(
			[
				elm$html$Html$text('Orange')
			])),
		A2(
		author$project$Material$Select$selectOption,
		_Utils_update(
			author$project$Material$Select$selectOptionConfig,
			{value: 'Banana'}),
		_List_fromArray(
			[
				elm$html$Html$text('Banana')
			]))
	]);
var author$project$Demo$Selects$marginRight = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'margin-right', '5rem')
	]);
var author$project$Material$Select$Filled = {$: 'Filled'};
var author$project$Material$Select$Outlined = {$: 'Outlined'};
var author$project$Material$Select$dropdownIconElt = A2(
	elm$html$Html$i,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-select__dropdown-icon')
		]),
	_List_Nil);
var author$project$Material$Select$floatingLabelElt = function (_n0) {
	var label = _n0.label;
	var value = _n0.value;
	return A2(
		elm$html$Html$label,
		_List_fromArray(
			[
				(A2(elm$core$Maybe$withDefault, '', value) !== '') ? elm$html$Html$Attributes$class('mdc-floating-label mdc-floating-label--float-above') : elm$html$Html$Attributes$class('mdc-floating-label')
			]),
		_List_fromArray(
			[
				elm$html$Html$text(label)
			]));
};
var author$project$Material$Select$lineRippleElt = A2(
	elm$html$Html$label,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-line-ripple')
		]),
	_List_Nil);
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var author$project$Material$Select$changeHandler = function (_n0) {
	var onChange = _n0.onChange;
	return A2(
		elm$core$Maybe$map,
		function (f) {
			return A2(
				elm$html$Html$Events$preventDefaultOn,
				'change',
				A2(
					elm$json$Json$Decode$map,
					function (s) {
						return _Utils_Tuple2(
							f(s),
							true);
					},
					elm$html$Html$Events$targetValue));
		},
		onChange);
};
var author$project$Material$Select$nativeControlCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-select__native-control'));
var author$project$Material$Select$valueAttr = function (_n0) {
	var value = _n0.value;
	return A2(elm$core$Maybe$map, elm$html$Html$Attributes$value, value);
};
var elm$html$Html$select = _VirtualDom_node('select');
var author$project$Material$Select$nativeControlElt = F2(
	function (config, nodes) {
		return A2(
			elm$html$Html$select,
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Select$nativeControlCs,
						author$project$Material$Select$valueAttr(config),
						author$project$Material$Select$changeHandler(config)
					])),
			A2(
				elm$core$List$map,
				function (_n0) {
					var f = _n0.a;
					return f(config);
				},
				nodes));
	});
var author$project$Material$Select$notchedOutlineElt = function (_n0) {
	var label = _n0.label;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-notched-outline')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-notched-outline__leading')
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-notched-outline__notch')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('mdc-floating-label')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(label)
							]))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-notched-outline__trailing')
					]),
				_List_Nil)
			]));
};
var author$project$Material$Select$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-select'));
var author$project$Material$Select$variantCs = function (variant) {
	return _Utils_eq(variant, author$project$Material$Select$Outlined) ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-select--outlined')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Select$select = F3(
	function (variant, config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-select',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Select$rootCs,
							author$project$Material$Select$variantCs(variant)
						])),
				config.additionalAttributes),
			elm$core$List$concat(
				_List_fromArray(
					[
						_List_fromArray(
						[
							author$project$Material$Select$dropdownIconElt,
							A2(author$project$Material$Select$nativeControlElt, config, nodes)
						]),
						_Utils_eq(variant, author$project$Material$Select$Outlined) ? _List_fromArray(
						[
							author$project$Material$Select$notchedOutlineElt(config)
						]) : _List_fromArray(
						[
							author$project$Material$Select$floatingLabelElt(config),
							author$project$Material$Select$lineRippleElt
						])
					])));
	});
var author$project$Material$Select$filledSelect = F2(
	function (config, nodes) {
		return A3(author$project$Material$Select$select, author$project$Material$Select$Filled, config, nodes);
	});
var author$project$Material$Select$selectConfig = {additionalAttributes: _List_Nil, label: '', onChange: elm$core$Maybe$Nothing, value: elm$core$Maybe$Nothing};
var author$project$Demo$Selects$filledSelects = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Filled')
					])),
				A2(
				author$project$Material$Select$filledSelect,
				_Utils_update(
					author$project$Material$Select$selectConfig,
					{additionalAttributes: author$project$Demo$Selects$marginRight, label: 'Fruit'}),
				author$project$Demo$Selects$items)
			]));
};
var author$project$Demo$Selects$SetValue = function (a) {
	return {$: 'SetValue', a: a};
};
var author$project$Demo$Selects$heroSelects = function (model) {
	return A2(
		author$project$Material$Select$filledSelect,
		_Utils_update(
			author$project$Material$Select$selectConfig,
			{
				label: 'Fruit',
				onChange: elm$core$Maybe$Just(author$project$Demo$Selects$SetValue),
				value: elm$core$Maybe$Just(model.value)
			}),
		author$project$Demo$Selects$items);
};
var author$project$Material$Select$outlinedSelect = F2(
	function (config, nodes) {
		return A3(author$project$Material$Select$select, author$project$Material$Select$Outlined, config, nodes);
	});
var author$project$Demo$Selects$outlinedSelects = function (model) {
	return A2(
		author$project$Material$Select$outlinedSelect,
		_Utils_update(
			author$project$Material$Select$selectConfig,
			{additionalAttributes: author$project$Demo$Selects$marginRight, label: 'Fruit'}),
		author$project$Demo$Selects$items);
};
var author$project$Demo$Selects$selectRow = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', '-ms-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-align', 'start'),
		A2(elm$html$Html$Attributes$style, 'align-items', 'flex-start'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-pack', 'start'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'flex-start'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-wrap', 'wrap'),
		A2(elm$html$Html$Attributes$style, 'flex-wrap', 'wrap')
	]);
var author$project$Demo$Selects$shapedFilledSelects = function (model) {
	return A2(
		author$project$Material$Select$filledSelect,
		_Utils_update(
			author$project$Material$Select$selectConfig,
			{
				additionalAttributes: A2(
					elm$core$List$cons,
					A2(elm$html$Html$Attributes$style, 'border-radius', '17.92px 17.92px 0 0'),
					author$project$Demo$Selects$marginRight),
				label: 'Fruit'
			}),
		author$project$Demo$Selects$items);
};
var author$project$Demo$Selects$shapedOutlinedSelects = function (model) {
	return A2(
		author$project$Material$Select$outlinedSelect,
		_Utils_update(
			author$project$Material$Select$selectConfig,
			{additionalAttributes: author$project$Demo$Selects$marginRight, label: 'Fruit'}),
		author$project$Demo$Selects$items);
};
var author$project$Demo$Selects$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$Selects$selectRow,
				_List_fromArray(
					[
						author$project$Demo$Selects$filledSelects(model),
						author$project$Demo$Selects$enhancedFilledSelects(model)
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Outlined')
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$Selects$selectRow,
				_List_fromArray(
					[
						author$project$Demo$Selects$outlinedSelects(model)
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Shaped Filled')
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$Selects$selectRow,
				_List_fromArray(
					[
						author$project$Demo$Selects$shapedFilledSelects(model)
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Shaped Outlined (TODO)')
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$Selects$selectRow,
				_List_fromArray(
					[
						author$project$Demo$Selects$shapedOutlinedSelects(model)
					]))
			]),
		hero: _List_fromArray(
			[
				author$project$Demo$Selects$heroSelects(model)
			]),
		prelude: 'Selects allow users to select from a single-option menu. It functions as a wrapper around the browser\'s native <select> element.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/input-controls/select-menus/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-text-fields'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-select')
		},
		title: 'Select'
	};
};
var author$project$Material$TopAppBar$ShortCollapsed = {$: 'ShortCollapsed'};
var author$project$Material$TopAppBar$shortCollapsedTopAppBar = F2(
	function (config, nodes) {
		return A3(author$project$Material$TopAppBar$genericTopAppBar, author$project$Material$TopAppBar$ShortCollapsed, config, nodes);
	});
var author$project$Material$TopAppBar$shortFixedAdjust = elm$html$Html$Attributes$class('mdc-top-app-bar--short-fixed-adjust');
var author$project$Demo$ShortCollapsedTopAppBar$view = function (model) {
	return {
		fixedAdjust: author$project$Material$TopAppBar$shortFixedAdjust,
		topAppBar: A2(
			author$project$Material$TopAppBar$shortCollapsedTopAppBar,
			author$project$Material$TopAppBar$topAppBarConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$TopAppBar$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignStart]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$navigationIcon])
										}),
									'menu')
								])),
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignEnd]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'file_download')
								]))
						]))
				]))
	};
};
var author$project$Material$TopAppBar$Short = {$: 'Short'};
var author$project$Material$TopAppBar$shortTopAppBar = F2(
	function (config, nodes) {
		return A3(author$project$Material$TopAppBar$genericTopAppBar, author$project$Material$TopAppBar$Short, config, nodes);
	});
var author$project$Demo$ShortTopAppBar$view = function (model) {
	return {
		fixedAdjust: author$project$Material$TopAppBar$shortFixedAdjust,
		topAppBar: A2(
			author$project$Material$TopAppBar$shortTopAppBar,
			author$project$Material$TopAppBar$topAppBarConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$TopAppBar$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignStart]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$navigationIcon])
										}),
									'menu'),
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[author$project$Material$TopAppBar$title]),
									_List_fromArray(
										[
											elm$html$Html$text('Short')
										]))
								])),
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignEnd]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'file_download')
								]))
						]))
				]))
	};
};
var author$project$Demo$Slider$Change = F2(
	function (a, b) {
		return {$: 'Change', a: a, b: b};
	});
var author$project$Material$Slider$ariaValueMaxAttr = function (_n0) {
	var max = _n0.max;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'aria-valuemax',
			elm$core$String$fromFloat(max)));
};
var author$project$Material$Slider$ariaValueMinAttr = function (_n0) {
	var min = _n0.min;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'aria-valuemin',
			elm$core$String$fromFloat(min)));
};
var author$project$Material$Slider$ariaValuenowAttr = function (_n0) {
	var value = _n0.value;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'aria-valuenow',
			elm$core$String$fromFloat(value)));
};
var elm$json$Json$Decode$float = _Json_decodeFloat;
var author$project$Material$Slider$changeHandler = function (config) {
	return A2(
		elm$core$Maybe$map,
		function (handler) {
			return A2(
				elm$html$Html$Events$on,
				'MDCSlider:change',
				A2(
					elm$json$Json$Decode$map,
					handler,
					A2(
						elm$json$Json$Decode$at,
						_List_fromArray(
							['target', 'value']),
						elm$json$Json$Decode$float)));
		},
		config.onChange);
};
var author$project$Material$Slider$disabledAttr = function (_n0) {
	var disabled = _n0.disabled;
	return disabled ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'disabled', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Slider$discreteAttr = function (_n0) {
	var discrete = _n0.discrete;
	return discrete ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'discrete', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Slider$discreteCs = function (_n0) {
	var discrete = _n0.discrete;
	return discrete ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-slider--discrete')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Slider$displayCss = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$style, 'display', 'block'));
var author$project$Material$Slider$displayMarkersCs = function (_n0) {
	var discrete = _n0.discrete;
	var displayMarkers = _n0.displayMarkers;
	return (discrete && displayMarkers) ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-slider--display-markers')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Slider$maxAttr = function (_n0) {
	var max = _n0.max;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'max',
			elm$core$String$fromFloat(max)));
};
var author$project$Material$Slider$minAttr = function (_n0) {
	var min = _n0.min;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'min',
			elm$core$String$fromFloat(min)));
};
var author$project$Material$Slider$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-slider'));
var author$project$Material$Slider$sliderRoleAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'role', 'slider'));
var author$project$Material$Slider$stepAttr = function (_n0) {
	var step = _n0.step;
	var discrete = _n0.discrete;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'step',
			elm$core$String$fromFloat(
				A2(
					elm$core$Maybe$withDefault,
					discrete ? 1 : 0,
					step))));
};
var author$project$Material$Slider$tabIndexAttr = elm$core$Maybe$Just(
	elm$html$Html$Attributes$tabindex(0));
var author$project$Material$Slider$focusRingElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-slider__focus-ring')
		]),
	_List_Nil);
var author$project$Material$Slider$pinValueMarkerElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-slider__pin-value-marker')
		]),
	_List_Nil);
var author$project$Material$Slider$pinElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-slider__pin')
		]),
	_List_fromArray(
		[author$project$Material$Slider$pinValueMarkerElt]));
var elm$svg$Svg$circle = elm$svg$Svg$trustedNode('circle');
var elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var author$project$Material$Slider$thumbElt = A2(
	elm$svg$Svg$svg,
	_List_fromArray(
		[
			elm$svg$Svg$Attributes$class('mdc-slider__thumb'),
			elm$svg$Svg$Attributes$width('21'),
			elm$svg$Svg$Attributes$height('21')
		]),
	_List_fromArray(
		[
			A2(
			elm$svg$Svg$circle,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$cx('10.5'),
					elm$svg$Svg$Attributes$cy('10.5'),
					elm$svg$Svg$Attributes$r('7.875')
				]),
			_List_Nil)
		]));
var author$project$Material$Slider$thumbContainerElt = function (_n0) {
	var discrete = _n0.discrete;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-slider__thumb-container')
			]),
		discrete ? _List_fromArray(
			[author$project$Material$Slider$pinElt, author$project$Material$Slider$thumbElt, author$project$Material$Slider$focusRingElt]) : _List_fromArray(
			[author$project$Material$Slider$thumbElt, author$project$Material$Slider$focusRingElt]));
};
var author$project$Material$Slider$trackElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-slider__track')
		]),
	_List_Nil);
var author$project$Material$Slider$trackMarkerContainerElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-slider__track-marker-container')
		]),
	_List_Nil);
var author$project$Material$Slider$trackContainerElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-slider__track-container')
		]),
	_List_fromArray(
		[author$project$Material$Slider$trackElt, author$project$Material$Slider$trackMarkerContainerElt]));
var author$project$Material$Slider$valueAttr = function (_n0) {
	var value = _n0.value;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'value',
			elm$core$String$fromFloat(value)));
};
var author$project$Material$Slider$slider = function (config) {
	return A3(
		elm$html$Html$node,
		'mdc-slider',
		_Utils_ap(
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Slider$rootCs,
						author$project$Material$Slider$displayCss,
						author$project$Material$Slider$discreteCs(config),
						author$project$Material$Slider$displayMarkersCs(config),
						author$project$Material$Slider$tabIndexAttr,
						author$project$Material$Slider$sliderRoleAttr,
						author$project$Material$Slider$discreteAttr(config),
						author$project$Material$Slider$valueAttr(config),
						author$project$Material$Slider$minAttr(config),
						author$project$Material$Slider$maxAttr(config),
						author$project$Material$Slider$stepAttr(config),
						author$project$Material$Slider$disabledAttr(config),
						author$project$Material$Slider$ariaValueMinAttr(config),
						author$project$Material$Slider$ariaValueMaxAttr(config),
						author$project$Material$Slider$ariaValuenowAttr(config),
						author$project$Material$Slider$changeHandler(config)
					])),
			config.additionalAttributes),
		_List_fromArray(
			[
				author$project$Material$Slider$trackContainerElt,
				author$project$Material$Slider$thumbContainerElt(config)
			]));
};
var author$project$Material$Slider$sliderConfig = {additionalAttributes: _List_Nil, disabled: false, discrete: false, displayMarkers: false, max: 100, min: 0, onChange: elm$core$Maybe$Nothing, step: elm$core$Maybe$Nothing, value: 0};
var author$project$Demo$Slider$continuousSlider = function (model) {
	var id = 'continuous-slider';
	return author$project$Material$Slider$slider(
		_Utils_update(
			author$project$Material$Slider$sliderConfig,
			{
				max: 50,
				min: 0,
				onChange: elm$core$Maybe$Just(
					author$project$Demo$Slider$Change(id)),
				value: A2(
					elm$core$Maybe$withDefault,
					0,
					A2(elm$core$Dict$get, id, model.sliders))
			}));
};
var author$project$Demo$Slider$discreteSlider = function (model) {
	var id = 'discrete-slider';
	return author$project$Material$Slider$slider(
		_Utils_update(
			author$project$Material$Slider$sliderConfig,
			{
				discrete: true,
				max: 50,
				min: 0,
				onChange: elm$core$Maybe$Just(
					author$project$Demo$Slider$Change(id)),
				step: elm$core$Maybe$Just(1),
				value: A2(
					elm$core$Maybe$withDefault,
					0,
					A2(elm$core$Dict$get, id, model.sliders))
			}));
};
var author$project$Demo$Slider$discreteSliderWithTickMarks = function (model) {
	var id = 'discrete-slider-with-tick-marks';
	return author$project$Material$Slider$slider(
		_Utils_update(
			author$project$Material$Slider$sliderConfig,
			{
				discrete: true,
				displayMarkers: true,
				max: 50,
				min: 0,
				onChange: elm$core$Maybe$Just(
					author$project$Demo$Slider$Change(id)),
				step: elm$core$Maybe$Just(1),
				value: A2(
					elm$core$Maybe$withDefault,
					0,
					A2(elm$core$Dict$get, id, model.sliders))
			}));
};
var author$project$Demo$Slider$heroSlider = function (model) {
	var id = 'hero-slider';
	return author$project$Material$Slider$slider(
		_Utils_update(
			author$project$Material$Slider$sliderConfig,
			{
				onChange: elm$core$Maybe$Just(
					author$project$Demo$Slider$Change(id)),
				value: A2(
					elm$core$Maybe$withDefault,
					0,
					A2(elm$core$Dict$get, id, model.sliders))
			}));
};
var author$project$Demo$Slider$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Continuous')
					])),
				author$project$Demo$Slider$continuousSlider(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Discrete')
					])),
				author$project$Demo$Slider$discreteSlider(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Discrete with Tick Marks')
					])),
				author$project$Demo$Slider$discreteSliderWithTickMarks(model)
			]),
		hero: _List_fromArray(
			[
				author$project$Demo$Slider$heroSlider(model)
			]),
		prelude: 'Sliders let users select from a range of values by moving the slider thumb.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/input-controls/sliders/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-sliders'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider')
		},
		title: 'Slider'
	};
};
var author$project$Demo$Snackbar$ShowBaseline = {$: 'ShowBaseline'};
var author$project$Demo$Snackbar$ShowLeading = {$: 'ShowLeading'};
var author$project$Demo$Snackbar$ShowStacked = {$: 'ShowStacked'};
var author$project$Demo$Snackbar$buttonMargin = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'margin', '14px')
	]);
var elm$html$Html$button = _VirtualDom_node('button');
var author$project$Demo$Snackbar$heroMessage = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'position', 'relative'),
			A2(elm$html$Html$Attributes$style, 'left', '0'),
			A2(elm$html$Html$Attributes$style, 'transform', 'none'),
			elm$html$Html$Attributes$class('mdc-snackbar mdc-snackbar--open')
		]),
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-snackbar__surface')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('mdc-snackbar__label'),
							A2(elm$html$Html$Attributes$attribute, 'role', 'status'),
							A2(elm$html$Html$Attributes$attribute, 'aria-live', 'polite'),
							A2(elm$html$Html$Attributes$style, 'color', 'hsla(0,0%,100%,.87)')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Can\'t send photo. Retry in 5 seconds.')
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('mdc-snackbar__actions')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$button,
							_List_fromArray(
								[
									elm$html$Html$Attributes$type_('button'),
									elm$html$Html$Attributes$class('mdc-button'),
									elm$html$Html$Attributes$class('mdc-snackbar__action')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Retry')
								])),
							A2(
							elm$html$Html$button,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('mdc-icon-button'),
									elm$html$Html$Attributes$class('mdc-snackbar__dismiss'),
									elm$html$Html$Attributes$class('material-icons')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('close')
								]))
						]))
				]))
		]));
var author$project$Material$Snackbar$Close = {$: 'Close'};
var author$project$Material$Snackbar$closedHandler = function (lift) {
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Events$on,
			'MDCSnackbar:closed',
			elm$json$Json$Decode$succeed(
				lift(author$project$Material$Snackbar$Close))));
};
var author$project$Material$Snackbar$leadingCs = function (_n0) {
	var leading = _n0.leading;
	return leading ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-snackbar--leading')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Snackbar$messageAttr = function (_n0) {
	var messageId = _n0.messageId;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$Attributes$attribute,
			'message',
			elm$core$String$fromInt(messageId)));
};
var author$project$Material$Snackbar$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-snackbar'));
var author$project$Material$Snackbar$stackedCs = function (_n0) {
	var stacked = _n0.stacked;
	return stacked ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-snackbar--stacked')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Snackbar$actionButtonClickHandler = function (_n0) {
	var onActionButtonClick = _n0.onActionButtonClick;
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, onActionButtonClick);
};
var author$project$Material$Snackbar$actionButtonCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-button mdc-snackbar__action'));
var author$project$Material$Snackbar$actionButtonElt = function (message) {
	var actionButton = message.actionButton;
	return A2(
		elm$core$Maybe$map,
		function (actionButtonLabel) {
			return A2(
				elm$html$Html$button,
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Snackbar$actionButtonCs,
							author$project$Material$Snackbar$actionButtonClickHandler(message)
						])),
				_List_fromArray(
					[
						elm$html$Html$text(actionButtonLabel)
					]));
		},
		actionButton);
};
var author$project$Material$Snackbar$actionIconClickHandler = function (_n0) {
	var onActionIconClick = _n0.onActionIconClick;
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onClick, onActionIconClick);
};
var author$project$Material$Snackbar$actionIconCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-icon-button mdc-snackbar__dismiss material-icons'));
var author$project$Material$Snackbar$actionIconElt = function (message) {
	var actionIcon = message.actionIcon;
	return A2(
		elm$core$Maybe$map,
		function (actionIconLabel) {
			return A2(
				elm$html$Html$i,
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Snackbar$actionIconCs,
							author$project$Material$Snackbar$actionIconClickHandler(message)
						])),
				_List_fromArray(
					[
						elm$html$Html$text(actionIconLabel)
					]));
		},
		actionIcon);
};
var author$project$Material$Snackbar$actionsElt = function (message) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-snackbar__actions')
			]),
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					author$project$Material$Snackbar$actionButtonElt(message),
					author$project$Material$Snackbar$actionIconElt(message)
				])));
};
var author$project$Material$Snackbar$ariaPoliteLiveAttr = A2(elm$html$Html$Attributes$attribute, 'aria-live', 'polite');
var author$project$Material$Snackbar$ariaStatusRoleAttr = A2(elm$html$Html$Attributes$attribute, 'aria-role', 'status');
var author$project$Material$Snackbar$labelElt = function (_n0) {
	var label = _n0.label;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-snackbar__label'),
				author$project$Material$Snackbar$ariaStatusRoleAttr,
				author$project$Material$Snackbar$ariaPoliteLiveAttr
			]),
		_List_fromArray(
			[
				elm$html$Html$text(label)
			]));
};
var author$project$Material$Snackbar$surfaceElt = function (message) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-snackbar__surface')
			]),
		_List_fromArray(
			[
				author$project$Material$Snackbar$labelElt(message),
				author$project$Material$Snackbar$actionsElt(message)
			]));
};
var elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var author$project$Material$Snackbar$timeoutAttr = function (_n0) {
	var timeoutMs = _n0.timeoutMs;
	var normalizedTimeoutMs = elm$core$String$fromFloat(
		A3(elm$core$Basics$clamp, 4000, 10000, timeoutMs));
	return elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'timeout', normalizedTimeoutMs));
};
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$Snackbar$snackbar = F3(
	function (lift, config, queue) {
		var message = A2(
			elm$core$Maybe$withDefault,
			author$project$Material$Snackbar$snackbarMessage,
			elm$core$List$head(queue.messages));
		return A3(
			elm$html$Html$node,
			'mdc-snackbar',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$Snackbar$rootCs,
							author$project$Material$Snackbar$messageAttr(queue),
							author$project$Material$Snackbar$leadingCs(message),
							author$project$Material$Snackbar$stackedCs(message),
							author$project$Material$Snackbar$timeoutAttr(message),
							author$project$Material$Snackbar$closedHandler(lift)
						])),
				config.additionalAttributes),
			_List_fromArray(
				[
					author$project$Material$Snackbar$surfaceElt(message)
				]));
	});
var author$project$Material$Snackbar$snackbarConfig = {additionalAttributes: _List_Nil};
var author$project$Demo$Snackbar$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				author$project$Material$Button$raisedButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{
						additionalAttributes: author$project$Demo$Snackbar$buttonMargin,
						onClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$ShowBaseline)
					}),
				'Baseline'),
				elm$html$Html$text(' '),
				A2(
				author$project$Material$Button$raisedButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{
						additionalAttributes: author$project$Demo$Snackbar$buttonMargin,
						onClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$ShowLeading)
					}),
				'Leading'),
				elm$html$Html$text(' '),
				A2(
				author$project$Material$Button$raisedButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{
						additionalAttributes: author$project$Demo$Snackbar$buttonMargin,
						onClick: elm$core$Maybe$Just(author$project$Demo$Snackbar$ShowStacked)
					}),
				'Stacked'),
				A3(author$project$Material$Snackbar$snackbar, author$project$Demo$Snackbar$SnackbarMsg, author$project$Material$Snackbar$snackbarConfig, model.queue)
			]),
		hero: _List_fromArray(
			[author$project$Demo$Snackbar$heroMessage]),
		prelude: 'Snackbars provide brief feedback about an operation through a message at the bottom of the screen.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/snackbars/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-snackbar'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar')
		},
		title: 'Snackbar'
	};
};
var author$project$Demo$StandardTopAppBar$view = function (model) {
	return {
		fixedAdjust: author$project$Material$TopAppBar$fixedAdjust,
		topAppBar: A2(
			author$project$Material$TopAppBar$topAppBar,
			author$project$Material$TopAppBar$topAppBarConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$TopAppBar$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignStart]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$navigationIcon])
										}),
									'menu'),
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[author$project$Material$TopAppBar$title]),
									_List_fromArray(
										[
											elm$html$Html$text('Standard')
										]))
								])),
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignEnd]),
							_List_fromArray(
								[
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'file_download'),
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'print'),
									A2(
									author$project$Material$Icon$icon,
									_Utils_update(
										author$project$Material$Icon$iconConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$actionItem])
										}),
									'bookmark')
								]))
						]))
				]))
	};
};
var author$project$Demo$Startpage$imageListItems = _List_fromArray(
	[
		{icon: 'images/buttons_180px.svg', subtitle: 'Raised and flat buttons', title: 'Button', url: author$project$Demo$Url$Button},
		{icon: 'images/cards_180px.svg', subtitle: 'Various card layout styles', title: 'Card', url: author$project$Demo$Url$Card},
		{icon: 'images/checkbox_180px.svg', subtitle: 'Multi-selection controls', title: 'Checkbox', url: author$project$Demo$Url$Checkbox},
		{icon: 'images/chips_180px.svg', subtitle: 'Chips', title: 'Chips', url: author$project$Demo$Url$Chips},
		{icon: 'images/dialog_180px.svg', subtitle: 'Secondary text', title: 'Dialog', url: author$project$Demo$Url$Dialog},
		{icon: 'images/drawer_180px.svg', subtitle: 'Various drawer styles', title: 'Drawer', url: author$project$Demo$Url$Drawer},
		{icon: 'images/elevation_180px.svg', subtitle: 'Shadow for different elevations', title: 'Elevation', url: author$project$Demo$Url$Elevation},
		{icon: 'images/floating_action_button_180px.svg', subtitle: 'The primary action in an application', title: 'FAB', url: author$project$Demo$Url$Fab},
		{icon: 'images/icon_button_180px.svg', subtitle: 'Toggling icon states', title: 'Icon Button', url: author$project$Demo$Url$IconButton},
		{icon: 'images/image_list_180px.svg', subtitle: 'An Image List consists of several items, each containing an image and optionally supporting content (i.e. a text label)', title: 'Image List', url: author$project$Demo$Url$ImageList},
		{icon: 'images/layout_grid_180px.svg', subtitle: 'Grid and gutter support', title: 'Layout Grid', url: author$project$Demo$Url$LayoutGrid},
		{icon: 'images/list_180px.svg', subtitle: 'Item layouts in lists', title: 'List', url: author$project$Demo$Url$List},
		{icon: 'images/linear_progress_180px.svg', subtitle: 'Fills from 0% to 100%, represented by bars', title: 'Linear progress', url: author$project$Demo$Url$LinearProgress},
		{icon: 'images/menu_180px.svg', subtitle: 'Pop over menus', title: 'Menu', url: author$project$Demo$Url$Menu},
		{icon: 'images/radio_180px.svg', subtitle: 'Single selection controls', title: 'Radio', url: author$project$Demo$Url$RadioButton},
		{icon: 'images/ripple_180px.svg', subtitle: 'Touch ripple', title: 'Ripple', url: author$project$Demo$Url$Ripple},
		{icon: 'images/form_field_180px.svg', subtitle: 'Popover selection menus', title: 'Select', url: author$project$Demo$Url$Select},
		{icon: 'images/slider_180px.svg', subtitle: 'Range Controls', title: 'Slider', url: author$project$Demo$Url$Slider},
		{icon: 'images/snackbar_180px.svg', subtitle: 'Transient messages', title: 'Snackbar', url: author$project$Demo$Url$Snackbar},
		{icon: 'images/switch_180px.svg', subtitle: 'On off switches', title: 'Switch', url: author$project$Demo$Url$Switch},
		{icon: 'images/tabs_180px.svg', subtitle: 'Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy', title: 'Tab Bar', url: author$project$Demo$Url$TabBar},
		{icon: 'images/form_field_180px.svg', subtitle: 'Single and multiline text fields', title: 'Text field', url: author$project$Demo$Url$TextField},
		{icon: 'images/ic_theme_24px.svg', subtitle: 'Using primary and accent colors', title: 'Theme', url: author$project$Demo$Url$Theme},
		{icon: 'images/top_app_bar_180px.svg', subtitle: 'Container for items such as application title, navigation icon, and action items.', title: 'Top App Bar', url: author$project$Demo$Url$TopAppBar},
		{icon: 'images/fonts_180px.svg', subtitle: 'Type hierarchy', title: 'Typography', url: author$project$Demo$Url$Typography}
	]);
var author$project$Material$IconButton$customIconButton = F2(
	function (config, nodes) {
		return A3(
			elm$html$Html$node,
			'mdc-icon-button',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$IconButton$rootCs,
							author$project$Material$IconButton$tabIndexAttr,
							author$project$Material$IconButton$clickHandler(config)
						])),
				config.additionalAttributes),
			nodes);
	});
var author$project$Demo$Startpage$view = A2(
	elm$html$Html$div,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			author$project$Material$TopAppBar$topAppBar,
			author$project$Material$TopAppBar$topAppBarConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$TopAppBar$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							author$project$Material$TopAppBar$section,
							_List_fromArray(
								[author$project$Material$TopAppBar$alignStart]),
							_List_fromArray(
								[
									A2(
									author$project$Material$IconButton$customIconButton,
									_Utils_update(
										author$project$Material$IconButton$iconButtonConfig,
										{
											additionalAttributes: _List_fromArray(
												[author$project$Material$TopAppBar$navigationIcon])
										}),
									_List_fromArray(
										[
											A2(
											elm$html$Html$img,
											_List_fromArray(
												[
													elm$html$Html$Attributes$src('images/ic_component_24px_white.svg')
												]),
											_List_Nil)
										])),
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[
											author$project$Material$TopAppBar$title,
											A2(elm$html$Html$Attributes$style, 'text-transform', 'uppercase'),
											A2(elm$html$Html$Attributes$style, 'font-weight', '400')
										]),
									_List_fromArray(
										[
											elm$html$Html$text('Material Components for Elm')
										]))
								]))
						]))
				])),
			A2(
			author$project$Material$ImageList$imageList,
			_Utils_update(
				author$project$Material$ImageList$imageListConfig,
				{
					additionalAttributes: _List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'max-width', '900px'),
							A2(elm$html$Html$Attributes$style, 'padding-top', '128px'),
							A2(elm$html$Html$Attributes$style, 'padding-bottom', '100px')
						])
				}),
			A2(
				elm$core$List$map,
				function (_n0) {
					var url = _n0.url;
					var title = _n0.title;
					var icon = _n0.icon;
					return A2(
						author$project$Material$ImageList$imageListItem,
						_Utils_update(
							author$project$Material$ImageList$imageListItemConfig,
							{
								additionalAttributes: _List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'width', 'calc(100% / 4 - 8.25px)'),
										A2(elm$html$Html$Attributes$style, 'margin', '4px')
									]),
								href: elm$core$Maybe$Just(
									author$project$Demo$Url$toString(url)),
								label: elm$core$Maybe$Just(title)
							}),
						icon);
				},
				author$project$Demo$Startpage$imageListItems))
		]));
var author$project$Demo$Switch$Toggle = function (a) {
	return {$: 'Toggle', a: a};
};
var author$project$Demo$Switch$isChecked = F2(
	function (id, model) {
		return A2(
			elm$core$Maybe$withDefault,
			false,
			A2(elm$core$Dict$get, id, model.switches));
	});
var author$project$Material$Switch$checkedAttr = function (_n0) {
	var checked = _n0.checked;
	return checked ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'checked', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Switch$disabledAttr = function (_n0) {
	var disabled = _n0.disabled;
	return disabled ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'disabled', '')) : elm$core$Maybe$Nothing;
};
var author$project$Material$Switch$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-switch'));
var author$project$Material$Switch$checkboxTypeAttr = elm$core$Maybe$Just(
	elm$html$Html$Attributes$type_('checkbox'));
var author$project$Material$Switch$clickHandler = function (config) {
	return A2(
		elm$core$Maybe$map,
		function (msg) {
			return A2(
				elm$html$Html$Events$preventDefaultOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(msg, true)));
		},
		config.onClick);
};
var author$project$Material$Switch$nativeControlCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-switch__native-control'));
var author$project$Material$Switch$switchRoleAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'role', 'switch'));
var author$project$Material$Switch$nativeControlElt = function (config) {
	return A2(
		elm$html$Html$input,
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					author$project$Material$Switch$nativeControlCs,
					author$project$Material$Switch$checkboxTypeAttr,
					author$project$Material$Switch$switchRoleAttr,
					author$project$Material$Switch$clickHandler(config)
				])),
		_List_Nil);
};
var author$project$Material$Switch$thumbElt = function (config) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-switch__thumb')
			]),
		_List_fromArray(
			[
				author$project$Material$Switch$nativeControlElt(config)
			]));
};
var author$project$Material$Switch$thumbUnderlayElt = function (config) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-switch__thumb-underlay')
			]),
		_List_fromArray(
			[
				author$project$Material$Switch$thumbElt(config)
			]));
};
var author$project$Material$Switch$trackElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-switch__track')
		]),
	_List_Nil);
var author$project$Material$Switch$switch = function (config) {
	return A3(
		elm$html$Html$node,
		'mdc-switch',
		_Utils_ap(
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$Switch$rootCs,
						author$project$Material$Switch$checkedAttr(config),
						author$project$Material$Switch$disabledAttr(config)
					])),
			config.additionalAttributes),
		_List_fromArray(
			[
				author$project$Material$Switch$trackElt,
				author$project$Material$Switch$thumbUnderlayElt(config)
			]));
};
var author$project$Material$Switch$switchConfig = {additionalAttributes: _List_Nil, checked: false, disabled: false, onClick: elm$core$Maybe$Nothing};
var author$project$Demo$Switch$demoSwitch = function (model) {
	var id = 'demo-switch';
	return A2(
		author$project$Material$FormField$formField,
		_Utils_update(
			author$project$Material$FormField$formFieldConfig,
			{
				_for: elm$core$Maybe$Just(id),
				label: 'off/on',
				onClick: elm$core$Maybe$Just(
					author$project$Demo$Switch$Toggle(id))
			}),
		_List_fromArray(
			[
				author$project$Material$Switch$switch(
				_Utils_update(
					author$project$Material$Switch$switchConfig,
					{
						checked: A2(author$project$Demo$Switch$isChecked, id, model),
						onClick: elm$core$Maybe$Just(
							author$project$Demo$Switch$Toggle(id))
					}))
			]));
};
var author$project$Demo$Switch$heroSwitch = function (model) {
	var id = 'hero-switch';
	return _List_fromArray(
		[
			A2(
			author$project$Material$FormField$formField,
			_Utils_update(
				author$project$Material$FormField$formFieldConfig,
				{
					_for: elm$core$Maybe$Just(id),
					label: 'off/on',
					onClick: elm$core$Maybe$Just(
						author$project$Demo$Switch$Toggle(id))
				}),
			_List_fromArray(
				[
					author$project$Material$Switch$switch(
					_Utils_update(
						author$project$Material$Switch$switchConfig,
						{
							checked: A2(author$project$Demo$Switch$isChecked, id, model),
							onClick: elm$core$Maybe$Just(
								author$project$Demo$Switch$Toggle(id))
						}))
				]))
		]);
};
var author$project$Demo$Switch$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Switch')
					])),
				author$project$Demo$Switch$demoSwitch(model)
			]),
		hero: author$project$Demo$Switch$heroSwitch(model),
		prelude: 'Switches communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/input-controls/switches/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-switches'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch')
		},
		title: 'Switch'
	};
};
var author$project$Demo$TabBar$SetActiveHeroTab = function (a) {
	return {$: 'SetActiveHeroTab', a: a};
};
var author$project$Material$TabBar$Tab = function (a) {
	return {$: 'Tab', a: a};
};
var author$project$Material$TabBar$tab = F2(
	function (config, content) {
		return author$project$Material$TabBar$Tab(
			{config: config, content: content});
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var author$project$Material$TabBar$activeTabAttr = function (tabs) {
	var activeTabIndex = A2(
		elm$core$Maybe$map,
		elm$core$String$fromInt,
		A2(
			elm$core$Maybe$map,
			elm$core$Tuple$first,
			elm$core$List$head(
				A2(
					elm$core$List$filter,
					function (_n0) {
						var config = _n0.b.a.config;
						return config.active;
					},
					A2(elm$core$List$indexedMap, elm$core$Tuple$pair, tabs)))));
	return A2(
		elm$core$Maybe$map,
		elm$html$Html$Attributes$attribute('activetab'),
		activeTabIndex);
};
var author$project$Material$TabBar$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-tab-bar'));
var author$project$Material$TabBar$tabScrollerAlignCs = function (_n0) {
	var align = _n0.align;
	if (align.$ === 'Just') {
		switch (align.a.$) {
			case 'TabScrollerAlignStart':
				var _n2 = align.a;
				return elm$core$Maybe$Just(
					elm$html$Html$Attributes$class('mdc-tab-scroller--align-start'));
			case 'TabScrollerAlignEnd':
				var _n3 = align.a;
				return elm$core$Maybe$Just(
					elm$html$Html$Attributes$class('mdc-tab-scroller--align-end'));
			default:
				var _n4 = align.a;
				return elm$core$Maybe$Just(
					elm$html$Html$Attributes$class('mdc-tab-scroller--align-center'));
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Material$TabBar$tabScrollerCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-tab-scroller'));
var author$project$Material$TabBar$tabClickHandler = function (_n0) {
	var onClick = _n0.onClick;
	return A2(
		elm$core$Maybe$map,
		A2(
			elm$core$Basics$composeL,
			elm$html$Html$Events$on('MDCTab:interacted'),
			elm$json$Json$Decode$succeed),
		onClick);
};
var author$project$Material$TabBar$tabIconElt = function (_n0) {
	var icon = _n0.icon;
	return A2(
		elm$core$Maybe$map,
		function (iconName) {
			return A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-tab__icon material-icons')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(iconName)
					]));
		},
		icon);
};
var author$project$Material$TabBar$tabIndicatorContentElt = A2(
	elm$html$Html$span,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-tab-indicator__content'),
			elm$html$Html$Attributes$class('mdc-tab-indicator__content--underline')
		]),
	_List_Nil);
var author$project$Material$TabBar$tabIndicatorElt = function (config) {
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-tab-indicator')
				]),
			_List_fromArray(
				[author$project$Material$TabBar$tabIndicatorContentElt])));
};
var author$project$Material$TabBar$tabTextLabelElt = function (_n0) {
	var label = _n0.label;
	return elm$core$Maybe$Just(
		A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-tab__text-label')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				])));
};
var author$project$Material$TabBar$tabContentElt = F3(
	function (barConfig, config, content) {
		return elm$core$Maybe$Just(
			A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('mdc-tab__content')
					]),
				barConfig.indicatorSpansContent ? A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$TabBar$tabIconElt(content),
							author$project$Material$TabBar$tabTextLabelElt(content),
							author$project$Material$TabBar$tabIndicatorElt(config)
						])) : A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$TabBar$tabIconElt(content),
							author$project$Material$TabBar$tabTextLabelElt(content)
						]))));
	});
var author$project$Material$TabBar$tabCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-tab'));
var author$project$Material$TabBar$tabMinWidthCs = function (_n0) {
	var minWidth = _n0.minWidth;
	return minWidth ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-tab--min-width')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TabBar$tabRippleElt = elm$core$Maybe$Just(
	A2(
		elm$html$Html$span,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-tab__ripple')
			]),
		_List_Nil));
var author$project$Material$TabBar$tabRoleAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'role', 'tab'));
var author$project$Material$TabBar$tabStackedCs = function (_n0) {
	var stacked = _n0.stacked;
	return stacked ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-tab--stacked')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TabBar$viewTab = F2(
	function (barConfig, _n0) {
		var config = _n0.a.config;
		var content = _n0.a.content;
		return A2(
			elm$html$Html$button,
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$TabBar$tabCs,
							author$project$Material$TabBar$tabRoleAttr,
							author$project$Material$TabBar$tabStackedCs(barConfig),
							author$project$Material$TabBar$tabMinWidthCs(barConfig),
							author$project$Material$TabBar$tabClickHandler(config)
						])),
				config.additionalAttributes),
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				barConfig.indicatorSpansContent ? _List_fromArray(
					[
						A3(author$project$Material$TabBar$tabContentElt, barConfig, config, content),
						author$project$Material$TabBar$tabRippleElt
					]) : _List_fromArray(
					[
						A3(author$project$Material$TabBar$tabContentElt, barConfig, config, content),
						author$project$Material$TabBar$tabIndicatorElt(config),
						author$project$Material$TabBar$tabRippleElt
					])));
	});
var author$project$Material$TabBar$tabScrollerScrollContentElt = F2(
	function (barConfig, tabs) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-tab-scroller__scroll-content')
				]),
			A2(
				elm$core$List$map,
				author$project$Material$TabBar$viewTab(barConfig),
				tabs));
	});
var author$project$Material$TabBar$tabScrollerScrollAreaElt = F2(
	function (barConfig, tabs) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-tab-scroller__scroll-area')
				]),
			_List_fromArray(
				[
					A2(author$project$Material$TabBar$tabScrollerScrollContentElt, barConfig, tabs)
				]));
	});
var author$project$Material$TabBar$tabScroller = F3(
	function (barConfig, config, tabs) {
		return A2(
			elm$html$Html$div,
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$TabBar$tabScrollerCs,
							author$project$Material$TabBar$tabScrollerAlignCs(config)
						])),
				config.additionalAttributes),
			_List_fromArray(
				[
					A2(author$project$Material$TabBar$tabScrollerScrollAreaElt, barConfig, tabs)
				]));
	});
var author$project$Material$TabBar$tablistRoleAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'role', 'tablist'));
var author$project$Material$TabBar$tabBar = F2(
	function (config, tabs) {
		return A3(
			elm$html$Html$node,
			'mdc-tab-bar',
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$TabBar$rootCs,
							author$project$Material$TabBar$tablistRoleAttr,
							author$project$Material$TabBar$activeTabAttr(tabs)
						])),
				config.additionalAttributes),
			_List_fromArray(
				[
					A3(author$project$Material$TabBar$tabScroller, config, config.tabScrollerConfig, tabs)
				]));
	});
var author$project$Material$TabBar$tabScrollerConfig = {additionalAttributes: _List_Nil, align: elm$core$Maybe$Nothing};
var author$project$Material$TabBar$tabBarConfig = {additionalAttributes: _List_Nil, indicatorSpansContent: false, minWidth: false, stacked: false, tabScrollerConfig: author$project$Material$TabBar$tabScrollerConfig};
var author$project$Material$TabBar$tabConfig = {active: false, additionalAttributes: _List_Nil, onClick: elm$core$Maybe$Nothing};
var author$project$Demo$TabBar$heroTabs = F2(
	function (model, index) {
		return A2(
			author$project$Material$TabBar$tabBar,
			author$project$Material$TabBar$tabBarConfig,
			_List_fromArray(
				[
					A2(
					author$project$Material$TabBar$tab,
					_Utils_update(
						author$project$Material$TabBar$tabConfig,
						{
							active: !model.activeHeroTab,
							onClick: elm$core$Maybe$Just(
								author$project$Demo$TabBar$SetActiveHeroTab(0))
						}),
					{icon: elm$core$Maybe$Nothing, label: 'Home'}),
					A2(
					author$project$Material$TabBar$tab,
					_Utils_update(
						author$project$Material$TabBar$tabConfig,
						{
							active: model.activeHeroTab === 1,
							onClick: elm$core$Maybe$Just(
								author$project$Demo$TabBar$SetActiveHeroTab(1))
						}),
					{icon: elm$core$Maybe$Nothing, label: 'Merchandise'}),
					A2(
					author$project$Material$TabBar$tab,
					_Utils_update(
						author$project$Material$TabBar$tabConfig,
						{
							active: model.activeHeroTab === 2,
							onClick: elm$core$Maybe$Just(
								author$project$Demo$TabBar$SetActiveHeroTab(2))
						}),
					{icon: elm$core$Maybe$Nothing, label: 'About Us'})
				]));
	});
var author$project$Demo$TabBar$SetActiveScrollingTab = function (a) {
	return {$: 'SetActiveScrollingTab', a: a};
};
var author$project$Demo$TabBar$scrollingTabs = function (model) {
	var tabConfig_ = function (index) {
		return _Utils_update(
			author$project$Material$TabBar$tabConfig,
			{
				active: _Utils_eq(model.activeScrollingTab, index),
				onClick: elm$core$Maybe$Just(
					author$project$Demo$TabBar$SetActiveScrollingTab(index))
			});
	};
	return A2(
		author$project$Material$TabBar$tabBar,
		author$project$Material$TabBar$tabBarConfig,
		A2(
			elm$core$List$indexedMap,
			F2(
				function (index, label) {
					return A2(
						author$project$Material$TabBar$tab,
						tabConfig_(index),
						{icon: elm$core$Maybe$Nothing, label: 'Tab ' + label});
				}),
			_List_fromArray(
				['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'])));
};
var author$project$Demo$TabBar$SetActiveIconTab = function (a) {
	return {$: 'SetActiveIconTab', a: a};
};
var author$project$Demo$TabBar$tabsWithIcons = function (model) {
	var tabConfig_ = function (index) {
		return _Utils_update(
			author$project$Material$TabBar$tabConfig,
			{
				active: _Utils_eq(model.activeIconTab, index),
				onClick: elm$core$Maybe$Just(
					author$project$Demo$TabBar$SetActiveIconTab(index))
			});
	};
	return A2(
		author$project$Material$TabBar$tabBar,
		author$project$Material$TabBar$tabBarConfig,
		_List_fromArray(
			[
				A2(
				author$project$Material$TabBar$tab,
				tabConfig_(0),
				{
					icon: elm$core$Maybe$Just('access_time'),
					label: 'Recents'
				}),
				A2(
				author$project$Material$TabBar$tab,
				tabConfig_(1),
				{
					icon: elm$core$Maybe$Just('near_me'),
					label: 'Nearby'
				}),
				A2(
				author$project$Material$TabBar$tab,
				tabConfig_(2),
				{
					icon: elm$core$Maybe$Just('favorite'),
					label: 'Favorites'
				})
			]));
};
var author$project$Demo$TabBar$SetActiveStackedTab = function (a) {
	return {$: 'SetActiveStackedTab', a: a};
};
var author$project$Demo$TabBar$tabsWithStackedIcons = function (model) {
	var tabConfig_ = function (index) {
		return _Utils_update(
			author$project$Material$TabBar$tabConfig,
			{
				active: _Utils_eq(model.activeStackedTab, index),
				onClick: elm$core$Maybe$Just(
					author$project$Demo$TabBar$SetActiveStackedTab(index))
			});
	};
	return A2(
		author$project$Material$TabBar$tabBar,
		_Utils_update(
			author$project$Material$TabBar$tabBarConfig,
			{indicatorSpansContent: true, stacked: true}),
		_List_fromArray(
			[
				A2(
				author$project$Material$TabBar$tab,
				tabConfig_(0),
				{
					icon: elm$core$Maybe$Just('access_time'),
					label: 'Recents'
				}),
				A2(
				author$project$Material$TabBar$tab,
				tabConfig_(1),
				{
					icon: elm$core$Maybe$Just('near_me'),
					label: 'Nearby'
				}),
				A2(
				author$project$Material$TabBar$tab,
				tabConfig_(2),
				{
					icon: elm$core$Maybe$Just('favorite'),
					label: 'Favorites'
				})
			]));
};
var author$project$Demo$TabBar$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Tabs with icons next to labels')
					])),
				author$project$Demo$TabBar$tabsWithIcons(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Tabs with icons above labels and indicators restricted to content')
					])),
				author$project$Demo$TabBar$tabsWithStackedIcons(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Scrolling tabs')
					])),
				author$project$Demo$TabBar$scrollingTabs(model)
			]),
		hero: _List_fromArray(
			[
				A2(author$project$Demo$TabBar$heroTabs, model, 'tabs-hero-tabs')
			]),
		prelude: 'Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. The Tab Bar contains the Tab Scroller and Tab components.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/tabs/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-tabs'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar')
		},
		title: 'Tab Bar'
	};
};
var author$project$Material$HelperText$helperLineCs = elm$html$Html$Attributes$class('mdc-text-field-helper-line');
var author$project$Material$HelperText$helperLine = F2(
	function (additionalAttributes, nodes) {
		return A2(
			elm$html$Html$div,
			A2(elm$core$List$cons, author$project$Material$HelperText$helperLineCs, additionalAttributes),
			nodes);
	});
var author$project$Material$HelperText$ariaHiddenAttr = elm$core$Maybe$Just(
	A2(elm$html$Html$Attributes$attribute, 'aria-hidden', 'true'));
var author$project$Material$HelperText$helperTextCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-text-field-helper-text'));
var author$project$Material$HelperText$persistentCs = function (config) {
	return config.persistent ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-text-field-helper-text--persistent')) : elm$core$Maybe$Nothing;
};
var author$project$Material$HelperText$helperText = F2(
	function (config, string) {
		return A2(
			elm$html$Html$div,
			_Utils_ap(
				A2(
					elm$core$List$filterMap,
					elm$core$Basics$identity,
					_List_fromArray(
						[
							author$project$Material$HelperText$helperTextCs,
							author$project$Material$HelperText$persistentCs(config),
							author$project$Material$HelperText$ariaHiddenAttr
						])),
				config.additionalAttributes),
			_List_fromArray(
				[
					elm$html$Html$text(string)
				]));
	});
var author$project$Material$HelperText$helperTextConfig = {additionalAttributes: _List_Nil, persistent: false};
var author$project$Demo$TextFields$demoHelperText = A2(
	author$project$Material$HelperText$helperLine,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			author$project$Material$HelperText$helperText,
			_Utils_update(
				author$project$Material$HelperText$helperTextConfig,
				{persistent: true}),
			'Helper Text')
		]));
var author$project$Demo$TextFields$textFieldContainer = _List_fromArray(
	[
		elm$html$Html$Attributes$class('text-field-container'),
		A2(elm$html$Html$Attributes$style, 'min-width', '200px')
	]);
var author$project$Demo$TextFields$textFieldRow = _List_fromArray(
	[
		elm$html$Html$Attributes$class('text-field-row'),
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, 'align-items', 'flex-start'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'space-between'),
		A2(elm$html$Html$Attributes$style, 'flex-wrap', 'wrap')
	]);
var author$project$Material$TextField$disabledCs = function (_n0) {
	var disabled = _n0.disabled;
	return disabled ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-text-field--disabled')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$fullwidthCs = function (_n0) {
	var fullwidth = _n0.fullwidth;
	return fullwidth ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-text-field--fullwidth')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$ariaLabelAttr = function (_n0) {
	var fullwidth = _n0.fullwidth;
	var placeholder = _n0.placeholder;
	var label = _n0.label;
	return fullwidth ? A2(
		elm$core$Maybe$map,
		elm$html$Html$Attributes$attribute('aria-label'),
		label) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$changeHandler = function (_n0) {
	var onChange = _n0.onChange;
	return A2(
		elm$core$Maybe$map,
		function (f) {
			return A2(
				elm$html$Html$Events$on,
				'change',
				A2(elm$json$Json$Decode$map, f, elm$html$Html$Events$targetValue));
		},
		onChange);
};
var elm$html$Html$Attributes$cols = function (n) {
	return A2(
		_VirtualDom_attribute,
		'cols',
		elm$core$String$fromInt(n));
};
var author$project$Material$TextField$colsAttr = function (_n0) {
	var textarea = _n0.textarea;
	var cols = _n0.cols;
	return textarea ? A2(elm$core$Maybe$map, elm$html$Html$Attributes$cols, cols) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$disabledAttr = function (_n0) {
	var disabled = _n0.disabled;
	return elm$core$Maybe$Just(
		elm$html$Html$Attributes$disabled(disabled));
};
var author$project$Material$TextField$inputCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-text-field__input'));
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var author$project$Material$TextField$inputHandler = function (_n0) {
	var onInput = _n0.onInput;
	return A2(elm$core$Maybe$map, elm$html$Html$Events$onInput, onInput);
};
var author$project$Material$TextField$invalidAttr = function (_n0) {
	var invalid = _n0.invalid;
	return invalid ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'invalid', '')) : elm$core$Maybe$Nothing;
};
var elm$html$Html$Attributes$max = elm$html$Html$Attributes$stringProperty('max');
var author$project$Material$TextField$maxAttr = function (_n0) {
	var max = _n0.max;
	return A2(
		elm$core$Maybe$map,
		A2(elm$core$Basics$composeL, elm$html$Html$Attributes$max, elm$core$String$fromInt),
		max);
};
var elm$html$Html$Attributes$maxlength = function (n) {
	return A2(
		_VirtualDom_attribute,
		'maxlength',
		elm$core$String$fromInt(n));
};
var author$project$Material$TextField$maxLengthAttr = function (_n0) {
	var maxLength = _n0.maxLength;
	return A2(elm$core$Maybe$map, elm$html$Html$Attributes$maxlength, maxLength);
};
var elm$html$Html$Attributes$min = elm$html$Html$Attributes$stringProperty('min');
var author$project$Material$TextField$minAttr = function (_n0) {
	var min = _n0.min;
	return A2(
		elm$core$Maybe$map,
		A2(elm$core$Basics$composeL, elm$html$Html$Attributes$min, elm$core$String$fromInt),
		min);
};
var elm$html$Html$Attributes$minlength = function (n) {
	return A2(
		_VirtualDom_attribute,
		'minLength',
		elm$core$String$fromInt(n));
};
var author$project$Material$TextField$minLengthAttr = function (_n0) {
	var minLength = _n0.minLength;
	return A2(elm$core$Maybe$map, elm$html$Html$Attributes$minlength, minLength);
};
var elm$html$Html$Attributes$pattern = elm$html$Html$Attributes$stringProperty('pattern');
var author$project$Material$TextField$patternAttr = function (_n0) {
	var pattern = _n0.pattern;
	return A2(elm$core$Maybe$map, elm$html$Html$Attributes$pattern, pattern);
};
var elm$html$Html$Attributes$placeholder = elm$html$Html$Attributes$stringProperty('placeholder');
var author$project$Material$TextField$placeholderAttr = function (_n0) {
	var placeholder = _n0.placeholder;
	return A2(elm$core$Maybe$map, elm$html$Html$Attributes$placeholder, placeholder);
};
var author$project$Material$TextField$requiredAttr = function (_n0) {
	var required = _n0.required;
	return required ? elm$core$Maybe$Just(
		A2(elm$html$Html$Attributes$attribute, 'required', '')) : elm$core$Maybe$Nothing;
};
var elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		elm$core$String$fromInt(n));
};
var author$project$Material$TextField$rowsAttr = function (_n0) {
	var textarea = _n0.textarea;
	var rows = _n0.rows;
	return textarea ? A2(elm$core$Maybe$map, elm$html$Html$Attributes$rows, rows) : elm$core$Maybe$Nothing;
};
var elm$html$Html$Attributes$step = function (n) {
	return A2(elm$html$Html$Attributes$stringProperty, 'step', n);
};
var author$project$Material$TextField$stepAttr = function (_n0) {
	var step = _n0.step;
	return A2(
		elm$core$Maybe$map,
		A2(elm$core$Basics$composeL, elm$html$Html$Attributes$step, elm$core$String$fromInt),
		step);
};
var author$project$Material$TextField$typeAttr = function (_n0) {
	var textarea = _n0.textarea;
	var type_ = _n0.type_;
	return (!textarea) ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$type_(type_)) : elm$core$Maybe$Nothing;
};
var elm$html$Html$textarea = _VirtualDom_node('textarea');
var author$project$Material$TextField$inputElt = function (config) {
	return A2(
		config.textarea ? elm$html$Html$textarea : elm$html$Html$input,
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					author$project$Material$TextField$inputCs,
					author$project$Material$TextField$typeAttr(config),
					author$project$Material$TextField$ariaLabelAttr(config),
					author$project$Material$TextField$rowsAttr(config),
					author$project$Material$TextField$colsAttr(config),
					author$project$Material$TextField$disabledAttr(config),
					author$project$Material$TextField$requiredAttr(config),
					author$project$Material$TextField$invalidAttr(config),
					author$project$Material$TextField$patternAttr(config),
					author$project$Material$TextField$minLengthAttr(config),
					author$project$Material$TextField$maxLengthAttr(config),
					author$project$Material$TextField$minAttr(config),
					author$project$Material$TextField$maxAttr(config),
					author$project$Material$TextField$stepAttr(config),
					author$project$Material$TextField$placeholderAttr(config),
					author$project$Material$TextField$inputHandler(config),
					author$project$Material$TextField$changeHandler(config)
				])),
		_List_Nil);
};
var author$project$Material$TextField$labelElt = function (_n0) {
	var label = _n0.label;
	var value = _n0.value;
	if (label.$ === 'Just') {
		var str = label.a;
		return A2(
			elm$html$Html$div,
			(A2(elm$core$Maybe$withDefault, '', value) !== '') ? _List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-floating-label mdc-floating-label--float-above')
				]) : _List_fromArray(
				[
					elm$html$Html$Attributes$class('mdc-floating-label')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(str)
				]));
	} else {
		return elm$html$Html$text('');
	}
};
var author$project$Material$TextField$leadingIconElt = function (_n0) {
	var leadingIcon = _n0.leadingIcon;
	if (leadingIcon.$ === 'NoIcon') {
		return _List_Nil;
	} else {
		var html = leadingIcon.a;
		return _List_fromArray(
			[html]);
	}
};
var author$project$Material$TextField$lineRippleElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-line-ripple')
		]),
	_List_Nil);
var author$project$Material$TextField$noLabelCs = function (_n0) {
	var label = _n0.label;
	return _Utils_eq(label, elm$core$Maybe$Nothing) ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-text-field--no-label')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$notchedOutlineLeadingElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-notched-outline__leading')
		]),
	_List_Nil);
var author$project$Material$TextField$notchedOutlineNotchElt = function (config) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-notched-outline__notch')
			]),
		_List_fromArray(
			[
				author$project$Material$TextField$labelElt(config)
			]));
};
var author$project$Material$TextField$notchedOutlineTrailingElt = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('mdc-notched-outline__trailing')
		]),
	_List_Nil);
var author$project$Material$TextField$notchedOutlineElt = function (config) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('mdc-notched-outline')
			]),
		_List_fromArray(
			[
				author$project$Material$TextField$notchedOutlineLeadingElt,
				author$project$Material$TextField$notchedOutlineNotchElt(config),
				author$project$Material$TextField$notchedOutlineTrailingElt
			]));
};
var author$project$Material$TextField$outlinedCs = function (_n0) {
	var outlined = _n0.outlined;
	return outlined ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-text-field--outlined')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$rootCs = elm$core$Maybe$Just(
	elm$html$Html$Attributes$class('mdc-text-field'));
var author$project$Material$TextField$textareaCs = function (_n0) {
	var textarea = _n0.textarea;
	return textarea ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-text-field--textarea')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$trailingIconElt = function (_n0) {
	var trailingIcon = _n0.trailingIcon;
	if (trailingIcon.$ === 'NoIcon') {
		return _List_Nil;
	} else {
		var html = trailingIcon.a;
		return _List_fromArray(
			[html]);
	}
};
var author$project$Material$TextField$valueAttr = function (_n0) {
	var value = _n0.value;
	return A2(
		elm$core$Maybe$map,
		elm$html$Html$Attributes$attribute('value'),
		value);
};
var author$project$Material$TextField$NoIcon = {$: 'NoIcon'};
var author$project$Material$TextField$withLeadingIconCs = function (_n0) {
	var leadingIcon = _n0.leadingIcon;
	return (!_Utils_eq(leadingIcon, author$project$Material$TextField$NoIcon)) ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-text-field--with-leading-icon')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$withTrailingIconCs = function (_n0) {
	var trailingIcon = _n0.trailingIcon;
	return (!_Utils_eq(trailingIcon, author$project$Material$TextField$NoIcon)) ? elm$core$Maybe$Just(
		elm$html$Html$Attributes$class('mdc-text-field--with-trailing-icon')) : elm$core$Maybe$Nothing;
};
var author$project$Material$TextField$textField = function (config) {
	return A3(
		elm$html$Html$node,
		'mdc-text-field',
		_Utils_ap(
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				_List_fromArray(
					[
						author$project$Material$TextField$rootCs,
						author$project$Material$TextField$noLabelCs(config),
						author$project$Material$TextField$outlinedCs(config),
						author$project$Material$TextField$fullwidthCs(config),
						author$project$Material$TextField$textareaCs(config),
						author$project$Material$TextField$disabledCs(config),
						author$project$Material$TextField$withLeadingIconCs(config),
						author$project$Material$TextField$withTrailingIconCs(config),
						author$project$Material$TextField$valueAttr(config)
					])),
			config.additionalAttributes),
		elm$core$List$concat(
			_List_fromArray(
				[
					author$project$Material$TextField$leadingIconElt(config),
					config.fullwidth ? ((config.textarea || config.outlined) ? _List_fromArray(
					[
						author$project$Material$TextField$inputElt(config),
						author$project$Material$TextField$notchedOutlineElt(config)
					]) : _List_fromArray(
					[
						author$project$Material$TextField$inputElt(config),
						author$project$Material$TextField$lineRippleElt
					])) : ((config.textarea || config.outlined) ? _List_fromArray(
					[
						author$project$Material$TextField$inputElt(config),
						author$project$Material$TextField$notchedOutlineElt(config)
					]) : _List_fromArray(
					[
						author$project$Material$TextField$inputElt(config),
						author$project$Material$TextField$labelElt(config),
						author$project$Material$TextField$lineRippleElt
					])),
					author$project$Material$TextField$trailingIconElt(config)
				])));
};
var author$project$Material$TextField$textFieldConfig = {additionalAttributes: _List_Nil, cols: elm$core$Maybe$Nothing, disabled: false, fullwidth: false, invalid: false, label: elm$core$Maybe$Nothing, leadingIcon: author$project$Material$TextField$NoIcon, max: elm$core$Maybe$Nothing, maxLength: elm$core$Maybe$Nothing, min: elm$core$Maybe$Nothing, minLength: elm$core$Maybe$Nothing, onChange: elm$core$Maybe$Nothing, onInput: elm$core$Maybe$Nothing, outlined: false, pattern: elm$core$Maybe$Nothing, placeholder: elm$core$Maybe$Nothing, required: false, rows: elm$core$Maybe$Nothing, step: elm$core$Maybe$Nothing, textarea: false, trailingIcon: author$project$Material$TextField$NoIcon, type_: 'text', value: elm$core$Maybe$Nothing};
var author$project$Material$TextField$Icon = function (a) {
	return {$: 'Icon', a: a};
};
var author$project$Material$TextField$textFieldIcon = F2(
	function (iconConfig, iconName) {
		return author$project$Material$TextField$Icon(
			A2(
				author$project$Material$Icon$icon,
				_Utils_update(
					iconConfig,
					{
						additionalAttributes: A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$class('mdc-text-field__icon'),
							iconConfig.additionalAttributes)
					}),
				iconName));
	});
var author$project$Demo$TextFields$filledTextFields = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldRow,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard')
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								leadingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'event')
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								trailingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'delete')
							})),
						author$project$Demo$TextFields$demoHelperText
					]))
			]));
};
var author$project$Demo$TextFields$fullwidthTextField = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldContainer,
		_List_fromArray(
			[
				author$project$Material$TextField$textField(
				_Utils_update(
					author$project$Material$TextField$textFieldConfig,
					{
						fullwidth: true,
						placeholder: elm$core$Maybe$Just('Standard')
					})),
				author$project$Demo$TextFields$demoHelperText
			]));
};
var author$project$Demo$TextFields$textFieldRowFullwidth = _List_fromArray(
	[
		elm$html$Html$Attributes$class('text-field-row text-field-row--fullwidth'),
		A2(elm$html$Html$Attributes$style, 'display', 'block')
	]);
var author$project$Demo$TextFields$fullwidthTextareaTextField = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldRowFullwidth,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								fullwidth: true,
								label: elm$core$Maybe$Just('Standard'),
								outlined: true,
								textarea: true
							})),
						author$project$Demo$TextFields$demoHelperText
					]))
			]));
};
var author$project$Demo$TextFields$heroTextFieldContainer = _List_fromArray(
	[
		elm$html$Html$Attributes$class('hero-text-field-container'),
		A2(elm$html$Html$Attributes$style, 'display', '-ms-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'flex'),
		A2(elm$html$Html$Attributes$style, '-ms-flex', '1 1 100%'),
		A2(elm$html$Html$Attributes$style, 'flex', '1 1 100%'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-pack', 'distribute'),
		A2(elm$html$Html$Attributes$style, 'justify-content', 'space-around'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-wrap', 'wrap'),
		A2(elm$html$Html$Attributes$style, 'flex-wrap', 'wrap')
	]);
var author$project$Demo$TextFields$textFieldContainerHero = A2(
	elm$core$List$cons,
	A2(elm$html$Html$Attributes$style, 'padding', '20px'),
	author$project$Demo$TextFields$textFieldContainer);
var author$project$Demo$TextFields$heroTextFields = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$heroTextFieldContainer,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainerHero,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard')
							}))
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainerHero,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								outlined: true
							}))
					]))
			]));
};
var author$project$Demo$TextFields$outlinedTextFields = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldRow,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								outlined: true
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								leadingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'event'),
								outlined: true
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								outlined: true,
								trailingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'delete')
							})),
						author$project$Demo$TextFields$demoHelperText
					]))
			]));
};
var author$project$Demo$TextFields$shapedFilledTextFields = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldRow,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								additionalAttributes: _List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'border-radius', '16px 16px 0 0')
									]),
								label: elm$core$Maybe$Just('Standard')
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								additionalAttributes: _List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'border-radius', '16px 16px 0 0')
									]),
								label: elm$core$Maybe$Just('Standard'),
								leadingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'event')
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								additionalAttributes: _List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'border-radius', '16px 16px 0 0')
									]),
								label: elm$core$Maybe$Just('Standard'),
								trailingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'delete')
							})),
						author$project$Demo$TextFields$demoHelperText
					]))
			]));
};
var author$project$Demo$TextFields$shapedOutlinedTextFields = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldRow,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								outlined: true
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								leadingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'event'),
								outlined: true
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								label: elm$core$Maybe$Just('Standard'),
								outlined: true,
								trailingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'delete')
							})),
						author$project$Demo$TextFields$demoHelperText
					]))
			]));
};
var author$project$Material$TextField$characterCounterCs = elm$html$Html$Attributes$class('mdc-text-field-character-counter');
var author$project$Material$TextField$characterCounter = function (additionalAttributes) {
	return A2(
		elm$html$Html$div,
		A2(elm$core$List$cons, author$project$Material$TextField$characterCounterCs, additionalAttributes),
		_List_Nil);
};
var author$project$Demo$TextFields$demoHelperTextWithCharacterCounter = A2(
	author$project$Material$HelperText$helperLine,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			author$project$Material$HelperText$helperText,
			_Utils_update(
				author$project$Material$HelperText$helperTextConfig,
				{persistent: true}),
			'Helper Text'),
			author$project$Material$TextField$characterCounter(_List_Nil)
		]));
var author$project$Demo$TextFields$textFieldsWithCharacterCounter = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldRow,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								maxLength: elm$core$Maybe$Just(18),
								outlined: true
							})),
						author$project$Demo$TextFields$demoHelperTextWithCharacterCounter
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								leadingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'event'),
								maxLength: elm$core$Maybe$Just(18),
								outlined: true
							})),
						author$project$Demo$TextFields$demoHelperTextWithCharacterCounter
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								maxLength: elm$core$Maybe$Just(18),
								outlined: true,
								trailingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'delete')
							})),
						author$project$Demo$TextFields$demoHelperTextWithCharacterCounter
					]))
			]));
};
var author$project$Demo$TextFields$textFieldsWithoutLabel = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldRow,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{outlined: true})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								leadingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'event'),
								outlined: true
							})),
						author$project$Demo$TextFields$demoHelperText
					])),
				A2(
				elm$html$Html$div,
				author$project$Demo$TextFields$textFieldContainer,
				_List_fromArray(
					[
						author$project$Material$TextField$textField(
						_Utils_update(
							author$project$Material$TextField$textFieldConfig,
							{
								outlined: true,
								trailingIcon: A2(author$project$Material$TextField$textFieldIcon, author$project$Material$Icon$iconConfig, 'delete')
							})),
						author$project$Demo$TextFields$demoHelperText
					]))
			]));
};
var author$project$Demo$TextFields$textareaTextField = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Demo$TextFields$textFieldContainer,
		_List_fromArray(
			[
				author$project$Material$TextField$textField(
				_Utils_update(
					author$project$Material$TextField$textFieldConfig,
					{
						label: elm$core$Maybe$Just('Standard'),
						outlined: true,
						textarea: true
					})),
				author$project$Demo$TextFields$demoHelperText
			]));
};
var author$project$Demo$TextFields$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Filled')
					])),
				author$project$Demo$TextFields$filledTextFields(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Shaped Filled')
					])),
				author$project$Demo$TextFields$shapedFilledTextFields(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Outlined')
					])),
				author$project$Demo$TextFields$outlinedTextFields(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Shaped Outlined (TODO)')
					])),
				author$project$Demo$TextFields$shapedOutlinedTextFields(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Text Fields without Label')
					])),
				author$project$Demo$TextFields$textFieldsWithoutLabel(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Text Fields with Character Counter')
					])),
				author$project$Demo$TextFields$textFieldsWithCharacterCounter(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Textarea')
					])),
				author$project$Demo$TextFields$textareaTextField(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Full Width')
					])),
				author$project$Demo$TextFields$fullwidthTextField(model),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Full Width Textarea')
					])),
				author$project$Demo$TextFields$fullwidthTextareaTextField(model)
			]),
		hero: _List_fromArray(
			[
				author$project$Demo$TextFields$heroTextFields(model)
			]),
		prelude: 'Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/input-controls/text-field/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-text-fields'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield')
		},
		title: 'Text Field'
	};
};
var author$project$Demo$Theme$heroMargin = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'margin', '16px 32px')
	]);
var author$project$Demo$Theme$demoThemeColorGroup = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'padding', '16px 0')
	]);
var author$project$Demo$Theme$demoThemeTextStyle = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'padding', '0 16px')
	]);
var author$project$Demo$Theme$demoThemeIconStyle = A2(
	elm$core$List$cons,
	elm$html$Html$Attributes$class('material-icons'),
	author$project$Demo$Theme$demoThemeTextStyle);
var author$project$Demo$Theme$demoThemeTextRow = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', '-ms-inline-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'inline-flex'),
		A2(elm$html$Html$Attributes$style, '-webkit-box-sizing', 'border-box'),
		A2(elm$html$Html$Attributes$style, 'box-sizing', 'border-box'),
		A2(elm$html$Html$Attributes$style, 'padding', '16px'),
		A2(elm$html$Html$Attributes$style, 'border', '1px solid #f0f0f0'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-align', 'center'),
		A2(elm$html$Html$Attributes$style, 'align-items', 'center'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-direction', 'row'),
		A2(elm$html$Html$Attributes$style, 'flex-direction', 'row')
	]);
var author$project$Material$Theme$background = elm$html$Html$Attributes$class('mdc-theme--background');
var author$project$Material$Theme$textDisabledOnBackground = elm$html$Html$Attributes$class('mdc-theme--text-disabled-on-background');
var author$project$Material$Theme$textHintOnBackground = elm$html$Html$Attributes$class('mdc-theme--text-hint-on-background');
var author$project$Material$Theme$textIconOnBackground = elm$html$Html$Attributes$class('mdc-theme--text-icon-on-background');
var author$project$Material$Theme$textPrimaryOnBackground = elm$html$Html$Attributes$class('mdc-theme--text-primary-on-background');
var author$project$Demo$Theme$textOnBackground = A2(
	elm$html$Html$div,
	author$project$Demo$Theme$demoThemeColorGroup,
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			A2(elm$core$List$cons, author$project$Material$Theme$background, author$project$Demo$Theme$demoThemeTextRow),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textPrimaryOnBackground, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Primary')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textSecondaryOnBackground, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Secondary')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textHintOnBackground, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Hint')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textDisabledOnBackground, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Disabled')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textIconOnBackground, author$project$Demo$Theme$demoThemeIconStyle),
					_List_fromArray(
						[
							elm$html$Html$text('favorite')
						]))
				]))
		]));
var author$project$Demo$Theme$demoThemeBgCustomDark = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'background-color', '#d1d1d1')
	]);
var author$project$Material$Theme$textDisabledOnDark = elm$html$Html$Attributes$class('mdc-theme--text-disabled-on-dark');
var author$project$Material$Theme$textHintOnDark = elm$html$Html$Attributes$class('mdc-theme--text-hint-on-dark');
var author$project$Material$Theme$textIconOnDark = elm$html$Html$Attributes$class('mdc-theme--text-icon-on-dark');
var author$project$Material$Theme$textPrimaryOnDark = elm$html$Html$Attributes$class('mdc-theme--text-primary-on-dark');
var author$project$Material$Theme$textSecondaryOnDark = elm$html$Html$Attributes$class('mdc-theme--text-secondary-on-dark');
var author$project$Demo$Theme$textOnDarkBackground = A2(
	elm$html$Html$div,
	author$project$Demo$Theme$demoThemeColorGroup,
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_Utils_ap(author$project$Demo$Theme$demoThemeBgCustomDark, author$project$Demo$Theme$demoThemeTextRow),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textPrimaryOnDark, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Primary')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textSecondaryOnDark, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Secondary')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textHintOnDark, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Hint')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textDisabledOnDark, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Disabled')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textIconOnDark, author$project$Demo$Theme$demoThemeIconStyle),
					_List_fromArray(
						[
							elm$html$Html$text('favorite')
						]))
				]))
		]));
var author$project$Demo$Theme$demoThemeBgCustomLight = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'background-color', '#ddd')
	]);
var author$project$Material$Theme$textDisabledOnLight = elm$html$Html$Attributes$class('mdc-theme--text-disabled-on-light');
var author$project$Material$Theme$textHintOnLight = elm$html$Html$Attributes$class('mdc-theme--text-hint-on-light');
var author$project$Material$Theme$textIconOnLight = elm$html$Html$Attributes$class('mdc-theme--text-icon-on-light');
var author$project$Material$Theme$textPrimaryOnLight = elm$html$Html$Attributes$class('mdc-theme--text-primary-on-light');
var author$project$Material$Theme$textSecondaryOnLight = elm$html$Html$Attributes$class('mdc-theme--text-secondary-on-light');
var author$project$Demo$Theme$textOnLightBackground = A2(
	elm$html$Html$div,
	author$project$Demo$Theme$demoThemeColorGroup,
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_Utils_ap(author$project$Demo$Theme$demoThemeBgCustomLight, author$project$Demo$Theme$demoThemeTextRow),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textPrimaryOnLight, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Primary')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textSecondaryOnLight, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Secondary')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textHintOnLight, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Hint')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textDisabledOnLight, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Disabled')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$textIconOnLight, author$project$Demo$Theme$demoThemeIconStyle),
					_List_fromArray(
						[
							elm$html$Html$text('favorite')
						]))
				]))
		]));
var author$project$Material$Theme$onPrimary = elm$html$Html$Attributes$class('mdc-theme--on-primary');
var author$project$Material$Theme$primaryBg = elm$html$Html$Attributes$class('mdc-theme--primary-bg');
var author$project$Demo$Theme$textOnPrimary = A2(
	elm$html$Html$div,
	author$project$Demo$Theme$demoThemeColorGroup,
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			A2(elm$core$List$cons, author$project$Material$Theme$primaryBg, author$project$Demo$Theme$demoThemeTextRow),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$onPrimary, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Text')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$onPrimary, author$project$Demo$Theme$demoThemeIconStyle),
					_List_fromArray(
						[
							elm$html$Html$text('favorite')
						]))
				]))
		]));
var author$project$Material$Theme$onSecondary = elm$html$Html$Attributes$class('mdc-theme--on-secondary');
var author$project$Material$Theme$secondaryBg = elm$html$Html$Attributes$class('mdc-theme--secondary-bg');
var author$project$Demo$Theme$textOnSecondary = A2(
	elm$html$Html$div,
	author$project$Demo$Theme$demoThemeColorGroup,
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			A2(elm$core$List$cons, author$project$Material$Theme$secondaryBg, author$project$Demo$Theme$demoThemeTextRow),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$onSecondary, author$project$Demo$Theme$demoThemeTextStyle),
					_List_fromArray(
						[
							elm$html$Html$text('Text')
						])),
					A2(
					elm$html$Html$span,
					A2(elm$core$List$cons, author$project$Material$Theme$onSecondary, author$project$Demo$Theme$demoThemeIconStyle),
					_List_fromArray(
						[
							elm$html$Html$text('favorite')
						]))
				]))
		]));
var author$project$Demo$Theme$demoThemeColorSwatch = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', 'inline-block'),
		A2(elm$html$Html$Attributes$style, '-webkit-box-sizing', 'border-box'),
		A2(elm$html$Html$Attributes$style, 'box-sizing', 'border-box'),
		A2(elm$html$Html$Attributes$style, 'width', '150px'),
		A2(elm$html$Html$Attributes$style, 'height', '50px'),
		A2(elm$html$Html$Attributes$style, 'line-height', '50px'),
		A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
		A2(elm$html$Html$Attributes$style, 'margin-bottom', '8px'),
		A2(elm$html$Html$Attributes$style, 'border-radius', '4px')
	]);
var author$project$Demo$Theme$demoThemeColorSwatches = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'display', '-ms-inline-flexbox'),
		A2(elm$html$Html$Attributes$style, 'display', 'inline-flex'),
		A2(elm$html$Html$Attributes$style, '-ms-flex-direction', 'column'),
		A2(elm$html$Html$Attributes$style, 'flex-direction', 'column'),
		A2(elm$html$Html$Attributes$style, 'margin-right', '16px'),
		author$project$Material$Elevation$z2
	]);
var author$project$Demo$Theme$themeColorsAsBackground = A2(
	elm$html$Html$div,
	author$project$Demo$Theme$demoThemeColorGroup,
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				author$project$Material$Theme$primaryBg,
				A2(elm$core$List$cons, author$project$Material$Theme$onPrimary, author$project$Demo$Theme$demoThemeColorSwatches)),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					author$project$Demo$Theme$demoThemeColorSwatch,
					_List_fromArray(
						[
							elm$html$Html$text('Primary')
						]))
				])),
			A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				author$project$Material$Theme$secondaryBg,
				A2(elm$core$List$cons, author$project$Material$Theme$onSecondary, author$project$Demo$Theme$demoThemeColorSwatches)),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					author$project$Demo$Theme$demoThemeColorSwatch,
					_List_fromArray(
						[
							elm$html$Html$text('Secondary')
						]))
				])),
			A2(
			elm$html$Html$div,
			A2(
				elm$core$List$cons,
				author$project$Material$Theme$background,
				A2(elm$core$List$cons, author$project$Material$Theme$textPrimaryOnBackground, author$project$Demo$Theme$demoThemeColorSwatches)),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					author$project$Demo$Theme$demoThemeColorSwatch,
					_List_fromArray(
						[
							elm$html$Html$text('Background')
						]))
				]))
		]));
var author$project$Material$Theme$primary = elm$html$Html$Attributes$class('mdc-theme--primary');
var author$project$Material$Theme$secondary = elm$html$Html$Attributes$class('mdc-theme--secondary');
var author$project$Demo$Theme$themeColorsAsText = A2(
	elm$html$Html$div,
	author$project$Demo$Theme$demoThemeColorGroup,
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			A2(elm$core$List$cons, author$project$Material$Theme$primary, author$project$Demo$Theme$demoThemeColorSwatches),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					author$project$Demo$Theme$demoThemeColorSwatch,
					_List_fromArray(
						[
							elm$html$Html$text('Primary')
						]))
				])),
			A2(
			elm$html$Html$div,
			A2(elm$core$List$cons, author$project$Material$Theme$secondary, author$project$Demo$Theme$demoThemeColorSwatches),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					author$project$Demo$Theme$demoThemeColorSwatch,
					_List_fromArray(
						[
							elm$html$Html$text('Secondary')
						]))
				]))
		]));
var elm$html$Html$legend = _VirtualDom_node('legend');
var author$project$Demo$Theme$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$legend,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Theme colors as text')
					])),
				author$project$Demo$Theme$themeColorsAsText,
				A2(
				elm$html$Html$legend,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Theme colors as background')
					])),
				author$project$Demo$Theme$themeColorsAsBackground,
				A2(
				elm$html$Html$legend,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Text on background')
					])),
				author$project$Demo$Theme$textOnBackground,
				A2(
				elm$html$Html$legend,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Text on primary')
					])),
				author$project$Demo$Theme$textOnPrimary,
				A2(
				elm$html$Html$legend,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Text on secondary')
					])),
				author$project$Demo$Theme$textOnSecondary,
				A2(
				elm$html$Html$legend,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Text on user-defined light background')
					])),
				author$project$Demo$Theme$textOnLightBackground,
				A2(
				elm$html$Html$legend,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Text on user-defined dark background')
					])),
				author$project$Demo$Theme$textOnDarkBackground
			]),
		hero: _List_fromArray(
			[
				A2(
				author$project$Material$Button$textButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{additionalAttributes: author$project$Demo$Theme$heroMargin}),
				'Text'),
				A2(
				author$project$Material$Button$raisedButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{additionalAttributes: author$project$Demo$Theme$heroMargin}),
				'Raised'),
				A2(
				author$project$Material$Button$outlinedButton,
				_Utils_update(
					author$project$Material$Button$buttonConfig,
					{additionalAttributes: author$project$Demo$Theme$heroMargin}),
				'Outlined')
			]),
		prelude: 'Color in Material Design is inspired by bold hues juxtaposed with muted environments, deep shadows, and bright highlights.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/theme/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-color-theming'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme')
		},
		title: 'Theme'
	};
};
var author$project$Demo$TopAppBar$iframe = F2(
	function (title, url) {
		var stringUrl = author$project$Demo$Url$toString(url);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'display', 'inline-block'),
					A2(elm$html$Html$Attributes$style, '-ms-flex', '1 1 45%'),
					A2(elm$html$Html$Attributes$style, 'flex', '1 1 45%'),
					A2(elm$html$Html$Attributes$style, '-ms-flex-pack', 'distribute'),
					A2(elm$html$Html$Attributes$style, 'justify-content', 'space-around'),
					A2(elm$html$Html$Attributes$style, 'min-height', '200px'),
					A2(elm$html$Html$Attributes$style, 'min-width', '400px'),
					A2(elm$html$Html$Attributes$style, 'padding', '15px')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$href(stringUrl),
									elm$html$Html$Attributes$target('_blank')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$h3,
									_List_fromArray(
										[author$project$Material$Typography$subtitle1]),
									_List_fromArray(
										[
											elm$html$Html$text(title)
										]))
								]))
						])),
					A2(
					elm$html$Html$iframe,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'width', '100%'),
							A2(elm$html$Html$Attributes$style, 'height', '200px'),
							elm$html$Html$Attributes$src(stringUrl)
						]),
					_List_Nil)
				]));
	});
var author$project$Demo$TopAppBar$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'display', '-ms-flexbox'),
						A2(elm$html$Html$Attributes$style, 'display', 'flex'),
						A2(elm$html$Html$Attributes$style, '-ms-flex-wrap', 'wrap'),
						A2(elm$html$Html$Attributes$style, 'flex-wrap', 'wrap'),
						A2(elm$html$Html$Attributes$style, 'min-height', '200px')
					]),
				_List_fromArray(
					[
						A2(author$project$Demo$TopAppBar$iframe, 'Standard', author$project$Demo$Url$StandardTopAppBar),
						A2(author$project$Demo$TopAppBar$iframe, 'Fixed', author$project$Demo$Url$FixedTopAppBar),
						A2(author$project$Demo$TopAppBar$iframe, 'Dense', author$project$Demo$Url$DenseTopAppBar),
						A2(author$project$Demo$TopAppBar$iframe, 'Prominent', author$project$Demo$Url$ProminentTopAppBar),
						A2(author$project$Demo$TopAppBar$iframe, 'Short', author$project$Demo$Url$ShortTopAppBar),
						A2(author$project$Demo$TopAppBar$iframe, 'Short - Always Collapsed', author$project$Demo$Url$ShortCollapsedTopAppBar)
					]))
			]),
		hero: _List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'width', '480px'),
						A2(elm$html$Html$Attributes$style, 'height', '72px')
					]),
				_List_fromArray(
					[
						A2(
						author$project$Material$TopAppBar$topAppBar,
						_Utils_update(
							author$project$Material$TopAppBar$topAppBarConfig,
							{
								additionalAttributes: _List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'position', 'static')
									])
							}),
						_List_fromArray(
							[
								A2(
								author$project$Material$TopAppBar$section,
								_List_fromArray(
									[author$project$Material$TopAppBar$alignStart]),
								_List_fromArray(
									[
										A2(
										author$project$Material$Icon$icon,
										_Utils_update(
											author$project$Material$Icon$iconConfig,
											{
												additionalAttributes: _List_fromArray(
													[author$project$Material$TopAppBar$navigationIcon])
											}),
										'menu'),
										A2(
										elm$html$Html$span,
										_List_fromArray(
											[author$project$Material$TopAppBar$title]),
										_List_fromArray(
											[
												elm$html$Html$text('Title')
											]))
									])),
								A2(
								author$project$Material$TopAppBar$section,
								_List_fromArray(
									[author$project$Material$TopAppBar$alignEnd]),
								_List_fromArray(
									[
										A2(
										author$project$Material$Icon$icon,
										_Utils_update(
											author$project$Material$Icon$iconConfig,
											{
												additionalAttributes: _List_fromArray(
													[author$project$Material$TopAppBar$actionItem])
											}),
										'file_download'),
										A2(
										author$project$Material$Icon$icon,
										_Utils_update(
											author$project$Material$Icon$iconConfig,
											{
												additionalAttributes: _List_fromArray(
													[author$project$Material$TopAppBar$actionItem])
											}),
										'print'),
										A2(
										author$project$Material$Icon$icon,
										_Utils_update(
											author$project$Material$Icon$iconConfig,
											{
												additionalAttributes: _List_fromArray(
													[author$project$Material$TopAppBar$actionItem])
											}),
										'more_vert')
									]))
							]))
					]))
			]),
		prelude: 'Top App Bars are a container for items such as application title, navigation icon, and action items.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/top-app-bar/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-app-bar-top'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar')
		},
		title: 'Top App Bar'
	};
};
var author$project$Demo$TopAppBarPage$demoParagraph = '\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n    commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate\n    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n    est laborum.\n    ';
var author$project$Demo$TopAppBarPage$view = F2(
	function (lift, _n0) {
		var topAppBar = _n0.topAppBar;
		var fixedAdjust = _n0.fixedAdjust;
		return A2(
			elm$html$Html$map,
			lift,
			A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'height', '200vh'),
						author$project$Material$Typography$typography
					]),
				_List_fromArray(
					[
						topAppBar,
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[fixedAdjust]),
						A2(
							elm$core$List$repeat,
							4,
							A2(
								elm$html$Html$p,
								_List_Nil,
								_List_fromArray(
									[
										elm$html$Html$text(author$project$Demo$TopAppBarPage$demoParagraph)
									]))))
					])));
	});
var author$project$Demo$Typography$body1Paragraph = 'Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.';
var author$project$Demo$Typography$body2Paragraph = 'Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.';
var author$project$Material$Typography$button = elm$html$Html$Attributes$class('mdc-typography--button');
var author$project$Material$Typography$caption = elm$html$Html$Attributes$class('mdc-typography--caption');
var author$project$Material$Typography$headline1 = elm$html$Html$Attributes$class('mdc-typography--headline1');
var author$project$Material$Typography$headline2 = elm$html$Html$Attributes$class('mdc-typography--headline2');
var author$project$Material$Typography$headline3 = elm$html$Html$Attributes$class('mdc-typography--headline3');
var author$project$Material$Typography$headline4 = elm$html$Html$Attributes$class('mdc-typography--headline4');
var author$project$Material$Typography$overline = elm$html$Html$Attributes$class('mdc-typography--overline');
var elm$html$Html$h4 = _VirtualDom_node('h4');
var elm$html$Html$h5 = _VirtualDom_node('h5');
var author$project$Demo$Typography$view = function (model) {
	return {
		content: _List_fromArray(
			[
				A2(
				elm$html$Html$h1,
				_List_fromArray(
					[author$project$Material$Typography$headline1]),
				_List_fromArray(
					[
						elm$html$Html$text('Headline 1')
					])),
				A2(
				elm$html$Html$h2,
				_List_fromArray(
					[author$project$Material$Typography$headline2]),
				_List_fromArray(
					[
						elm$html$Html$text('Headline 2')
					])),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[author$project$Material$Typography$headline3]),
				_List_fromArray(
					[
						elm$html$Html$text('Headline 3')
					])),
				A2(
				elm$html$Html$h4,
				_List_fromArray(
					[author$project$Material$Typography$headline4]),
				_List_fromArray(
					[
						elm$html$Html$text('Headline 4')
					])),
				A2(
				elm$html$Html$h5,
				_List_fromArray(
					[author$project$Material$Typography$headline5]),
				_List_fromArray(
					[
						elm$html$Html$text('Headline 5')
					])),
				A2(
				elm$html$Html$h6,
				_List_fromArray(
					[author$project$Material$Typography$headline6]),
				_List_fromArray(
					[
						elm$html$Html$text('Headline 6')
					])),
				A2(
				elm$html$Html$h6,
				_List_fromArray(
					[author$project$Material$Typography$subtitle1]),
				_List_fromArray(
					[
						elm$html$Html$text('Subtitle 1')
					])),
				A2(
				elm$html$Html$h6,
				_List_fromArray(
					[author$project$Material$Typography$subtitle2]),
				_List_fromArray(
					[
						elm$html$Html$text('Subtitle 2')
					])),
				A2(
				elm$html$Html$p,
				_List_fromArray(
					[author$project$Material$Typography$body1]),
				_List_fromArray(
					[
						elm$html$Html$text(author$project$Demo$Typography$body1Paragraph)
					])),
				A2(
				elm$html$Html$p,
				_List_fromArray(
					[author$project$Material$Typography$body2]),
				_List_fromArray(
					[
						elm$html$Html$text(author$project$Demo$Typography$body2Paragraph)
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[author$project$Material$Typography$button]),
				_List_fromArray(
					[
						elm$html$Html$text('Button text')
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[author$project$Material$Typography$caption]),
				_List_fromArray(
					[
						elm$html$Html$text('Caption text')
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[author$project$Material$Typography$overline]),
				_List_fromArray(
					[
						elm$html$Html$text('Overline text')
					]))
			]),
		hero: _List_fromArray(
			[
				A2(
				elm$html$Html$h1,
				_List_fromArray(
					[author$project$Material$Typography$headline1]),
				_List_fromArray(
					[
						elm$html$Html$text('Typography')
					]))
			]),
		prelude: 'Roboto is the standard typeface on Android and Chrome.',
		resources: {
			documentation: elm$core$Maybe$Just('https://material.io/components/web/catalog/typography/'),
			materialDesignGuidelines: elm$core$Maybe$Just('https://material.io/go/design-typography'),
			sourceCode: elm$core$Maybe$Just('https://github.com/material-components/material-components-web/tree/master/packages/mdc-typography')
		},
		title: 'Typography'
	};
};
var author$project$Main$ButtonsMsg = function (a) {
	return {$: 'ButtonsMsg', a: a};
};
var author$project$Main$CardsMsg = function (a) {
	return {$: 'CardsMsg', a: a};
};
var author$project$Main$CheckboxMsg = function (a) {
	return {$: 'CheckboxMsg', a: a};
};
var author$project$Main$ChipsMsg = function (a) {
	return {$: 'ChipsMsg', a: a};
};
var author$project$Main$CloseCatalogDrawer = {$: 'CloseCatalogDrawer'};
var author$project$Main$DenseTopAppBarMsg = function (a) {
	return {$: 'DenseTopAppBarMsg', a: a};
};
var author$project$Main$DialogMsg = function (a) {
	return {$: 'DialogMsg', a: a};
};
var author$project$Main$DismissibleDrawerMsg = function (a) {
	return {$: 'DismissibleDrawerMsg', a: a};
};
var author$project$Main$DrawerMsg = function (a) {
	return {$: 'DrawerMsg', a: a};
};
var author$project$Main$ElevationMsg = function (a) {
	return {$: 'ElevationMsg', a: a};
};
var author$project$Main$FabsMsg = function (a) {
	return {$: 'FabsMsg', a: a};
};
var author$project$Main$FixedTopAppBarMsg = function (a) {
	return {$: 'FixedTopAppBarMsg', a: a};
};
var author$project$Main$IconButtonMsg = function (a) {
	return {$: 'IconButtonMsg', a: a};
};
var author$project$Main$ImageListMsg = function (a) {
	return {$: 'ImageListMsg', a: a};
};
var author$project$Main$LayoutGridMsg = function (a) {
	return {$: 'LayoutGridMsg', a: a};
};
var author$project$Main$LinearProgressMsg = function (a) {
	return {$: 'LinearProgressMsg', a: a};
};
var author$project$Main$ListsMsg = function (a) {
	return {$: 'ListsMsg', a: a};
};
var author$project$Main$MenuMsg = function (a) {
	return {$: 'MenuMsg', a: a};
};
var author$project$Main$ModalDrawerMsg = function (a) {
	return {$: 'ModalDrawerMsg', a: a};
};
var author$project$Main$Navigate = function (a) {
	return {$: 'Navigate', a: a};
};
var author$project$Main$OpenCatalogDrawer = {$: 'OpenCatalogDrawer'};
var author$project$Main$PermanentDrawerMsg = function (a) {
	return {$: 'PermanentDrawerMsg', a: a};
};
var author$project$Main$ProminentTopAppBarMsg = function (a) {
	return {$: 'ProminentTopAppBarMsg', a: a};
};
var author$project$Main$RadioButtonsMsg = function (a) {
	return {$: 'RadioButtonsMsg', a: a};
};
var author$project$Main$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var author$project$Main$SelectMsg = function (a) {
	return {$: 'SelectMsg', a: a};
};
var author$project$Main$ShortCollapsedTopAppBarMsg = function (a) {
	return {$: 'ShortCollapsedTopAppBarMsg', a: a};
};
var author$project$Main$ShortTopAppBarMsg = function (a) {
	return {$: 'ShortTopAppBarMsg', a: a};
};
var author$project$Main$SliderMsg = function (a) {
	return {$: 'SliderMsg', a: a};
};
var author$project$Main$StandardTopAppBarMsg = function (a) {
	return {$: 'StandardTopAppBarMsg', a: a};
};
var author$project$Main$SwitchMsg = function (a) {
	return {$: 'SwitchMsg', a: a};
};
var author$project$Main$TabBarMsg = function (a) {
	return {$: 'TabBarMsg', a: a};
};
var author$project$Main$TextFieldMsg = function (a) {
	return {$: 'TextFieldMsg', a: a};
};
var author$project$Main$ThemeMsg = function (a) {
	return {$: 'ThemeMsg', a: a};
};
var author$project$Main$TopAppBarMsg = function (a) {
	return {$: 'TopAppBarMsg', a: a};
};
var author$project$Main$TypographyMsg = function (a) {
	return {$: 'TypographyMsg', a: a};
};
var author$project$Main$body = function (model) {
	var catalogPageConfig = {closeDrawer: author$project$Main$CloseCatalogDrawer, drawerOpen: model.catalogDrawerOpen, navigate: author$project$Main$Navigate, openDrawer: author$project$Main$OpenCatalogDrawer, url: model.url};
	var _n0 = model.url;
	switch (_n0.$) {
		case 'StartPage':
			return author$project$Demo$Startpage$view;
		case 'Button':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$ButtonsMsg,
				catalogPageConfig,
				author$project$Demo$Buttons$view(model.buttons));
		case 'Card':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$CardsMsg,
				catalogPageConfig,
				author$project$Demo$Cards$view(model.cards));
		case 'Checkbox':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$CheckboxMsg,
				catalogPageConfig,
				author$project$Demo$Checkbox$view(model.checkbox));
		case 'Chips':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$ChipsMsg,
				catalogPageConfig,
				author$project$Demo$Chips$view(model.chips));
		case 'Dialog':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$DialogMsg,
				catalogPageConfig,
				author$project$Demo$Dialog$view(model.dialog));
		case 'Drawer':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$DrawerMsg,
				catalogPageConfig,
				author$project$Demo$Drawer$view(model.drawer));
		case 'DismissibleDrawer':
			return A2(
				author$project$Demo$DrawerPage$view,
				author$project$Main$DismissibleDrawerMsg,
				author$project$Demo$DismissibleDrawer$view(model.dismissibleDrawer));
		case 'ModalDrawer':
			return A2(
				author$project$Demo$DrawerPage$view,
				author$project$Main$ModalDrawerMsg,
				author$project$Demo$ModalDrawer$view(model.modalDrawer));
		case 'PermanentDrawer':
			return A2(
				author$project$Demo$DrawerPage$view,
				author$project$Main$PermanentDrawerMsg,
				author$project$Demo$PermanentDrawer$view(model.permanentDrawer));
		case 'Elevation':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$ElevationMsg,
				catalogPageConfig,
				author$project$Demo$Elevation$view(model.elevation));
		case 'Fab':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$FabsMsg,
				catalogPageConfig,
				author$project$Demo$Fabs$view(model.fabs));
		case 'IconButton':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$IconButtonMsg,
				catalogPageConfig,
				author$project$Demo$IconButton$view(model.iconButton));
		case 'ImageList':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$ImageListMsg,
				catalogPageConfig,
				author$project$Demo$ImageList$view(model.imageList));
		case 'LinearProgress':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$LinearProgressMsg,
				catalogPageConfig,
				author$project$Demo$LinearProgress$view(model.linearProgress));
		case 'List':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$ListsMsg,
				catalogPageConfig,
				author$project$Demo$Lists$view(model.lists));
		case 'RadioButton':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$RadioButtonsMsg,
				catalogPageConfig,
				author$project$Demo$RadioButtons$view(model.radio));
		case 'Select':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$SelectMsg,
				catalogPageConfig,
				author$project$Demo$Selects$view(model.selects));
		case 'Menu':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$MenuMsg,
				catalogPageConfig,
				author$project$Demo$Menus$view(model.menus));
		case 'Slider':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$SliderMsg,
				catalogPageConfig,
				author$project$Demo$Slider$view(model.slider));
		case 'Snackbar':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$SnackbarMsg,
				catalogPageConfig,
				author$project$Demo$Snackbar$view(model.snackbar));
		case 'Switch':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$SwitchMsg,
				catalogPageConfig,
				author$project$Demo$Switch$view(model._switch));
		case 'TabBar':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$TabBarMsg,
				catalogPageConfig,
				author$project$Demo$TabBar$view(model.tabbar));
		case 'TextField':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$TextFieldMsg,
				catalogPageConfig,
				author$project$Demo$TextFields$view(model.textfields));
		case 'Theme':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$ThemeMsg,
				catalogPageConfig,
				author$project$Demo$Theme$view(model.theme));
		case 'TopAppBar':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$TopAppBarMsg,
				catalogPageConfig,
				author$project$Demo$TopAppBar$view(model.topAppBar));
		case 'StandardTopAppBar':
			return A2(
				author$project$Demo$TopAppBarPage$view,
				author$project$Main$StandardTopAppBarMsg,
				author$project$Demo$StandardTopAppBar$view(model.standardTopAppBar));
		case 'FixedTopAppBar':
			return A2(
				author$project$Demo$TopAppBarPage$view,
				author$project$Main$FixedTopAppBarMsg,
				author$project$Demo$FixedTopAppBar$view(model.fixedTopAppBar));
		case 'ProminentTopAppBar':
			return A2(
				author$project$Demo$TopAppBarPage$view,
				author$project$Main$ProminentTopAppBarMsg,
				author$project$Demo$ProminentTopAppBar$view(model.prominentTopAppBar));
		case 'ShortTopAppBar':
			return A2(
				author$project$Demo$TopAppBarPage$view,
				author$project$Main$ShortTopAppBarMsg,
				author$project$Demo$ShortTopAppBar$view(model.shortTopAppBar));
		case 'DenseTopAppBar':
			return A2(
				author$project$Demo$TopAppBarPage$view,
				author$project$Main$DenseTopAppBarMsg,
				author$project$Demo$DenseTopAppBar$view(model.denseTopAppBar));
		case 'ShortCollapsedTopAppBar':
			return A2(
				author$project$Demo$TopAppBarPage$view,
				author$project$Main$ShortCollapsedTopAppBarMsg,
				author$project$Demo$ShortCollapsedTopAppBar$view(model.shortCollapsedTopAppBar));
		case 'LayoutGrid':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$LayoutGridMsg,
				catalogPageConfig,
				author$project$Demo$LayoutGrid$view(model.layoutGrid));
		case 'Ripple':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$RippleMsg,
				catalogPageConfig,
				author$project$Demo$Ripple$view(model.ripple));
		case 'Typography':
			return A3(
				author$project$Demo$CatalogPage$view,
				author$project$Main$TypographyMsg,
				catalogPageConfig,
				author$project$Demo$Typography$view(model.typography));
		default:
			var requestedHash = _n0.a;
			return A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$h1,
						_List_fromArray(
							[author$project$Material$Typography$headline1]),
						_List_fromArray(
							[
								elm$html$Html$text('404')
							])),
						elm$html$Html$text(requestedHash)
					]));
	}
};
var author$project$Main$view = function (model) {
	return {
		body: _List_fromArray(
			[
				author$project$Main$body(model)
			]),
		title: 'Material Components for Elm'
	};
};
var elm$browser$Browser$application = _Browser_application;
var author$project$Main$main = elm$browser$Browser$application(
	{init: author$project$Main$init, onUrlChange: author$project$Main$UrlChanged, onUrlRequest: author$project$Main$UrlRequested, subscriptions: author$project$Main$subscriptions, update: author$project$Main$update, view: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));