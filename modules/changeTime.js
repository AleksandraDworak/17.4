function time(timeInSec) {
    var totalTime = '';
    var sec = Math.floor(timeInSec % 60);
    var min = Math.floor(((timeInSec - sec) % 3600) / 60);
    var hrs = Math.floor((timeInSec - min - sec) / 3600);
    switch (true) {
        case (timeInSec < 60):
            totalTime = sec + 'sec';
            break;
        case (timeInSec < 3600):
            totalTime = min + 'min' + sec + 'sec';
            break;
        default:
            totalTime = hrs + 'hrs' + min + 'min' + sec + 'sec';
    }
    return totalTime;
}

exports.print = time;