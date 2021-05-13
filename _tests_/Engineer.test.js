const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should set 'name' when created", () => {
      const name = 'Tajinder';
      const id = 1234;
      const email = 'tajinder@gmail.com';
      const github = 'tajinder07' ;

      const obj = new Engineer(name,id,email,github);

      expect(obj.getName()).toEqual(name);
    });
    it("should set 'id' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const github = 'tajinder07' ;

        const obj = new Engineer(name,id,email,github);

        expect(obj.getId()).toEqual(id);
    });
    it("should set 'email' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const github = 'tajinder07' ;

        const obj = new Engineer(name,id,email,github);

        expect(obj.getEmail()).toEqual(email);
      });
      it("should set 'github' when created", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const github = 'tajinder07' ;

        const obj = new Engineer(name,id,email,github);

        expect(obj.getGithub()).toEqual(github);
      });
    it("should default 'role' as 'Engineer'", () => {
      const name = 'Tajinder';
      const id = 1234;
      const email = 'tajinder@gmail.com';
      const github = 'tajinder07' ;

      const obj = new Engineer(name,id,email,github);

      expect(obj.getRole()).toEqual('Engineer');
    });
  });
  describe("getName", () => {
    it("should return 'name' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const github = 'tajinder07' ;

        const obj = new Engineer(name,id,email,github);

        const result = obj.getName();
  
        expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should return 'id' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const github = 'tajinder07' ;

        const obj = new Engineer(name,id,email,github);

        const result = obj.getId();
  
        expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should return 'email' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
       const github = 'tajinder07' ;

        const obj = new Engineer(name,id,email,github);

        const result = obj.getEmail();
  
        expect(result).toEqual(email);
    });
  });
  describe("getGithub", () => {
    it("should return 'OfficeNumber' of the object", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const github = 'tajinder07' ;

        const obj = new Engineer(name,id,email,github); 
        
        const result = obj.getGithub();
  
        expect(result).toEqual(github);
    });
  });
  describe("getRole", () => {
    it("should return default 'role' as 'Engineer'", () => {
        const name = 'Tajinder';
        const id = 1234;
        const email = 'tajinder@gmail.com';
        const github = 'tajinder07' ;

        const obj = new Engineer(name,id,email,github); 
        
        const result = obj.getRole();
  
        expect(result).toEqual('Engineer');
    });
  });
});
