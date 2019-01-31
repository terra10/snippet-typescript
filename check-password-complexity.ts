// Check password complexity
const hasUpperCase = /[A-Z]/.test(password);
const hasLowerCase = /[a-z]/.test(password);
const hasNumbers = /\d/.test(password);
const hasNonalphas = /\W/.test(password);
const totalPassword = [ hasUpperCase, hasLowerCase, hasNumbers, hasNonalphas ].filter(v =&amp;amp;gt; v).length;
if (password.length < 8 || totalPassword < 3) {
    console.error(`password length:${password.length} charsets:${totalPassword}`);
    // fancy error handling stuff
}
