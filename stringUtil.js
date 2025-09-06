
// Capitalize the first letter of a string
function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse the given string
function reverse(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.split('').reverse().join('');
}

// Check if substring exists within string
function contains(str, substr) {
    if (typeof str !== 'string' || typeof substr !== 'string') {
        return false;
    }
    return str.includes(substr);
}

module.exports = {capitalize, reverse, contains};

