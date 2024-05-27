import OpenAI from "openai";

const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY
});

const system_message = "You are a helpful assistant that suggest best colors recommendations that follow color theory according context and color selected, add color usecase with color description and always output color recommendation  in json object as response like this format {\n" +
    "   \"selectedColor\": {\n" +
    "        \"name\": \"Blue\",\n" +
    "        \"code\": \"#0000FF\"\n" +
    "    },\n" +
    "    \"context\": \"Corporate branding\",\n" +
    "    \"compatibleColors\": [\n" +
    "        {\n" +
    "            \"name\": \"White\",\n" +
    "            \"code\": \"#FFFFFF\"\n" +
    "            \"description\": \"Description with use case according context\"\n" +

    "        },\n" +
    "        {\n" +
    "            \"name\": \"Gray\",\n" +
    "            \"code\": \"#808080\"\n" +
    " \"description\": \"Description with use case according context\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"name\": \"Silver\",\n" +
    "            \"code\": \"#C0C0C0\"\n" +
    " \"description\": \"Description with use case according context\"\n" +
    "        }\n" +
    "    ]\n" +
    " }"


export async function POST(request: Request) {
     const  { prompt } = await request.json()
     const completion = await openai.chat.completions.create({
          messages: [
              { role: "system", content: system_message },
              { role: "user", content: prompt }
          ],
          model: "gpt-3.5-turbo",

     });
     console.log(completion.choices[0]+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++4
     return Response.json({ data: completion.choices[0]})
}
