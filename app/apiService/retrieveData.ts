import {useEffect, useState} from "react";
import Workout from "@/app/(tabs)/workout";

const getData = (endpoint : string) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Workout[]>([]);

    const getExercises = async () => {
        try {
            const response = await fetch('http://localhost:3000/' + endpoint);
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getExercises();
    }, []);

    return data;
}

export {getData};