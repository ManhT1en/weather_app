# Weather Application - IWS Spring 2026 Midterm Project

A modern weather application built with Next.js, TypeScript, and Tailwind CSS that displays real-time weather data and forecasts.

## Features

### Core Functionality (PASS Criteria)
- ✅ Built with Next.js + TypeScript (Modern Framework)
- ✅ Displays 6+ weather parameters:
  - Temperature (°C)
  - Feels Like Temperature
  - Humidity (%)
  - Wind Speed (m/s)
  - Wind Direction
  - Atmospheric Pressure (hPa)
  - Cloudiness (%)
- ✅ Dynamic weather icons matching current conditions
- ✅ Location search functionality
- ✅ Clean and legible UI

### Advanced Features (MERIT Criteria)
- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Component-based architecture (SearchBar, WeatherCard, ForecastCard)
- ✅ 5-Day weather forecast
- ✅ 24-Hour hourly forecast
- ✅ Automatic location detection using geolocation

### Technical Implementation (EXCELLENT Criteria)
- ✅ TypeScript for type safety
- ✅ Clean, modular code structure
- ✅ Separation of concerns (API layer, utilities, components)
- ✅ Efficient state management using React hooks
- ✅ Proper error handling
- ✅ Loading states for better UX

## Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: OpenWeatherMap API
- **Runtime**: Node.js

## Project Structure

```
weather-app/
├── app/
│   ├── page.tsx              # Main page with weather logic
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── SearchBar.tsx         # City search component
│   ├── WeatherCard.tsx       # Current weather display
│   └── ForecastCard.tsx      # Forecast display
├── lib/
│   ├── weatherApi.ts         # API service functions
│   └── utils.ts              # Utility functions
├── types/
│   └── weather.ts            # TypeScript type definitions
├── .env.local                # Environment variables
└── next.config.ts            # Next.js configuration
```

## Setup Instructions

### 1. Get OpenWeatherMap API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key from your account dashboard

### 2. Install Dependencies

```bash
cd weather-app
npm install
```

### 3. Configure Environment Variables

Edit the `.env.local` file and add your API key:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_actual_api_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Automatic Location**: The app will request your location on first load
2. **Manual Search**: Enter any city name in the search bar
3. **View Current Weather**: See real-time conditions with multiple parameters
4. **Check Forecast**: Scroll down to view 5-day and 24-hour forecasts

## API Integration

The application uses the OpenWeatherMap API with two main endpoints:

- **Current Weather**: `/weather` - Real-time weather data
- **5-Day Forecast**: `/forecast` - Weather predictions

All API calls are handled in `lib/weatherApi.ts` with proper error handling.

## Responsive Design

The application is fully responsive across all devices:

- **Mobile**: Single column layout, scrollable forecast
- **Tablet**: 2-column grid for weather parameters
- **Desktop**: 3-column grid, optimal viewing experience

## Code Quality

- **Type Safety**: Full TypeScript implementation
- **Component Reusability**: Modular component structure
- **Error Handling**: Graceful error messages
- **Loading States**: User feedback during API calls
- **Clean Code**: Proper indentation and naming conventions

## Building for Production

```bash
npm run build
npm start
```

## Submission Guidelines

### File Format
Compress the entire project folder (excluding `node_modules` and `.next`) into a `.zip` file.

### Naming Convention
```
MidtermIWS2026IT – [Student ID] – [Student Name].zip
```

Example: `MidtermIWS2026IT – 1801040121 – Tran Ngoc Khoa.zip`

### Before Submission
1. ✅ Ensure `.env.local` contains valid API key
2. ✅ Test all features (search, forecast, responsive design)
3. ✅ Verify no console errors
4. ✅ Check responsive design on different screen sizes
5. ✅ Prepare to explain your code during the interview

## Interview Preparation

Be ready to explain:
- How the API integration works
- Component structure and data flow
- State management approach
- TypeScript type definitions
- Responsive design implementation

## License

Educational project for IWS Spring 2026

---

**Weather data provided by OpenWeatherMap**
