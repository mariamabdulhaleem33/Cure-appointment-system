
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialties } from "./api-doctors";

type Props = {
  selectedId?: number;
  onSelect: (id?: number) => void;
};

export default function Specialties({ selectedId, onSelect }: Props) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["specialties"],
    queryFn: fetchSpecialties,
  });

  if (isLoading) {
    return <div className="h-10 bg-gray-200 rounded-lg animate-pulse" />;
  }

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        onClick={() => onSelect(undefined)}
        className={`rounded-full border px-4 py-2 text-sm cursor-pointer ${
          !selectedId ? "bg-blue-50 border-blue-500 text-blue-600" : ""
        }`}
      >
        All
      </button>

      {data.map((specialty) => (
        <button
          key={specialty.id}
          onClick={() => onSelect(specialty.id)}
          className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition cursor-pointer
            ${
              selectedId === specialty.id
                ? "bg-blue-50 border-blue-500 text-blue-600"
                : "hover:bg-gray-50"
            }
          `}
        >
          {specialty.name}
        </button>
      ))}
    </div>
  );
}

