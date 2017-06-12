
var	contact = {
	number: 1,						// номер п/п
	name: 'Иванов Иван',			// ФИО
	phone: '777-77-77',				// номер телефона
	status_online: true,			// в сети/не в сети
	add_contact: {					// дополнительные контакты
		e_mail: 'ivan@gmail.com',							// e-mail
		add_phone: '000-777-77-77',							// дополнительный номер телефона
		address: ['Харьков', 'ул. Сумская', 'д.1', 'кв. 1']	// адрес
	}
};

console.log(contact); 
console.log('Object 2 - Дополнительные контакты: ', contact.add_contact); 
console.log('Array - Адрес: ', contact.add_contact.address[0], 
	contact.add_contact.address[1],
	contact.add_contact.address[2],
	contact.add_contact.address[3]);