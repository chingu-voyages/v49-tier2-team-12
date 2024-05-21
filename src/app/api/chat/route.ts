import OpenAI from "openai";
const openai = new OpenAI({
});
export async function POST(request: Request) {
     const  { prompt } = await request.json()
     const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: "You are a helpful assistant." }],
          model: "gpt-3.5-turbo",
     });
     console.log(completion.choices[0]);
     return new Response('hello')
}
