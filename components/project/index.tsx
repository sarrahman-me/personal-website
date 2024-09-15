import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProps {
  title: string,
  imageSrc: StaticImageData,
  href: string
  description: string,
  technology: string[],
  dampak: string[]
}

export default function Project({ title, imageSrc, href, description, technology, dampak }: IProps) {
  return (
    <div className="bg-white mb-8 p-2 border rounded">
      <div className="md:flex gap-3 p-2">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center mb-2 md:block">
          <Image
            src={imageSrc}
            alt={title}
            className="rounded"
            width={500}
            height={400}
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 space-y-3">
          {/* Project Title */}
          <h3 className="text-xl font-semibold text-gray-600">{title}</h3>

          {/* Website Link */}
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {href}
          </Link>

          {/* Description */}
          <p className="text-gray-600/80 prose">{description}</p>

          <div className="">
            <h4 className="text-gray-600 font-medium">Keterampilan dan Teknologi:</h4>
            <ul className="mt-2 list-disc list-inside text-gray-600/80">
              {technology.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>

          {dampak.length > 0 ? (
            <div className="">
              <h4 className="text-gray-600 font-medium">Dampak dan Kontribusi</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600/80">
                {dampak.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
