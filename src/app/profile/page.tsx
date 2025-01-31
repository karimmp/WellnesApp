"use client";
import Leaderboard from '@/components/leaderboard/Leaderboard';
import LevelBadges from '@/components/badges/LevelBadges';
import PointsHistory from '@/components/points/PointsHistory';


export default function Profile() {
    return (
      <div className="p-4">
        <Leaderboard />
        <LevelBadges />
        <PointsHistory />
      </div>
    );
  }
