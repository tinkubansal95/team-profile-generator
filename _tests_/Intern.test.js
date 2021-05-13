const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should set 'name' when created", () => {
      const name = 'Tajinder';
      const id = 1234;
      const email = 'tajinder@gmail.com';
      const school = 'Monash University' ;

      const obj = new Intern(name,id,email,school);

      expect(obj.getName()).toEqual(name);
    });
    it("should set 'id' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const school = 'Monash University' ;

        const obj = new Intern(name,id,email,school);

        expect(obj.getId()).toEqual(id);
    });
    it("should set 'email' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const school = 'Monash University' ;

        const obj = new Intern(name,id,email,school);

        expect(obj.getEmail()).toEqual(email);
      });
      it("should set 'school' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const school = 'Monash University' ;

        const obj = new Intern(name,id,email,school);

        expect(obj.getSchool()).toEqual(school);
      });
    it("should default 'role' as 'Intern'", () => {
      const name = 'Tajinder';
      const id = 1234;
      const email = 'tajinder@gmail.com';
      const school = 'Monash University' ;

      const obj = new Intern(name,id,email,school);

      expect(obj.getRole()).toEqual('Intern');
    });
  });
  describe("getName", () => {
    it("should return 'name' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const school = 'Monash University' ;

        const obj = new Intern(name,id,email,school);

        const result = obj.getName();
  
        expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should return 'id' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const school = 'Monash University' ;

       const obj = new Intern(name,id,email,school);
  
        const result = obj.getId();
  
        expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should return 'email' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const school = 'Monash University' ;

        const obj = new Intern(name,id,email,school);
  
        const result = obj.getEmail();
  
        expect(result).toEqual(email);
    });
  });
  describe("getSchool", () => {
    it("should return 'school' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const school = 'Monash University' ;

        const obj = new Intern(name,id,email,school);
  
        const result = obj.getSchool();
  
        expect(result).toEqual(school);
    });
  });
  describe("getRole", () => {
    it("should return default 'role' as 'Manager'", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const school = 'Monash University' ;

        const obj = new Intern(name,id,email,school);
  
        const result = obj.getRole();
  
        expect(result).toEqual('Intern');
    });
  });
});
