$(function() {
    var availableCities = [
        "Ankara, Turkiye",
        "Beijing, China",
        "Berlin, German",
        "Buenos Aires, Argentina",
        "Copenhagen, Denmark",
        "Dallas, USA",
        "Edinburgh, UK",
        "Fuzhou, China",
        "Geneva, Switzerland",
        "Hanoi, Vietnam",
        "Istanbul, Turkiye",
        "Incheon, South Korea",
        "Jakarta, Indonesia",
        "Kuala Lumpur, Malaysia",
        "London, UK",
        "Madrid, Spain",
        "Nagoya, Japan",
        "Nagpur, India",
        "New York, USA",
        "Osaka, Japan",
        "Oslo, Norway",
        "Paris, French",
        "Queenstown, New Zealand",
        "Riyadh, Saudi Arabia",
        "Rome, Italy",
        "Singapore, Singapore",
        "Seoul, South Korea",
        "Tokyo, Japan",
        "Ulyanovsk, Russia",
        "Vancouver, Canada",
        "Washington DC, USA",
        "Xiamen, China",
        "Yangon, Myanmar",
        "Zhoushan, China"
    ];
  
    $("#inputFrom, #inputTo").autocomplete({
      source: availableCities
  });
});