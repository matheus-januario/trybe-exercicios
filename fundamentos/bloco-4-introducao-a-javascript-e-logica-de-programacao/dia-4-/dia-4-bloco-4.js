//let singer = {
//  name: 'Milton',
//  lastName: 'Nacsimento',
//  nickName: 'Bituca',
//  age: 77,
//  bestAlbums: ['Travessia','Clube da Esquina', 'Minas']
//  bornInfo: {
//    city: 'Rio de Janeiro',
//    state: 'Rio de Janeiro',
//  }
//}

//console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos de idade.');

//singer.fullName = singer.name + ' ' + singer.lastName;

//console.table(singer)

//let player = {
//  name: 'Marta',
//  lastName: 'Silva',
//  age: 34,
//  medals: {
//    golden: 2,
//    silver: 3,
//  }
//}

//console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

//player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

//console.table(player)

//console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

//console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for (let key in names) {
  console.log('Olá ' + names[key]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let xav in car) {
  console.log(xav + ' ' + car[xav]);
}