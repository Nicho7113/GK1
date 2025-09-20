import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const logScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181c2b',
    padding: 8,
  },
  grid: {
    gap: 12,
    paddingBottom: 24,
  },
  imageWrapper: {
    position: 'relative',
    margin: 6,
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#232a3d',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(23,31,43,0.85)',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  score: {
    color: '#FFD600',
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 4,
  },
  cardWrapper: {
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#232a3d',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  cardImage: {
    width: widthPercentageToDP(26),
    height: heightPercentageToDP(16),
    resizeMode: 'cover',
    borderRadius: 12,
  },
});
