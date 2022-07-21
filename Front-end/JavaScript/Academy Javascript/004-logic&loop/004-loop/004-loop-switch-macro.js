// const getCarsByState = (state) => {
// 	switch (state) {
// 		case 'usa':
// 			return ['Ford', 'Dodge'];
// 		case 'france':
// 			return ['Renault', 'Peugeot'];
// 		case 'italy':
// 			return ['Fiat'];
// 		default:
// 			return [];
// 	}
// };

// console.log(getCarsByState()); // outputs []
// console.log(getCarsByState('usa')); // outputs ['Ford', 'Dodge']
// console.log(getCarsByState('italy')); // outputs ['Fiat']

// Cách viết thay thế ngắn gọn hơn
const carState = {
	usa: ['Ford', 'Dodge'],
	france: ['Renault', 'Peugeot'],
	italy: ['Fiat'],
};

const getCarsByState = (state) => {
	return carState[state] || [];
};

console.log(getCarsByState()); // outputs []
console.log(getCarsByState('usa')); // outputs ['Ford', 'Dodge']
console.log(getCarsByState('france')); // outputs ['Renault', 'Peugeot']
