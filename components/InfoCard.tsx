interface InfoCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const InfoCard = ({ title, description, icon }: InfoCardProps) => {
  return (
    <div className="bg-white drop-shadow-xl py-8 px-4 rounded-lg">
      <div className="mx-auto w-fit p-3 bg-gray-100 rounded-full">{icon}</div>
      <h1 className="mt-2 text-lg text-center font-semibold">{title}</h1>
      <p className="mt-2 mx-auto text-md text-center max-w-xs">{description}</p>
    </div>
  )
}

export default InfoCard
