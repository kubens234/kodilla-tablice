"use strict"

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
	allNames = femaleNames.concat(maleNames),
	newName = 'Marian';

document.write('Pierwsza tablica: ' + femaleNames + '<br > <br >' );
document.write('Druga tablica: ' + maleNames + '<br > <br >');
document.write('Połączone tablice: ' + allNames + '<br > <br >');

if(allNames.indexOf(newName) === -1) {
	var x = allNames.push(newName);
	document.write('Podałeś imię ' + newName + ' nie było go w tablicy więc możemy dodać do niej ' + '<br > <br >' );
	document.write('Teraz prezentuje się: ' + allNames);
} else {
	document.write('Podałeś imię ' + newName + ' było już w tablicy więc nie możemy dodać do niej ' + '<br >' );
}

console.log(allNames);



