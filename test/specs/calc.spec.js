const {expect} = require('chai');
const operations = require("../../app/calculator");
const chai = require("chai");
const {checkError} = require("chai/lib/chai/utils");

describe("test positive ", ()=>{

    it("return sum of 5 and 5 ", ()=>{
        expect(operations.add(5,5)).to.be.equal(10);
    });
    it("return sum of 10 and 5 ", ()=>{
        expect(operations.add(10,-5)).to.be.equal(5);
    });

    it("return subtraction of 10 and 5", () => {
        expect(operations.sub(10,5)).to.be.equal(5);
    });
    it("return subtraction of 10 and 15", () => {
        expect(operations.sub(10,15)).to.be.equal(-5);
    });

    it("return multiply of 5 and 5 ", ()=>{
        expect(operations.mul(5,5)).to.be.equal(25);
    });
    it("return multiply of 0 and 5 ", ()=>{
        expect(operations.mul(0,5)).to.be.equal(0);
    });

    it("return divisor of 10 and 0 ", ()=>{
        expect(operations.div(10,0)).to.be.equal("Don't use the 0 as an value");
    });
    it("return divisor of 100 and 5 ", ()=>{
        expect(operations.div(100,5)).to.be.equal(20);
    });

});




describe("negative testing", ()=>{

    it("use only numbers, abc+4 is invalid", ()=> {
        expect(operations.add('abc', 4)).to.be.equal(false);
    });
    it("use only numbers, '8'+'4' is invalid", ()=> {
        expect(operations.add("8", "4")).to.be.equal(false);
    });
    it("use only numbers, 0+str is invalid", ()=> {
        expect(operations.add(0, "str")).to.be.equal(false);
    });

    it("use only numbers,15-'2' is invalid", ()  =>{
        expect(operations.sub(15, '2')).to.be.equal(false);
    });
    it('use only numbers, str-20 is invalid', ()  =>{
        expect(operations.sub('str', 20)).to.be.equal(false);
    });
    it('use only numbers,true-1 is invalid', ()  =>{
        expect(operations.sub(true, 1)).to.be.equal(false);
    });

    it("use only numbers,null*4 is invalid", ()=> {
        expect(operations.mul(null, 4)).to.be.equal(false);
    });
    it("use only numbers, str*'40' is invalid", ()=> {
        expect(operations.mul("str", "40")).to.be.equal(false);
    });
    it("use only numbers, 0*str is invalid", ()=> {
        expect(operations.mul(0, "str")).to.be.equal(false)
    });

    it("use only numbers, ''/'' is invalid", ()=> {
        expect(operations.div("",  "")).to.be.equal("Use only numbers");
    });
    it("use only numbers, str/'4' is invalid", ()=> {
        expect(operations.div("str", "4")).to.be.equal("Use only numbers");
    });
    it("use only numbers, '10'/0 is invalid", ()=> {
        expect(operations.div(10, 0)).to.be.equal("Don't use the 0 as an value");
    });
});
