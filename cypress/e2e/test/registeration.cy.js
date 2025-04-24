import Registration from "../../pages/register";
const registerobj = new Registration();
import testdata from "../../fixtures/testdata.json";
const URL = "https://the-internet.herokuapp.com/login";

describe("Login_Page", ()=>{
    beforeEach(() => {
        cy.visit(URL)
      })
    it("Enter User", ()=>{
        registerobj.enterUser(testdata.Name);
        registerobj.enterPassword(testdata.pwd);
        registerobj.loginbutton(); 
    })
})