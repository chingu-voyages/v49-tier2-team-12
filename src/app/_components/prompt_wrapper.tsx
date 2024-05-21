"use client"
import React, { useState } from "react";
import ThreeDotLoader from "@/app/_components/three_dot_loader";

export default function PromptWrapper() {
    const [context, setContext] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContext(event.target.value);
        // Clear any previous error when user starts typing
        setError(null);
    }

    const askColorRecommendationToAi = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: context })
            });
            if (!response.ok) {

            }
            // Handle successful response here
            console.log(response);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={askColorRecommendationToAi} className="flex flex-col gap-3">
            <textarea
                name="context"
                value={context}
                className="text-gray-950 outline-none focus:outline-none rounded-sm p-2 resize-vertical"
                placeholder="Type your message here"
                onChange={handleTextareaChange}
            />
            <button type={"submit"} className="w-full h-12 text-gray-950 bg-yellow-300 py-2 rounded-sm">
                {isLoading ? <ThreeDotLoader /> : 'Ask Ai'}
            </button>
            {error && <div className="text-red-600">{error}</div>}
        </form>
    )
}
