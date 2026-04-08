#  Wall Calendar — Interactive React Component

A polished, interactive wall calendar built with React + Vite.

##  Features
- Wall calendar aesthetic with hero image per month
- Day range selector (click start date, click end date)
- Integrated notes section (saved to localStorage)
- Fully responsive (desktop & mobile)
- Month-specific images and accent colors

##  Tech Stack
- React 18
- Vite
- CSS3 (no UI libraries)
- localStorage for data persistence

##  How to Run Locally

1. Clone the repository
   git clone https://github.com/sam-2603/wall-calendar

2. Go into the project folder
   cd wall-calendar

3. Install dependencies
   npm install

4. Start the development server
   npm run dev

5. Open browser at
   http://localhost:5173



##  Design Choices
- Separated all logic into custom hook (useCalendar.js)
- Each UI section is its own component
- No external UI libraries — pure CSS
- localStorage used for notes persistence
