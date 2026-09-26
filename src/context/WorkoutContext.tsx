"use client";

import React, { createContext, useContext, useState } from "react";
import { TypeInterfaceWorkout } from "@/types/Workout";

interface WorkoutContextType {
  todayPlan: TypeInterfaceWorkout[];
  savedWorkouts: TypeInterfaceWorkout[];

  addToPlan: (workout: TypeInterfaceWorkout) => void;
  saveForLater: (workout: TypeInterfaceWorkout) => void;
}

const WorkoutContext = createContext<WorkoutContextType | null>(null);

export const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [todayPlan, setTodayPlan] = useState<TypeInterfaceWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<TypeInterfaceWorkout[]>([]);


  // Add to today's plan
  const addToPlan = (workout: TypeInterfaceWorkout) => {

    const alreadyAdded = todayPlan.find(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      return;
    }

    setTodayPlan([...todayPlan, workout]);
  };


  // Save for later
  const saveForLater = (workout: TypeInterfaceWorkout) => {

    const alreadySaved = savedWorkouts.find(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      return;
    }

    setSavedWorkouts([...savedWorkouts, workout]);
  };


  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToPlan,
        saveForLater,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};


export const useWorkout = () => {

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
};