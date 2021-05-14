
function ageIndays(){
    let birthyear = prompt("what year were you born...?");
    let totalageIndays = (2021 - birthyear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are '+ totalageIndays + ' days old');
    h1.setAttribute('id','ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}


function reset(){
    document.getElementById('ageIndays').remove();
}