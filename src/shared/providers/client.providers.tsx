"use client";

import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";
import { PopupProvider } from "@features";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <PopupProvider>{children}</PopupProvider>
    </SnackbarProvider>
  );
};
