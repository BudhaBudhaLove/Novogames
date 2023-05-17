async function proxySite(url) {
    try {
        await registerSW();
    } catch (err) {
        error.textContent = "Failed to register service worker.";
        errorCode.textContent = err.toString();
        throw err;
    }

    const url = search(address.value, searchEngine.value);
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}