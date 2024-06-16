import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const system_message2 = `I want you to be an assistant who is able to simulate how the selected color might appear to users with different types of color vision deficiencies, ensuring inclusivity in design decisions. Simulate for Monochromacy (Complete Color Blindness), Deuteranomaly (reduced sensitivity to green light), Protanomaly (reduced sensitivity to red light), and Tritanomaly (reduced sensitivity to blue light). Always output the response in JSON object like this format {
   "normalVision": {
        "name": "Red",
        "code": "#4b0000",
        "description": "Description following this example format: The color #4b0000 is a deep, rich red color. Here's how it might appear to users with different types of color vision deficiencies:"
    },
    "visionDeficiencies": [
        {
            "type": "MONOCHROMACY (complete color blindness):",
            "name": "Gray",
            "code": "#808080",
            "description": "Description following this example format: For individuals with complete color vision deficiency, the color #4b0000 might appear as...(describe how this color might appear to the individuals who have MONOCHROMACY. You can also talk about shades and tones. Add also an interesting fact about the difficulty to distinguish this color from other similar colors.) "
        },
        {
            "type": "DEUTERANOMALY (reduced sensitivity to green light):",
            "name": "Muted Red",
            "code": "#984b4b",
            "description": "Description following this example format: Individuals with red-green colorblindness, who have trouble distinguishing between red and green, might perceive the color #4b0000 as...(describe how this color might appear to the individuals who have DEUTERANOMALY. You can also talk about shades and tones. Add also an interesting fact about the difficulty to distinguish this color from other similar colors.)"
        },
        {
            "type": "PROTANOMALY (reduced sensitivity to red light):",
            "name": "Brown",
            "code": "#964B00",
            "description": "Description following this example format: Those with protanomaly might perceive the color #4b0000 as...(describe how this color might appear to the individuals who have PROTANOMALY. You can also talk about shades and tones. Add also an interesting fact about the difficulty to distinguish this color from other similar colors.)"
        },
        {
            "type": "TRITANOMALY (reduced sensitivity to blue light):",
            "name": "Burgundy",
            "code": "#800020",
            "description": "Description following this example format: Individuals with tritanomaly, who have trouble distinguishing between blue and yellow, might perceive the color #4b0000 as...(describe how this color might appear to the individuals who have TRITANOMALY. You can also talk about shades and tones. Add also an interesting fact about the difficulty to distinguish this color from other similar colors.)"
        }
    ]
 }`;

export async function POST(request: Request) {
    const { colorHex } = await request.json();
    const completion2 = await openai.chat.completions.create({
        messages: [
            { role: "system", content: system_message2 },
            { role: "user", content: `Simulate the color ${colorHex} for different color vision deficiencies.` }
        ],
        model: "gpt-3.5-turbo",
    });
    console.log(completion2.choices[0]);
    return Response.json({ data: completion2.choices[0] });
}
