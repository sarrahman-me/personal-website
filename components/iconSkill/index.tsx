import { ReactElement } from "react";

export default function IconSkill({ name, icon }: { name: string, icon: ReactElement }) {
  return (
    <div className="p-6 flex flex-col items-center">
      <span className="text-6xl transition text-gray-600">
        {icon}
      </span>
      <p className="mt-2 text-gray-600/50">{name}</p>
    </div>
  )
}
