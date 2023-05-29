import Image, { StaticImageData } from "next/image";
import ReactStars from "react-stars";

interface ReviewCardProps {
  userPicture: StaticImageData;
  title: string;
  rating: number;
  comment: string;
}

export default function ReviewCard({
  userPicture,
  comment,
  rating,
  title,
}: ReviewCardProps) {
  return (
    <div className="flex items-start gap-3 border border-neutral-500 rounded-xl px-4 py-2">
      <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
        <Image src={userPicture} alt="User picture" width={42} height={42} />
      </div>
      <div className="text-iceBlue">
        <h2 className="font-bold text-lg">{title}</h2>
        <ReactStars value={rating} edit={false} size={32} />
        <p>{comment}</p>
      </div>
    </div>
  );
}
