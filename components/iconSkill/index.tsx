import { ReactElement } from "react";

export default function IconSkill({ name, icon, style }: { name: string, icon: ReactElement, style: string }) {
  return (
    <div className="p-6 flex flex-col items-center">
      <span className={`text-4xl md:text-5xl lg:text-6xl transition text-gray-600 ${style}`}>
        {icon}
      </span>
      <p className="mt-2 text-gray-600/80">{name}</p>
    </div>
  )
}
