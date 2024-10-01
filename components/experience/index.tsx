interface IProps {
  companyName: string,
  role: string,
  startYear: string,
  endYear: string,
  description: string
  keterampilan: string[]
  dampak: string[]
}

export default function Experience({ companyName, role, startYear, endYear, description, keterampilan, dampak }: IProps) {
  return (
    <div className="relative border rounded p-3">
      <div className="relative space-y-1">
        <h3 className="text-xl font-semibold text-gray-600">{role} | {companyName}</h3>
        <p className="text-gray-600/75">{startYear} - {endYear}</p>
        <p className="text-gray-600/85 prose mb-1">{description}</p>
        <div className="mt-2">
          <h4 className="text-gray-600 font-medium">Keterampilan:</h4>
          <ul className="mt-2 ml-3 prose list-disc list-inside text-gray-600/85">
            {
              keterampilan.map((v) => (
                <li key={v}>{v}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="mt-2">
        <h4 className="text-gray-600 font-medium">Dampak dan Kontribusi :</h4>
        <ul className="mt-2 ml-3 prose list-disc list-inside text-gray-600/85">
          {
            dampak.map((v) => (
              <li key={v}>{v}</li>
            ))
          }
        </ul>
      </div>
    </div >
  )
}
