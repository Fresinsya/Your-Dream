import ButtonPro2 from "./components/Elements/Buttoncataranprops"


function ButtonPolos() {
  return (
      <button
        className="h-10 px-6 font-semibold rounded-xl bg-red-700 hover:bg-blue-700 "
        type="submit"
      > helloo
      </button>

  )
}

const Button = () => {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-purple-500 hover:to-red-400 "
      type="submit"
    > helloo2
    </button>
  );
}
const ButtonPro1 = (props) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-xl ${props.variant} `}
      type="submit"
    > {props.teks}
    </button>
  );
}


function App() {
  return (
    <div>
      <Button ></Button>
      <ButtonPolos></ButtonPolos>
      <ButtonPro1 variant="bg-red-300" teks="props1"></ButtonPro1>
      <ButtonPro2 ></ButtonPro2>
      <button
        className="h-10 px-6 font-semibold rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-purple-500 hover:to-red-400 "
        type="submit"
      > helloo
      </button>
    </div>

  )
}

export default App
