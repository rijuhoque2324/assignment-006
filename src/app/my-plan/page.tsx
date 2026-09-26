"use client";

import React, { useState } from "react";
import Link from "next/link";
import PlanWorkoutCard from "@/components/shared/PlanWorkoutCard";
import { TypeInterfaceWorkout } from "@/types/Workout";

const Page = () => {

  // Active Tab
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");


  // Today's Plan Data
  const todayWorkouts: TypeInterfaceWorkout[] = [];


  // Saved Data
  const savedWorkouts: TypeInterfaceWorkout[] = [];


  // কোন tab-এর data দেখাবো
  const workouts =
    activeTab === "plan"
      ? todayWorkouts
      : savedWorkouts;


  // Summary Calculation
  const exercises = todayWorkouts.length;

  const minutes = todayWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = todayWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );


  return (
    <main className="min-h-screen bg-[#0d0f12] text-white">

      <div className="container mx-auto px-4 py-10">

        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold uppercase">
            My Plan
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>


        {/* Summary */}
        <div className="mt-8 grid grid-cols-3 rounded-xl border border-gray-800 bg-[#15181e] p-6">

          {/* Exercises */}
          <div className="border-r border-gray-800">

            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <h2 className="mt-2 text-4xl font-bold text-lime-400">
              {exercises}
            </h2>

          </div>


          {/* Minutes */}
          <div className="border-r border-gray-800 px-8">

            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {minutes}
            </h2>

          </div>


          {/* Calories */}
          <div className="px-8">

            <p className="text-xs text-gray-500">
              Calories
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {calories}
            </h2>

          </div>

        </div>


        {/* Tabs + Sort */}
        <div className="mt-8 flex items-center justify-between">

          {/* Tabs */}
          <div className="flex rounded-xl border border-gray-800 bg-[#15181e] p-1">

            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-lg px-5 py-2 text-xs transition ${
                activeTab === "plan"
                  ? "bg-[#242934] font-semibold text-white"
                  : "text-gray-500"
              }`}
            >
              Today&apos;s Plan
            </button>


            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-8 py-2 text-xs transition ${
                activeTab === "saved"
                  ? "bg-[#242934] font-semibold text-white"
                  : "text-gray-500"
              }`}
            >
              Saved
            </button>

          </div>


          {/* Sort */}
          <div className="flex items-center gap-3">

            <span className="text-xs text-gray-500">
              Sort By
            </span>

            <select className="rounded-lg border border-gray-800 bg-[#15181e] px-4 py-2 text-xs outline-none">

              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>

            </select>

          </div>

        </div>


        {/* Workout Area */}
        <div className="mt-6">

          {workouts.length === 0 ? (

            /* Empty State */
            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800">

              <h2 className="text-xl font-bold uppercase">
                Nothing Here Yet
              </h2>


              <p className="mt-2 text-sm text-gray-500">

                {activeTab === "plan"
                  ? "Browse the library and add a lift to get today moving."
                  : "You haven't saved any workouts yet."}

              </p>


              <Link
                href="/workouts"
                className="mt-6 rounded-full bg-lime-400 px-7 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            /* Workout List */
            <div className="space-y-4">

              {workouts.map((workout) => (

                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  type={activeTab}
                />

              ))}

            </div>

          )}

        </div>

      </div>

    </main>
  );
};

export default Page;