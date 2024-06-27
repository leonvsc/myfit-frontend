import {useEffect, useState} from "react";
import Workout from "@/app/(tabs)/workout";

const getData = (endpoint : string) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Workout[]>([]);

    const getExercises = async () => {
        try {
            const response = await fetch('https://api.myfitavans.xyz/' + endpoint);
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

const getWorkoutById = (id: string): { data: Workout | null; isLoading: boolean } => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Workout | null>(null);

    useEffect(() => {
        const fetchWorkoutById = async () => {
            try {
                const response = await fetch(`https://api.myfitavans.xyz/workouts/${id}`);
                const json = await response.json();
                setData(json.data);
            } catch (error) {
                console.error('Error fetching workout details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkoutById();
    }, [id]);

    return { data, isLoading };
};

export {getData, getWorkoutById};