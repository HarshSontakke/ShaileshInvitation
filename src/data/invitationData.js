/**
 * Central Invitation Data
 * You can easily edit all texts, dates, times, addresses, and images here!
 */

export const invitationData = {
  // Hero Section
  hero: {
    shlok: "॥ श्री गणेशाय नमः ॥",
    heading: ["बाप्पाचे", "आगमन"],
    subtitle: "आपणास सस्नेह निमंत्रण !",
    invitation: {
      tag: "॥ सप्रेम निमंत्रक ॥",
      familyName: "सोनटक्के परिवार",
      message: ["आपण व आपल्या परिवारास", "सस्नेह निमंत्रण !"]
    },
    assets: {
      murti: "murti",
      topLayer: "topLayer",
      pillar: "pillar",
      bell: "bell2",
      logo: "logo",
      divider: "divider2"
    }
  },

  // Family / Hosts Section
  family: {
    sectionTitle: "सोनटक्के परिवार",
    tag: "॥ निमंत्रक ॥",
    subtitle: "गणरायाच्या आगमनाच्या या मंगल क्षणी आपण सर्वांनी उपस्थित राहून उत्सवाची शोभा वाढवावी.",
    bottomText: "गणरायाच्या आगमन सोहळ्यास आपली उपस्थिती हीच आमच्यासाठी आशीर्वाद असेल.",
    controls: {
      previous: "❮",
      next: "❯"
    },
    assets: {
      divider: "divider2",
      flourish: "flourish1",
      cardFlower: "flower1",
      lotus: "lotus",
      diya: "diva2",
      aarti: "aarti"
    },
    familyMembers: [
      {
        id: "pravin-sontakke",
        name: "श्री. प्रवीण सोनटक्के",
        relation: "",
        image: "family1",
        displayOrder: 1
      },
      {
        id: "anjali-sontakke",
        name: "सौ. अंजली सोनटक्के",
        relation: "",
        image: "family2",
        displayOrder: 2
      },
      {
        id: "harsh-sontakke",
        name: "चि. हर्ष सोनटक्के",
        relation: "",
        image: "family3",
        displayOrder: 3
      }
    ]
  },

  // Timeline / Utsav Schedule Section
  timeline: {
    tag: "",
    heading: "उत्सवाचा मंगल प्रवास",
    subtitle: "गणरायाच्या आगमनापासून विसर्जनापर्यंत प्रत्येक मंगल क्षणाची माहिती",
    tip: "स्पर्श करा • माहिती पहा",
    modal: {
      closeLabel: "✕",
      labels: {
        date: "दिनांक",
        time: "वेळ",
        location: "स्थळ"
      }
    },
    assets: {
      divider: "divider1",
      smallDivider: "divider2",
      lotus: "lotus",
      rowIcon: "diva"
    },
    events: [
      {
        id: "sthapana",
        title: "मूर्ती स्थापना",
        label: "स्थापना",
        date: "27 ऑगस्ट 2026",
        time: "सकाळी 10:00 वाजता",
        location: "श्री सिद्धिविनायक मंदिर",
        description: "गणरायाचे मंगल आगमन आणि मूर्ती स्थापना सोहळा.",
        image: "eventSthapana",
        side: "left"
      },
      {
        id: "sakali-aarti",
        title: "सकाळची आरती",
        label: "आरती",
        date: "दररोज",
        time: "सकाळी 8:00 वाजता",
        location: "मुख्य सभागृह",
        description: "सकाळची मंगल आरती व प्रसाद.",
        image: "eventAarti",
        side: "right"
      },
      {
        id: "sandhyakal-aarti",
        title: "संध्याकाळची आरती",
        label: "दीपआरती",
        date: "दररोज",
        time: "संध्याकाळी 7:30 वाजता",
        location: "मुख्य सभागृह",
        description: "दीपप्रज्वलन व आरती सोहळा.",
        image: "eventAarti",
        side: "left"
      },
      {
        id: "satyanarayan-pooja",
        title: "सत्यनारायण पूजा",
        label: "सत्यनारायण पूजा",
        date: "३० ऑगस्ट २०२६",
        time: "सकाळी १०:३० वाजता",
        location: "मुख्य सभागृह",
        description: "श्री सत्यनारायण महापूजा व महाप्रसाद.",
        image: "eventAtharvshish",
        side: "right"
      },
      {
        id: "mahaprasad",
        title: "महाप्रसाद",
        label: "महाप्रसाद",
        date: "30 ऑगस्ट",
        time: "रात्री 8:30 वाजता",
        location: "प्रसाद विभाग",
        description: "महाप्रसादाचा आनंद घ्या.",
        image: "eventMahaprasad",
        side: "left"
      },
      {
        id: "sanskritik-karyakram",
        title: "सांस्कृतिक कार्यक्रम",
        label: "कार्यक्रम",
        date: "31 ऑगस्ट",
        time: "सायंकाळी 6:00 वाजता",
        location: "सभागृह",
        description: "भजन, कीर्तन व सांस्कृतिक कार्यक्रम.",
        image: "eventSnehbhet",
        side: "right"
      },
      {
        id: "visarjan",
        title: "विसर्जन",
        label: "विसर्जन",
        date: "2 सप्टेंबर",
        time: "सायंकाळी 5:00 वाजता",
        location: "विसर्जन मिरवणूक",
        description: "गणरायाला निरोप देण्याचा मंगल क्षण.",
        image: "eventVisarjan",
        side: "left"
      }
    ]
  },

  // Venue & Google Maps Location Section
  location: {
    venue: "सोनटक्के निवास",
    heading: "कार्यक्रम स्थळ",
    subtitle: "गणरायाच्या दर्शनासाठी आपले सहर्ष स्वागत आहे",
    address: "फ्लॅट नं. ४०२, श्री गणेशा अपार्टमेंट्स, शिवाजीनगर पुणे - ४११००५",
    googleMapsLink: "https://maps.app.goo.gl/eYGw44jxYZum2ECCA",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121073.91939539721!2d73.8746239!3d18.5035801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1784097692102!5m2!1sen!2sin",
    buttonText: "Open Maps",
    footerMessage: ["आपल्या सहकुटुंब उपस्थितीने", "उत्सवाची शोभा वाढेल"],
    assets: {
      divider: "divider1"
    }
  },

  // Blessings & Flower Shower Section
  blessings: {
    heading: "बाप्पाचे आशीर्वाद",
    subtitle: "स्पर्श करा आणि बाप्पांचे मंगल आशीर्वाद प्राप्त करा",
    note: "बाप्पांच्या चरणी भक्तीपूर्वक फुलांची अर्पण करा",
    buttonText: "फुलांची वर्षाव करा",
    assets: {
      divider: "divider1",
      murti: "murti2"
    },
    dust: {
      count: 14,
      minDuration: 6,
      durationRange: 5,
      delayRange: 6
    }
  },

  // Gallery Section
  gallery: {
    heading: "आगमनाची तयारी",
    subtitle: ["गणरायाच्या स्वागतासाठी", "प्रेमाने सजवलेले काही खास क्षण"],
    assets: {
      divider: "divider1",
      smallDivider: "divider2"
    },
    images: [
      {
        id: "gallery-1",
        image: "gallery1",
        alt: "Gallery 1",
        rotation: 0,
        size: "large"
      },
      {
        id: "gallery-2",
        image: "gallery2",
        alt: "Gallery 2",
        rotation: -2.5,
        size: "small"
      },
      {
        id: "gallery-3",
        image: "gallery3",
        alt: "Gallery 3",
        rotation: 2.5,
        size: "small"
      },
      {
        id: "gallery-4",
        image: "gallery4",
        alt: "Gallery 4",
        rotation: 2,
        size: "small"
      },
      {
        id: "gallery-5",
        image: "gallery5",
        alt: "Gallery 5",
        rotation: -2,
        size: "small"
      }
    ]
  },

  // Footer Section
  footer: {
    quote: {
      firstLine: "आपली उपस्थिती हेच",
      secondLine: "आमच्यासाठी बाप्पांचे खरे",
      endingText: "आशीर्वाद आहेत."
    },
    family: "— सोनटक्के परिवार",
    brand: "Crafted by INVI DIGITALS",
    brandUrl: "https://www.instagram.com/invi.digitals",
    assets: {
      divider: "divider2",
      diya: "diva2",
      aarti: "aarti"
    }
  }
};

export default invitationData;
