import echo from 'echo.js';
describe("Test", ()=>{
  it("123456", ()=>{
    expect(echo(1,2,3,4,5,6)).toEqual('1-2-3-4-5-6');
  });
  it("undefined", ()=>{
    expect(echo(1,undefined,undefined,null)).toEqual('1---');
  });
});
