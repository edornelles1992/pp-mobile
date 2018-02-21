import { NavigationActions } from 'react-navigation'

/**
 * method to reset and change the route, and navigate to selected page.
 * @param {*} navigation current navigation router
 * @param {*} rootPath new route
 */
const resetActivities = (navigation, routePath, keyName, pageToNavigate) => {

    const stackAction = NavigationActions.reset({
        index: 0,
        key: keyName,
        actions: [NavigationActions.navigate({ routeName: routePath })],
    });
    navigation.dispatch(stackAction);

    if (pageToNavigate !== undefined || pageToNavigate!== null )
        navigation.navigate(pageToNavigate)
}

const navigateResetToScreen = (navigation, route, data) => {
    const tabAction = NavigationActions.navigate({ routeName: route });
    const stackAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: route, params: { userPlacesStore: data } })],
    });

    navigation.dispatch(tabAction);
    navigation.dispatch(stackAction);
};

const navigateResetToScreenWithAction = (navigation, route, actions) => {
    const tabAction = NavigationActions.navigate({ routeName: route });
    const stackAction = NavigationActions.reset({
        index: actions.length - 1,
        actions: actions,
    });

    navigation.dispatch(tabAction);
    navigation.dispatch(stackAction);
};


const navigateToScreen = (navigation, route, data) => {
    const tabAction = NavigationActions.navigate({ routeName: route, params: { userPlacesStore: data } });
    navigation.dispatch(tabAction);
};


export { resetActivities, navigateToScreen, navigateResetToScreen, navigateResetToScreenWithAction }