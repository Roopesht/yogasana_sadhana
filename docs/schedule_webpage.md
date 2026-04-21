Create a plan react type javascript app for showing the yogasana one by one with steps and photos. This app should have a homepage that lists the predefined yogasanas in order, and the user can select a yogasana from the list and start the slideshow. Each slide will display the name of the yogasana, a photo, and the steps to perform it. Every yogasana will have a predefined time duration for which the user should perform it, and the app will include a timer to track the remaining time. It should automatically move to the next yogasana once the time is complete. The user should also have the option to pause, skip, or go back to the previous yogasana. The app should be visually appealing and easy to navigate, with clear instructions and high-quality images for each yogasana.

# Yogasasana list json
The list of yogasanas can be stored in a JSON file with the following structure:

```json
[
  {
    "name": "Tadasana",
    "photo": "tadasana.jpg",
    "steps": [
      "Stand with your feet together and arms at your sides.",
      "Inhale and raise your arms overhead, keeping them parallel.",
      "Hold the position for 30 seconds while breathing deeply."
    ],
    "duration": 30
  },
  {
    "name": "Vrikshasana",
    "photo": "vrikshasana.jpg",
    "steps": [
      "Stand on one leg and place the sole of the other foot on the inner thigh.",
      "Bring your hands together in a prayer position at your chest.",
      "Hold the position for 30 seconds while maintaining balance."
    ],
    "duration": 30
  }
]
```

# App flow
1. **Homepage**: Displays a list of yogasanas with their names and photos in a predefined order. Users can click on a yogasana to start the slideshow from that point.
2. **Slideshow**: Displays the selected yogasana with its name, photo, and steps. A countdown timer runs for the specified duration of that yogasana.
3. **Controls**: Users can pause, resume, skip to the next, or go back to the previous yogasana using control buttons.
4. **End of Slideshow**: After the last yogasana, display a completion screen with a congratulatory message. Encourage consistency and motivate users to continue their daily practice.

# Slide Design
Each slide should have a clean and simple layout with the following elements:
- **Name of the Yogasana**: Displayed prominently at the top-right of the slide.
- **Photo**: A high-quality image of the yogasana, positioned on the left side.
- **Steps**: A clear, readable list of steps displayed on the right side.
- **Timer**: A countdown timer displayed at the bottom-right, showing the remaining time.
- **Control Buttons**: Pause/Resume, Next, and Previous buttons displayed at the bottom for easy access.

# Implementation Details
- Use Javascript modules (React-style) to create components such as Homepage, Slideshow, Slide, Timer, and Controls.
- Use state management (useState / useEffect) to track:
  - current yogasana index
  - remaining time
  - play/pause state
- Use CSS (or shadcn/ui) for styling to ensure a clean and visually calm interface.
- Store the JSON file in the `/data` folder and import it directly into the application.

# State & Logic (Added for clarity)
- Maintain a central state object:
  - `currentIndex`: number
  - `isPlaying`: boolean
  - `timeLeft`: number
  - `sessionStatus`: "not_started" | "running" | "paused" | "completed"
- Timer behavior:
  - Starts automatically when slideshow begins
  - Pauses when user clicks pause
  - Resumes from remaining time
  - On completion, automatically moves to next yogasana
- Navigation behavior:
  - Next → moves forward and resets timer
  - Previous → moves backward and resets timer
  - Pause → freezes timer without resetting
  