# ✨ Without Simbian vs With Simbian – Frontend Developer Assignment

This project is a visually engaging and interactive comparison between security operations **without Simbian** and **with Simbian**, built using **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Objective

To illustrate the dramatic difference in performance, clarity, and outcomes between the two security operation experiences. The page uses animation and storytelling to present both scenarios side-by-side, engaging the viewer through real-time interactions and flow-based design.

---

## 🖥️ Live Demo

- https://simbian-before-after.vercel.app/
- https://github.com/bhumikabr18/Simbian_before_after.git

---

## ⚙️ Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/docs)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

---

## 📄 Sections

### 🔴 Without Simbian

- Three animated alert cards:
  - Ignored Alerts (starts at 200)
  - Wrongly Closed Alerts (starts at 35)
  - Active Threats (starts at 5)
- Real-time dummy alerts dropping into cards
- Animated count-up and card bounce/shake effects
- Sample pain points like:
  - "Wasting analyst time on false positives"
  - "Processing one alert at a time"

### 🟢 With Simbian

- Step-by-step animated horizontal flow:
  - Triaged & Reported
  - Automated Response
  - Comprehensive Analysis
  - Accurate Detection
  - 24/7 Coverage
- Ending with 3 cards showing:
  - Ignored Alerts: 0
  - Wrongly Closed: 0
  - Active Threats: 0
- Gentle fade-in + checkmark animations for success

---

## 📱 Responsiveness

✅ Fully responsive across devices:  
- Desktop  
- Tablet  
- Mobile  
Tested using Chrome DevTools and manually resized breakpoints.

---

## 💭 Thought Process

I approached the UI as a storytelling opportunity. The **“Without Simbian”** section creates a sense of chaos with animated alerts and growing numbers, while the **“With Simbian”** section shows a calming resolution through progressive automation steps. My goal was to balance **clean UX** with **engaging animations**, while keeping the code modular and scalable.

---

## 🧪 Features & Notes

- All dummy alerts are randomized every few seconds
- Uses reusable and clean component structure
- No external UI kits were used (Tailwind-only)
- All animations are handled with Framer Motion

---

## 🚧 Known Issues / Future Improvements

- Could add more detailed alert types for realism
- Optional: Add sound effects for alert drops
- Expand horizontal timeline with tooltips or more data points

---

## 🚀 Getting Started (Local)

## Run locally
npm run dev

## Next.js 15.3.0 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.0.163:3000


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.
