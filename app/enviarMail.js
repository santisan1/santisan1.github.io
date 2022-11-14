export function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "pruebaphyton3@gmail.com",
      Password: "doxfgbtnerbkzuvv",
      To: "sromeroetrr@gmail.com",
      From: "pruebaphyton3@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
    }