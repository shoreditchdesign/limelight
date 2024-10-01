document.addEventListener('DOMContentLoaded', () => {
// Select both input fields and textareas
const textFields = document.querySelectorAll('.s-ct_text-field, .s-ct_textarea');

textFields.forEach(field => {
    let interacted = false; // Flag to track first interaction

    field.addEventListener('focus', () => {
    interacted = true; // Set the flag to true on first focus

    // Hide error and toast icons when focused
    const errorIcon = field.closest('.s-ct_field-wrap').querySelector('.s-ct_error');
    const toastIcon = field.closest('.s-ct_field-wrap').querySelector('.s-ct_toast');
    if (errorIcon) errorIcon.style.display = 'none'; 
    if (toastIcon) toastIcon.style.display = 'none'; 
    });

    field.addEventListener('blur', () => {
    const value = field.value.trim();
    const errorIcon = field.closest('.s-ct_field-wrap').querySelector('.s-ct_error');
    const toastIcon = field.closest('.s-ct_field-wrap').querySelector('.s-ct_toast');

    // Check if the field is empty and has been interacted with
    if (interacted) {
        if (!value) {
        if (errorIcon) errorIcon.style.display = 'flex'; // Show error icon if empty
        if (toastIcon) toastIcon.style.display = 'flex'; // Show toast icon if empty
        } else {
        if (errorIcon) errorIcon.style.display = 'none'; // Hide error icon if not empty
        if (toastIcon) toastIcon.style.display = 'none'; // Hide toast icon if not empty
        }
    }
    });
});
});

document.addEventListener('DOMContentLoaded', () => {
// Listen for clicks on reset buttons
const resetButtons = document.querySelectorAll('[field-reset]');

resetButtons.forEach(button => {
    button.addEventListener('mousedown', (event) => {
    // Prevent default behavior to maintain focus on the corresponding field
    event.preventDefault();

    // Get the field-reset attribute value
    const resetValue = button.getAttribute('field-reset');

    // Find the corresponding input or textarea with matching field-name
    const correspondingField = document.querySelector(`input[field-name="${resetValue}"], textarea[field-name="${resetValue}"]`);

    // Clear the value of the corresponding input or textarea (if found)
    if (correspondingField) {
        correspondingField.value = ''; // Clear the value
        
        // Set focus on the field again to keep the reset button visible
        correspondingField.focus(); 
    }
    });
});
});

// Select all textarea elements
const textareas = document.querySelectorAll('textarea');

// Add an event listener to each textarea
textareas.forEach(textarea => {
textarea.addEventListener('input', function () {
    // Reset the height to auto to allow shrinking
    this.style.height = 'auto';
    // Set the height based on the scroll height to fit the content
    this.style.height = `${this.scrollHeight}px`;
});
});
