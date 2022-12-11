function stack( stackOperation, stackValue ) {
	var stackHolder = {
		count: 3,
		storage : [
			1,
			'{id: 1,value: "obj"}',
			"stringHolder",
			46
		]
	};

	var push = function(value) {
		stackHolder.storage.push( value);
		stackHolder.count ++;
		return stackHolder.storage;
	}

	var pop = function() {
		if (stackHolder.count === 0) {
			return [];
		}
		stackHolder.storage.slice(-1);
		stackHolder.count--;
		//console.log("stackHolder after pop -> ", stackHolder )
		return stackHolder.storage;
	}

	var peek = function() {
		var resltPeek=[stackHolder.storage[stackHolder.count]];
		//console.log("testPeek->",resltPeek);
		return [stackHolder.storage[stackHolder.count]];
	}
  
	var swap = function() {
		if(stackHolder.count<1) return stackHolder.storage; //less than two element in the stack
		var topElement= stackHolder.storage[stackHolder.count];
		var secondTopElement= stackHolder.storage[stackHolder.count-1];
		stackHolder.storage.splice(stackHolder.count-1,2,topElement,secondTopElement);
		//console.log("swap - removedElements after splice->",stackHolder.storage)
		return stackHolder.storage;
	}
  
	switch(stackOperation) {
	case 'push':
		push(stackValue);
	break;
	case 'pop':
		pop();
	break;
	case 'swap':
		swap();
	break;
	case 'peek':
		peek();
	break;
	default:
		return stackHolder.storage;
	}
}










module.exports = stack;