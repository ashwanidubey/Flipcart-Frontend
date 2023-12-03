export default function validateSignup(credential) {
  let errors = {};
  const { name, email, password, cpassword } = credential;

  // Name validation
  if (!name.trim()) {
    errors.name = 'Name is required';
  } else if (name.length < 4) {
    errors.name = 'Name must be at least 4 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email format';
  }

  // Password validation
  if (!password.trim()) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  // Confirm Password validation
  if (!cpassword.trim()) {
    errors.cpassword = 'Confirm Password is required';
  } else if (cpassword !== password) {
    errors.cpassword = 'Passwords do not match';
  }

  return {
    status: Object.keys(errors).length === 0,
    errors: errors,
  };
}
