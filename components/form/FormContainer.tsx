"use client";

import { useFormState } from "react-dom";
import { useActionState, useEffect } from "react";

import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

import { toast } from "@/components/ui/toast";

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
      toast.add({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
