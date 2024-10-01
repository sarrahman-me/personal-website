import Image from "next/image"
import pasus5 from "@/public/pasus5.jpg"
import koperasi from "@/public/koperasi.jpg"
import konsulat from "@/public/konsulat.jpg"
import profile from "@/public/profile-gontor.jpg"

interface IProps {
  schollName: string,
  startYear: string,
  endYear: string,
  description: string
  prestasi: string[]
}

export default function Education({ schollName, startYear, endYear, description, prestasi }: IProps) {
  return (
    <div className="relative border rounded p-3">
      <div className="relative space-y-1">
        <h3 className="text-xl font-semibold text-gray-600">{schollName}</h3>
        <p className="text-gray-600/75">{startYear} - {endYear}</p>
        <p className="text-gray-600/85 mb-1">{description}</p>
      </div>
      <div className="mt-2">
        <h4 className="text-gray-600 font-medium">Organisasi dan Prestasi :</h4>
        <ul className="mt-2 list-disc list-inside text-gray-600/85 space-y-1">
          {
            prestasi.map((v) => (
              <li key={v}>{v}</li>
            ))
          }
        </ul>
      </div>
      <div className="flex gap-1 md:gap-2 mt-5 overflow-auto">
        <Image src={koperasi} alt="Koperasi" className="rounded w-52 h-40" />
        <Image src={pasus5} alt="Pasus" className="rounded w-52 h-40" />
        <Image src={konsulat} alt="Konsulat" className="rounded w-52 h-40" />
        <Image src={profile} alt="Profile" className="rounded w-36 h-40" />
      </div>
    </div >
  )
}
