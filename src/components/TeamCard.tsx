"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Award, Calendar } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#C8A97E]/20 shadow-sm hover:shadow-xl hover:border-[#C8A97E]/50 transition-all duration-300 flex flex-col h-full">
      {/* Profile Image with subtle gold border accent */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF3E8]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1D] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Experience Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-[#2A0E1D] border border-[#C8A97E]/40 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#B38E5D]" />
            {member.experience}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#2A0E1D]/80 backdrop-blur-md text-[#E7CB9B] border border-[#C8A97E]/40 shadow-sm">
          <Star className="w-3 h-3 fill-[#DFC28D] text-[#DFC28D]" />
          <span>{member.rating.toFixed(2)}</span>
        </div>

        {/* Name and Position inside overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-serif text-2xl font-medium tracking-wide">
            {member.name}
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#DFC28D] font-medium mt-0.5">
            {member.position}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7C6B73]">
            {member.specialization}
          </p>

          <p className="mt-3 text-sm text-[#5E4F55] leading-relaxed line-clamp-3">
            {member.bio}
          </p>

          {/* Specialties Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.specialties.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full text-[11px] bg-[#FAF3E8] text-[#381124] border border-[#C8A97E]/30 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action button & Socials */}
        <div className="mt-6 pt-4 border-t border-[#FAF3E8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name}'s Instagram`}
                className="p-2 rounded-full text-[#7C6B73] hover:text-[#381124] hover:bg-[#FAF3E8] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name}'s LinkedIn`}
                className="p-2 rounded-full text-[#7C6B73] hover:text-[#381124] hover:bg-[#FAF3E8] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
          </div>

          <Link
            href={`/book?specialist=${member.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#381124] text-[#FAF7F2] text-xs font-semibold hover:bg-[#4A1530] transition-colors shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#DFC28D]" />
            <span>Book with {member.name.split(" ")[0]}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
