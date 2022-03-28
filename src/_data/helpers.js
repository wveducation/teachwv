module.exports = {
    randomInt(digits) {
        return Math.floor(100000000 + Math.random() * (digits * 100000000));
    }
};