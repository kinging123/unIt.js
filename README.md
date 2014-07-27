# unIt.js


`unIt.js` is a tiny ( < 1.5 kb) JS library for calculating units easly.

You can use it in 2 different ways:


### 1: Using the Unit() method

The Unit function receives 3 parameters: `Number.Unit(current, to, type);`. `current` is the current type of unit of the variable, `to` is the type of unit you want to onvert the number to, and `type` is just the type of values... 
Sounds complicated, but here's an example:
```
var test = 3;
test.Unit("cm", "m", "dist");
```

In this example, the variable `test` contains the number 3. When we call the Unit method, we declare that those 3 are not just the number 3, but it's `3 cm` = 3 centimeters.

We say that we want to recieve the value in `m` = Meters. So what we want is basically `3 centimeters in meters`.

The last parameter is **optional (*But only if you have jQuery!*)**. It says `dist` which stands for Distance. It tells our function that those values are distances and not, for example, weights.


### 2: Using the to{unit}() method

The to{unit}() method is basically a shortcut for the Unit() method above.

 **This uses the $.each() method of jQuery, therefore it will not work if you don't have jQuery on your website.**

These 2 codes are equal:

```
var test = 3;
test.Unit("cm", "m", "dist");
```
and:
```
var test = 3;
test.tom("cm", "dist");
```

I just don't need to declare the `to` parameter because it's already being declared in the function's name. You can also use `tocm()` and basically every unit name with the word 'to' before it.

*tip: just like the Unit method above, you don't have to specify a type [`dist`]. This makes life really easy, for example - this code eqals to the two codes above:*

```
var test = 3;
test.tom("cm");
```

## A list of al avaliable units and unit types, along w/ their values:

```

var Values = {
	dist: {
		"m": 1,
		"km": 0.001,
		"mi": 0.0160934,
		"mr": 0.042195,
		"ft": 0.3048,
		"cm": 100,
		"mm": 1000,
		"dc": 10,
		"in": 39.3701,
		"yd": 0.9144,
		"nm": 0.000539957
	},

	mass: {
		"kg": 1,
		"g": 1000,
		"mg": 1000000,
		"tn": 0.001,
		"st": 0.157473,
		"lb": 2.20462,
		"oz": 35.274
	}
}

```