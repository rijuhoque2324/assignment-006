import React from 'react';
import { Workout } from '@/types/Workout';

const getWorkouts = async (): Promise<Workout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    if(!res.ok){
        throw new Error("Failed to fetch workouts");
    }

    return res.json();
}

const page = () => {
    return (
        <div>
            
        </div>
    );
};

export default page;