export default function Title({ name }: { name: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-600">{name}</h2>
    </div>
  )
}
