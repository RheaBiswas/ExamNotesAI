const Gemini_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export const generateGeminiResponse = async (prompt) => {
  try {
    const response = await fetch(
      `${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      const errorText = await response.text();

      console.error("================================");
      console.error("Status:", response.status);
      console.error("Response:");
      console.error(errorText);
      console.error("================================");

      throw new Error(errorText);

      throw new Error(`Gemini API Error (${response.status}): ${errorText}`);
    }

    const data = await response.json();

    if (
      !data.candidates ||
      data.candidates.length === 0 ||
      !data.candidates[0].content ||
      !data.candidates[0].content.parts ||
      !data.candidates[0].content.parts[0].text
    ) {
      console.error("Unexpected Gemini Response:", data);
      throw new Error("No valid response returned from Gemini.");
    }

    const text = data.candidates[0].content.parts[0].text;

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      return JSON.parse(cleanText);
    } catch (err) {
      console.error("JSON Parse Error:", cleanText);
      throw new Error("Gemini returned invalid JSON.");
    }
  } catch (error) {
    console.error("Gemini Fetch Error:", error.message);
    throw error;
  }
};
