import React from 'react'
import constant from '../_utils/constant'

function Hero() {
  return (
    <div>
      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-secondary via-another to-secondary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Connect. Share.

              <span className="sm:block">Simplify. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed  italic  ">
              {constant.desc}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border hover:border-primary bg-primary px-12 py-3 text-sm font-medium text-secondary hover:bg-secondary hover:text-primary focus:outline-none  active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-primary px-12 py-3 text-sm font-medium text-gray-500 hover:text-white focus:outline-none sm:w-auto"
                href="#"
              >
                Learn More...
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero