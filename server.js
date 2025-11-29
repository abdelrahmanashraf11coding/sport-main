import express from "express";
import fetch from "node-fetch";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

const OPENROUTER_API_KEY = "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"; // حط مفتاحك هنا

app.use(express.static("public"));
app.use(bodyParser.json());

// نقطة نهاية للسيرفر للرسائل
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [{ role: "user", content: message }],
            }),
        });

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "لم يتم الحصول على رد.";
        res.json({ reply });
    } catch (err) {
        res.json({ reply: "حدث خطأ أثناء الاتصال بالخادم." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
