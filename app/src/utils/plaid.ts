import {
  LinkExit,
  LinkIOSPresentationStyle,
  LinkLogLevel,
  LinkOpenProps,
  LinkSuccess,
  LinkTokenConfiguration,
  dismissLink,
} from "react-native-plaid-link-sdk";

export const createLinkTokenConfiguration = (
  token: string,
  noLoadingState: boolean = false,
): LinkTokenConfiguration => {
  return {
    token: token,
    // Hides native activity indicator if true.
    noLoadingState: noLoadingState,
  };
};

export const createLinkOpenProps = (): LinkOpenProps => {
  return {
    onSuccess: (success: LinkSuccess) => {
      // User was able to successfully link their account.
      console.log("Success: ", success);
    },
    onExit: (linkExit: LinkExit) => {
      // User exited Link session. There may or may not be an error depending on what occured.
      console.log("Exit: ", linkExit);
      dismissLink();
    },
    // MODAL or FULL_SCREEEN presentation on iOS. Defaults to MODAL.
    iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
    logLevel: LinkLogLevel.ERROR,
  };
};
