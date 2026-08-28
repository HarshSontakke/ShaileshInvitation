# Sacred Temple - गणेशोत्सव निमंत्रण (Ganpati Invitation Web App)

An exact, high-fidelity clone of [https://sacredtemple.vercel.app/](https://sacredtemple.vercel.app/) built with React, Vite, and Framer Motion.

---

## 🌟 Features Included

- **Royal Curtain Opening**: Interactive gold-satin curtain split animation with center Ganesha seal (`Tap To Open`).
- **Devotional Audio System**: Background flute & shehnai music with smooth volume fade-in and a floating mute/unmute control.
- **Temple Archway Hero**: Detailed arch with floral top layer, swinging brass bells, marble pillars, shlok, and Ganesha shrine.
- **Family & Hosts Carousel**: Touch-swipeable & button-navigated family card slider with lotus badges and glowing diyas.
- **Interactive Utsav Timeline**: Vertical flower-garland timeline with event nodes (Sthapana, Aarti, Pooja, Mahaprasad, Visarjan) that open high-res popups.
- **Event Popup Modal**: Detailed card showing artwork, glowing aura, date, time, location, and description.
- **Venue & Google Maps**: Embedded interactive map with address card and one-tap "Open Maps" directions button.
- **Interactive Blessings & Flower Shower**: Tap the button to shower physics-animated 3D rotating flower petals across the screen.
- **Artistic Gallery Grid**: Tilted photo cards with hover effects and animations.
- **Sacred Footer**: Blessings quote, footer diyas, and sign-off.

---

## 🛠️ How to Customize

All texts, dates, times, family names, venue details, and gallery items are centrally organized in **[`src/data/invitationData.js`](file:///c:/Theme3/src/data/invitationData.js)**.

### 1. Change Family Name & Welcome Message
Open `src/data/invitationData.js` and edit the `hero.invitation` object:
```javascript
invitation: {
  tag: "॥ सप्रेम निमंत्रक ॥",
  familyName: "आपले आडनाव / परिवार नाव",
  message: ["आपण व आपल्या परिवारास", "सस्नेह निमंत्रण !"]
}
```

### 2. Edit Timeline Events (Aarti, Sthapana, Visarjan, etc.)
Edit the `timeline.events` array in `src/data/invitationData.js`:
```javascript
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
}
```

### 3. Change Family Members
Edit `family.familyMembers` in `src/data/invitationData.js`:
```javascript
familyMembers: [
  {
    id: "member-1",
    name: "श्री. नाव",
    image: "family1",
    displayOrder: 1
  }
]
```

### 4. Change Venue & Google Maps Link
Edit the `location` object in `src/data/invitationData.js`:
- `venue`: Venue name
- `address`: Full address
- `googleMapsLink`: Direct Google Maps share link
- `googleMapsEmbed`: Google Maps iframe `src` URL

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel

```bash
npx vercel
```
or connect your GitHub repository directly to [Vercel](https://vercel.com).
