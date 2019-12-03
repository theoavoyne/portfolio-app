const moment = require('moment');
const nodemailer = require('nodemailer');

moment.locale('fr');

const htmlify = (obj) => (`
  <p><b>Date</b> : ${moment().format('LLL')}</p>
  <p><b>Prénom</b> : ${obj.prenom}</p>
  <p><b>Nom</b> : ${obj.nom}</p>
  <p><b>Entreprise</b> : ${obj.entreprise}</p>
  <p><b>Poste</b> : ${obj.poste}</p>
  <p><b>Nom du projet</b> : ${obj.projet}</p>
  <p><b>Description</b> : ${obj.description}</p>
  <p><b>Email</b> : ${obj.email}</p>
  <p><b>Téléphone</b> : ${obj.telephone}</p>
  <p><b>Souhaite être contacté par </b> : ${obj.comment}</p>
`);

async function sendMail(formData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_SENDER_ADDRESS,
      pass: process.env.EMAIL_SENDER_PASSWORD
    }
  });

  return transporter.sendMail({
    from: process.env.EMAIL_SENDER_ADDRESS,
    to: 'tavoyne@gmail.com',
    subject: `Nouveau message de ${formData.prenom} ${formData.nom}`,
    html: htmlify(formData)
  });
}

module.exports = { sendMail };
