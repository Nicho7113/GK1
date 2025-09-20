import React, { createContext, useContext, useState, ReactNode } from "react";

export type RatedGame = {
  id: number;
  score: number;
};

interface RatedGamesContextType {
  ratedGames: RatedGame[];
  addRatedGame: (id: number, score: number) => void;
}

const RatedGamesContext = createContext<RatedGamesContextType | undefined>(undefined);

export function RatedGamesProvider({ children }: { children: ReactNode }) {
  const [ratedGames, setRatedGames] = useState<RatedGame[]>([]);

  const addRatedGame = (id: number, score: number) => {
    setRatedGames(prev => {
      
      const exists = prev.find(g => g.id === id);
      if (exists) {
        return prev.map(g => g.id === id ? { ...g, score } : g);
      }
      return [...prev, { id, score }];
    });
  };

  return (
    <RatedGamesContext.Provider value={{ ratedGames, addRatedGame }}>
      {children}
    </RatedGamesContext.Provider>
  );
}

export function useRatedGames() {
  const context = useContext(RatedGamesContext);
  if (!context) throw new Error("useRatedGames must be used within RatedGamesProvider");
  return context;
}
