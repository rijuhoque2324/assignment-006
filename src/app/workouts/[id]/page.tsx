import WorkoutDetails from '@/components/shared/WorkoutDetails';
import { TypeInterfaceWorkout } from '@/types/Workout';
import React from 'react';


const getWorkoutDetails  = async (id :number): Promise<TypeInterfaceWorkout> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};
const page = async ({ params }: {params: Promise<{ id: string }>}) => {
    const { id } = await params;
    const workout = await getWorkoutDetails(Number(id));

    return (
        <div>
            <WorkoutDetails workout={workout} />
        </div>
    );
};

export default page;