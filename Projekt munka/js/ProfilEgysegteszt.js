var p1 = new Profil("Teszt Elek", "teszt@gmail.com", "Titkos123");
var p2 = new Profil("Kiss Anna", "anna@web.hu", "Jelszo456");
var p3 = new Profil("Nagy Béla", "bela@gmail.com", "Proba789");



console.assert(p1.getNev() === "Teszt Elek", "Név getter hibás");
console.assert(p1.getEmail() === "teszt@gmail.com", "E-mail getter hibás");
console.assert(p1.jelszoEgyezik("Titkos123") === true, "Jelszó ellenőrzése hibás");
console.assert(p1.jelszoEgyezik("Masik123") === false, "Eltérő jelszót is elfogadott");


p1.setNev("Kovács Péter");
console.assert(p1.getNev() === "Kovács Péter", "Név setter hibás");

p1.setNev("");
console.assert(p1.getNev() === "Ismeretlen", "Üres név elfogadva");

p1.setNev("Teszt!");
console.assert(p1.getNev() === "Ismeretlen", "Speciális karakter elfogadva");

p1.setNev("Teszt Elek");



p1.setEmail("uj@email.hu");
console.assert(p1.getEmail() === "uj@email.hu", "Helyes e-mail beállítása hibás");

p1.setEmail("ab");
console.assert(p1.getEmail() === "", "Túl rövid e-mail elfogadva");

p1.setEmail("tesztgmail.com");
console.assert(p1.getEmail() === "", "E-mail @ nélkül elfogadva");

p1.setEmail("teszt@gmailcom");
console.assert(p1.getEmail() === "", "E-mail pont nélkül elfogadva");

p1.setEmail("teszt@gmail.com");



p1.setJelszo("Titkos123");
console.assert(p1.jelszoEgyezik("Titkos123"), "Helyes jelszó beállítása hibás");

p1.setJelszo("abc123");
console.assert(p1.jelszoEgyezik("") === true, "Nagybetű nélküli jelszó elfogadva");

p1.setJelszo("Abcdef");
console.assert(p1.jelszoEgyezik("") === true, "Szám nélküli jelszó elfogadva");

p1.setJelszo("Ab123");
console.assert(p1.jelszoEgyezik("") === true, "Túl rövid jelszó elfogadva");

p1.setJelszo("Titkos123");