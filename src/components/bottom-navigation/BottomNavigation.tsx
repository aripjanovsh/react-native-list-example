import {History, Location} from 'history';
import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {matchPath} from 'react-router';

import {RootRoute} from '../../constants/RouteConstants';
import {Color} from '../../theme/MainTheme';
import {BottomNavigationItem} from './BottomNavigationItem';
import {PromotionIcon} from '../icons/PromotionIcon';
import {MapIcon} from '../icons/MapIcon';
import {ListIcon} from '../icons/ListIcon';
import {ProfileIcon} from '../icons/ProfileIcon';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: Color.Grey,
    backgroundColor: Color.White,
  },
});

const tabs: Array<{
  to: string;
  label: string;
  renderIcon: (options: {focused: boolean}) => ReactElement<object>;
}> = [
  {
    label: 'Карта',
    to: RootRoute.Map,
    renderIcon: ({focused}) => <MapIcon size={19} isActive={focused} />,
  },
  {
    label: 'Список',
    to: RootRoute.Search,
    renderIcon: ({focused}) => <ListIcon size={19} isActive={focused} />,
  },
  {
    label: 'Акции',
    to: RootRoute.Promotion,
    renderIcon: ({focused}) => <PromotionIcon size={19} isActive={focused} />,
  },
  {
    label: 'Профиль',
    to: RootRoute.Profile,
    renderIcon: ({focused}) => <ProfileIcon size={19} isActive={focused} />,
  },
];

interface Props {
  history: History;
  location: Location;
}

export const BottomNavigation = ({history, location}: Props) => {
  return (
    <View style={styles.root}>
      {tabs.map((tab) => {
        const focused = Boolean(matchPath(location.pathname, {path: tab.to}));

        return (
          <BottomNavigationItem
            key={tab.to}
            label={tab.label}
            focused={focused}
            icon={tab.renderIcon({focused})}
            onPress={() => {
              history.push(tab.to);
            }}
          />
        );
      })}
    </View>
  );
};
