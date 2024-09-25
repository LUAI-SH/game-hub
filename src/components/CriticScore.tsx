import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  let color = "green"
  if ( score < 75 && score >= 60 ) color = "yellow"
  if ( score < 60 ) color = ""


  return <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>{score}</Badge>;
}
