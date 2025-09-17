import { semantic } from "@/theme/semantic";
import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { commentSectionStyles } from "@/styles/componentsStyle/CommentSectionStyle";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { size } from "react-native-responsive-sizes";

interface CommentSectionProps {
  comments: string[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % comments.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [comments]);

  return (
    <View style={commentSectionStyles.container}>
      <Text style={commentSectionStyles.title}>Comments</Text>
      <View style={commentSectionStyles.commentBox}>
        <Text style={commentSectionStyles.comment}>{comments[current]}</Text>
      </View>
    </View>
  );
}

