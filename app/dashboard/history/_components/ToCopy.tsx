"use client"

function ToCopy({output}: {output: string}) {
    
  return (
    <button className="cursor-pointer rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-black transition hover:bg-gray-100" onClick={() => navigator.clipboard.writeText( output)}>Copy</button>
  )
}

export default ToCopy
