class Calculator{
    add(a,b){
        let checkNumbers=this.isNumber(a,b);
        if(checkNumbers){
            return a+b;
        }else{
            return undefined;
        }        
    }
    subtract(a,b){
        let checkNumbers=this.isNumber(a,b);
        if(checkNumbers){
            return a-b;
        }else{
            return undefined;
        }  
    }
    multipluy(a, b) {
        let checkNumbers=this.isNumber(a,b);
        if(checkNumbers){
            return a*b;
        }else{
            return undefined;
        }  
    }
    divide(a, b) {
        let checkNumbers=this.isNumber(a,b);
        if(checkNumbers){
            return a/b;
        }else{
            return undefined;
        }  
    }
    max(a, b) {
        let checkNumbers=this.isNumber(a,b);
        if(checkNumbers){
            return Math.max(a,b);
        }else{
            return undefined;
        }  
    }
    min(a, b) {
        let checkNumbers=this.isNumber(a,b);
        if(checkNumbers){
            return Math.min(a,b);
        }else{
            return undefined;
        }  
    }
    avrage(a, b) {
        let checkNumbers=this.isNumber(a,b);
        if(checkNumbers){
            let sum=this.add(a,b);
            return sum/2;
        }else{
            return undefined;
        }  
    }
    isNumber(a,b){
        if(isNaN(a) || isNaN(b)){
            return false;
        }else{
            return true;
        }
    }
}

describe("Calculator Project", ()=>{
    let calc;
    beforeEach(()=>{
        calc=new Calculator();
    })
    afterEach(()=>{
        calc=null;
    })

    it("should be able to declare Calculator class", function () {
        expect(Calculator).toBeDefined();
        expect(Calculator).not.toBeUndefined();
        expect(Calculator).not.toBeNull();
    });

    it("should be able to add two numbers", function () {
        let a=5,
        b=2;
        expect(calc.add(a,b)).not.toBe(undefined);
        expect(calc.add(a,b)).toEqual(7);
        expect(calc.add(a,b)).not.toBe(1);
        expect(calc.add(a,b)).not.toBeNaN();
        console.log(`Add two numbers (${a},${b}):`,calc.add(a,b));
    });

    it("should be able to subtract two numbers", function () {
        let a=3,
        b=2;
        expect(calc.subtract(a,b)).not.toBe(undefined);
        expect(calc.subtract(a,b)).not.toBeNaN();
        expect(calc.subtract(a,b)).toEqual(1);
        expect(calc.subtract(a,b)).not.toBe(5);          
        console.log(`Subtract two numbers (${a},${b}):`,calc.subtract(a,b));
    });
    it("should be able to multipluy two numbers", function () {
        let a=3,
        b=2;
        expect(calc.multipluy(a,b)).not.toBe(undefined);
        expect(calc.multipluy(a,b)).not.toBeNaN();
        expect(calc.multipluy(a,b)).toEqual(6);
        expect(calc.multipluy(a,b)).not.toBe(5);          
        console.log(`Multipluy two numbers (${a},${b}):`,calc.multipluy(a,b));
    });
    it("should be able to divide two numbers", function () {
        let a=6,
        b=2;
        expect(calc.divide(a,b)).not.toBe(undefined);
        expect(calc.divide(a,b)).not.toBeNaN();
        expect(calc.divide(a,b)).toEqual(3);
        expect(calc.divide(a,b)).not.toBe(5);  
        console.log(`Divide two numbers (${a},${b}):`,calc.divide(a,b));
    });
    it("should be able to max between two numbers", function () {
        let a=6,
        b=2;
        expect(calc.max(a,b)).not.toBe(undefined);
        expect(calc.max(a,b)).not.toBeNaN();
        expect(calc.max(a,b)).toEqual(6);
        expect(calc.max(a,b)).not.toBe(5);  
        console.log(`Max between two numbers (${a},${b}):`,calc.max(a,b));
    });
    it("should be able to min between two numbers", function () {
        let a=6,
        b=2;
        expect(calc.min(a,b)).not.toBe(undefined);
        expect(calc.min(a,b)).not.toBeNaN();
        expect(calc.min(a,b)).toEqual(2);
        expect(calc.min(a,b)).not.toBe(5);  
        console.log(`Min between two numbers (${a},${b}):`,calc.min(a,b));
    });
    it("should be able to avrage two numbers", function () {
        let a=6,
        b=2;
        expect(calc.avrage(a,b)).not.toBe(undefined);
        expect(calc.avrage(a,b)).not.toBeNaN();
        expect(calc.avrage(a,b)).toEqual(4);
        expect(calc.avrage(a,b)).not.toBe(5);  
        console.log(`Avrage two numbers (${a},${b}):`,calc.avrage(a,b));
    });
})