
describe("one test", () => {

    it.skip("should be skipped", () => {
        expect.hasAssertions();


    }); 

    it("should not be skipped", () => {
        expect.hasAssertions();

        expect(true).toBe(true);
    }); 
});


describe.skip("all tests should be skipped", () => {

    // both should be skipped
    it.skip("should be skipped", () => {
        expect.hasAssertions();


    }); 

    it("should not be skipped", () => {
        expect.hasAssertions();

        expect(true).toBe(true);
    }); 
});

