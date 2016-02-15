describe('FBW Testing -', function(){
  it('argument 3 should return Fizz', function() {
    expect(fizzBuzzWoof(3)).toBe("Fizz");
  });
  it('divisable by 3 should return Fizz', function() {
  	expect(fizzBuzzWoof(6)).toBe("Fizz");
  })
    it('argument 5 should return Buzz', function() {
  	expect(fizzBuzzWoof(5)).toBe("Buzz");
  })
    it('argument 1 should return 1', function() {
    	expect(fizzBuzzWoof(1)).toBe(1);
    })
        it('argument 13 should return Fizz', function() {
    	expect(fizzBuzzWoof(13)).toBe("Fizz");
    })
    it('argument 5 should return Buzz', function() {
       	expect(fizzBuzzWoof(15)).toBe("FizzBuzz");
       	     })
    it('argument 53 should return FizzBuzz', function() {
    	expect(fizzBuzzWoof(53)).toBe("FizzBuzz");
    })

     it('argument 7 should return Woof', function() {
    	expect(fizzBuzzWoof(7)).toBe("Woof");
    })
     it('argument 47 should return Woof', function() {
     	expect(fizzBuzzWoof(71)).toBe("Woof");
     })
     it('argument 35 should return FizzBuzzWoof', function() {
     	expect(fizzBuzzWoof(35)).toBe("FizzBuzzWoof");
     })
     it('argument 37 should return FizzWoof', function() {
     	expect(fizzBuzzWoof(37)).toBe("FizzWoof");
     })
});






