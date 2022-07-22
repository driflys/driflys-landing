function Skills({ skills }: { skills: string[] }) {
  return (
    <div>
      <h5 className="text-gray-500">Skills</h5>
      <div className="flex flex-wrap gap-2 mt-4">
        {skills?.map((skill) => {
          return <Chip key={skill} text={skill} />
        })}
      </div>
    </div>
  )
}

const Chip = ({ text }: { text: string }) => {
  return (
    <div className="bg-blue-700 text-white rounded-xl w-fit py-1 px-4">
      <p className="text-sm tracking-wide">{text}</p>
    </div>
  )
}

export default Skills
