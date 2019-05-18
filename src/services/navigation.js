import { NavigationActions } from 'react-navigation';

// STUDY_NOTE: This variable will point to Routes component. See app main index.js file.
let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}
