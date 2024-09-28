document.addEventListener("DOMContentLoaded", function () {
  const aboutLinkContainer = document.getElementById("about-link-container");
  const cvPopup = document.getElementById("cv-popup");

  // Show the CV popup on hover
  aboutLinkContainer.addEventListener("mouseenter", () => {
    cvPopup.style.display = "block"; // Show the popup
  });

  // Hide the CV popup when moving the mouse away
  aboutLinkContainer.addEventListener("mouseleave", () => {
    cvPopup.style.display = "none"; // Hide the popup
  });

  // Hide the CV popup when clicking outside
  window.addEventListener("click", (event) => {
    if (!aboutLinkContainer.contains(event.target)) {
      cvPopup.style.display = "none"; // Hide the popup if clicking outside
    }
  });
});

// Function to load lab content dynamically (already exists in your file)
document.addEventListener("DOMContentLoaded", function () {
  function loadLab(labName) {
    const labContent = document.getElementById("lab-content");
    if (labName === "lab1") {
      labContent.innerHTML = `
        <h1>Lab 1: Create or Edit User</h1>
        <form id="user-form">
          <div class="form-group">
            <label for="username">Username <span>*</span></label>
            <input type="text" id="username" name="username" maxlength="255" placeholder="Enter your username" required>
            <span class="error-message hidden" id="username-error">Username is already taken</span>
          </div>

          <div class="form-group">
            <label for="password">Password <span>*</span></label>
            <input type="password" id="password" name="password" maxlength="255" placeholder="Enter your password" required>
            <input type="checkbox" id="show-password"> Show Password
            <span class="error-message hidden" id="password-error">Password is too weak</span>
          </div>

          <div class="form-group">
            <label for="email">Email Address <span>*</span></label>
            <input type="email" id="email" name="email" maxlength="255" placeholder="Enter your email" required>
            <span class="error-message hidden" id="email-error">Invalid email format</span>
          </div>

          <div class="form-group">
            <label for="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" maxlength="255" placeholder="Enter your full name">
          </div>

          <div class="form-group">
            <label for="role">Role <span>*</span></label>
            <select id="role" name="role" required>
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <span class="error-message hidden" id="role-error">Please select a role</span>
          </div>

          <div class="form-group">
            <label for="profile-picture">Profile Picture</label>
            <input type="url" id="profile-picture-url" placeholder="Enter image URL">
            <input type="file" id="profile-picture-upload" accept="image/*">
            <div id="image-preview" class="hidden">
              <img id="preview-img" src="" alt="Profile Picture Preview" style="max-width: 100px; margin-top: 10px;">
            </div>
          </div>

          <div class="form-group">
            <label for="account-created-at">Account Created At</label>
            <input type="text" id="account-created-at" name="account-created-at" readonly value="2024-01-01 12:00:00">
          </div>

          <div class="form-group">
            <label for="last-updated-at">Last Updated At</label>
            <input type="text" id="last-updated-at" name="last-updated-at" readonly value="2024-09-28 14:30:00">
          </div>

          <div class="form-group">
            <button type="submit" id="save-button" disabled>Create Account</button>
            <button type="button" id="cancel-button">Cancel</button>
          </div>
        </form>
      `;

      // JavaScript logic for form interaction
      addFormInteraction();
    } else if (labName === "lab2") {
      labContent.innerHTML = `
        <h1>Nội dung Lab 2</h1>
        <p>Đây là nội dung của Lab 2.</p>
      `;
    } else if (labName === "lab3") {
      labContent.innerHTML = `
        <h1>Nội dung Lab 3</h1>
        <p>Đây là nội dung của Lab 3.</p>
      `;
    }
  }

  window.loadLab = loadLab; // Expose the function globally
});

// Add this function to handle form interactions for Lab 1
function addFormInteraction() {
  const form = document.getElementById("user-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("show-password");
  const emailInput = document.getElementById("email");
  const roleSelect = document.getElementById("role");
  const saveButton = document.getElementById("save-button");

  const profilePictureUrl = document.getElementById("profile-picture-url");
  const profilePictureUpload = document.getElementById(
    "profile-picture-upload"
  );
  const imagePreview = document.getElementById("image-preview");
  const previewImg = document.getElementById("preview-img");

  // Show/hide password
  showPasswordCheckbox.addEventListener("change", function () {
    passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
  });

  // Enable/Disable the "Create Account" button based on form validation
  form.addEventListener("input", function () {
    saveButton.disabled = !form.checkValidity();
  });

  // Image preview for profile picture URL
  profilePictureUrl.addEventListener("input", function () {
    const imageUrl = profilePictureUrl.value;
    if (imageUrl) {
      previewImg.src = imageUrl;
      imagePreview.classList.remove("hidden");
    } else {
      imagePreview.classList.add("hidden");
    }
  });

  // Image preview for profile picture upload
  profilePictureUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImg.src = e.target.result;
        imagePreview.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

  // Cancel button functionality
  document
    .getElementById("cancel-button")
    .addEventListener("click", function () {
      window.history.back();
    });
}
document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about-link");
  const cvPopup = document.getElementById("cv-popup");

  // Show the CV popup on hover
  aboutLink.addEventListener("mouseenter", () => {
    cvPopup.style.display = "block";
  });

  // Hide the CV popup when moving the mouse away
  aboutLink.addEventListener("mouseleave", () => {
    cvPopup.style.display = "none";
  });

  // Hide the CV popup when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target !== aboutLink && !cvPopup.contains(event.target)) {
      cvPopup.style.display = "none";
    }
  });
});
