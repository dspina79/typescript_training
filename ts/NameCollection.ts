export class NameCollection{

    names : string[] = [];

    constructor(name: string){
        this.names.push(name);
    }

    add(newName: string){
        this.names.push(newName);
    }

    printout(){
        for(var i = 0; i < this.names.length; i++){
            console.log(this.names[i]);
        }
    }
}

var nc = new NameCollection('Dave');
nc.add('Kate');
nc.add('Emily');

nc.printout();