const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scan this QR code to connect with WhatsApp.');
});

client.on('ready', () => {
    console.log('WhatsApp client is ready!');
});

client.on('message', message => {
    console.log(`Message received: ${message.body}`);
    if (message.body.toLowerCase() === 'hello') {
        client.sendMessage(message.from, 'Hi! How can I assist you?');
    }
});

client.initialize();

module.exports = client;
