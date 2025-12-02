let count = 0;
function increment () {
count++;
document.getElementById('Value').textContent = count;
}
function decrement () {
count--;    
document.getElementById('Value').textContent = count;
}
function reset () {
 count=0;  
 document.getElementById('Value').textContent = count;
}