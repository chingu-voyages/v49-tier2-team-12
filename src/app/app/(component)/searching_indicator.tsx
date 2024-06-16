"use client"

import {useColorRecommendationContext} from "@/app/app/(component)/context/recommendation";
import Spinner from "@/app/app/(component)/spinner";

export default function SearchingIndicator() {
    const {isLoading} = useColorRecommendationContext();
    return isLoading ? <Spinner /> : null
}
