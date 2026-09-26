import { TypeInterfaceWorkout } from "@/types/Workout";
import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
  Check,
  X
} from "lucide-react";

interface PlanWorkoutCardProps {
  workout: TypeInterfaceWorkout;
  type: "plan" | "saved";
}

const PlanWorkoutCard = ({
  workout,
  type
}: PlanWorkoutCardProps) => {

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#15181e] p-4">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Image */}
        <div className="relative h-[75px] w-[135px] overflow-hidden rounded-lg">

          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />

        </div>


        {/* Information */}
        <div>

          <h2 className="font-bold uppercase">
            {workout.name}
          </h2>


          <p className="text-xs text-gray-400">
            {workout.equipment}
          </p>


          {/* Stats */}
          <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">

            {/* Duration */}
            <div className="flex items-center gap-1">

              <Clock3
                size={14}
                className="text-lime-400"
              />

              <span>
                {workout.duration} min
              </span>

            </div>


            {/* Calories */}
            <div className="flex items-center gap-1">

              <Flame
                size={14}
                className="text-lime-400"
              />

              <span>
                {workout.caloriesBurned} kcal
              </span>

            </div>


            {/* Rating */}
            <div className="flex items-center gap-1">

              <Star
                size={14}
                className="text-lime-400"
              />

              <span>
                {workout.rating}
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-gray-700 px-5 py-2 text-xs transition hover:bg-gray-800"
        >
          View Details
        </Link>


        {/* Only Today's Plan */}
        {type === "plan" && (

          <button className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black transition hover:bg-lime-300">

            <Check size={14} />

            Mark as Done

          </button>

        )}


        {/* Remove */}
        <button className="text-gray-500 transition hover:text-white">

          <X size={17} />

        </button>

      </div>

    </div>
  );
};

export default PlanWorkoutCard;