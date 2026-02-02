# Troubleshooting Guide

## Error: "API key not configured"

This means you haven't set up your OpenWeatherMap API key yet.

### Solution:

1. **Get your API key:**
   - Go to https://openweathermap.org/api
   - Click "Sign Up" (or "Sign In" if you have an account)
   - After login, go to your account page
   - Click on "API keys" tab
   - Copy your API key

2. **Add it to your project:**
   - Open the file `.env.local` in the project root
   - Replace this line:
     ```
     NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key_here
     ```
   - With your actual key:
     ```
     NEXT_PUBLIC_WEATHER_API_KEY=abc123your_actual_key_here
     ```
   - Save the file

3. **Restart the development server:**
   ```bash
   # Stop the server (Ctrl+C in terminal)
   # Then restart it
   npm run dev
   ```

4. **Wait for API activation:**
   - New API keys can take 10-60 minutes to become active
   - If it still doesn't work after adding the key, wait a bit and try again

## Error: "City not found"

This happens when:
- The city name is misspelled
- The city is too small to be in the database

### Solutions:

Try these city name formats:
- "Hanoi" (single word, no space)
- "Ho Chi Minh" (use spaces for multi-word cities)
- "New York"
- "London"

Note: For "Ha Noi", try searching for "Hanoi" (without space).

## Error: "Failed to fetch weather data"

This can happen when:
1. **API key is missing or invalid**
   - Follow the steps above to set your API key

2. **No internet connection**
   - Check your internet connection

3. **API is down**
   - Wait a few minutes and try again

## How to Test if Your API Key Works

Open your browser and try this URL (replace YOUR_API_KEY with your actual key):

```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

If it works, you should see JSON data. If not, you'll see an error message.

## Common Mistakes

### 1. Forgot to restart the server
After changing `.env.local`, you MUST restart the development server:
```bash
# Press Ctrl+C to stop
npm run dev  # Start again
```

### 2. Extra spaces in API key
Make sure there are no spaces before or after your API key:
```
# WRONG
NEXT_PUBLIC_WEATHER_API_KEY= abc123

# CORRECT
NEXT_PUBLIC_WEATHER_API_KEY=abc123
```

### 3. Using wrong environment variable name
It must be exactly: `NEXT_PUBLIC_WEATHER_API_KEY`
- Must start with `NEXT_PUBLIC_`
- Must be all caps
- Underscores, not dashes

## Still Having Issues?

1. Check the browser console (F12 → Console tab) for detailed errors
2. Check the terminal where `npm run dev` is running for server errors
3. Verify your API key is active on OpenWeatherMap dashboard
4. Make sure you're using the free tier API key (not premium)

## Quick Test

After setting up your API key and restarting the server:

1. Open http://localhost:3000
2. You should see the error message change to be more specific
3. If you see "API key not configured", the API key wasn't loaded
4. If you see "City not found", your API key is working but the city name is wrong
5. If you see weather data, everything is working!

## Contact

If you're still stuck, double-check:
- `.env.local` file exists in the project root (same folder as `package.json`)
- The file contains: `NEXT_PUBLIC_WEATHER_API_KEY=your_actual_key`
- You restarted the dev server after making changes
- Your API key is activated (check OpenWeatherMap dashboard)
