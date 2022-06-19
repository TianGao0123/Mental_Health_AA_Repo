class User{
    constructor(name, level, meetingStatus, sponsorStatus, recordArray){
        if(name == null){
            name = "Sam Smith";
        }
        if(level == null || level < 1 || level > 12){
            level = 1;
        }
        if(meetingStatus == null){
            meetingStatus = "online"
        }
        if(sponsorStatus == null){
            sponsorStatus = "No"
        }
        if(recordArray == null){
            recordArray = [];
        }

        this.name = name;
        this.level = level;
        this.meetingStatus = meetingStatus;
        this.sponsorStatus = sponsorStatus;
        this.recordArray = recordArray;

    }

    get getName() {
        return this.name;
    }

    get getLevel(){
        return this.level;
    }
    
    get getMeetingStatus(){
        return this.meetingStatus;
    }

    get getSponsorStatus(){
        return this.sponsorStatus;
    }
    get getRecordArray(){
        return this.recordArray;
    }

    set setName(name) {
        this.name = name;
    }

    set setLevel(level) {
        this.level = level;
    }

    set setMeetingStatus(meetingStatus){
        this.meetingStatus = meetingStatus;
    }
    set setSponsorStatus(sponsorStatus){
        this.sponsorStatus = sponsorStatus;
    }
    
    addtoRecord(amount){
        this.recordArray.unshift(amount);
    }

    get toString(){
        return (this.name + "&" + this.level + "&" 
        + this.meetingStatus + "&" + this.sponsorStatus + "&" + this.recordArray)
    }
}

function stringToUser(str){
    if(str == null){
        return new User(null, null, null, null,null);
    }

    arr = str.split("&");
    return new User(arr[0], arr[1], arr[2], arr[3],arr[4]);
    
}