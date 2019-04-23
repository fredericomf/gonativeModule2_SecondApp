import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// STUDY_NOTES:
// createStackNavigator: Is an navigator with visual effects and a navigation Header.
// createSwitchNavigator: It's only navigator, without Header.

import Login from '~/pages/Login';
import Repositories from '~/pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Repositories,
  }),
);

export default Routes;
