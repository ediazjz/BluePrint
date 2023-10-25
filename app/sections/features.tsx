import { Feathers, GaugeHigh, MagnifyingGlassChart } from "@/components"

export const Features = () => {
  return (
    <section className="mb-16 px-4 md:mb-20 md:px-16 xl:mb-24 xl:px-32 2xl:px-48">
      <h2 className="h1 mb-6 w-fit xl:mx-auto xl:mb-8">
        What makes <span className="h1 text-primary">Great</span>, well...{" "}
        <span className="h1 text-secondary">great</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-4">
        <div className="space-y-4 xl:space-y-6">
          <GaugeHigh className="h-12 w-12 text-primary md:h-16 md:w-16 xl:mx-auto xl:h-20 xl:w-20 2xl:h-24 2xl:w-24" />

          <div className="space-y-2 xl:text-center">
            <h3>Effortless Efficiency</h3>

            <p>
              Seamlessly draft and manage job offerings, guiding your
              recruitment voyage from inception to a triumphant conclusion.
            </p>
          </div>
        </div>

        <div className="space-y-4 xl:space-y-6">
          <Feathers className="h-12 w-12 text-primary md:h-16 md:w-16 xl:mx-auto xl:h-20 xl:w-20 2xl:h-24 2xl:w-24" />

          <div className="space-y-2 xl:text-center">
            <h3>Rapid Results</h3>

            <p>
              Speed through candidate evaluations with intuitive tools, ensuring
              a quick turnaround without compromising on quality.
            </p>
          </div>
        </div>

        <div className="space-y-4 xl:space-y-6">
          <MagnifyingGlassChart className="h-12 w-12 text-primary md:h-16 md:w-16 xl:mx-auto xl:h-20 xl:w-20 2xl:h-24 2xl:w-24" />

          <div className="space-y-2 xl:text-center">
            <h3>Transparent Transactions</h3>

            <p>
              Engage in clear and open interactions throughout the recruitment
              cycle, building trust among customers, recruiters, and candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
