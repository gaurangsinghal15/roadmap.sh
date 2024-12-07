function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your sign-in logic (e.g., validation, API call)
    // For demonstration, let's assume the sign-in is always successful.

    // Redirect to the desired page after successful sign-in
    window.location.href = 'home.html'; // Change 'home.html' to your target page
}