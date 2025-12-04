
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  matchScore: number;
  description: string;
  requirements: string[];
  posted: string;
  applyLink?: string;
  saved?: boolean;
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  matchScore: number;
  skills: string[];
  experience: string;
  source: 'LinkedIn' | 'Indeed' | 'Database';
  avatar: string;
  bio: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  role: 'user' | 'model' | 'system' | 'employer' | 'candidate';
  content: string;
  timestamp: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  candidate: string;
  date: string; // YYYY-MM-DD
  time: string;
  type: 'Google Meet' | 'In-Person';
  link?: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'email' | 'system' | 'success';
  timestamp: number;
  read: boolean;
  targetRole: 'CANDIDATE' | 'EMPLOYER' | 'BOTH';
}

export type UserRole = 'CANDIDATE' | 'EMPLOYER';

export enum AppView {
  // Candidate Views
  DASHBOARD = 'DASHBOARD',
  SCOUT = 'SCOUT',
  ARCHITECT = 'ARCHITECT',
  REHEARSE = 'REHEARSE',
  GROWTH = 'GROWTH',
  NETWORK = 'NETWORK',
  
  // Employer Views
  EMPLOYER_DASHBOARD = 'EMPLOYER_DASHBOARD',
  TALENT_SEARCH = 'TALENT_SEARCH',
  POST_JOB = 'POST_JOB',
  SCHEDULE = 'SCHEDULE',
  
  // Shared
  MESSAGES = 'MESSAGES'
}

export interface ResumeDraft {
  original: string;
  tailored: string;
  feedback: string;
}

export interface NetworkProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  skills: string[];
  bio: string;
  isConnected: boolean;
  mutualConnections: number;
}

export interface ScoutLog {
  id: string;
  timestamp: number;
  action: 'SCAN' | 'MATCH' | 'TAILOR' | 'APPLY' | 'EMAIL';
  message: string;
  details?: string;
  status: 'pending' | 'success' | 'failed' | 'processing';
}

export interface AutoPilotConfig {
  roles: string;
  locations: string;
  salaryMin: string;
  remoteOnly: boolean;
  platforms: {
    linkedin: boolean;
    indeed: boolean;
    glassdoor: boolean;
  };
  notificationEmail: string;
}

export type ApplicationStatus = 'APPLIED' | 'SCREENING' | 'INTERVIEW' | 'OFFER' | 'REJECTED';

export interface JobApplication {
  id: string;
  jobId: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  dateApplied: number;
  status: ApplicationStatus;
  platform: 'Lummy Auto-Pilot' | 'Manual' | 'LinkedIn' | 'Indeed';
}