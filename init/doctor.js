const doctor = require('../model/doctordb');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Care_Center', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connect Database")
    }
})

const doctors = [
    new doctor({
        _id: '01280904213',
        name: 'Nasma Elbaz Ismaile',
        email: 'Nasma.Elbaz225@yahoo.com',
        experience: '10 year',
        specialised: 'Tooth',
        degree: 'PhD',
        hourwork: '10am to 5pm',
        location: 'Alex/Egypt',
        scr:'/Tooth Specialist.jpg'
    }),
    new doctor({
        _id: '01220901616',
        name: 'Mostafa Eltras',
        email: 'Mostafa.Eltras225@yahoo.com',
        experience: '12 year',
        specialised: 'Dermatology',
        degree: 'PhD',
        hourwork: '10am to 5pm',
        location: 'Alex/Egypt',
        scr:'/Dermatology Specialist.jpg'
    }),
    new doctor({
        _id: '01290703412',
        name: 'Emam Ahmed Adel',
        email: 'Emam.Ahmed225@yahoo.com',
        experience: '10 year',
        specialised: 'Pediatrics',
        degree: 'MD',
        hourwork: '10am to 5pm',
        location: 'Alex/Egypt',
        scr:'/Pediatrics Specialist.jpg'
    }),
    new doctor({
        _id: '01290706412',
        name: 'Eman Galal Mohamed',
        email: 'Eman.Galal225@yahoo.com',
        experience: '20 year',
        specialised: 'eye doctor',
        degree: 'MD',
        hourwork: '10am to 5pm',
        location: 'Alex/Egypt',
        scr:'/eye doctor.jpg'
    }),
    new doctor({
        _id: '01290706423',
        name: 'Amr Hesham Khames',
        email: 'Amr.Hesham225@yahoo.com',
        experience: '15 year',
        specialised: 'Ear',
        degree: 'PhD',
        hourwork: '10am to 5pm',
        location: 'Alex/Egypt',
        scr:'/Ear Specialist.jpg'
    }),
    new doctor({
        _id: '01259706423',
        name: 'Khames Ahmed Mohamed',
        email: 'Khames.Ahmed225@yahoo.com',
        experience: '25 year',
        specialised: 'Psychiatry',
        degree: 'MD',
        hourwork: '10am to 5pm',
        location: 'Alex/Egypt',
        scr:'/Psychiatry Specialist.jpg'
    })
]

for (var index = 0; index < doctors.length; index++) {
    doctors[index].save((err, resulte) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("---------------------------------------------------------");
            console.log(resulte);
            console.log("---------------------------------------------------------");
        }
        if (index === resulte.length - 1) {
            mongoose.disconnect();
            console.log('close()');
        }
    })
}


