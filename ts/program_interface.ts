interface ProgramData{
    title: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
    numberSessions?: number;

    addSession: (num?: number) => void;
    getSessionCount: () => number;
}

var p: ProgramData = {
    title: "Programming for Dummies",
    description: "Learn programming at any level.",
    startDate: new Date(2017, 2, 15),
    endDate: new Date(2017, 2, 18),
    addSession: function(num?: number){
        if(this.numberSessions === undefined){
            this.numberSessions = 0;
        }

        if(num === undefined){
            num = 1;
        }

        this.numberSessions += num;
    },
    getSessionCount: function(){
         if(this.numberSessions === undefined){
            this.numberSessions = 0;
        }

        return this.numberSessions;
    },
    
};

console.log(p.title);
console.log(p.getSessionCount());
console.log("Adding no defined sessions.");
p.addSession();
console.log(p.getSessionCount());

console.log("Adding 3 defined sessions.");
p.addSession(3);
console.log(p.getSessionCount());
