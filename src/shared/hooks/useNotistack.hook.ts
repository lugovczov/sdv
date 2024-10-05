import { enqueueSnackbar } from "notistack";

export type UseNotistack = {
  notifyError: (message: string) => void;
  notifySuccess: (message: string) => void;
  notifyInfo: (message: string) => void;
};

export const useNotistack = (): UseNotistack => {
  const notifyError = (message: string) => {
    enqueueSnackbar(message, {
      variant: "error",
    });
  };

  const notifySuccess = (message: string) => {
    enqueueSnackbar(message, {
      variant: "success",
    });
  };

  const notifyInfo = (message: string) => {
    enqueueSnackbar(message, {
      variant: "info",
    });
  };

  return {
    notifyError,
    notifySuccess,
    notifyInfo,
  };
};
