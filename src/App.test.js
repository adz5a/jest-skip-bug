
describe("one test", () => {

    it.skip("should be skipped", () => {
        expect.hasAssertions();


    }); 

    it("should not be skipped", () => {
        expect.hasAssertions();

        expect(true).toBe(true);
    }); 
});


describe.skip("1 - all tests should be skipped", () => {

    // both should be skipped
    it.skip("should be skipped", () => {
        expect.hasAssertions();


    }); 

    it("should not be skipped", () => {
        expect.hasAssertions();

        expect(true).toBe(true);
    }); 
});

describe.skip("2 - all tests should be skipped", () => {

    // both should be skipped
    it("should not be skipped", () => {

        expect(true).toBe(true);
    }); 

    it.skip("should be skipped", () => {


    }); 
});

describe("3 - all tests should be skipped", () => {

    // both should be skipped
    it("should not be skipped", () => {

        expect(true).toBe(true);
    }); 

    it.skip("should be skipped", () => {

        expect.hasAssertions();
    }); 
});

