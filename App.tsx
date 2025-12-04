import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import EmployerDashboard from './components/EmployerDashboard';
import JobScout from './components/JobScout';
import ResumeArchitect from './components/ResumeArchitect';
import InterviewSim from './components/InterviewSim';
import TalentSearch from './components/TalentSearch';
import Messaging from './components/Messaging';
import JobPoster from './components/JobPoster';
import Schedule from './components/Schedule';
import Growth from './components/Growth';
import Network from './components/Network';
import { AppView, Job, UserRole } from './types';
import { Construction } from 'lucide-react';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>('CANDIDATE');
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const toggleRole = () => {
    const newRole = userRole === 'CANDIDATE' ? 'EMPLOYER' : 'CANDIDATE';
    setUserRole(newRole);
    // Reset view to dashboard of new role
    setCurrentView(newRole === 'CANDIDATE' ? AppView.DASHBOARD : AppView.EMPLOYER_DASHBOARD);
  };

  const renderView = () => {
    switch (currentView) {
      // Candidate Routes
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.SCOUT:
        return (
          <JobScout 
            onSelectJob={setSelectedJob} 
            onNavigate={setCurrentView} 
          />
        );
      case AppView.ARCHITECT:
        return <ResumeArchitect targetJob={selectedJob} />;
      case AppView.REHEARSE:
        return <InterviewSim targetJob={selectedJob} />;
      case AppView.GROWTH:
        return <Growth />;
      case AppView.NETWORK:
        return <Network onNavigate={setCurrentView} />;
        
      // Employer Routes
      case AppView.EMPLOYER_DASHBOARD:
        return <EmployerDashboard />;
      case AppView.TALENT_SEARCH:
        return <TalentSearch />;
      case AppView.POST_JOB:
        return <JobPoster />;
      case AppView.SCHEDULE:
        return <Schedule />;
        
      // Shared Routes
      case AppView.MESSAGES:
        return <Messaging />;
        
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      activeView={currentView} 
      userRole={userRole} 
      onNavigate={setCurrentView}
      onToggleRole={toggleRole}
    >
      {renderView()}
    </Layout>
  );
};

export default App;