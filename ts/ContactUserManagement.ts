namespace ContactUserManagement{

    export interface IUser{
        id: string;
        username: string;
        login(username: string, password: string) : boolean;
    }

    export class CloudUser implements IUser{
        private _password: string;

        private _firstName: string;
        private _lastName: string;

        get firstName(){
            return this._firstName;
        }

        set firstName(value: string){
            if(value != undefined){
                this._firstName = value;
            }
        }
        
        get lastName(){
            return this._lastName;
        }

        set lastName(value: string){
            if(value != undefined){
                this._lastName = value;
            }
        }

        setPassword(password: string){
            this._password = password;
        }

        constructor(public id: string, public username: string){
           this._password = '';     
        }

        login(username: string, password: string){
            return this._password !== '' && this.username === username && this._password === password;
        }
    }

    export class CloudUserCollection{
        private users: CloudUser[];

        constructor(){
            this.users = [];
        }

        addUser(user: CloudUser){
            var userFound: boolean = false;
            for(var i = 0; i < this.users.length; i++){
                if(this.users[i].id === user.id){
                    this.users[i] = user;
                    userFound = true;
                }
            }

            if(!userFound){
                this.users.push(user);
            }
        }


        generateList(){
            var outList = '';

            for(var i = 0; i < this.users.length; i++){
                var u : CloudUser = this.users[i];
                outList += u.firstName +  " " + u.lastName + " (" + u.id + ")\n";
            }

            return outList;
        }
    }
}

console.log("Starting...");

var u1 = new ContactUserManagement.CloudUser("101", "dhunt");
u1.firstName = "Doug";
u1.lastName = "Hunt";
var u2 = new ContactUserManagement.CloudUser("150", "jsmith");
u2.firstName = "Jane";
u2.lastName = "Smith";
var u3 = new ContactUserManagement.CloudUser("220", "dspina");
u3.firstName = "David";
u3.lastName = "Spina";

var u2Copy = new ContactUserManagement.CloudUser("150", "jsmith-tensor");
u2Copy.firstName = "Jane";
u2Copy.lastName = "Smith-Tensor";


var users = new ContactUserManagement.CloudUserCollection();
users.addUser(u1);
users.addUser(u2);
users.addUser(u3);
users.addUser(u2Copy);

console.log(users.generateList());
