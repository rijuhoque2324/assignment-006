import React from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { TypeInterfaceWorkout } from "@/types/Workout";

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <section className="bg-[#0d0f11] py-12 text-white">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="mb-7">
          <h1 className="text-3xl font-black uppercase tracking-tight">
            THE LIBRARY
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workoutsData.map((workout:TypeInterfaceWorkout, index:number) => {
            return <WorkoutCard key={index} workout ={workout}/>
          })}
        </div>

      </div>
    </section>
  );
};

export default Workouts;