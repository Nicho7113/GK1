import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { semantic } from "@/theme/semantic";
import { primitives } from "@/theme/primitives";

export const gameCardStyles = StyleSheet.create({
  rowContainer: {
    width: '100%',
    alignSelf: 'stretch',
    paddingTop: wp(1.2),
  },
  rowTitle: {
    color: semantic.color.text,
    fontSize: primitives.font.md, 
    fontWeight: '800',
    marginLeft: primitives.space.sm,
    marginBottom: wp(0.8),
    marginTop: wp(1.5),
    letterSpacing: 0.04,
  },
  scrollContent: {
    alignItems: 'flex-end',
    paddingLeft: 0,
    paddingRight: 0,
  },
  card: {
    width: wp(25), 
    aspectRatio: 0.60,
    backgroundColor: semantic.color.bg,
    borderRadius: wp(3.2),
    marginBottom: wp(0.7),
    marginTop: wp(1),
    marginHorizontal: wp(2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: wp(3),
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  imageFrame: {
    width: '100%',
    height: '80%',
    backgroundColor: '#181818', 
    borderTopLeftRadius: wp(2.5),
    borderTopRightRadius: wp(2.5),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0, 
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: wp(1.5),
    overflow: 'hidden',
  },
  title: {
    color: semantic.color.text,
    fontSize: primitives.font.sm,
    fontWeight: '600',
    marginTop: primitives.space.xs,
    textAlign: 'center',
    letterSpacing: 0.05,
  },
});
