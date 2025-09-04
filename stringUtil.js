
// Capitalize the first letter of a string
export function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse the given string
export function reverse(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.split('').reverse().join('');
}

// Check if substring exists within string
export function contains(str, substr) {
    if (typeof str !== 'string' || typeof substr !== 'string') {
        return false;
    }
    return str.includes(substr);
}


