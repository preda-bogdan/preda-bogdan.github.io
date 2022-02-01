import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Wellcome to</span>
                <span className="block text-indigo-600">Next JS</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                This is a placeholder text for now. Happy coding. :D
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
