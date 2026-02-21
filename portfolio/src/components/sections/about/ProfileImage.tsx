export function ProfileImage() {
  return (
    <div
      className="w-full h-[90vh] max-lg:h-full bg-cover bg-center rounded-3xl relative overflow-hidden"
      style={{ backgroundImage: 'url("/personal/profile.png")' }}
    >
      <div className="absolute bottom-8 left-8 z-20 max-w-md">
        <p className="text-white text-lg leading-relaxed mb-4">
          &ldquo;Jeg elsker at kombinere kreativitet med teknologi og skabe
          løsninger, der gør en forskel for brugerne.&rdquo;
        </p>
        <hr className="border-t border-white/30 mb-4 w-16" />
        <div className="flex flex-col gap-1">
          <p className="text-white text-xl font-semibold">Nicolai Harms</p>
          <p className="text-white/80 text-sm">Fullstack Developer</p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-3xl z-10 gradient-background" />
    </div>
  );
}
