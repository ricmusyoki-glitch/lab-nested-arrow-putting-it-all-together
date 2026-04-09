
const createLoginTracker = (user) => {
  let failedAttempts = 0;
  
  return (attemptedPassword) => {
    if (failedAttempts >= 3) {
      return 'Account locked due to too many failed login attempts';
    }
    
    if (attemptedPassword === user.password) {
      return 'Login successful';
    } else {
      failedAttempts++;
      return `Attempt ${failedAttempts}: Login failed`;
    }
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};