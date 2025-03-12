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
    <div className="flex flex-col self-stretch relative aspect-[1] w-6 items-center justify-center my-auto rounded-[13px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/669fbf5585cbaadfa602189239d50637b8d017134e8c151ae13b2b23b351846a?placeholderIfAbsent=true"
        alt="Avatar background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <img
        src={src}
        alt={alt}
        className="aspect-[1] object-contain w-6 shadow-[1px_1px_1px_rgba(0,0,0,0.1)] self-stretch my-auto rounded-[50%]"
      />
    </div>
  );
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, max = 4 }) => {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className="flex min-h-11 items-center gap-[-4px] px-2">
      {visibleAvatars.map((avatar, index) => (
        <Avatar key={index} src={avatar.src} alt={avatar.alt} />
      ))}

      {remainingCount > 0 && (
        <div className="self-stretch w-6 bg-[rgba(237,251,255,1)] shadow-[1px_1px_1px_rgba(0,0,0,0.1)] border text-xs text-[#0A6CD2] font-bold whitespace-nowrap text-center leading-3 h-6 my-auto rounded-[13px] border-white border-solid">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
