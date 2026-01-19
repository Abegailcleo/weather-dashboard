# **Weather Dashboard** 🌤️


## **Project Overview**

Weather Dashboard is a **responsive, interactive web application** that allows users to check the current weather of any city worldwide. It fetches live weather data from the **OpenWeatherMap API** and provides a **visually dynamic interface** that updates based on the weather conditions.

**Key Features:**

* Search weather by city
* Display temperature, weather description, humidity, wind speed
* Dynamic background changes according to weather (sunny, cloudy, rainy, etc.)
* Weather icons for clear visualization
* Loading indicator while fetching data
* Inline error messages for invalid input
* Responsive design for desktop and mobile

---

## **Live Demo**

Check out the live project here:
[🌐 Weather Dashboard Live](#)
*(Replace `#` with your Netlify/Live URL)*

---



## **Technologies Used**

* **HTML5** – Markup for structure
* **CSS3** – Styling, dynamic backgrounds, responsive design
* **JavaScript (ES6)** – Fetching API, DOM manipulation, UI logic
* **OpenWeatherMap API** – Real-time weather data

---

## **Getting Started (Local Setup)**

1. **Clone the repository:**

```bash
git clone https://github.com/Abegailcleo/weather-dashboard.git
```

2. **Navigate to the project folder:**

```bash
cd weather-dashboard
```

3. **Open `index.html` in your browser**
   OR run a local server (recommended) using Python:

```bash
python -m http.server
```

Then go to `http://localhost:8000`.

4. **Add your OpenWeatherMap API key:**
   Open `script.js` and replace the placeholder:

```javascript
const apiKey = "YOUR_API_KEY";
```

---

## **Folder Structure**

```
weather-dashboard/
├── index.html
├── style.css
├── script.js
├── README.md

```

---

## **Usage**

1. Enter a city name in the search box.
2. Click **Search**.
3. Weather info will display with dynamic background and icon.
4. Invalid city input will show an inline error.
5. Typing a new city clears old results automatically.

---

## **Future Improvements**

* Add multi-day forecast
* Store last searched cities using `localStorage`
* Add dark/light mode toggle
* Add animations for weather icons

---

## **Author**

**Your Name**

* [LinkedIn](https://www.linkedin.com/abegailmutale)
* [GitHub](https://github.com/Abegailcleo)

---

## **License**

This project is licensed under the MIT License.

---

