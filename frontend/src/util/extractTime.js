export function extractTime(dateString){
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}


// helper function to add single-digit numbers with a leading zero
function padZero(num) {
    return num.toString().padStart(2, "0");
}