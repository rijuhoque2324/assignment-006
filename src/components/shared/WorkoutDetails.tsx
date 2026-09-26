"use client";

import React from "react";
import { TypeInterfaceWorkout } from "@/types/Workout";
import Image from "next/image";
import { Bookmark, Clock3 } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";

interface WorkoutDetailsProps {
  workout: TypeInterfaceWorkout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {

  const { addToPlan, saveForLater } = useWorkout();

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">
      <div className="container mx-auto px-4 py-10">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative min-h-[500px] overflow-hidden rounded-xl lg:min-h-[650px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h1 className="text-3xl font-black uppercase lg:text-4xl">
              {workout.name}
            </h1>

            <p className="mt-2 max-w-2xl leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* Muscle Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-4 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* DETAILS */}
            <div className="mt-7 overflow-hidden rounded-xl border border-gray-800">

              <div className="flex justify-between border-b border-gray-800 p-4">
                <span className="text-gray-400">
                  EQUIPMENT
                </span>

                <span>{workout.equipment}</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 p-4">
                <span className="text-gray-400">
                  DIFFICULTY
                </span>

                <span>{workout.difficulty}</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 p-4">
                <span className="text-gray-400">
                  SETS
                </span>

                <span>{workout.sets}</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 p-4">
                <span className="text-gray-400">
                  REPS
                </span>

                <span>{workout.reps}</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 p-4">
                <span className="text-gray-400">
                  DURATION
                </span>

                <span>{workout.duration} min</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 p-4">
                <span className="text-gray-400">
                  CALORIES
                </span>

                <span>{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex justify-between p-4">
                <span className="text-gray-400">
                  RATING
                </span>

                <span>{workout.rating}</span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-8">

              <h2 className="text-lg font-bold uppercase">
                Instructions
              </h2>

              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-gray-400">
                {workout.instructions?.map((instruction, index) => (
                  <li key={index}>
                    {instruction}
                  </li>
                ))}
              </ol>

            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() => addToPlan(workout)}
                className="flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
              >
                <Clock3 size={17} />

                Add to today&apos;s plan
              </button>

              <button
                onClick={() => saveForLater(workout)}
                className="flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm transition hover:bg-gray-800"
              >
                <Bookmark size={17} />

                Save for later
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkoutDetails;