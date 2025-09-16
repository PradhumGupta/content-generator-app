"use client"

function ToCopy({output}: {output: string}) {
    
  return (
    <button className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer" onClick={() => navigator.clipboard.writeText( output)}>Copy</button>
  )
}

export default ToCopy