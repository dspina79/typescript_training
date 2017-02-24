var ContactUserManagement;
(function (ContactUserManagement) {
    var UserAttribute = (function () {
        function UserAttribute(key, value) {
            this.key = key;
            this.value = value;
        }
        return UserAttribute;
    }());
    ContactUserManagement.UserAttribute = UserAttribute;
    var CloudUser = (function () {
        function CloudUser(id, username) {
            this.id = id;
            this.username = username;
            this._password = '';
            this.attributes = [];
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
        CloudUser.prototype.addAttribute = function (key, value) {
            var a = new UserAttribute(key, value);
            this.attributes.push(a);
        };
        CloudUser.prototype.addAttributes = function (attributesToAdd) {
            for (var i = 0; i < attributesToAdd.length; i++) {
                this.attributes.push(attributesToAdd[i]);
            }
        };
        return CloudUser;
    }());
    ContactUserManagement.CloudUser = CloudUser;
    var CloudUserCollection = (function () {
        function CloudUserCollection() {
            this.users = [];
        }
        CloudUserCollection.prototype.addUser = function (user) {
            var userFound = false;
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].id === user.id) {
                    this.users[i] = user;
                    userFound = true;
                }
            }
            if (!userFound) {
                this.users.push(user);
            }
        };
        CloudUserCollection.prototype.removeUser = function (userToRemove) {
            var newUsers = [];
            this.users.forEach(function (user) {
                if (user.id !== userToRemove.id) {
                    newUsers.push(user);
                }
            });
            this.users = newUsers;
        };
        CloudUserCollection.prototype.generateList = function (showAttributes) {
            if (showAttributes === void 0) { showAttributes = false; }
            var outList = '';
            this.users.forEach(function (user) {
                outList += user.firstName + " " + user.lastName + " (" + user.id + ")\n";
                if (showAttributes) {
                    user.attributes.forEach(function (attr) {
                        outList += "\t" + attr.key + ": " + attr.value + "\n";
                    });
                }
            });
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
u3.firstName = "Dave";
u3.lastName = "Alderman";
u3.addAttribute("age", 25);
var u4 = new ContactUserManagement.CloudUser("999", "remove");
u4.firstName = "Linda";
u4.lastName = "Remove";
var u2Copy = new ContactUserManagement.CloudUser("150", "jsmith-tensor");
u2Copy.firstName = "Jane";
u2Copy.lastName = "Smith-Tensor";
u2Copy.addAttribute("age", 45);
u2Copy.addAttribute("height", 65);
u2Copy.addAttribute("favorite color", "red");
var users = new ContactUserManagement.CloudUserCollection();
users.addUser(u1);
users.addUser(u2);
users.addUser(u3);
users.addUser(u2Copy);
users.addUser(u4);
console.log("Before Removal:\n");
console.log(users.generateList(true));
console.log("\nAfter Removal:\n");
users.removeUser(u4);
console.log(users.generateList(true));
//# sourceMappingURL=ContactUserManagement.js.map