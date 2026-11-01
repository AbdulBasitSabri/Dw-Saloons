import React from 'react';
import { Award } from 'lucide-react';
import type { TeamMember } from '../data/salonData';

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-[#280c19] border border-[#d4af37]/25 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#d4af37]/70 hover:-translate-y-1 flex flex-col justify-between group"
    >
      {/* Photo with Experience Badge */}
      <div className="relative `aspect-[4/3]` overflow-hidden bg-[#1a070e]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 `bg-gradient-to-t` from-[#280c19] via-transparent to-black/30" />

        {/* Experience Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#1a060d]/85 backdrop-blur-md border border-[#d4af37]/50 rounded-full text-[10px] font-semibold text-[#f3d068] tracking-wide flex items-center gap-1 shadow-md">
          <Award className="w-3 h-3 text-[#d4af37]" />
          <span>{member.experience}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col `flex-grow`">
        <h4 className="font-cursive text-2xl sm:text-3xl text-amber-50 group-hover:text-[#d4af37] transition-colors tracking-wide mb-0.5">
          {member.name}
        </h4>
        <span className="text-[10px] tracking-wider uppercase font-sans font-bold text-[#d4af37] mb-2.5">
          {member.role}
        </span>
        <p className="text-xs text-amber-200/75 leading-relaxed font-sans">
          {member.bio}
        </p>
      </div>
    </div>
  );
};
