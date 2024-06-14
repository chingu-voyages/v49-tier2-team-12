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
            "type": "Monochromacy (complete color blindness):",
            "name": "Gray",
            "code": "#808080",
            "description": "Description following this example format: For individuals with complete color vision deficiency, the color #4b0000 might appear as a shade of brown or a dark, muted gray. The saturation and brightness of the color might be reduced, making it harder to distinguish from other dark colors."
        },
        {
            "type": "Deuteranomaly (reduced sensitivity to green light):",
            "name": "Muted Red",
            "code": "#984b4b",
            "description": "Description following this example format: Individuals with red-green colorblindness, who have trouble distinguishing between red and green, might perceive the color #4b0000 as a darker, more muted version of red. The hue might shift towards a brown or orange tone, with reduced saturation."
        },
        {
            "type": "Protanomaly (reduced sensitivity to red light):",
            "name": "Brown",
            "code": "#964B00",
            "description": "Description following this example format: Those with protanomaly, who are sensitive to long wavelengths of light, might perceive the color #4b0000 as a darker, more muted version of orange or brown. The color might appear over-darkened or washed out, making it difficult to distinguish from other dark colors."
        },
        {
            "type": "Tritanomaly (reduced sensitivity to blue light):",
            "name": "Burgundy",
            "code": "#800020",
            "description": "Description following this example format: Individuals with tritanomaly, who have trouble distinguishing between blue and yellow, might perceive the color #4b0000 as a darker, more muted version of red or burgundy. The hue might shift towards a blue or purple tone, with reduced saturation."
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
