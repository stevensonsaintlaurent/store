import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RatingInput = ({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) => {
  const numbers = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    return value.toString();
  }).reverse();

  const [rating, setRating] = useState(numbers[0]);

  return (
    <div className="mb-2 max-w-xs">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>

      <Select value={rating} onValueChange={setRating} required>
        <SelectTrigger id={name}>
          <SelectValue placeholder="Select a rating" />
        </SelectTrigger>

        <SelectContent>
          {numbers.map((number) => (
            <SelectItem key={number} value={number}>
              {number}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Native input that FormData can read */}
      <input type="hidden" name={name} value={rating} />
    </div>
  );
};

export default RatingInput;
