import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingContextData {
  selectedSeries: string[];
  selectedManufacturers: string[];
  selectedTeams: string[];
  toggleSeries: (id: string) => void;
  toggleManufacturer: (id: string) => void;
  toggleTeam: (id: string) => void;
}

const OnboardingContext = createContext<OnboardingContextData | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [selectedSeries, setSelectedSeries] = useState<string[]>([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);

  const toggleSeries = (id: string) => {
    setSelectedSeries(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const toggleManufacturer = (id: string) => {
    setSelectedManufacturers(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const toggleTeam = (id: string) => {
    setSelectedTeams(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <OnboardingContext.Provider
      value={{
        selectedSeries,
        selectedManufacturers,
        selectedTeams,
        toggleSeries,
        toggleManufacturer,
        toggleTeam,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
