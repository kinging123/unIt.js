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
The last parameter is **optional**. It says `dist` which stands for Distance. It tells our function that those values are distances and not, for example, weights.