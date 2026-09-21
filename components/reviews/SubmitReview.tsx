"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import RatingInput from "@/components/reviews/RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/actions";
import { useUser } from "@clerk/nextjs";

function SubmitReview({ productId }: { productId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

  const { user, isLoaded, isSignedIn } = useUser();

  console.log("Clerk loaded:", isLoaded);
  console.log("Signed in:", isSignedIn);
  console.log("User:", user);

  // Clerk is still initializing
  if (!isLoaded) {
    return (
      <Button size="lg" disabled className="capitalize">
        loading...
      </Button>
    );
  }

  // Clerk finished loading, but user isn't signed in
  if (!isSignedIn || !user) {
    return (
      <Button size="lg" disabled className="capitalize">
        sign in to leave a review
      </Button>
    );
  }

  return (
    <div>
      <Button
        size="lg"
        className="capitalize"
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>

      {isReviewFormVisible && (
        <Card className="mt-8 p-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />

            <input
              type="hidden"
              name="authorName"
              value={user.firstName || user.username || user.fullName || "User"}
            />

            <input
              type="hidden"
              name="authorImage"
              value={user.imageUrl || ""}
            />

            <RatingInput name="rating" />

            <TextAreaInput
              name="comment"
              labelText="feedback"
              defaultValue="Outstanding product!!!"
            />

            <SubmitButton className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
