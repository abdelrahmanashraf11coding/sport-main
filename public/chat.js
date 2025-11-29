chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;

    addMessage("user", message);
    userInput.value = "";
    const loadingId = addMessage("gpt", "...");

    try {
        const res = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });
        const data = await res.json();
        updateMessage(loadingId, data.reply);
    } catch (err) {
        updateMessage(loadingId, "حدث خطأ أثناء الاتصال بالخادم.");
    }
});
