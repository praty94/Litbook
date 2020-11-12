export const toDateTime = (timeStamp) => {
    if (timeStamp) {
        let t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        t.setUTCSeconds(timeStamp.seconds);
        let d = new Date();
        let diff = (d.getTime() - t.getTime()) / 1000;//seconds
        diff /= 60;//minutes  
        if (diff > 59) {
            diff = Math.floor(diff / 60);//hours
            if (diff > 23) {
                diff = Math.floor(diff / 24) + " d";
            } else {
                diff = diff + " h";
            }
        } else {
            diff = Math.floor(Math.abs(diff)) + " m";
        }
        return diff;
    } else {
        return "0 m";
    }
}