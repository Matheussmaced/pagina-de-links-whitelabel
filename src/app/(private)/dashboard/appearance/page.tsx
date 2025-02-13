export default function Appearance() {
  return (
    <div className=" h-screen m-16 px-14 py-10 shadow-2xl bg">
      <h1 className="text-2xl font-semibold text-gray-700">Personalize sua página</h1>

      <div className="mt-16 flex justify-between">
        <div className="w-min text-center flex flex-col gap-4 text-gray-700">
          <span>Imagem</span>
          <div className="bg-gray-200 p-24 w-48 h-48 rounded-full"></div>
        </div>

        <div className="flex flex-col text-gray-700 gap-4">
          <span>Fundo</span>
          <select name="select" className="p-4 w-96 shadow-xl cursor-pointer">
            <option value="valor1" selected>Predefinido</option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>

          <div className="p-4 w-96 shadow-xl cursor-pointer flex justify-around">
            <div className="bg-red-500 w-10 h-10 rounded-full cursor-pointer"></div>
            <div className="bg-blue-500 w-10 h-10 rounded-full cursor-pointer"></div>
            <div className="bg-violet-500 w-10 h-10 rounded-full cursor-pointer"></div>
            <div className="bg-green-500 w-10 h-10 rounded-full cursor-pointer"></div>
            <div className="bg-pink-500 w-10 h-10 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}