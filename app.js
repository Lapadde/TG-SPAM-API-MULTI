const { default: axios } = require("axios");

const url =
  "https://api.telegram.org/bot6874901840:AAGufsK6GQNn4MP3nkU-tg0YxOv-VtSujs4/sendMessage?parse_mode=markdown&chat_id=6641720272&text=Jika Ingin Botnya Berfungsi Kembali Hubungi Telegram @itstpk";

const urlm =
  "https://api.telegram.org/bot6858738345:AAGO2noAol0stL0UCP4Dv3IWKdQ52IPxANk/sendMessage?parse_mode=markdown&chat_id=6791038497&text=Jika Ingin Botnya Berfungsi Kembali Hubungi Telegram @itstpk";

const urla =
  "https://api.telegram.org/bot6244657565:AAEAJmQy3igyYBqaR6kAyPkwTZucYBtwYVE/sendMessage?parse_mode=markdown&chat_id=6233555746&text=Jika Ingin Botnya Berfungsi Kembali Hubungi Telegram @itstpk";

const urlq =
  "https://api.telegram.org/bot6313369469:AAHGaG35x3uvKv-6Hg9pGdYMwVrIJMbwr0E/sendMessage?parse_mode=markdown&chat_id=6872602971&text=Jika Ingin Botnya Berfungsi Kembali Hubungi Telegram @itstpk";

async function sendMessage() {
  try {
    while (true) {
      await axios.get(urlm).then((response) => {
        if (response.status == 200) {
          console.log(response);
        }
      });
    }
  } catch (error) {
    console.log("API down!");
    sendMessage();
  }
}

async function sendMessage2() {
  try {
    while (true) {
      await axios.get(url).then((response) => {
        if (response.status == 200) {
          console.log(response);
        }
      });
    }
  } catch (error) {
    console.log("API down!");
    sendMessage2();
  }
}

async function sendMessage3() {
  try {
    while (true) {
      await axios.get(urla).then((response) => {
        if (response.status == 200) {
          console.log(response);
        }
      });
    }
  } catch (error) {
    console.log("API down!");
    sendMessage3();
  }
}

async function sendMessage4() {
  try {
    while (true) {
      await axios.get(urlq).then((response) => {
        if (response.status == 200) {
          console.log(response);
        }
      });
    }
  } catch (error) {
    console.log("API down!");
    sendMessage4();
  }
}

sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage2();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage3();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
sendMessage4();
