
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


var Test = 3;


Number.prototype.Unit = function(current, to, type) {
	number = this;
	if(typeof type === "undefined"){
		try{
			$.each(Values, function(ukey, uvalue){
				if(typeof Values[ukey][current] !== "undefined" && typeof Values[ukey][to] !== "undefined"){
					type = ukey;
				}
			})
			if(typeof type === "undefined")alert("error! wrong Values.")

		}catch(error){
			alert("Your website does not support jQuery, please enter type.  \nint.Unit(current, to, type)");
		}
	}
	return (Values[type][to]/Values[type][current])*number;
	
};


try{
	$.each(Values, function(ukey, uvalue){
		// console.log(ukey, uvalue);
		$.each(uvalue, function(ikey, ivalue){
			// console.log(">> "+ikey, ivalue)
			Number.prototype["to"+ikey] = new Function('current, type', 'return this.Unit(current, "'+ikey+'", type);');
			
		})
	})



}catch(error){
	console.log("Your website does not support jQuery: \n "+error);
}

