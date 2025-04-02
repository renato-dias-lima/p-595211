
import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
}

interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = "User avatar" }) => {
  return (
    <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
      <img
        src={src || "https://i.pravatar.cc/32"}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, max = 4 }) => {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className="flex -space-x-3">
      {visibleAvatars.map((avatar, index) => (
        <Avatar key={index} src={avatar.src} alt={avatar.alt} />
      ))}

      {remainingCount > 0 && (
        <div className="relative flex-shrink-0 w-8 h-8 bg-[#EDFBFF] rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-[#0A6CD2]">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
