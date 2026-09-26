import { TypeInterfaceWorkout } from '@/types/Workout';
import Image from 'next/image';
import { Clock3, Flame, Star } from "lucide-react";
import Link from 'next/link';

interface TypeInterfaceWorkoutCardProps {
    workout: TypeInterfaceWorkout
}
const WorkoutCard = ({workout}:TypeInterfaceWorkoutCardProps) => {
    return (
      <Link href={`/workouts/${workout.id}`}>
        <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#17191e]">              
            <div className="h-[220px] overflow-hidden">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover"
                />
            </div>

             
            <div className="p-5">               
                <div className="mb-4 flex flex-wrap gap-2">
                  {workout.muscleGroups?.map((muscle, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-lime-400 px-3 py-1 text-[11px] font-bold uppercase text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
               
                <h2 className="text-xl font-extrabold uppercase">{workout.name}</h2>
                
                <p className="mt-1 text-sm text-gray-400"> {workout.equipment}</p>

                {/* Divider */}
                <div className="my-4 border-t border-gray-800"></div>

                {/* Workout Information */}
                <div className="flex items-center gap-6 text-xs text-gray-400">

                  {/* Duration */}
                  <div className="flex items-center gap-2">
                    <Clock3 size={15} />
                    <span>{workout.duration} min</span>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-2">
                    <Flame size={15} />
                    <span>{workout.caloriesBurned} kcal</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <Star size={15} />
                    <span>{workout.rating}</span>
                  </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default WorkoutCard;