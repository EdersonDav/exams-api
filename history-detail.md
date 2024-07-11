# Use Case History

## Case 1: User Account Management
### User Actions:

Create my account

### Registration form with fields: name, email, password, role (student/teacher).

Verification email (optional).
Login in my account

Login form with email and password.
Authentication with JWT or session management.
Logout from my account

Invalidate JWT token or destroy session.
Update my account

Update personal information such as name, email, and password.
Endpoint to update user profile.
Delete my account

Soft delete (deactivate) or hard delete (remove completely) the account.
Confirmation step before deletion.
Redefine my password

Forgot password functionality.
Send reset password link via email.
Password reset form.

## Case 2: Teacher User Exams
### Teacher Actions:

CRUD exams

### Create: Form to create a new exam with fields like name, creation date, due date.

### Read: List all exams created by the teacher.

### Update: Form to edit existing exams.

### Delete: Option to delete an exam.

Correction of each student’s exam

View submissions of students for a particular exam.
Marking and grading functionality.
Provide feedback/comments on answers.
Update student’s score in the database.

## Case 3: Student User Exams
### Student Actions:

See my available exams

List of exams that are currently open and have not yet been attempted.
Filter exams based on due date.
See my past exams with score

List of previously taken exams along with the scores and feedback.
Detailed view of each past exam showing questions, student's answers, and correct answers.
Take an exam

Start exam interface.
Timer functionality (if applicable).
Submit answers for evaluation.
Additional Considerations
Security

Secure password storage (hashing).
Use HTTPS.
Implement proper authentication and authorization mechanisms.
User Experience

User-friendly UI/UX.
Validation and error handling in forms.
Clear feedback messages for actions.
Scalability

Efficient handling of a large number of users and exams.
Optimize database queries and indexes.
Notifications

Email or in-app notifications for important events (e.g., exam creation, submission deadlines).
Reporting and Analytics

Reports for teachers on student performance.
Analytics dashboard to track exam statistics.
Suggested Enhancements
### Role Management: Admin functionality to manage users and roles.

### Exam Templates: Allow teachers to create and reuse exam templates.

### Question Banks: Teachers can create and manage a bank of questions to use in multiple exams.

### Progress Tracking: Track student progress over time.

### Communication: In-app messaging or forums for student-teacher communication.
