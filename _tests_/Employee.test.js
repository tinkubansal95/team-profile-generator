const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should set 'name' when created", () => {
      const name = 'Tajinder';
      const id = 1234;
      const email = 'tajinder@gmail.com'

      const obj = new Employee(name,id,email);

      expect(obj.getName()).toEqual(name);
    });

    it("should set 'id' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com'
  
        const obj = new Employee(name,id,email);
  
        expect(obj.getId()).toEqual(id);
    });
    it("should set 'email' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com'
  
        const obj = new Employee(name,id,email);
  
        expect(obj.getEmail()).toEqual(email);
      });
    it("should default 'role' as 'Employee'", () => {
      const name = 'Tajinder';
      const id = 1234;
      const email = 'tajinder@gmail.com'

      const obj = new Employee(name,id,email);

      expect(obj.getRole()).toEqual('Employee');
    });
  });
  describe("getName", () => {
    it("should return 'name' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com'

        const obj = new Employee(name,id,email);
  
        const result = obj.getName();
  
        expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should return 'id' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com'

        const obj = new Employee(name,id,email);
  
        const result = obj.getId();
  
        expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should return 'email' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com'

        const obj = new Employee(name,id,email);
  
        const result = obj.getEmail();
  
        expect(result).toEqual(email);
    });
  });
  
  describe("getRole", () => {
    it("should return default 'role' as 'Employee ", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com'

        const obj = new Employee(name,id,email);
  
        const result = obj.getRole();
  
        expect(result).toEqual('Employee');
    });
  });
});
