function Remarks({ remarks }: { remarks: string }) {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <h5 className="text-gray-500">Remarks</h5>
      </div>

      <p className="text-md mt-2">{remarks}</p>
    </div>
  )
}

export default Remarks
