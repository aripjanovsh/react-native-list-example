import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Heading} from '../ui/Heading';
import {ErrorView} from '../ui/ErrorView';
import {Switcher} from '../ui/Switcher';
import {fetchSearch} from '../../reducers/SearchReducer';
import {SearchSectionHeader} from './SearchSectionHeader';
import {SearchSectionItem} from './SearchSectionItem';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
  },
  loadingText: {
    textAlign: 'center',
  },
});

const SWITCHER_ITEMS = [
  {title: 'По расстоянию', id: 'range'},
  {title: 'По стоимости часа', id: 'time'},
];

const DEFAULT_SWITCH = 'range';

export const SearchList = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const [switchValue, setSwitchValue] = useState(DEFAULT_SWITCH);

  const loadSearchItems = useCallback(() => {
    dispatch(fetchSearch());
  }, [dispatch]);

  useEffect(() => {
    loadSearchItems();
  }, [loadSearchItems, dispatch, switchValue]);

  return (
    <SectionList
      bounces={false}
      sections={search.payload}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Heading size={1}>Список</Heading>
          <Switcher
            items={SWITCHER_ITEMS}
            value={switchValue}
            onPress={(value) => setSwitchValue(value)}
          />
          {search.isFetching && (
            <Text style={styles.loadingText}>Загрузка...</Text>
          )}
          {search.error && (
            <ErrorView
              title="Ошибка"
              message="Ошибка сети, пожалуйста перезагрузите"
              buttonText="Перезагрузить"
              onButtonPress={loadSearchItems}
            />
          )}
        </View>
      )}
      renderItem={({item}) => <SearchSectionItem item={item} />}
      renderSectionHeader={({section: {title}}) => (
        <SearchSectionHeader title={title} />
      )}
    />
  );
};
