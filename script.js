// Array of animal facts in Turkish
const animalFacts = [
    "Filler, karadaki en büyük hayvanlardır ve inanılmaz bir hafızaya sahiptirler.",
    "Arılar, dünyadaki ekinlerin %70'ini tozlaştırmak için gereklidir.",
    "Yunuslar son derece zekidir ve iletişim ve navigasyon için yankılama kullanır.",
    "Kaplanlar, yalnız yaşayan hayvanlardır ve vahşi doğada büyük alanlara ihtiyaç duyarlar.",
    "Deniz su samurları, uyurken birbirlerinden uzaklaşmamak için el ele tutuşur.",
    "Mercan resifleri, tüm deniz türlerinin %25'ini destekler ve kıyı bölgelerini erozyondan korur."
  ];
  
  // Function to display a random fact
  function displayFact() {
    const factElement = document.getElementById("animalFact");
    const randomFact = animalFacts[Math.floor(Math.random() * animalFacts.length)];
    factElement.textContent = randomFact;
  }
  