"use client";

import { useActionState, useEffect } from "react";
import { toast } from "@/components/ui/toast";

import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.add({
        description: state.message,
      });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
