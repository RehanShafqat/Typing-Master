# Typing Master

## Live Preview

Live at: [TypingMaster](https://typing-master-tau-umber.vercel.app/)

## Overview

**Typing Master** is a web application designed to improve typing speed and accuracy through interactive typing exercises and real-time feedback. Users can track their progress, see detailed statistics, and receive tailored practice plans to enhance their typing skills.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **State Management**: React's `useState`, `useEffect`, and `useRef` hooks
- **Routing**: React Router
- **Data Handling**: Local state management

## Installation

1. **Clone the Repository**

    ```bash
    git clone git@github.com:RehanShafqat/Typing-Master.git
    cd typing-master
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Development Server**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:5173` by default.

## Usage

1. **Home Page**: Provides an overview of the application and a call-to-action to start typing exercises.
2. **Typing Page**: Enter text in the input field to match the provided reference text. The application tracks typed words, accuracy, and speed.
3. **Results Dialog**: View detailed typing statistics and close the dialog to return to the typing exercise.

## Components

- **Dialog**: Displays typing statistics including total words, accuracy, and speed. It uses slide-down and slide-up animations for visibility transitions.
- **OurPlan**: Outlines the steps to become a pro typist.
- **RenderTextWithBackground**: Renders text with background colors to indicate correct and incorrect characters.
- **MainPage**: The main page where typing exercises occur, with input handling and statistical calculations.


## Contributing

Feel free to fork the repository and submit pull requests with improvements or bug fixes. For any issues, please create an issue in the repository.


