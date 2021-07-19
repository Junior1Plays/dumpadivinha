var answer = Math.floor(Math.random() * 10000);
var attempts = 0

function verifyAnswer() {
	if(userAnswer.value === '') {
		window.alert("Insira uma resposta!")
	} else {
		if (userAnswer.value == answer) {
        document.getElementById('attempts').style.visibility = "visible";
		document.getElementById('greaterless').style.visibility = "visible";
        document.getElementById('userAnswer').style.visibility = "hidden";
        document.getElementById('forderButton').style.visibility = "hidden";
        document.getElementById('attempts').innerText = `Você fez ${attempts} tentativas.`
		document.getElementById('greaterless').innerText = "= (Igual)"
    } else {
		attempts = attempts + 1
		document.getElementById('greaterless').style.visibility = "visible";
		if(userAnswer.value < answer) {
			document.getElementById('greaterless').innerText = "+ (Maior)"
		} else {
			document.getElementById('greaterless').innerText = "- (Menor)"
		}
    }}
}