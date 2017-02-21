var ContactUserManagement;
(function (ContactUserManagement) {
    var CloudUser = (function () {
        function CloudUser(id, username) {
            this.id = id;
            this.username = username;
            this._password = '';
        }
        Object.defineProperty(CloudUser.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                if (value != undefined) {
                    this._firstName = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CloudUser.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            set: function (value) {
                if (value != undefined) {
                    this._lastName = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        CloudUser.prototype.setPassword = function (password) {
            this._password = password;
        };
        CloudUser.prototype.login = function (username, password) {
            return this._password !== '' && this.username === username && this._password === password;
        };
        return CloudUser;
    }());
    ContactUserManagement.CloudUser = CloudUser;
    var CloudUserCollection = (function () {
        function CloudUserCollection() {
            this.users = [];
        }
        CloudUserCollection.prototype.addUser = function (user) {
            this.users.push(user);
        };
        CloudUserCollection.prototype.generateList = function () {
            var outList = '';
            for (var i = 0; i < this.users.length; i++) {
                var u = this.users[i];
                outList += u.firstName + "  " + u.lastName + "(" + u.id + ")\n";
            }
            return outList;
        };
        return CloudUserCollection;
    }());
    ContactUserManagement.CloudUserCollection = CloudUserCollection;
})(ContactUserManagement || (ContactUserManagement = {}));
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
var users = new ContactUserManagement.CloudUserCollection();
users.addUser(u1);
users.addUser(u2);
users.addUser(u3);
console.log(users.generateList());
//# sourceMappingURL=ContactUserManagement.js.map