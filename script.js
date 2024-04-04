//your code here
function okay(a) {
	let aa = a[0];
	let c = 1;
	for (let i = 1;i<a.length;i++){
		if (aa===a[i]){
			c++;
		}
		else{
			c--;
		}
		if (c===0){
			aa = a[i];
			c = 1;
		}
	}
	
	return aa;
}

okay(a);
