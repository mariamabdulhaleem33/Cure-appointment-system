import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
type IProps = {
  profilePhoto: string | null;
  name: string;
  createdAt: string;
  comment: string;
  rating: number;
};
const CardReview = ({
  profilePhoto,
  name,
  createdAt,
  comment,
  rating,
}: IProps) => {
  return (
    <>
      <Card className="rounded-[19px] border-[#BBC1C7] shadow-sm h-full transition-all hover:shadow-md">
        <CardContent className="p-6">
          {/* Header: Photo, Name, Time, Rating */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              <Avatar className="h-12 w-12 border">
                <AvatarImage
                  className="object-cover"
                  src={profilePhoto ?? "/default-image.png"}
                  alt={name}
                />
                <AvatarFallback>
                  {name?.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h4 className="font-bold text-[#1A202C] text-sm">{name}</h4>
                <span className="text-[11px] text-gray-400">
                  {formatDistanceToNow(new Date(createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="bg-[#FFFBEB] px-2 py-1 rounded-lg flex items-center gap-1 border border-[#FEF3C7]">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-[#D97706]">
                {Number(rating)}
              </span>
            </div>
          </div>

          {/* Comment Area */}
          <p className="text-[13px] text-[#404448] leading-relaxed line-clamp-3">
            {comment}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default CardReview;
