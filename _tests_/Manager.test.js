const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should set 'name' when created", () => {
      const name = 'Tajinder';
      const id = 1234;
      const email = 'tajinder@gmail.com';
      const officeNumber = '0123456789' ;

      const obj = new Manager(name,id,email,officeNumber);

      expect(obj.getName()).toEqual(name);
    });
    it("should set 'id' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const officeNumber = '0123456789' ; 

        const obj = new Manager(name,id,email,officeNumber);

        expect(obj.getId()).toEqual(id);
    });
    it("should set 'email' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const officeNumber = '0123456789' ; 

        const obj = new Manager(name,id,email,officeNumber);
  
        expect(obj.getEmail()).toEqual(email);
      });
      it("should set 'officeNumber' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const officeNumber = '0123456789' ; 

        const obj = new Manager(name,id,email,officeNumber);
  
        expect(obj.getOfficeNumber()).toEqual(officeNumber);
      });
    it("should default 'role' as 'Manager'", () => {
      const name = 'Tajinder';
      const id = 1234;
      const email = 'tajinder@gmail.com';
      const officeNumber = '0123456789' ; 

      const obj = new Manager(name,id,email,officeNumber);

      expect(obj.getRole()).toEqual('Manager');
    });
  });
  describe("getName", () => {
    it("should return 'name' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const officeNumber = '0123456789' ; 
  
        const obj = new Manager(name,id,email,officeNumber);

        const result = obj.getName();
  
        expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should return 'id' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const officeNumber = '0123456789' ; 
  
        const obj = new Manager(name,id,email,officeNumber);
  
        const result = obj.getId();
  
        expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should return 'email' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const officeNumber = '0123456789' ; 
  
        const obj = new Manager(name,id,email,officeNumber);
  
        const result = obj.getEmail();
  
        expect(result).toEqual(email);
    });
  });
  describe("getOfficeNumber", () => {
    it("should return 'OfficeNumber' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const officeNumber = '0123456789' ; 
  
        const obj = new Manager(name,id,email,officeNumber);
  
        const result = obj.getOfficeNumber();
  
        expect(result).toEqual(officeNumber);
    });
  });
  describe("getRole", () => {
    it("should return default 'role' as 'Manager'", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const officeNumber = '0123456789' ; 
  
        const obj = new Manager(name,id,email,officeNumber);
  
        const result = obj.getRole();
  
        expect(result).toEqual('Manager');
    });
  });
});
