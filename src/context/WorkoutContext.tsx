"use client";

import React, { createContext, useContext, useState } from "react";
import { TypeInterfaceWorkout } from "@/types/Workout";
import { toast } from "react-toastify";

interface WorkoutContextType {
  todayPlan: TypeInterfaceWorkout[];
  savedWorkouts: TypeInterfaceWorkout[];

  addToPlan: (workout: TypeInterfaceWorkout) => void;
  saveForLater: (workout: TypeInterfaceWorkout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | null>(null);

export const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [todayPlan, setTodayPlan] = useState<TypeInterfaceWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<TypeInterfaceWorkout[]>([]);

  // Add to plan
  const addToPlan = (workout: TypeInterfaceWorkout) => {

    const alreadyAdded = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.warning("Workout already added");
      return;
    }

    setTodayPlan([...todayPlan, workout]);

    toast.success("Workout added to today's plan");
  };


  // Save for later
  const saveForLater = (workout: TypeInterfaceWorkout) => {

    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.warning("Workout already saved");
      return;
    }

    setSavedWorkouts([...savedWorkouts, workout]);

    toast.success("Workout saved for later");
  };


  // Remove from Today's Plan
  const removeFromPlan = (id: number) => {

    const remainingWorkouts = todayPlan.filter(
      (workout) => workout.id !== id
    );

    setTodayPlan(remainingWorkouts);

    toast.success("Workout removed from plan");
  };


  // Remove from Saved
  const removeFromSaved = (id: number) => {

    const remainingWorkouts = savedWorkouts.filter(
      (workout) => workout.id !== id
    );

    setSavedWorkouts(remainingWorkouts);

    toast.success("Workout removed from saved");
  };

  const markAsDone = (id: number) => {

    setTodayPlan((previousPlan) =>
      previousPlan.filter(
        (workout) => workout.id !== id
      )
    );

    toast.success("Workout marked as done!");
  };


  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
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