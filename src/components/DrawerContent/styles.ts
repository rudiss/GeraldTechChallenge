import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.PURPLE},
  safeAreaContainer: {marginLeft: 10, flex: 1},
  titleContainer: {marginTop: 50},
  title: {
    color: colors.WHITE,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 25,
  },
  flexGrow: {flexGrow: 1},
  listPadding: {paddingVertical: 10},
  footer: {
    padding: 20,
    flex: 0.4,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  signOutButton: {paddingVertical: 40},
  signOutText: {
    fontSize: 18,
    marginLeft: 5,
    color: colors.WHITE,
    fontWeight: '500',
  },
});
