var spintax = require('../index');

// Get unspinned text
console.log(spintax.unspin('{Hello|Hi} John!'));
// >>> "Hello John!" or "Hi John!"

// Get unspinned text from Nested Spintax
console.log(spintax.unspin('{Hello|Hi {there|again}} John!'));
// >>> "Hello John!" or "Hi there John!" or "Hi again John!"

// Count unique variations
console.log(spintax.count('{Hello|Hi {there|again}} John!'));
// >>> 3

// Validate format
console.log(spintax.validate('{Hello|Hi} John!'));
// >>> true
console.log(spintax.validate('{Hello|Hi John!'));
// >>> false
