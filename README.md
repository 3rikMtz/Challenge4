Multiple Choice Quiz App

This is a simple multiple-choice quiz application that presents the user with five questions related to CSS. It contains a timer that starts when the user clicks the start button and ends when all questions are answered or the timer reaches 0.

Acceptance Criteria

When the user clicks the start button, a timer starts, and the user is presented with a question.
When the user answers a question, another question is presented.
When the user answers a question incorrectly, time is subtracted from the clock.
When all questions are answered, or the timer reaches 0, the game is over.
When the game is over, the user can save their initials and score.

Getting Started

To run this application, simply open the index.html file in your web browser. The quiz will be presented to you, and you can start by clicking the start button.

How to Play

The quiz contains five questions related to CSS. Each question has four possible answers, and the user can select only one answer. The user must select an answer for each question and submit the form to get their score.

If the user fails to answer a question, an alert will be displayed asking the user to answer that question before submitting the form.

If the user answers a question incorrectly, time will be subtracted from the clock. The quiz ends when the user has answered all questions or when the timer reaches 0.

Code Structure

The code is structured in an HTML file that contains the quiz questions and a JavaScript file that handles the quiz logic. The JavaScript code uses a function called verifyResponses() to verify the user's responses and calculate their score.

The verifyResponses() function loops through each question's possible answers and checks if the user selected the correct answer. If the user answered a question correctly, a point is added to their score. If the user failed to answer a question, an alert is displayed, and the function returns false to prevent the form from being submitted. Finally, the user's score is displayed on the page.

Technologies Used

This quiz application was created using HTML, CSS, and JavaScript.

Conclusion

This multiple-choice quiz application is a simple and fun way to test your knowledge of CSS. It contains a timer that adds a level of difficulty to the quiz and makes it more challenging.
