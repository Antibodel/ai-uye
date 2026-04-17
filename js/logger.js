function logEvent(message) {
    const time = new Date().toISOString();
    console.log(`[${time}] ${message}`);
}
